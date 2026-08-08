const { neon } = require("@neondatabase/serverless");

let sql = null;
let ready = null;
function db() {
  if (!process.env.DATABASE_URL) return null;
  if (!sql) {
    sql = neon(process.env.DATABASE_URL);
    ready = sql`CREATE TABLE IF NOT EXISTS annotations (
      id text PRIMARY KEY,
      data jsonb NOT NULL,
      deleted boolean NOT NULL DEFAULT false,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    )`;
  }
  return sql;
}

module.exports = async (req, res) => {
  const q = db();
  if (!q) return res.status(503).json({ error: "register not provisioned" });

  try {
    await ready;

    if (req.method === "GET") {
      const rows = await q`SELECT data FROM annotations WHERE NOT deleted ORDER BY created_at`;
      return res.status(200).json(rows.map((r) => r.data));
    }

    /* create and update are both upserts: RecogitoJS sends the full
       W3C annotation each time, keyed by its client-generated id */
    if (req.method === "POST" || req.method === "PUT") {
      const a = req.body;
      if (!a || typeof a.id !== "string" || !a.id || a.id.length > 120)
        return res.status(400).json({ error: "annotation with id required" });
      const json = JSON.stringify(a);
      if (json.length > 20000)
        return res.status(400).json({ error: "annotation too large" });
      await q`INSERT INTO annotations (id, data) VALUES (${a.id}, ${json}::jsonb)
              ON CONFLICT (id) DO UPDATE
              SET data = EXCLUDED.data, deleted = false, updated_at = now()`;
      return res.status(200).json({ ok: true });
    }

    /* deletes are tombstones — nothing a reviewer does can destroy evidence */
    if (req.method === "DELETE") {
      const id = String(req.query.id || "");
      if (!id) return res.status(400).json({ error: "id required" });
      await q`UPDATE annotations SET deleted = true, updated_at = now() WHERE id = ${id}`;
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, POST, PUT, DELETE");
    return res.status(405).json({ error: "method not allowed" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "register error" });
  }
};
