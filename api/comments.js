const { neon } = require("@neondatabase/serverless");

let sql = null;
let ready = null;
function db() {
  if (!process.env.DATABASE_URL) return null;
  if (!sql) {
    sql = neon(process.env.DATABASE_URL);
    ready = sql`CREATE TABLE IF NOT EXISTS comments (
      id serial PRIMARY KEY,
      part text NOT NULL,
      name text NOT NULL,
      quote text,
      body text NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    )`;
  }
  return sql;
}

const clean = (s, max) =>
  String(s ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);

module.exports = async (req, res) => {
  const q = db();
  if (!q) return res.status(503).json({ error: "register not provisioned" });

  try {
    await ready;

    if (req.method === "GET") {
      const rows = await q`SELECT id, part, name, quote, body, created_at
                           FROM comments ORDER BY created_at`;
      return res.status(200).json(rows);
    }

    if (req.method === "POST") {
      const b = req.body || {};
      /* honeypot: real form leaves "fax" empty */
      if (clean(b.fax, 10)) return res.status(200).json({ ok: true });
      const part = clean(b.part, 40);
      const name = clean(b.name, 80);
      const quote = clean(b.quote, 600);
      const body = clean(b.body, 4000);
      if (!/^[a-z0-9-]+$/.test(part) || !name || !body)
        return res.status(400).json({ error: "name and comment are required" });
      const rows = await q`INSERT INTO comments (part, name, quote, body)
                           VALUES (${part}, ${name}, ${quote || null}, ${body})
                           RETURNING id, part, name, quote, body, created_at`;
      return res.status(201).json(rows[0]);
    }

    if (req.method === "DELETE") {
      if (!process.env.ADMIN_TOKEN || req.headers["x-admin-token"] !== process.env.ADMIN_TOKEN)
        return res.status(403).json({ error: "admin token required" });
      const id = parseInt(req.query.id, 10);
      if (!id) return res.status(400).json({ error: "id required" });
      await q`DELETE FROM comments WHERE id = ${id}`;
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, POST, DELETE");
    return res.status(405).json({ error: "method not allowed" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "register error" });
  }
};
