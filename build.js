const fs = require("fs");
const path = require("path");

/* ══════════════ config ══════════════ */
const SRC = path.join(__dirname, "submission.md");
const OUT = path.join(__dirname, "public", "index.html");
const RECORD = "https://github.com/sugaroverflow/sparkle-bureaucracy-site/blob/main/submission/sparkle-bureaucracy.md";
const VIDEO_EMBED = ""; /* YouTube embed URL, e.g. https://www.youtube.com/embed/XXXX */
const SERIAL = "SB/NWSPK/2026/01";
const SUBMIT_DATE = "10 Aug 2026";

const PERMIT = [
  ["Fellowship candidate", "Fatima Sarah Khalid", "wide"],
  ["Cohort", "2025–2026"],
  ["Serial", SERIAL],
  ["Faculty mentor", "Matt Stempeck", "wide"],
  ["Activations run", "20+"],
  ["Period of validity", "Feb – Aug 2026"],
  ["Project URL", '<a href="https://sparklebureaucracy.org">sparklebureaucracy.org</a>', "wide"],
  ["Relevant mentors", "Ed Saperia · Hannah O'Rourke · James Moulding · Anouk Ruhaak", "wide"],
];

/* Inline annotations (RecogitoJS, self-hosted in public/vendor/). */
const ANNOTATIONS = true;

/* "build" shows @todo/⚑ markers; "submission" refuses to build while any remain.
   Usage: node build.js  |  MODE=submission node build.js */
const MODE = (process.env.MODE || "build").toLowerCase();
if (!["build", "submission"].includes(MODE)) {
  console.error('✗ MODE must be "build" or "submission", got: ' + MODE);
  process.exit(1);
}

/* ══════════════ gate ══════════════ */
const raw = fs.readFileSync(SRC, "utf8").split(/\r?\n/);
const flagLines = raw
  .map((l, i) => ({ l: l.trim(), n: i + 1 }))
  .filter((x) => x.l.includes("⚑") || x.l.toLowerCase().includes("@todo"));
if (MODE === "submission" && flagLines.length) {
  console.error(
    "✗ Not building submission mode: " + flagLines.length + " unresolved markers in submission.md\n" +
    flagLines.map((x) => "  L" + String(x.n).padStart(3) + "  " + x.l.slice(0, 100)).join("\n")
  );
  process.exit(1);
}

/* ══════════════ inline ══════════════ */
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function inline(s) {
  let o = esc(s);
  o = o.replace(/\[([^\]]*)\]\(([^)]*)\)/g, (_, l, u) => '<a href="' + u.replace(/"/g, "&quot;") + '">' + l.replace(/[`*]/g, "") + "</a>");
  o = o.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  o = o.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  o = o.replace(/`([^`]+)`/g, "<code>$1</code>");
  o = o.replace(/@todo/gi, '<span class="todo">@todo</span>');
  o = o.replace(/⚑\s*/g, '<span class="todo">⚑</span> ');
  return o;
}
const plain = (s) => inline(s).replace(/<[^>]+>/g, "").trim();

/* ══════════════ parse ══════════════ */
/* Parts: "## NN | Title". Inside a part:
   "### a | b | c"  → timeline entry (date | type | title)
   "### a | b"      → criterion card (number | title)
   "### a"          → subhead
   "#### Evidence|Technical|Feedback" inside an entry → drawer; other #### → subhead
   "photos: N"      → entry photo count
   "**Label:** x"   → entry field row
   "- [x] x"        → check item · "- x" → list item · "> x" → quote · "| x |" → table row */
const parts = [];
let P = null, node = null, drawer = null, buf = null;

const flushBuf = () => {
  if (!buf) return;
  const target = drawer ? drawer.blocks : node && node.kind === "entry" ? null : node ? node.blocks : P.blocks;
  if (node && node.kind === "entry" && !drawer) {
    const fm = /^\*\*([^*]{2,40}?):\*\*\s*(.*)$/.exec(buf.t);
    if (buf.k === "p" && fm) node.fields.push([fm[1], fm[2]]);
    else node.narr.push(buf);
  } else if (target) target.push(buf);
  buf = null;
};

for (const ln of raw) {
  const t = ln.trim();
  let m;
  if ((m = /^##\s+(.+)$/.exec(t)) && !/^##\s*#/.test(t) && !t.startsWith("###")) {
    flushBuf(); drawer = null; node = null;
    const seg = m[1].split("|").map((x) => x.trim());
    P = { num: seg[0], title: seg.slice(1).join(" | ") || seg[0], blocks: [] };
    parts.push(P);
    continue;
  }
  if (!P) continue;
  if ((m = /^####\s+(.+)$/.exec(t))) {
    flushBuf();
    const title = m[1].trim();
    if (node && node.kind === "entry" && /^(Evidence|Technical|Feedback)$/i.test(title)) {
      drawer = { title, blocks: [] };
      node.drawers.push(drawer);
    } else {
      drawer = null; node = null;
      P.blocks.push({ k: "sub", t: title });
    }
    continue;
  }
  if ((m = /^###\s+(.+)$/.exec(t))) {
    flushBuf(); drawer = null;
    const seg = m[1].split("|").map((x) => x.trim());
    if (seg.length >= 3) {
      node = { kind: "entry", date: seg[0], type: seg[1].toLowerCase(), title: seg.slice(2).join(" | "),
               photos: 0, narr: [], fields: [], drawers: [], blocks: [] };
      P.blocks.push(node);
    } else if (seg.length === 2) {
      node = { kind: "crit", num: seg[0], title: seg[1], checks: [], blocks: [] };
      P.blocks.push(node);
    } else {
      node = null;
      P.blocks.push({ k: "sub", t: seg[0] });
    }
    continue;
  }
  if (!t) {
    if (buf && buf.k === "journal") { buf.body.push(""); continue; }
    flushBuf(); continue;
  }
  if ((m = /^photos:\s*(\d+)/.exec(t)) && node && node.kind === "entry") { node.photos = +m[1]; continue; }
  if ((m = /^gallery:\s*(\d+)/.exec(t)) && !node) { P.gallery = +m[1]; continue; }
  if ((m = /^-\s+\[x\]\s+(.*)$/i.exec(t))) {
    flushBuf();
    if (node && node.kind === "crit") node.checks.push(m[1]);
    else (drawer ? drawer.blocks : node ? node.blocks : P.blocks).push({ k: "li", t: m[1] });
    continue;
  }
  if (/^\|/.test(t)) {
    if (buf && buf.k === "table") buf.rows.push(t);
    else { flushBuf(); buf = { k: "table", rows: [t] }; }
    continue;
  }
  if ((m = /^\+\+\+(2?)\s+(.*)$/.exec(t))) {
    flushBuf();
    (drawer ? drawer.blocks : node ? node.blocks : P.blocks).push(
      { k: "ngroup", t: m[2].trim(), half: m[1] === "2" });
    continue;
  }
  if ((m = /^\+\+\s+([^|]+)\|([^|]+)\|(.+)$/.exec(t))) {
    flushBuf();
    buf = { k: "journal", d: m[1].trim(), title: m[2].trim(), cap: m[3].trim(), body: [] };
    continue;
  }
  if (buf && buf.k === "journal") {
    if (!t) { buf.body.push(""); continue; }
    buf.body.push(t);
    continue;
  }
  if ((m = /^\+\s+(.+)$/.exec(t)) && !t.startsWith("+++")) {
    flushBuf();
    const seg = m[1].split("|").map((x) => x.trim());
    if (seg.length >= 3) {
      (drawer ? drawer.blocks : node ? node.blocks : P.blocks).push(
        { k: "note", d: seg[0], title: seg[1], sum: seg[2],
          url: seg[3] && seg[3] !== "-" ? seg[3] : "", body: seg[4] || "" });
    }
    continue;
  }
  if ((m = /^\?\s+(.+)$/.exec(t)) && m[1].includes("|")) {
    flushBuf();
    const seg = m[1].split("|").map((x) => x.trim());
    const qc = seg.length >= 3
      ? { k: "qc", glyph: seg[0], title: seg[1], body: seg.slice(2).join(" ") }
      : { k: "qc", glyph: "?", title: seg[0], body: seg[1] || "" };
    (drawer ? drawer.blocks : node ? node.blocks : P.blocks).push(qc);
    continue;
  }
  if ((m = /^[-*]\s+(.*)$/.exec(t))) { flushBuf(); buf = { k: "li", t: m[1] }; continue; }
  if ((m = /^\d+\.\s+(.*)$/.exec(t))) { flushBuf(); buf = { k: "oli", t: m[1] }; continue; }
  if ((m = /^>\s*(.*)$/.exec(t))) { flushBuf(); buf = { k: "q", t: m[1] }; continue; }
  if (buf && ["p", "li", "oli", "q"].includes(buf.k)) { buf.t += " " + t; continue; }
  flushBuf(); buf = { k: "p", t };
}
flushBuf();

/* ══════════════ render helpers ══════════════ */
const HUE_BY_TYPE = { experiment: "magenta", talk: "violet", convening: "aqua", encounter: "cyan" };
const HUES = ["magenta", "violet", "aqua", "cyan", "gold"];
const mrz = (l) => ((l.toUpperCase().replace(/[^A-Z0-9<]/g, "<") + "<".repeat(48)).slice(0, 48)).replace(/</g, "&lt;");
const TINTS = [["FFE7F1", "A80C59"], ["F2E8FF", "5F27AE"], ["D8FAF4", "07766A"], ["DDF6FD", "08657B"], ["FFF2D2", "7E5900"]];

const tcells = (r) => r.replace(/^\||\|$/g, "").split("|").map((x) => x.trim());

function renderRoadmap(rows) {
  const head = tcells(rows[0]).slice(1);
  const body = rows.slice(2).map(tcells);
  let out = '<div class="roadmap"><div class="rm-row rm-headrow"><span class="rm-stream"></span>' +
    head.map((h) => '<span class="rm-col">' + inline(h) + "</span>").join("") + "</div>";
  body.forEach((r, i) => {
    out += '<div class="rm-row" data-hue="' + HUES[i % HUES.length] + '"><span class="rm-stream">' + inline(r[0]) + "</span>" +
      r.slice(1).map((c, j) => c
        ? '<div class="rm-block" data-when="' + esc(head[j] || "") + '">' + inline(c) + "</div>"
        : '<div class="rm-block empty"></div>').join("") + "</div>";
  });
  return out + "</div>";
}

function renderMonths(rows) {
  const body = rows.slice(2).map(tcells);
  return '<div class="mroad">' + body.map((r, i) =>
    `<div class="mrow" data-hue="${HUES[i % HUES.length]}">
      <span class="m-when">${inline(r[0])}</span>
      <div class="mcard">
        <b>${inline(r[1])}</b>
        ${r[2] ? `<details class="m-more"><summary>details</summary><p>${inline(r[2])}</p></details>` : ""}
      </div>
    </div>`).join("") + "</div>";
}

function renderTable(rows) {
  const first = tcells(rows[0])[0].toLowerCase();
  if (first === "stream") return renderRoadmap(rows);
  if (first === "month") return renderMonths(rows);
  const head = tcells(rows[0]);
  const body = rows.slice(2).map(tcells);
  const narrow = head.length <= 2;
  const th = head.map((h) => "<th>" + (h ? inline(h) : "") + "</th>").join("");
  const tb = body.map((r) => "<tr>" + r.map((c) => "<td>" + inline(c) + "</td>").join("") + "</tr>").join("");
  return '<div class="tbl' + (narrow ? " narrow" : "") + '"><table><thead><tr>' + th + "</tr></thead><tbody>" + tb + "</tbody></table></div>";
}

let gCat = 0;
function renderLinkRow(b) {
  const title = b.url
    ? '<a href="' + b.url.replace(/"/g, "&quot;") + '">' + inline(b.title) + ' <span class="ext">↗</span></a>'
    : inline(b.title);
  return '<div class="fnote"><span class="fn-d">' + inline(b.d) + '</span><div class="fn-b"><b>' +
    title + "</b><span>" + inline(b.sum) + "</span></div></div>";
}

function renderJournal(b) {
  const paras = []; let cur = [];
  const closePara = () => { if (cur.length) { paras.push(cur.join(" ")); cur = []; } };
  for (const ln of b.body) {
    if (!ln) { closePara(); continue; }
    if (ln.startsWith("→ ")) {
      closePara();
      const u = ln.slice(2).trim();
      paras.push('<p class="fnj-link"><a href="' + u.replace(/"/g, "&quot;") + '">' +
        esc(u.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]) + " ↗</a></p>");
      continue;
    }
    cur.push(ln);
  }
  closePara();
  const bodyHtml = paras.map((p) => p.startsWith("<p") ? p : "<p>" + inline(p) + "</p>").join("");
  const solo = b.solo ? ' solo" data-hue="aqua' : "";
  return '<details class="fnj' + solo + '"><summary><span class="fnj-head"><b>' + inline(b.title) +
    "</b><i>" + inline(b.d) + '</i></span><span class="fnj-cap">' + inline(b.cap) +
    "</span></summary><div class=\"fnj-body\">" + bodyHtml + "</div></details>";
}

function renderNote(b) {
  const head = '<span class="fn-d">' + inline(b.d) + '</span><div class="fn-b"><b>' +
    inline(b.title) + "</b><span>" + inline(b.sum) + "</span></div>";
  if (!b.body && !b.url) return '<div class="fnote">' + head + "</div>";
  const link = b.url ? ' <a href="' + b.url.replace(/"/g, "&quot;") + '">' +
    esc(b.url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]) + " ↗</a>" : "";
  return '<details class="fnote fnx"><summary>' + head + '</summary><p class="fn-full">' +
    inline(b.body || b.sum) + link + "</p></details>";
}

function renderBlocks(blocks) {
  const out = []; let list = []; let fields = [];
  const closeL = () => { if (list.length) { out.push('<ul class="bullets">' + list.join("") + "</ul>"); list = []; } };
  const closeF = () => {
    if (fields.length) {
      out.push('<dl class="efields">' + fields.map(([k, v]) =>
        "<div><dt>" + inline(k) + "</dt><dd>" + inline(v) + "</dd></div>").join("") + "</dl>");
      fields = [];
    }
  };
  let ol = [], notes = [], qcs = [];
  const closeO = () => { if (ol.length) { out.push('<ol class="ord">' + ol.join("") + "</ol>"); ol = []; } };
  const closeN = () => { if (notes.length) { out.push('<div class="fnotes">' + notes.join("") + "</div>"); notes = []; } };
  const closeQ = () => { if (qcs.length) { out.push('<div class="qcards">' + qcs.join("") + "</div>"); qcs = []; } };
  let halfGroup = [];
  const closeH = () => { if (halfGroup.length) { out.push('<div class="fncols">' + halfGroup.join("") + "</div>"); halfGroup = []; } };
  const closeAll = () => { closeL(); closeF(); closeO(); closeN(); closeQ(); closeH(); };
  for (let bi = 0; bi < blocks.length; bi++) {
    const b = blocks[bi];
    if (b.k === "ngroup") {
      closeL(); closeF(); closeO(); closeN(); closeQ();
      const rows = [];
      while (bi + 1 < blocks.length && (blocks[bi + 1].k === "note" || blocks[bi + 1].k === "journal")) {
        const r = blocks[++bi];
        rows.push(r.k === "journal" ? renderJournal(r) : b.half ? renderLinkRow(r) : renderNote(r));
      }
      const hue = ["magenta", "gold", "violet", "aqua"][gCat++ % 4];
      const html = '<details class="fncat" data-hue="' + hue + '"><summary><span class="fnc-l">' + inline(b.t) +
        "</span><i>" + rows.length + " entries</i></summary><div class=\"fnotes\">" + rows.join("") + "</div></details>";
      if (b.half) halfGroup.push(html);
      else { closeH(); out.push(html); }
      continue;
    }
    if (b.k === "li") {
      closeF(); closeO(); closeN(); closeQ();
      const gm = /^([♥✦✿★❋✨])\s+/.exec(b.t);
      list.push("<li" + (gm ? ' data-g="' + gm[1] + '"' : "") + ">" +
        inline(gm ? b.t.slice(gm[0].length) : b.t) + "</li>");
      continue;
    }
    if (b.k === "oli") { closeF(); closeL(); closeN(); closeQ(); ol.push("<li>" + inline(b.t) + "</li>"); continue; }
    if (b.k === "note") {
      closeL(); closeF(); closeO(); closeQ();
      notes.push(renderNote(b));
      continue;
    }
    if (b.k === "journal") {
      closeAll();
      b.solo = true;
      out.push(renderJournal(b));
      continue;
    }
    if (b.k === "qc") {
      closeL(); closeF(); closeO(); closeN();
      qcs.push('<div class="qcard"><span class="q-mark">' + esc(b.glyph || "?") + "</span><b>" + inline(b.title) + "</b><p>" + inline(b.body) + "</p></div>");
      continue;
    }
    if (b.k === "p") {
      const fm = /^\*\*([^*]{2,40}?):\*\*\s*(.*)$/.exec(b.t);
      if (fm) { closeL(); closeO(); closeN(); closeQ(); fields.push([fm[1], fm[2]]); continue; }
    }
    closeAll();
    if (b.k === "table") out.push(renderTable(b.rows));
    else if (b.k === "q") out.push('<div class="slip"><p>' + inline(b.t) + "</p></div>");
    else if (b.k === "sub") out.push('<h3 class="bare"><span>' + inline(b.t) + "</span></h3>");
    else out.push("<p>" + inline(b.t) + "</p>");
  }
  closeAll();
  return out.join("\n");
}

function galleryHtml(p) {
  let imgs = "";
  for (let k = 1; k <= p.gallery; k++) {
    const [bg, fg] = TINTS[k % TINTS.length];
    const txt = encodeURIComponent("Add photo " + k);
    imgs += `<img src="https://placehold.co/900x700/${bg}/${fg}?text=${txt}" alt="Photo placeholder ${k}" loading="lazy" data-full="https://placehold.co/1600x1200/${bg}/${fg}?text=${txt}">`;
  }
  return '<div class="shots gallery">' + imgs + "</div>";
}

function shots(entry, i) {
  if (!entry.photos) return "";
  const [bg, fg] = TINTS[i % TINTS.length];
  const label = plain(entry.title).replace(/[^A-Za-z0-9 ]/g, "").trim().split(/\s+/).slice(0, 4).join(" ");
  let imgs = "";
  for (let k = 1; k <= entry.photos; k++) {
    const txt = encodeURIComponent(label + " " + k);
    imgs += `<img src="https://placehold.co/800x500/${bg}/${fg}?text=${txt}" alt="${esc(plain(entry.title))} — photo ${k} (placeholder)" loading="lazy" data-full="https://placehold.co/1600x1000/${bg}/${fg}?text=${txt}">`;
  }
  return '<div class="shots">' + imgs + "</div>";
}

let serialCount = {};
function renderEntry(e, i, partNum) {
  const hue = HUE_BY_TYPE[e.type] || "cyan";
  const pfx = partNum === "02" ? "EXP" : "EVT";
  serialCount[pfx] = (serialCount[pfx] || 0) + 1;
  const ser = "SB/" + pfx + "/" + String(serialCount[pfx]).padStart(2, "0");
  const rot = [-0.4, 0.35, -0.25, 0.3][i % 4];
  const narr = renderBlocks(e.narr.filter((b) => b.k !== "q"));
  const quotes = e.narr.filter((b) => b.k === "q").map((b) => '<div class="slip"><p>' + inline(b.t) + "</p></div>").join("");
  const fields = e.fields.length
    ? '<dl class="efields">' + e.fields.map(([k, v]) => "<div><dt>" + inline(k) + "</dt><dd>" + inline(v) + "</dd></div>").join("") + "</dl>"
    : "";
  const inlineSecs = e.drawers.filter((d) => /^(Technical|Evidence)$/i.test(d.title)).map((d) =>
    '<div class="dsec"><span class="dsec-l">' + esc(d.title) + "</span>" + renderBlocks(d.blocks) + "</div>").join("");
  const fbs = e.drawers.filter((d) => !/^(Technical|Evidence)$/i.test(d.title));
  let drawers = fbs.map((d) =>
    '<details class="drawer"><summary>' + esc(d.title) + '</summary><div class="din">' + renderBlocks(d.blocks) + "</div></details>").join("");
  if (!fbs.length && partNum === "02")
    drawers = '<details class="drawer"><summary>Feedback</summary><div class="din"><p>None captured in the record yet — highlight anything on this card to leave yours.</p></div></details>';
  return `<article class="visa" data-hue="${hue}" style="--rot:${rot}deg" id="${ser.toLowerCase().replace(/\//g, "-")}">
  <header><span class="visa-date">${inline(e.date)} <i>2026</i></span><span class="vbadge">${esc(e.type)}</span><span class="visa-serial">${ser}</span></header>
  <div class="visa-body">
    <h3>${inline(e.title)}</h3>
    ${narr}
    ${fields}
    ${inlineSecs}
    ${shots(e, i)}
    ${quotes}
    ${drawers}
  </div>
  <div class="perf"></div>
</article>`;
}

function renderCrit(c, i) {
  const hue = HUES[i % HUES.length];
  const checks = c.checks.length
    ? '<ul class="checks">' + c.checks.map((x) => "<li>" + inline(x) + "</li>").join("") + "</ul>"
    : "";
  return `<li class="crit" data-hue="${hue}">
  <div class="crit-mark"><span>${esc(c.num)}</span><i>criterion</i></div>
  <div class="crit-body"><h3>${inline(c.title)}</h3>${checks}${renderBlocks(c.blocks)}</div>
</li>`;
}

function renderPartBody(P) {
  const out = []; let entries = []; let crits = []; let flow = [];
  const closeTl = () => { if (entries.length) { out.push('<div class="tl">' + entries.join("\n") + "</div>"); entries = []; } };
  const closeCrits = () => { if (crits.length) { out.push('<ol class="sheet">' + crits.join("\n") + "</ol>"); crits = []; } };
  const closeFlow = () => { if (flow.length) { out.push(renderBlocks(flow)); flow = []; } };
  let ei = 0, ci = 0;
  for (const b of P.blocks) {
    if (b.kind === "entry") { closeFlow(); closeCrits(); entries.push(renderEntry(b, ei++, P.num)); continue; }
    if (b.kind === "crit") { closeFlow(); closeTl(); crits.push(renderCrit(b, ci++)); continue; }
    closeTl(); closeCrits();
    flow.push(b);
  }
  closeFlow(); closeTl(); closeCrits();
  return '<div class="reading wide-ok">' + out.join("\n") + "</div>";
}

/* ══════════════ assemble ══════════════ */
const part00 = parts.find((p) => p.num === "00");
const contentParts = parts.filter((p) => p.num !== "00");
const missionBlocks = part00 ? part00.blocks.filter((b) => b.k === "p") : [];
const xwalkTable = part00 ? part00.blocks.find((b) => b.k === "table") : null;

const PART_HUE = contentParts.map((_, i) => HUES[i % 5]);
const navParts = [{ id: "part-00", num: "00", short: "Setting the stage", hue: "gold" }]
  .concat(contentParts.map((p, i) => ({
    id: "part-" + p.num, num: p.num,
    short: p.title.replace(/^(The|A)\s+/i, ""), hue: PART_HUE[i],
  })));

const nav = navParts.map((n) =>
  `<a href="#${n.id}" data-hue="${n.hue}"><i>${n.num}</i>${esc(n.short)}</a>`).join("");

const sections = contentParts.map((p, i) => {
  const hue = PART_HUE[i];
  return `
<section class="part" id="part-${p.num}" data-hue="${hue}">
  <p class="mrz" aria-hidden="true">${mrz("PTSB<PART" + p.num + "<<" + p.title)}</p>
  <header class="part-head">
    <p class="eyebrow">Part ${p.num}</p>
    <h2 class="part-title">${inline(p.title)}</h2>
  </header>
  <div class="part-body">${renderPartBody(p)}${p.gallery ? galleryHtml(p) : ""}</div>
</section>`;
}).join("\n");

const CSS = `
:root{
  /* neon accents from sparklebureaucracy.org */
  --magenta:#EC4899; --magenta-ink:#A80C59; --magenta-tint:#FFE7F1;
  --violet:#A855F7;  --violet-ink:#5F27AE;  --violet-tint:#F2E8FF;
  --aqua:#2DD4BF;    --aqua-ink:#07766A;    --aqua-tint:#D8FAF4;
  --cyan:#22D3EE;    --cyan-ink:#08657B;    --cyan-tint:#DDF6FD;
  --gold:#FACC15;    --gold-ink:#7E5900;    --gold-tint:#FFF2D2;

  /* midnight desk, paper documents */
  --page:#0A0E27; --paper:#FFFBF8; --ink:#17122C; --soft:#585272; --line:#17122c26;
  --midnight:#0A0E27; --light:#E7E4F4; --softlight:#ABA5C9; --edge:#e7e4f42e;

  --display:"Inter",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --text:var(--display);
  --util:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  --measure:clamp(34rem,46vw,44rem); --col:74rem; --pad:clamp(1rem,4vw,2.5rem); --wrap:96rem;
  --foil:linear-gradient(95deg,var(--magenta),var(--violet),var(--cyan),var(--aqua),var(--gold),var(--magenta));
}
[data-hue=magenta]{--h:var(--magenta);--hi:var(--magenta-ink);--ht:var(--magenta-tint)}
[data-hue=violet]{--h:var(--violet);--hi:var(--violet-ink);--ht:var(--violet-tint)}
[data-hue=aqua]{--h:var(--aqua);--hi:var(--aqua-ink);--ht:var(--aqua-tint)}
[data-hue=cyan]{--h:var(--cyan);--hi:var(--cyan-ink);--ht:var(--cyan-tint)}
[data-hue=gold]{--h:var(--gold);--hi:var(--gold-ink);--ht:var(--gold-tint)}

*,*::before,*::after{box-sizing:border-box}
html{font-size:110%;-webkit-text-size-adjust:100%;scroll-behavior:smooth}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{margin:0;background:var(--midnight) url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900"><text x="110" y="170" font-size="26" fill="%23FACC15" opacity=".22">✦</text><text x="640" y="120" font-size="18" fill="%23ffffff" opacity=".16">✦</text><text x="330" y="420" font-size="15" fill="%232DD4BF" opacity=".2">✦</text><text x="790" y="360" font-size="30" fill="%23EC4899" opacity=".16">✦</text><text x="180" y="690" font-size="20" fill="%23A855F7" opacity=".2">✦</text><text x="560" y="620" font-size="14" fill="%23FACC15" opacity=".18">★</text><text x="850" y="740" font-size="22" fill="%23ffffff" opacity=".13">✦</text></svg>');
  color:#D6D2E8;font:400 1.0625rem/1.62 var(--text);letter-spacing:-.006em}
::selection{background:var(--gold);color:var(--ink)}
h1,h2,h3{font-family:var(--display);font-weight:800;line-height:1.15;letter-spacing:-.022em;margin:0}
p{margin:0 0 1.05rem}
a{color:var(--gold);text-decoration-thickness:.07em;text-underline-offset:.16em}
a:hover{color:var(--ink);background:var(--gold)}
.permit a,.visa a,.tbl a,.slip a,.crit a,.vbook a,.lightbox a{color:var(--hi,var(--magenta-ink))}
.permit a:hover,.visa a:hover,.tbl a:hover,.slip a:hover,.crit a:hover{color:var(--ink);background:var(--ht,var(--gold-tint))}
.permit,.visa,.tbl,.slip,.crit,.vbook,.lightbox{color:var(--ink)}
:focus-visible{outline:3px solid var(--magenta);outline-offset:2px}
code{font:400 .84em/1.3 var(--util);background:#17122c0f;padding:.16em .38em;border-radius:3px;
  overflow-wrap:anywhere;word-break:break-word}
.wrap{max-width:var(--wrap);margin:0 auto;padding-inline:var(--pad)}
.eyebrow{font:600 .625rem/1.4 var(--util);letter-spacing:.2em;text-transform:uppercase;
  color:var(--hi,var(--soft));margin:0 0 .9rem}

.foil{height:6px;background:var(--foil);background-size:300% 100%}
@media(prefers-reduced-motion:no-preference){
  .hero-foil{animation:shift 16s linear infinite}
  @keyframes shift{to{background-position:300% 0}}
}

.rail{position:sticky;top:0;z-index:30;background:#0a0e27f0;backdrop-filter:blur(10px);
  border-bottom:2px solid var(--edge)}
.rail-in{max-width:var(--wrap);margin:0 auto;padding:.45rem var(--pad);display:flex;gap:1rem;
  align-items:center;justify-content:space-between}
.rail nav{display:flex;gap:.2rem;overflow-x:auto;scrollbar-width:none;min-width:0;flex:1 1 auto;
  mask-image:linear-gradient(to right,transparent,#000 .8rem,#000 calc(100% - .8rem),transparent)}
.rail nav::-webkit-scrollbar{display:none}
.rail nav a{font:600 .625rem/1 var(--util);letter-spacing:.07em;text-transform:uppercase;
  color:var(--softlight);text-decoration:none;white-space:nowrap;padding:.55rem .65rem;border-radius:999px;
  border:2px solid transparent}
.rail nav a i{font-style:normal;color:var(--softlight);margin-right:.45em}
.rail nav a:hover{background:#ffffff14;color:var(--light)}
.rail nav a[aria-current=true]{background:var(--h);border-color:var(--edge);color:var(--ink)}
.rail nav a[aria-current=true] i{color:var(--ink)}
.side-brand{display:none}
.side-foot{display:none}

@media(min-width:64rem){
  body{padding-left:15rem}
  .rail{position:fixed;top:0;left:0;bottom:0;width:15rem;border-right:2px solid var(--edge);border-bottom:0}
  .rail-in{flex-direction:column;align-items:stretch;height:100%;padding:1.2rem .9rem;gap:1rem;max-width:none}
  .rail nav{flex-direction:column;overflow:visible;overflow-y:auto;mask-image:none;gap:.25rem}
  .rail nav a{white-space:normal;line-height:1.5;border-radius:.4rem;font-size:.8125rem;
    letter-spacing:.04em;padding:.6rem .7rem}
  .side-brand small{font-size:.5625rem}
  .side-foot{font-size:.625rem}
  .side-brand{display:block;font:900 1.15rem/1.05 var(--display);letter-spacing:-.03em;
    padding:.2rem .3rem;color:var(--light);text-decoration:none}
  .side-brand b{color:var(--magenta);-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill;display:block}
  .side-brand small{display:block;font:400 .5rem/1.6 var(--util);letter-spacing:.14em;
    text-transform:uppercase;color:var(--softlight);margin-top:.5rem}
  .side-foot{display:block;margin-top:auto;font:400 .5625rem/1.7 var(--util);letter-spacing:.08em;color:var(--softlight)}
}

.hero{padding-block:clamp(2.25rem,6vw,4rem) clamp(1.5rem,4vw,2.5rem)}
.presub{font:600 .6875rem/1.4 var(--util);letter-spacing:.24em;text-transform:uppercase;
  color:var(--gold);margin:0 0 .6rem}
.lockup{font:900 clamp(1.25rem,3vw,2rem)/1.3 var(--display);letter-spacing:.05em;
  text-transform:uppercase;color:#fff;margin:0 0 1.1rem}
.lockup .sep{color:var(--gold);margin:0 .3em;font-weight:800}
.lockup .b{color:var(--magenta);-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill}
.wordmark{font-size:clamp(2.7rem,10.5vw,6.8rem);line-height:.94;letter-spacing:-.046em;font-weight:900;
  margin:0 0 1.1rem;color:#fff}
.wordmark span{display:block}
.wordmark .b{color:var(--magenta);-webkit-text-stroke:2px var(--ink);paint-order:stroke fill}
.spine{max-width:var(--measure);font-size:clamp(1.05rem,2.2vw,1.28rem);line-height:1.5;letter-spacing:-.012em;
  margin:0 0 .6rem;color:var(--light)}
.spine+.spine{font-size:.9375rem;color:var(--softlight)}

.permit{position:relative;border:2px solid var(--ink);background:#fff;box-shadow:8px 8px 0 var(--magenta);
  max-width:var(--col);overflow:hidden;margin-top:1.8rem}
.permit>.foil{height:10px}
.permit-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);
  gap:clamp(1.1rem,3vw,2rem);padding:clamp(1.1rem,2.6vw,1.7rem)}
@media(min-width:46.01rem){.permit-grid{padding-bottom:clamp(2.2rem,4vw,3.2rem)}}
.window{position:relative;aspect-ratio:16/10;background:var(--midnight);border:2px solid var(--ink);overflow:hidden}
.window iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.ph{position:absolute;inset:0;display:grid;place-content:center;gap:.85rem;text-align:center;padding:1rem}
.ph p{margin:0;font:600 .625rem/1.7 var(--util);letter-spacing:.14em;text-transform:uppercase;color:#8B93C4}
.play{width:3.4rem;height:3.4rem;margin:0 auto;border-radius:50%;background:var(--foil);
  background-size:200%;display:grid;place-content:center}
.play::after{content:"";width:0;height:0;margin-left:.25rem;border-left:.8rem solid var(--midnight);
  border-top:.5rem solid transparent;border-bottom:.5rem solid transparent}
.cap-field{margin:.75rem 0 0;padding-top:.55rem;border-top:2px solid var(--line)}
.cap-field dt{margin:0 0 .18rem;font:600 .5625rem/1.4 var(--util);letter-spacing:.14em;
  text-transform:uppercase;color:var(--magenta-ink)}
.cap-field dd{margin:0;font:400 .8125rem/1.4 var(--util);color:var(--soft)}
.fields{display:grid;grid-template-columns:1fr 1fr;gap:0 1.3rem;margin:0;align-content:start}
.fields div{padding:.4rem 0 .5rem;border-bottom:2px solid var(--line)}
.fields div.wide{grid-column:1/-1}
.fields dt{margin:0 0 .15rem;font:600 .5625rem/1.4 var(--util);letter-spacing:.14em;
  text-transform:uppercase;color:var(--soft)}
.fields dd{margin:0;font:400 .875rem/1.4 var(--util)}
.stamp{position:absolute;z-index:3;right:clamp(1rem,3vw,2.2rem);bottom:clamp(1.6rem,3vw,2.2rem);
  width:clamp(7.5rem,11vw,9.5rem);aspect-ratio:1;display:grid;place-content:center;gap:.3rem;
  text-align:center;padding:.9rem;color:var(--magenta-ink);border:3px double var(--magenta-ink);
  border-radius:50%;transform:rotate(-9deg);mix-blend-mode:multiply;opacity:.9}
.stamp b{font:600 .6875rem/1.3 var(--util);letter-spacing:.05em;text-transform:uppercase}
.stamp small{font:400 .5625rem/1.3 var(--util);letter-spacing:.1em;text-transform:uppercase;opacity:.8}
@media(prefers-reduced-motion:no-preference){
  .stamp{animation:land .65s cubic-bezier(.2,1.5,.4,1) .4s both}
  @keyframes land{0%{transform:rotate(-28deg) scale(2);opacity:0}
    70%{transform:rotate(-7deg) scale(.96);opacity:.95}to{transform:rotate(-9deg) scale(1);opacity:.9}}
}
.mrz{margin:0;padding:.65rem var(--pad);border-top:2px solid var(--ink);background:var(--ht,#F4F2FA);
  font:400 clamp(.58rem,1.45vw,.78rem)/1.5 var(--util);letter-spacing:.04em;color:var(--hi,var(--soft));
  white-space:nowrap;overflow:hidden}
.permit .mrz{padding-inline:clamp(1.1rem,2.6vw,1.7rem)}
@media(max-width:46rem){
  .permit-grid{grid-template-columns:1fr}
  .stamp{position:static;margin:1.2rem 0 0 auto;right:auto;bottom:auto;width:8.5rem}
}

.xwalk{margin:1.8rem 0 0;max-width:60rem}
.xwalk summary{cursor:pointer;list-style:none;display:inline-block;font:600 .6875rem/1 var(--util);
  letter-spacing:.12em;text-transform:uppercase;color:var(--ink);background:var(--gold);border:2px solid var(--ink);
  border-radius:999px;padding:.8rem 1.15rem;box-shadow:4px 4px 0 var(--violet)}
.xwalk summary::-webkit-details-marker{display:none}
.xwalk summary>span::after{content:"  +"}
.xwalk[open] summary>span::after{content:"  \\2013"}
.xwalk summary:hover{transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
.xwalk>div{padding-top:1.2rem}

.part{border-top:2px solid var(--edge)}
.part>.mrz{border-top:0;border-bottom:2px solid var(--ink)}
.part-head .eyebrow,.hero>.eyebrow{color:var(--h,var(--softlight))}
.part-head{max-width:var(--wrap);margin:0 auto;padding:clamp(2rem,5vw,3.25rem) var(--pad) 0}
.part-head .part-title{font-size:clamp(1.85rem,4.6vw,2.9rem);letter-spacing:-.034em;font-weight:900;margin-bottom:.75rem;color:var(--light);display:block}
.part-body{max-width:var(--wrap);margin:0 auto;min-width:0;
  padding:clamp(1.6rem,3.5vw,2.5rem) var(--pad) clamp(3rem,7vw,5rem)}

.reading{max-width:var(--measure)}
h2{font-size:1.4rem;letter-spacing:-.026em;margin:0 0 .6rem;display:flex;gap:.65rem;align-items:baseline}
h3.bare{font-size:1.4rem;letter-spacing:-.026em;margin:2.4rem 0 1rem}
.bullets{list-style:none;padding:0;margin:0 0 1.05rem}
.bullets li{position:relative;padding-left:1.5rem;margin-bottom:.55rem}
.bullets li::before{content:"◆";position:absolute;left:0;top:.05em;font-size:.62em;color:var(--h,var(--magenta))}

.slip{margin:1.5rem 0;padding:1.1rem 1.25rem;background:var(--ht,var(--gold-tint));
  border:2px solid var(--ink);box-shadow:5px 5px 0 var(--h,var(--gold));transform:rotate(var(--rot,-.5deg));
  font-weight:600;font-size:1.03rem;line-height:1.48;letter-spacing:-.011em;max-width:var(--measure)}
.slip::before{content:"\\201C";font-size:2.4rem;line-height:0;vertical-align:-.35em;
  color:var(--h,var(--gold));margin-right:.08em}
.slip p{margin:0}

/* ── timeline ────────────────────────────────────────────── */
.tl{position:relative;display:grid;gap:2.4rem;max-width:var(--col);margin:2rem 0;
  padding-left:clamp(1.1rem,3vw,2rem)}
.tl::before{content:"";position:absolute;left:0;top:.5rem;bottom:.5rem;width:3px;
  background:var(--edge)}
.tl>.visa::before{content:"";position:absolute;left:calc(-1 * clamp(1.1rem,3vw,2rem) - 6px);top:1rem;
  width:15px;height:15px;border-radius:50%;background:var(--h);border:3px solid var(--midnight)}
.visa{position:relative;background:#fff;border:2px solid var(--ink);box-shadow:6px 6px 0 var(--h);
  transform:rotate(var(--rot,0deg))}
.visa>header{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:.4rem .8rem;
  background:var(--h);border-bottom:2px solid var(--ink);padding:.5rem .85rem}
.visa-date{font:600 .75rem/1 var(--util);letter-spacing:.05em;text-transform:uppercase;color:var(--ink)}
.visa-date i{font-style:normal;opacity:.55;margin-left:.4em}
.vbadge{font:600 .5625rem/1 var(--util);letter-spacing:.13em;text-transform:uppercase;
  background:#fff;border:2px solid var(--ink);border-radius:999px;padding:.35em .65em}
.visa-serial{font:400 .625rem/1 var(--util);letter-spacing:.1em;color:#17122cb3}
.visa-body{padding:1.1rem 1.2rem 1.3rem}
.visa-body h3{font-size:1.25rem;letter-spacing:-.026em;margin:0 0 .7rem}
.visa-body p{font-size:.9375rem;line-height:1.62;margin-bottom:.85rem;max-width:58rem}
.visa-body .bullets li{font-size:.9375rem}
.visa-body>*:last-child{margin-bottom:0}
.visa-body .slip{font-size:.97rem;box-shadow:3px 3px 0 var(--h);margin:1.1rem 0}
.perf{height:9px;border-top:2px dashed var(--ink);
  background:radial-gradient(circle at 6px 4.5px,var(--page) 3.5px,#0000 3.6px) 0 0/12px 9px}

.reading.wide-ok>.efields{background:var(--paper);color:var(--ink);border:2px solid var(--ink);
  box-shadow:6px 6px 0 var(--h);padding:1rem 1.2rem;max-width:56rem}
.efields{margin:1rem 0;display:grid;gap:0;max-width:56rem}
.efields>div{display:grid;grid-template-columns:10rem minmax(0,1fr);gap:0 1rem;
  padding:.5rem 0;border-top:2px solid var(--line)}
.efields>div:last-child{border-bottom:2px solid var(--line)}
.efields dt{font:600 .5625rem/1.7 var(--util);letter-spacing:.12em;text-transform:uppercase;color:var(--hi)}
.efields dd{margin:0;font-size:.9375rem;line-height:1.55}
@media(max-width:34rem){.efields>div{grid-template-columns:1fr;gap:.1rem}}

.shots{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,9.5rem),1fr));gap:.55rem;margin:1.1rem 0}
.shots img{width:100%;aspect-ratio:8/5;object-fit:cover;border:2px solid var(--ink);
  cursor:zoom-in;background:var(--ht);display:block}
.shots img:hover{box-shadow:3px 3px 0 var(--h)}

.lightbox{border:2px solid var(--ink);padding:0;background:#fff;box-shadow:8px 8px 0 var(--violet);
  max-width:min(92vw,70rem)}
.lightbox::backdrop{background:#0A0E27d9}
.lightbox img{display:block;max-width:100%;max-height:82vh}
.lightbox button{position:absolute;top:.5rem;right:.5rem;font:600 .75rem/1 var(--util);
  background:var(--gold);border:2px solid var(--ink);border-radius:999px;padding:.5em .7em;
  cursor:pointer;box-shadow:2px 2px 0 var(--ink)}

.drawer{margin:.75rem 0;border:2px solid var(--line)}
.drawer summary{cursor:pointer;list-style:none;font:600 .625rem/1 var(--util);letter-spacing:.13em;
  text-transform:uppercase;padding:.65rem .85rem;background:var(--ht);color:var(--hi)}
.drawer summary::-webkit-details-marker{display:none}
.drawer summary::after{content:"  +";float:right}
.drawer[open] summary::after{content:"  \\2013"}
.drawer[open] summary{border-bottom:2px solid var(--line)}
.drawer .din{padding:.85rem .95rem .5rem}
.drawer .din p,.drawer .din li{font-size:.9375rem;line-height:1.58}
.drawer .din .slip{font-size:.9375rem}

/* ── criteria sheet ──────────────────────────────────────── */
.sheet{list-style:none;margin:1.6rem 0;padding:0;display:grid;gap:1.3rem;max-width:var(--col)}
.crit{display:grid;grid-template-columns:6.5rem 1fr;background:#fff;border:2px solid var(--ink);
  box-shadow:6px 6px 0 var(--h)}
.crit-mark{background:var(--ht);border-right:2px solid var(--ink);padding:1.1rem .8rem;display:grid;
  place-content:center;text-align:center;gap:.25rem}
.crit-mark span{font-weight:900;font-size:2.15rem;line-height:1;letter-spacing:-.045em;color:var(--hi)}
.crit-mark i{font:600 .5rem/1 var(--util);letter-spacing:.14em;text-transform:uppercase;color:var(--soft);
  font-style:normal}
.crit-body{padding:1.15rem 1.35rem 1.25rem;min-width:0}
.crit-body h3{font-size:1.15rem;letter-spacing:-.026em;margin:0 0 .7rem}
.crit-body p{font-size:.9375rem;line-height:1.6;margin-bottom:.8rem}
.crit-body>*:last-child{margin-bottom:0}
.crit-body .slip{font-size:.95rem;box-shadow:3px 3px 0 var(--h)}
@media(max-width:34rem){.crit{grid-template-columns:1fr}
  .crit-mark{border-right:0;border-bottom:2px solid var(--ink);grid-auto-flow:column;
    justify-content:start;gap:.7rem;align-items:center;padding:.6rem .9rem}}
.checks{list-style:none;margin:0 0 1rem;padding:0}
.checks li{position:relative;padding-left:1.7rem;margin-bottom:.45rem;font-size:.9375rem;line-height:1.55}
.checks li::before{content:"✓";position:absolute;left:0;top:0;font-weight:800;color:var(--aqua-ink)}

/* ── tables ──────────────────────────────────────────────── */
.tbl{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.3rem 0 1.9rem;
  border:2px solid var(--ink);box-shadow:6px 6px 0 var(--h);background:#fff;
  max-width:100%;width:100%}
.tbl table{border-collapse:collapse;width:100%;min-width:34rem;font-size:.875rem}
.tbl th{background:var(--h);border-bottom:2px solid var(--ink);text-align:left;
  padding:.6rem .8rem;font:600 .5625rem/1.3 var(--util);letter-spacing:.13em;
  text-transform:uppercase;color:var(--ink);vertical-align:bottom}
.tbl td{border-bottom:2px solid var(--line);border-right:2px solid var(--line);
  padding:.75rem .8rem;vertical-align:top;line-height:1.55}
.tbl td:last-child,.tbl th:last-child{border-right:0}
.tbl tr:last-child td{border-bottom:0}
.tbl td:first-child{background:var(--ht);font-weight:600;white-space:normal;min-width:8.5rem}
.tbl code{font-size:.8em}

.todo{display:inline-block;font:600 .625rem/1.3 var(--util);letter-spacing:.09em;text-transform:uppercase;
  background:var(--gold);border:1px solid var(--ink);padding:.1em .4em;margin:0 .15em;color:var(--ink)}

/* ── roadmap blocks ──────────────────────────────────────── */
.roadmap{display:grid;gap:.7rem;margin:1.6rem 0 2.4rem;max-width:var(--col)}
.rm-row{display:grid;grid-template-columns:9.5rem repeat(3,minmax(0,1fr));gap:.7rem;align-items:stretch}
.rm-headrow .rm-col{font:600 .625rem/1.4 var(--util);letter-spacing:.14em;text-transform:uppercase;
  color:var(--gold);align-self:end;padding-bottom:.15rem}
.rm-stream{font:600 .625rem/1.45 var(--util);letter-spacing:.12em;text-transform:uppercase;
  color:var(--softlight);align-self:center}
.rm-block{background:var(--h);border:2px solid var(--ink);box-shadow:3px 3px 0 var(--ht);
  padding:.65rem .75rem;font:600 .8125rem/1.45 var(--text);color:var(--ink)}
.rm-block.empty{background:none;border:2px dashed var(--edge);box-shadow:none}
@media(max-width:46rem){
  .rm-row{grid-template-columns:1fr;gap:.45rem}
  .rm-headrow{display:none}
  .rm-block::before{content:attr(data-when);display:block;font:600 .5625rem/1.4 var(--util);
    letter-spacing:.12em;text-transform:uppercase;opacity:.7;margin-bottom:.2rem}
}

/* ── ordered list ────────────────────────────────────────── */
.ord{list-style:none;padding:0;margin:0 0 1.05rem;counter-reset:o;max-width:var(--measure)}
.ord li{counter-increment:o;position:relative;padding-left:2.3rem;margin-bottom:.7rem}
.ord li::before{content:counter(o,decimal-leading-zero);position:absolute;left:0;top:.12em;
  font:600 .6875rem/1.7 var(--util);color:var(--h,var(--gold))}

/* ── field notes ─────────────────────────────────────────── */
.fncat{margin:1.2rem 0;max-width:var(--col);background:var(--paper);color:var(--ink);
  border:2px solid var(--ink);box-shadow:6px 6px 0 var(--h)}
.fncat>summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;
  align-items:center;gap:1rem;padding:.55rem .9rem;background:var(--h)}
.fncat>summary::-webkit-details-marker{display:none}
.fnc-l{font:800 1rem/1.3 var(--display);letter-spacing:-.015em;color:var(--ink)}
.fncat>summary>i{font:600 .625rem/1 var(--util);letter-spacing:.1em;text-transform:uppercase;
  font-style:normal;background:#fff;border:2px solid var(--ink);border-radius:999px;
  padding:.45em .7em;color:var(--ink);white-space:nowrap}
.fncat>summary>i::after{content:" +"}
.fncat[open]>summary>i::after{content:" \\2013"}
.fncat[open]>summary{border-bottom:2px solid var(--ink)}
.fncat .fnotes{border:0;margin:0;max-height:32rem;overflow-y:auto;max-width:none}
.fncat .fnote{border-bottom:1px solid var(--line)}
.fncat .fnote:hover{background:var(--gold-tint)}
.fncat .fn-d{color:var(--hi)}
.fncat .fn-b b{color:var(--ink)}
.fncat .fn-b span{color:var(--soft)}
.fnx>summary{cursor:pointer;list-style:none}
.fnx>summary::-webkit-details-marker{display:none}
.fnx[open]{background:var(--gold-tint)}
.fn-full{margin:0;padding:.15rem .8rem .75rem 9.1rem;font-size:.8438rem;line-height:1.6;color:var(--ink)}
.fn-full a{color:var(--hi)}
@media(max-width:40rem){.fn-full{padding-left:.8rem}}
.ext{font-size:.8em;vertical-align:.1em}
.fncat a{color:var(--hi,var(--magenta-ink))}
.fncat a:hover{color:var(--ink);background:var(--ht,var(--gold-tint))}
.fncols{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;max-width:var(--col);align-items:start;margin:1.2rem 0}
.fncols .fncat{margin:0;max-width:none}
.fncols .fnote{grid-template-columns:5.8rem minmax(0,1fr);padding:.5rem .7rem}
@media(max-width:52rem){.fncols{grid-template-columns:1fr}}
.fnj{display:block;background:#fff;border:2px solid var(--ink);margin:.9rem;box-shadow:3px 3px 0 var(--ht)}
.fnj>summary{cursor:pointer;list-style:none;padding:0;display:block}
.fnj>summary::-webkit-details-marker{display:none}
.fnj-head{display:flex;justify-content:space-between;align-items:baseline;gap:.9rem;
  background:var(--ht);border-bottom:2px solid var(--line);padding:.5rem .75rem}
.fnj-head b{font-size:.9375rem;line-height:1.35;letter-spacing:-.015em;color:var(--ink)}
.fnj-head i{font:600 .625rem/1.6 var(--util);letter-spacing:.08em;text-transform:uppercase;
  color:var(--hi);font-style:normal;white-space:nowrap}
.fnj-cap{display:block;padding:.45rem .75rem .55rem;font-size:.8125rem;line-height:1.5;color:var(--soft)}
.fnj[open] .fnj-cap{border-bottom:2px dashed var(--line)}
.fnj-body{padding:.75rem .9rem .9rem;max-width:none;margin:0}
.fnj-body p{margin:0 0 .7rem;font-size:.875rem;line-height:1.66;color:var(--ink)}
.fnj-body .fnj-link a{color:var(--hi);font:600 .75rem/1.4 var(--util)}
.fnj.solo{margin:1rem 0;max-width:var(--col);color:var(--ink);box-shadow:5px 5px 0 var(--aqua)}
.fnj.solo .fnj-head{background:var(--aqua);border-bottom:2px solid var(--ink)}
.fnj.solo .fnj-head i{color:var(--ink);opacity:.75}
.fnj.solo .fnj-body p{font-size:.9375rem;max-width:50rem}
.fnj.solo a{color:var(--hi)}
.fnotes{margin:1.3rem 0 1.8rem;max-width:56rem;border:2px solid var(--edge)}
.fnote{display:grid;grid-template-columns:7.5rem minmax(0,1fr);gap:.8rem;align-items:baseline;
  padding:.55rem .8rem;border-bottom:1px solid var(--edge)}
.fnote:last-child{border-bottom:0}
.fnote:hover{background:#ffffff0d}
.fn-d{font:600 .625rem/1.7 var(--util);letter-spacing:.08em;text-transform:uppercase;color:var(--gold)}
.fn-b b{display:block;font-size:.875rem;line-height:1.45;color:var(--light);letter-spacing:-.01em}
.fn-b span{display:block;font-size:.8125rem;line-height:1.5;color:var(--softlight);margin-top:.1rem}
@media(max-width:40rem){.fnote{grid-template-columns:1fr;gap:.15rem}}

/* ── open-question cards ─────────────────────────────────── */
.qcards{display:grid;gap:1.1rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,18rem),1fr));
  margin:1.4rem 0 2rem;max-width:var(--col);align-items:start}
.qcard{position:relative;background:var(--paper);color:var(--ink);border:2px solid var(--ink);
  box-shadow:5px 5px 0 var(--h,var(--gold));padding:1.4rem 1.1rem 1rem;transform:rotate(var(--rot,0deg))}
.qcards .qcard:nth-child(4n+1){--h:var(--magenta);--rot:-.5deg}
.qcards .qcard:nth-child(4n+2){--h:var(--aqua);--rot:.4deg}
.qcards .qcard:nth-child(4n+3){--h:var(--violet);--rot:-.3deg}
.qcards .qcard:nth-child(4n+4){--h:var(--gold);--rot:.5deg}
.q-mark{position:absolute;top:-1.05rem;left:.9rem;font:800 1.05rem/1 var(--util);background:var(--h);
  border:2px solid var(--ink);border-radius:999px;padding:.32em .58em;color:var(--ink);
  box-shadow:2.5px 2.5px 0 var(--ink);transform:rotate(-8deg)}
.qcard b{display:block;font-size:1rem;letter-spacing:-.018em;margin-bottom:.4rem}
.qcard p{margin:0;font-size:.875rem;line-height:1.55}

/* ── month roadmap: vertical timeline ────────────────────── */
.mroad{position:relative;display:grid;row-gap:1.5rem;max-width:44rem;
  margin:1.8rem 0 3.4rem;padding-left:2.1rem}
.mroad::before{content:"";position:absolute;left:.525rem;top:.15rem;bottom:-1.2rem;
  width:.25rem;background:var(--gold)}
.mroad::after{content:"";position:absolute;left:.65rem;bottom:-2.3rem;width:0;height:0;
  transform:translateX(-50%);border-top:12px solid var(--gold);
  border-left:9px solid transparent;border-right:9px solid transparent}
.mrow{position:relative;display:grid;row-gap:.5rem}
.mrow::before{content:"";position:absolute;z-index:1;left:-2rem;top:-.11rem;
  width:1.1rem;height:1.1rem;border-radius:50%;background:var(--h);
  border:3px solid var(--midnight)}
.m-when{font:700 .625rem/1.4 var(--util);letter-spacing:.13em;
  text-transform:uppercase;color:var(--h)}
.mcard{background:var(--paper);color:var(--ink);border:2px solid var(--ink);
  box-shadow:5px 5px 0 var(--h);padding:.85rem .95rem .8rem}
.mcard b{display:block;font-size:1rem;letter-spacing:-.018em}
.m-more{margin-top:.35rem}
.m-more summary{cursor:pointer;list-style:none;font:600 .5625rem/1 var(--util);
  letter-spacing:.12em;text-transform:uppercase;color:var(--hi)}
.m-more summary::-webkit-details-marker{display:none}
.m-more summary::after{content:" +"}
.m-more[open] summary::after{content:" \\2013"}
.m-more p{margin:.4rem 0 0;font-size:.8438rem;line-height:1.55;color:var(--soft)}
@media(min-width:52.01rem){
  .mroad{max-width:var(--col);padding-left:0;row-gap:1.6rem}
  .mroad::before{left:calc(50% - .125rem);top:1.3rem}
  .mroad::after{left:50%}
  .mrow{grid-template-columns:1fr 8.4rem 1fr;row-gap:0;pointer-events:none}
  .mrow::before,.mcard,.m-when{pointer-events:auto}
  .mrow:nth-child(even){margin-top:-2.9rem}
  .mrow::before{left:calc(50% - .55rem);top:.95rem}
  .m-when{grid-column:2;grid-row:1;align-self:start;text-align:right;
    padding-right:5.25rem;transform:translateY(calc(1.5rem - 50%))}
  .mcard{grid-row:1}
  .mrow:nth-child(odd) .mcard{grid-column:1;box-shadow:-5px 5px 0 var(--h)}
  .mrow:nth-child(even) .mcard{grid-column:3}
}

/* ── thank-you cards ─────────────────────────────────────── */
#part-08 .bullets{columns:1;column-gap:1rem;max-width:none}
@media(min-width:44rem){#part-08 .bullets{columns:2}}
@media(min-width:58rem){#part-08 .bullets{columns:3}}
@media(min-width:72rem){#part-08 .bullets{columns:4}
  #part-08 .bullets li:nth-child(7n+1){font-size:.9375rem;padding:1.15rem 1.2rem}
  #part-08 .bullets li:nth-child(9n+5){font-size:.8125rem}}
#part-08 .bullets li{display:block;break-inside:avoid;background:var(--paper);color:var(--ink);
  border:2px solid var(--ink);box-shadow:4px 4px 0 var(--h,var(--gold));padding:.95rem 1rem;
  margin:0 0 1rem;font-size:.875rem;line-height:1.55;transform:rotate(var(--rot,0deg))}
#part-08 .bullets li::before{display:none}
#part-08 .bullets li:nth-child(5n+1){--h:var(--magenta);--rot:-.4deg}
#part-08 .bullets li:nth-child(5n+2){--h:var(--aqua);--rot:.35deg}
#part-08 .bullets li:nth-child(5n+3){--h:var(--violet);--rot:-.25deg}
#part-08 .bullets li:nth-child(5n+4){--h:var(--cyan);--rot:.3deg}
#part-08 .bullets li:nth-child(5n+5){--h:var(--gold);--rot:-.35deg}

/* ── gallery wall ────────────────────────────────────────── */
.shots.gallery{grid-template-columns:repeat(auto-fill,minmax(min(100%,9rem),1fr));
  grid-auto-rows:7rem;grid-auto-flow:dense;gap:.7rem;max-width:var(--col);margin:1.6rem 0}
.shots.gallery img{aspect-ratio:auto;height:100%;width:100%;object-fit:cover}
.shots.gallery img:nth-child(6n+1){grid-column:span 2;grid-row:span 2}
.shots.gallery img:nth-child(6n+4){grid-row:span 2}
.shots.gallery img:nth-child(6n+5){grid-column:span 2}
.shots.gallery img:nth-child(8n+7){transform:rotate(-.6deg)}
.shots.gallery img:nth-child(8n+3){transform:rotate(.5deg)}

footer{border-top:2px solid var(--edge);background:#060919;color:#E7E4F4}
.foot-in{max-width:var(--wrap);margin:0 auto;padding:clamp(2rem,5vw,3rem) var(--pad);display:flex;
  flex-wrap:wrap;gap:1.5rem 2rem;justify-content:space-between;align-items:flex-end}
.foot-in p{margin:0;font:400 .75rem/1.9 var(--util);color:#ABA5C9}
.foot-in a{color:var(--gold)}
.foot-in a:hover{background:#0000;color:#fff}
.foot-stars{font-size:1.15rem;letter-spacing:.4em;
  background:var(--foil);-webkit-background-clip:text;background-clip:text;color:#0000}

/* ── prototype feedback card ─────────────────────────────── */
.vbook{position:fixed;right:1rem;bottom:1rem;z-index:40;width:min(19rem,calc(100vw - 2rem));
  background:#fff;border:2px solid var(--ink);box-shadow:5px 5px 0 var(--ink)}
.vbook-head{display:flex;justify-content:space-between;align-items:center;gap:.6rem;
  font:600 .625rem/1 var(--util);letter-spacing:.13em;text-transform:uppercase;
  background:var(--gold);border-bottom:2px solid var(--ink);padding:.55rem .75rem}
.vbook-head button{font:700 .875rem/1 var(--util);background:none;border:0;cursor:pointer;
  color:var(--ink);padding:0 .15rem}
.vb-mini{display:none}
.vbook.min{width:auto;border-radius:999px;overflow:hidden;box-shadow:3px 3px 0 var(--magenta)}
.vbook.min .vbook-body{display:none}
.vbook.min .vbook-head{border-bottom:0;cursor:pointer;padding:.6rem .95rem}
.vbook.min .vb-full,.vbook.min #vbook-min{display:none}
.vbook.min .vb-mini{display:inline}
.vbook-body{padding:.7rem .75rem .8rem}
.vbook-note{font:400 .75rem/1.55 var(--util);color:var(--soft);margin:0 0 .55rem}
.vbook form{display:flex;gap:.45rem}
.vbook input{flex:1 1 auto;min-width:0;font:inherit;font-size:.875rem;border:2px solid var(--ink);
  background:var(--page);padding:.4rem .55rem}
.vbook form button{font:600 .625rem/1 var(--util);letter-spacing:.1em;text-transform:uppercase;
  color:var(--ink);background:var(--gold);border:2px solid var(--ink);border-radius:999px;
  padding:.55rem .8rem;box-shadow:2px 2px 0 var(--ink);cursor:pointer}
.vbook form button:hover{transform:translate(1px,1px);box-shadow:1px 1px 0 var(--ink)}
.vbook-as{font:400 .75rem/1.55 var(--util);color:var(--soft);margin:0}
.vbook-as b{color:var(--ink)}
.vbook-as button{font:inherit;color:var(--magenta-ink);background:none;border:0;padding:0;
  text-decoration:underline;cursor:pointer}
.vbook-err{font:400 .75rem/1.55 var(--util);color:var(--magenta-ink);margin:.45rem 0 0}
.vbook.done .vbook-note,.vbook.done form{display:none}
@media print{.vbook{display:none}}


/* ── inline drawer sections + decorations + sticker headings ── */
.dsec{margin:1rem 0;border-left:4px solid var(--h);padding:.05rem 0 .05rem .95rem;max-width:58rem}
.dsec-l{display:block;font:600 .5625rem/1.7 var(--util);letter-spacing:.13em;text-transform:uppercase;
  color:var(--hi);margin-bottom:.3rem}
.dsec p,.dsec li{font-size:.875rem;line-height:1.6}
.dsec .bullets{margin-bottom:.3rem}
h3.bare{margin:2.9rem 0 1.4rem}
h3.bare span{display:inline-block;background:var(--paper);color:var(--ink);border:2px solid var(--ink);
  box-shadow:4px 4px 0 var(--h,var(--gold));padding:.4rem .9rem;transform:rotate(-.4deg)}
.tl>.visa::after{content:"✦";position:absolute;z-index:2;top:-1.05rem;right:1.1rem;
  font:800 1.05rem/1 var(--util);background:var(--h);color:var(--ink);border:2px solid var(--ink);
  border-radius:999px;padding:.32em .55em;box-shadow:2.5px 2.5px 0 var(--ink);transform:rotate(8deg)}
.tl>.visa:nth-child(4n+2)::after{content:"★"}
.tl>.visa:nth-child(4n+3)::after{content:"♥"}
.tl>.visa:nth-child(4n)::after{content:"❋"}
#part-08 .bullets li{position:relative}
#part-08 .bullets li[data-g]::after{content:attr(data-g);position:absolute;top:-.9rem;right:.8rem;
  font:800 .95rem/1 var(--util);background:var(--h,var(--gold));color:var(--ink);
  border:2px solid var(--ink);border-radius:999px;padding:.3em .52em;
  box-shadow:2px 2px 0 var(--ink);transform:rotate(9deg)}
#part-08 .bullets li:nth-child(even)[data-g]::after{transform:rotate(-8deg)}


.skip{position:fixed;left:-999px;top:.6rem;z-index:60;background:var(--gold);color:var(--ink);
  border:2px solid var(--ink);padding:.5rem .9rem;font:600 .75rem/1 var(--util);text-decoration:none}
.skip:focus{left:.6rem}
.progress{position:fixed;top:0;left:0;right:0;height:3px;z-index:55;background:var(--foil);
  background-size:300% 100%;transform:scaleX(0);transform-origin:0 50%}
.openall{margin-top:.9rem;font:600 .625rem/1 var(--util);letter-spacing:.11em;text-transform:uppercase;
  color:var(--softlight);background:none;border:2px solid var(--edge);border-radius:999px;
  padding:.5rem .8rem;cursor:pointer}
.openall:hover{color:var(--light);border-color:var(--softlight)}
@media print{.skip,.progress,.openall{display:none}}

/* recogito: match the page's ink-and-gold system */
.r6o-annotation,.r6o-selection{background:#facc1533;border-bottom:2px solid var(--gold);cursor:pointer}
.r6o-annotation:hover{background:#facc1560}
.r6o-editor{font-family:var(--text);z-index:50}
.r6o-editor .r6o-arrow{display:none}
.r6o-editor .r6o-editor-inner{background:#fff;border:2px solid var(--ink);border-radius:0;
  box-shadow:5px 5px 0 var(--ink)}
.r6o-editor .r6o-widget{border-color:var(--line);font-size:.9375rem;line-height:1.55}
.r6o-editor .r6o-widget.comment.editable{background:var(--page)}
.r6o-editor .r6o-widget.comment .r6o-editable-text,
.r6o-editor .r6o-widget.comment .r6o-readonly-comment{font-family:var(--text);
  font-size:.9375rem;line-height:1.55;color:var(--ink)}
.r6o-editor .r6o-widget.comment .r6o-editable-text:empty:not(:focus):before{color:var(--soft)}
.r6o-editor .r6o-lastmodified{font:600 .5625rem/1.5 var(--util);letter-spacing:.1em;
  text-transform:uppercase;color:var(--magenta-ink)}
.r6o-editor .r6o-lastmodified-at{color:var(--soft);font-weight:400;letter-spacing:.03em;
  text-transform:none}
.r6o-editor .r6o-footer{background:var(--gold-tint);border-top:2px solid var(--ink);
  padding:.5rem .6rem}
.r6o-editor .r6o-footer .r6o-btn{font:600 .5625rem/1 var(--util);letter-spacing:.1em;
  text-transform:uppercase;color:var(--ink);background:var(--gold);border:2px solid var(--ink);
  border-radius:999px;padding:.55rem .8rem;box-shadow:2px 2px 0 var(--ink);cursor:pointer}
.r6o-editor .r6o-footer .r6o-btn:hover{transform:translate(1px,1px);box-shadow:1px 1px 0 var(--ink)}
.r6o-editor .r6o-footer .r6o-btn.outline{background:#fff;color:var(--ink)}
.r6o-editor .r6o-footer .r6o-icon,.r6o-editor .r6o-footer svg{color:var(--magenta-ink);
  fill:var(--magenta-ink)}

@media print{
  .rail,.foil,.vbook{display:none}
  body{background:#fff;color:var(--ink);padding-left:0}
  .spine,.wordmark,.part-head .part-title,h3.bare{color:var(--ink)}
  .visa,.crit,.slip,.permit{box-shadow:none;transform:none;break-inside:avoid}
  .part{break-before:page;border-top-color:var(--line)}
  a{color:var(--ink)}
  .tbl{box-shadow:none;overflow:visible}
  .tbl table{min-width:0}
  .drawer{display:block}
  .shots{display:none}
  .rm-block{box-shadow:none}
}
`;
const CSSHASH = require("crypto").createHash("md5").update(CSS).digest("hex").slice(0, 8);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>">
<title>Prototype Submission: Sparkle Bureaucracy</title>
<meta name="description" content="Sparkle Bureaucracy is a network of people using AI to prototype more optimistic futures. Prototype submission, Newspeak House Political Technology Programme 2025-26.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900;1,14..32,300..700&display=swap" rel="stylesheet">
${ANNOTATIONS ? `<link rel="stylesheet" href="/vendor/recogito.min.css">` : ""}
<link rel="stylesheet" href="/styles.css?v=${CSSHASH}">
</head>
<body>
<a class="skip" href="#part-01">Skip to content</a>
<div class="progress" aria-hidden="true"></div>

<div class="rail">
  <div class="rail-in">
    <a class="side-brand" href="#part-00">Sparkle<b>Bureaucracy</b><small>Prototype submission<br>2025–26</small></a>
    <nav aria-label="Sections">${nav}</nav>
    <p class="side-foot">${SERIAL}<br>Newspeak House</p>
  </div>
</div>

<div class="foil hero-foil" aria-hidden="true"></div>

<main id="annotatable">
<header class="hero wrap" data-hue="magenta" id="part-00">
  <p class="eyebrow">Newspeak House · Political Technology Programme · Cohort 2025–26</p>
  <h1 class="lockup">Prototype Submission <span class="sep">»</span> <span class="b">Sparkle Bureaucracy</span></h1>
  ${missionBlocks.map((b, i) => `<p class="spine">${inline(b.t)}</p>`).join("\n  ")}

  <div class="permit">
    <div class="foil" aria-hidden="true"></div>
    <div class="permit-grid">
      <div>
        <p class="eyebrow" style="margin-bottom:.5rem">Part 00 · Setting the stage</p>
        <div class="window">
          ${VIDEO_EMBED
    ? `<iframe src="${VIDEO_EMBED}" title="Video introduction" allowfullscreen loading="lazy"></iframe>`
    : `<div class="ph"><div class="play"></div><p>Official introduction<br>Recorded · embed pending</p></div>`}
        </div>
        <dl class="cap-field">
          <dt>Official introduction</dt>
          <dd>To be viewed before the record</dd>
        </dl>
      </div>
      <dl class="fields">
        ${PERMIT.map(([k, v, w]) => `<div${w ? ' class="wide"' : ""}><dt>${k}</dt><dd>${v}</dd></div>`).join("\n        ")}
      </dl>
    </div>
    <div class="stamp"><b>Submitted<br>for<br>assessment</b><small>${SUBMIT_DATE}</small></div>
    <p class="mrz" aria-hidden="true">${mrz("PTGBRSPARKLE<BUREAUCRACY<<PROTOTYPE<SUBMISSION")}</p>
  </div>

  ${xwalkTable ? `<details class="xwalk"><summary><span>Where everything lives — template crosswalk</span></summary><div>${renderTable(xwalkTable.rows)}</div></details>` : ""}
</header>

${sections}
</main>

${ANNOTATIONS ? `<aside class="vbook" id="vbook" aria-label="Prototype feedback sign-in">
  <div class="vbook-head" id="vbook-head"><span class="vb-full">Prototype feedback</span><span class="vb-mini">✦ Give feedback</span><button type="button" id="vbook-min" aria-label="Minimise" title="Minimise">–</button></div>
  <div class="vbook-body">
    <p class="vbook-note" id="vbook-note">Add your name, then highlight any text on the page to leave feedback. No account needed.</p>
    <form id="vbook-form">
      <input id="vbook-name" maxlength="80" placeholder="Your name" aria-label="Your name">
      <button type="submit">Begin</button>
    </form>
    <p class="vbook-as" id="vbook-as" hidden>Annotating as <b></b> · <button type="button" id="vbook-change">change</button></p>
    <p class="vbook-err" id="vbook-err" hidden></p>
  </div>
</aside>` : ""}

<dialog class="lightbox" id="lightbox">
  <img alt="">
  <button type="button" aria-label="Close">✕</button>
</dialog>

<footer>
  <div class="foil" aria-hidden="true"></div>
  <div class="foot-in">
    <p><span class="foot-stars">★★★★★</span><br>
      Sparkle Bureaucracy · ${SERIAL}<br>
      Project site: <a href="https://sparklebureaucracy.org">sparklebureaucracy.org</a> · The complete lore: <a href="${RECORD}">sparkle-bureaucracy.md</a></p>
  </div>
</footer>

<script>
(function(){
  var links={},all=[].slice.call(document.querySelectorAll('.rail nav a'));
  all.forEach(function(a){links[a.getAttribute('href').slice(1)]=a;});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      var a=links[e.target.id];if(!a||!e.isIntersecting)return;
      all.forEach(function(l){l.removeAttribute('aria-current');});
      a.setAttribute('aria-current','true');
      a.scrollIntoView({block:'nearest',inline:'nearest'});
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('section.part, header.hero').forEach(function(s){io.observe(s);});

  var pb=document.querySelector('.progress');
  function upd(){var d=document.documentElement;var max=d.scrollHeight-window.innerHeight;
    pb.style.transform='scaleX('+(max>0?window.scrollY/max:0)+')';}
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();

  document.querySelectorAll('section.part').forEach(function(sec){
    var ds=sec.querySelectorAll('details');
    if(ds.length<3)return;
    var b=document.createElement('button');b.type='button';b.className='openall';
    b.textContent='expand all +';var open=false;
    b.addEventListener('click',function(){open=!open;
      ds.forEach(function(d){d.open=open;});
      b.textContent=open?'collapse all \u2013':'expand all +';});
    sec.querySelector('.part-head').appendChild(b);
  });

  var lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
  document.addEventListener('click',function(ev){
    var t=ev.target;
    if(t.tagName==='IMG'&&t.closest('.shots')){
      lbImg.src=t.getAttribute('data-full')||t.src;
      lbImg.alt=t.alt;
      lb.showModal();
    } else if(t===lb||t.closest('.lightbox button')){
      lb.close();
    }
  });
})();
</script>
${ANNOTATIONS ? `<script src="/vendor/recogito.min.js"></script>
<script>
(function(){
  var API="/api/annotations",KEY="sb-reviewer-name";
  var box=document.getElementById("vbook"),form=document.getElementById("vbook-form"),
      input=document.getElementById("vbook-name"),asLine=document.getElementById("vbook-as"),
      err=document.getElementById("vbook-err");
  var r=null;
  function send(method,url,body){
    return fetch(url,{method:method,headers:{"Content-Type":"application/json"},
      body:body?JSON.stringify(body):undefined}).then(function(x){if(!x.ok)throw 0;return x});
  }
  function oops(){err.hidden=false;err.textContent="Couldn\\u2019t save that annotation \\u2014 check your connection and try again."}
  function start(name){
    if(r){try{r.destroy()}catch(e){}}
    r=Recogito.init({content:document.getElementById("annotatable"),widgets:["COMMENT"],readOnly:!name});
    if(name)r.setAuthInfo({id:name.toLowerCase().replace(/[^a-z0-9]+/g,"-")||"reviewer",displayName:name});
    fetch(API).then(function(x){if(!x.ok)throw 0;return x.json()})
      .then(function(a){r.setAnnotations(a)})
      .catch(function(){err.hidden=false;err.textContent="Annotation register offline right now."});
    r.on("createAnnotation",function(a){send("POST",API,a).catch(oops)});
    r.on("updateAnnotation",function(a){send("PUT",API,a).catch(oops)});
    r.on("deleteAnnotation",function(a){send("DELETE",API+"?id="+encodeURIComponent(a.id)).catch(oops)});
  }
  function done(name){
    box.classList.add("done");
    asLine.hidden=false;
    asLine.querySelector("b").textContent=name;
  }
  form.addEventListener("submit",function(ev){
    ev.preventDefault();
    var name=input.value.trim();
    if(!name)return;
    try{localStorage.setItem(KEY,name)}catch(e){}
    done(name);start(name);
  });
  document.getElementById("vbook-change").addEventListener("click",function(){
    try{localStorage.removeItem(KEY)}catch(e){}
    box.classList.remove("done");asLine.hidden=true;start(null);input.focus();
  });
  var saved=null;
  try{saved=localStorage.getItem(KEY)}catch(e){}
  if(saved){done(saved);start(saved)}else{start(null)}

  var KEYM="sb-fb-min",head=document.getElementById("vbook-head");
  function setMin(v){
    box.classList.toggle("min",v);
    try{localStorage.setItem(KEYM, v ? "1" : "0")}catch(e){}
  }
  document.getElementById("vbook-min").addEventListener("click",function(ev){
    ev.stopPropagation();setMin(true);
  });
  head.addEventListener("click",function(){
    if(box.classList.contains("min"))setMin(false);
  });
  var mstate=null;try{mstate=localStorage.getItem(KEYM)}catch(e){}
  setMin(mstate===null?true:mstate==="1");
})();
</script>` : ""}
</body>
</html>`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
fs.writeFileSync(path.join(path.dirname(OUT), "styles.css"), CSS);
const entryCount = contentParts.reduce((n, p) => n + p.blocks.filter((b) => b.kind === "entry").length, 0);
console.log("mode:", MODE, "| parts:", parts.length, "| entries:", entryCount,
  "| markers:", flagLines.length, "| bytes:", html.length);
