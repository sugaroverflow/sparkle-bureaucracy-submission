const fs = require("fs");
const path = require("path");

/* ══════════════ config ══════════════ */
const SRC = path.join(__dirname, "outline.md");
const OUT = path.join(__dirname, "public", "index.html");
const REPO = "https://github.com/sugaroverflow/sparkle-bureaucracy-site/blob/main";
const VIDEO_EMBED = "";
const SERIAL = "SB/NWSPK/2026/01";
const SUBMIT_DATE = "10 Aug 2026";

/* On-page comment register: per-part threads served by /api/comments
   (Vercel function + Neon Postgres). Reviewers need no account — name +
   comment, with any highlighted page text attached as a quote. */
const COMMENTS = true;

/* Permit fields shown in the hero. Kept here, not in the template, so the
   numbers can't drift from the outline silently.
   - activations: outline flag says settle "21" vs "20+"
   - experimentsSpecified: Part 7 argues "thirteen specified" (4 ran + 9 idea-bank) */
const PERMIT = {
  activations: "20+",
  projectsEvaluated: "321",
  experimentsSpecified: "9",
  validity: "Feb – Aug 2026",
};

/* "build" shows status tags, flags and word budgets. "submission" hides them.
   Usage: node build.js  |  MODE=submission node build.js */
const MODE = (process.env.MODE || "build").toLowerCase();
if (!["build", "submission"].includes(MODE)) {
  console.error('✗ MODE must be "build" or "submission", got: ' + MODE);
  process.exit(1);
}

/* ══════════════ blocks ══════════════ */
const raw = fs.readFileSync(SRC, "utf8").split(/\r?\n/);

/* submission mode refuses to build while any ⚑ flag is unresolved — a hidden
   flag would ship its surrounding claim to faculty without its caveat */
const flagLines = raw
  .map((l, i) => ({ l: l.trim(), n: i + 1 }))
  .filter((x) => x.l.includes("⚑"));
if (MODE === "submission" && flagLines.length) {
  console.error(
    "✗ Not building submission mode: " + flagLines.length + " unresolved ⚑ flags in outline.md\n" +
    flagLines.map((x) => "  L" + String(x.n).padStart(3) + "  " + x.l.slice(0, 100)).join("\n")
  );
  process.exit(1);
}

const blocks = [];
let buf = null;
const flushB = () => { if (buf) { blocks.push(buf); buf = null; } };
for (const ln of raw) {
  const t = ln.trim();
  if (!t || t === "---") { flushB(); continue; }
  if (/^\|/.test(t)) {
    if (buf && buf.k === "table") buf.rows.push(t);
    else { flushB(); buf = { k: "table", rows: [t] }; }
    continue;
  }
  let m;
  if ((m = /^####\s+(.*)$/.exec(t))) { flushB(); blocks.push({ k: "h4", t: m[1] }); continue; }
  if ((m = /^###\s+(.*)$/.exec(t)))  { flushB(); blocks.push({ k: "h3", t: m[1] }); continue; }
  if ((m = /^##\s+(.*)$/.exec(t)))   { flushB(); blocks.push({ k: "h2", t: m[1] }); continue; }
  if ((m = /^#\s+(.*)$/.exec(t)))    { flushB(); blocks.push({ k: "title", t: m[1] }); continue; }
  if ((m = /^[-*]\s+(.*)$/.exec(t))) { flushB(); buf = { k: "li", t: m[1] }; continue; }
  if ((m = /^(\d+)\.\s+(.*)$/.exec(t))) { flushB(); buf = { k: "oli", t: m[2] }; continue; }
  if (buf && ["li", "oli", "p"].includes(buf.k)) { buf.t += " " + t; continue; }
  flushB(); buf = { k: "p", t };
}
flushB();

/* ══════════════ inline ══════════════ */
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
let rewritten = 0;
function href(u) {
  if (/^https?:\/\//.test(u) || u.startsWith("#")) return u;
  rewritten++;
  return REPO + "/" + u.replace(/^(\.\.\/)+/, "");
}
function inline(s) {
  let o = esc(s);
  o = o.replace(/\[([^\]]*)\]\(([^)]*)\)/g, (_, l, u) => '<a href="' + href(u).replace(/"/g, "&quot;") + '">' + l.replace(/[`*]/g, "") + "</a>");
  o = o.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  o = o.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  o = o.replace(/`([^`]+)`/g, "<code>$1</code>");
  if (MODE === "build") o = o.replace(/⚑\s*/g, '<span class="flag-inline">⚑ verify</span> ');
  else o = o.replace(/⚑\s*/g, "");
  return o;
}
const plain = (s) => inline(s).replace(/<[^>]+>/g, "").trim();

/* ══════════════ tree ══════════════ */
const HUES = ["magenta", "violet", "aqua", "cyan", "gold"];
const pad = (n) => String(n).padStart(2, "0");
const mrz = (l) => ((l.toUpperCase().replace(/[^A-Z0-9<]/g, "<") + "<".repeat(48)).slice(0, 48)).replace(/</g, "&lt;");

const preamble = [];
const parts = [];
let P = null, S = null, SS = null, dropping = false;
const bag = () => SS ? SS.content : S ? S.content : P ? P.lead : preamble;

for (const b of blocks) {
  if (b.k === "title") continue;

  if (b.k === "h2") {
    const t = plain(b.t);
    S = null; SS = null;
    let id, num = null, label = t, was = null, isNew = /\(NEW PART\)/i.test(b.t);
    const pm = /^Part\s+(\d+)\s+—\s+(.*)$/.exec(t);
    if (pm) {
      num = +pm[1];
      label = pm[2].replace(/\s*\((?:was Part \d+|NEW PART)\)\s*/i, "").trim();
      const wm = /\(was Part (\d+)\)/i.exec(t);
      if (wm) was = "was part " + pad(wm[1]);
      id = "part-" + num;
      /* Part 1 is the video; it lives in the hero, not as a section */
      if (num === 1) { dropping = true; P = null; continue; }
    } else if (/^Front matter/i.test(t)) { id = "front-matter"; label = "Front matter"; }
    else if (/^Build order/i.test(t)) { id = "build-order"; label = "Build order"; }
    else { id = "s-" + t.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }
    dropping = false;
    P = { id, num, label, was, isNew, budget: null, lead: [], sections: [] };
    parts.push(P);
    continue;
  }
  if (dropping) continue;

  if (b.k === "h3") { if (!P) continue; S = { title: plain(b.t), content: [], subs: [] }; SS = null; P.sections.push(S); continue; }
  if (b.k === "h4") { if (!P) continue; SS = { title: plain(b.t), content: [] }; (S ? S.subs : P.sections).push(SS); continue; }

  if (b.k === "table") { bag().push({ t: "table", rows: b.rows }); continue; }
  if (b.k === "li")    { bag().push({ t: "li", h: b.t }); continue; }
  if (b.k === "oli")   { bag().push({ t: "oli", h: b.t }); continue; }

  const t = b.t;
  const bm = /^\*≈\s*(.+?)\s*\*$/.exec(t);
  if (bm && P) { P.budget = bm[1]; continue; }
  bag().push({ t: "p", h: t });
}

/* ══════════════ status tags ══════════════ */
function splitStatus(t) {
  const re = /\*\*\[(KEEP|REVISE|NEW)\]\s*([^*]*)\*\*/g;
  const out = []; let m, last = 0, cur = null;
  while ((m = re.exec(t))) {
    if (cur) { cur.rest = t.slice(last, m.index).trim(); out.push(cur); }
    else if (t.slice(0, m.index).trim()) out.push({ tag: null, lead: "", rest: t.slice(0, m.index).trim() });
    cur = { tag: m[1], lead: m[2].trim(), rest: "" };
    last = re.lastIndex;
  }
  if (cur) { cur.rest = t.slice(last).trim(); out.push(cur); }
  return out.length ? out : null;
}

function renderPara(h) {
  const rows = splitStatus(h);
  if (!rows) {
    if (/^⚑/.test(h)) {
      if (MODE !== "build") return "";
      return '<div class="flagbox"><span class="fm">⚑</span><div><p>' +
        inline(h.replace(/^⚑\s*/, "")).replace(/<span class="flag-inline">[^<]*<\/span>\s*/, "") + "</p></div></div>";
    }
    return '<p>' + inline(h) + '</p>';
  }
  return rows.map(r => {
    const body = (r.lead ? "<strong>" + inline(r.lead) + "</strong> " : "") + inline(r.rest);
    if (!r.tag || MODE !== "build")
      return '<div class="status plain"><span class="tag"></span><div class="txt"><p>' + body + "</p></div></div>";
    return '<div class="status" data-tag="' + r.tag.toLowerCase() + '"><span class="tag">' +
      r.tag.toLowerCase() + '</span><div class="txt"><p>' + body + "</p></div></div>";
  }).join("\n");
}

/* ══════════════ tables ══════════════ */
function renderTable(rows) {
  const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map(x => x.trim());
  const head = cells(rows[0]);
  const body = rows.slice(2).map(cells);
  const narrow = head.length <= 2;
  const th = head.map(h => "<th>" + (h ? inline(h) : "") + "</th>").join("");
  const tb = body.map(r => "<tr>" + r.map(c => "<td>" + inline(c) + "</td>").join("") + "</tr>").join("");
  return '<div class="tbl' + (narrow ? " narrow" : "") + '"><table><thead><tr>' + th +
    "</tr></thead><tbody>" + tb + "</tbody></table></div>";
}

/* ══════════════ flow ══════════════ */
function renderFlow(content) {
  const out = []; let mode = null, list = [];
  const close = () => {
    if (!list.length) return;
    out.push(mode === "li" ? '<ul class="bullets">' + list.join("") + "</ul>"
                           : '<ol class="ord">' + list.join("") + "</ol>");
    list = []; mode = null;
  };
  for (const it of content) {
    if (it.t === "li" || it.t === "oli") {
      if (mode && mode !== it.t) close();
      mode = it.t; list.push("<li>" + inline(it.h) + "</li>"); continue;
    }
    close();
    if (it.t === "table") out.push(renderTable(it.rows));
    else out.push(renderPara(it.h));
  }
  close();
  return out.filter(Boolean).join("\n");
}

function renderBuildOrder(P) {
  const items = P.lead.filter(x => x.t === "oli");
  const rest = P.lead.filter(x => x.t !== "oli");
  return (rest.length ? '<div class="reading lead">' + renderFlow(rest) + "</div>" : "") +
    '<ol class="order">' + items.map(i => "<li><span>" + inline(i.h) + "</span></li>").join("") + "</ol>";
}

function renderPart(P) {
  if (P.id === "build-order") return renderBuildOrder(P);
  const out = [];
  if (P.lead.length) out.push('<div class="reading wide-ok">' + renderFlow(P.lead) + "</div>");
  for (const S of P.sections) {
    if (S.title) out.push('<h2 class="bare"><span>' + S.title + "</span></h2>");
    if (S.content && S.content.length) out.push('<div class="reading wide-ok">' + renderFlow(S.content) + "</div>");
    for (const SS of (S.subs || [])) {
      out.push('<h3 class="sub-h">' + SS.title + "</h3>");
      out.push('<div class="reading wide-ok">' + renderFlow(SS.content) + "</div>");
    }
  }
  return out.join("\n");
}

/* ══════════════ page ══════════════ */
const PART_HUE = parts.map((_, i) => HUES[i % 5]);
const label = (P) => P.num ? "Part " + pad(P.num) : P.label;
const navShort = (P) => P.num ? P.label.replace(/^(The|A)\s+/i, "") : P.label;

const cmt = (P) => `
  <div class="cmt" data-part="${P.id}">
    <div class="cmt-head"><b>Comment register · ${label(P)}</b><span class="cmt-count">0</span></div>
    <ol class="cmt-list"></ol>
    <form class="cmt-form" autocomplete="off">
      <div class="cmt-chip" hidden><span></span><button type="button" aria-label="Remove quoted selection">✕</button></div>
      <label>Name<input name="name" required maxlength="80"></label>
      <label>Comment<textarea name="body" required maxlength="4000" placeholder="Highlight text on the page first to quote it here."></textarea></label>
      <input class="hp" name="fax" tabindex="-1" aria-hidden="true">
      <button class="cmt-send" type="submit">Lodge comment</button>
      <p class="cmt-note">No account needed. Comments are visible to everyone with the link.</p>
      <noscript><p class="cmt-note">The comment register needs JavaScript.</p></noscript>
    </form>
  </div>`;

const nav = parts.map((P, i) =>
  '<a href="#' + P.id + '" data-hue="' + PART_HUE[i] + '"><i>' +
  (P.num ? pad(P.num) : "▸") + "</i>" + navShort(P) + "</a>").join("");

const spineItem = preamble.find(x => /^\*\*The spine:\*\*/.test(x.h));
const changeItem = preamble.find(x => /^\*\*Change from draft 1:\*\*/.test(x.h));
const draftItem = preamble.find(x => /^\*Draft 2/.test(x.h));

const spine = spineItem ? inline(spineItem.h.replace(/^\*\*The spine:\*\*\s*/, "")) : "";
const draft = draftItem ? inline(draftItem.h.replace(/^\*|\*$/g, "")) : "";
const change = changeItem ? inline(changeItem.h.replace(/^\*\*Change from draft 1:\*\*\s*/, "")) : "";

const sections = parts.map((P, i) => {
  const hue = PART_HUE[i];
  return '\n<section class="part" id="' + P.id + '" data-hue="' + hue + '">' +
    '\n  <p class="mrz" aria-hidden="true">' + mrz("PTSB<" + (P.num ? "PART" + pad(P.num) : P.label) + "<<" + P.label) + "</p>" +
    '\n  <header class="part-head">' +
    '\n    <p class="eyebrow">' + label(P) + "</p>" +
    '\n    <h1>' + P.label + "</h1>" +
    (MODE === "build" && (P.was || P.isNew || P.budget)
      ? '\n    <div class="part-meta">' +
        (P.isNew ? '<span class="newpart">new part</span>' : "") +
        (P.was ? '<span class="was">' + P.was + "</span>" : "") +
        (P.budget ? '<span class="budget">target ≈ ' + esc(P.budget) + "</span>" : "") + "</div>"
      : "") +
    "\n  </header>" +
    '\n  <div class="part-body">' + renderPart(P) + (COMMENTS ? cmt(P) : "") + "</div>\n</section>";
}).join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>25-26 Newspeak House - Prototype Submission: Sparkle Bureaucracy</title>
<meta name="description" content="A network for closing the AI gap for civic communities, run as an experiment lab. Prototype submission, Newspeak House Political Technology Programme 2025-26.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900;1,14..32,300..700&display=swap" rel="stylesheet">
<style>
:root{
  --magenta:#FF3399; --magenta-ink:#A80C59; --magenta-tint:#FFE7F1;
  --violet:#B266FF;  --violet-ink:#5F27AE;  --violet-tint:#F2E8FF;
  --aqua:#00E5CC;    --aqua-ink:#07766A;    --aqua-tint:#D8FAF4;
  --cyan:#22D3EE;    --cyan-ink:#08657B;    --cyan-tint:#DDF6FD;
  --gold:#FFC93C;    --gold-ink:#7E5900;    --gold-tint:#FFF2D2;

  --page:#FFFBF8; --ink:#17122C; --soft:#585272; --line:#17122c26;
  --midnight:#0A0E27;

  /* same stacks as sparklebureaucracy.org */
  --display:"Inter",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --text:var(--display);
  --util:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  --measure:36rem; --pad:clamp(1rem,4vw,2.5rem); --wrap:78rem;
  --foil:linear-gradient(95deg,var(--magenta),var(--violet),var(--cyan),var(--aqua),var(--gold),var(--magenta));
}
[data-hue=magenta]{--h:var(--magenta);--hi:var(--magenta-ink);--ht:var(--magenta-tint)}
[data-hue=violet]{--h:var(--violet);--hi:var(--violet-ink);--ht:var(--violet-tint)}
[data-hue=aqua]{--h:var(--aqua);--hi:var(--aqua-ink);--ht:var(--aqua-tint)}
[data-hue=cyan]{--h:var(--cyan);--hi:var(--cyan-ink);--ht:var(--cyan-tint)}
[data-hue=gold]{--h:var(--gold);--hi:var(--gold-ink);--ht:var(--gold-tint)}

*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{margin:0;background:var(--page);color:var(--ink);font:400 1.0625rem/1.62 var(--text);letter-spacing:-.006em}
::selection{background:var(--gold)}
h1,h2,h3{font-family:var(--display);font-weight:800;line-height:1.15;letter-spacing:-.022em;margin:0}
p{margin:0 0 1.05rem}
a{color:var(--hi,var(--magenta-ink));text-decoration-thickness:.07em;text-underline-offset:.16em}
a:hover{color:var(--ink);background:var(--ht,var(--gold-tint))}
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


.rail{position:sticky;top:0;z-index:30;background:#fffbf8f2;backdrop-filter:blur(10px);
  border-bottom:2px solid var(--ink)}
.rail-in{max-width:var(--wrap);margin:0 auto;padding:.45rem var(--pad);display:flex;gap:1rem;
  align-items:center;justify-content:space-between}
.rail nav{display:flex;gap:.2rem;overflow-x:auto;scrollbar-width:none;min-width:0;flex:1 1 auto;
  mask-image:linear-gradient(to right,transparent,#000 .8rem,#000 calc(100% - .8rem),transparent)}
.rail nav::-webkit-scrollbar{display:none}
.rail nav a{font:600 .625rem/1 var(--util);letter-spacing:.07em;text-transform:uppercase;
  color:var(--soft);text-decoration:none;white-space:nowrap;padding:.55rem .65rem;border-radius:999px;
  border:2px solid transparent}
.rail nav a i{font-style:normal;color:var(--hi);margin-right:.45em}
.rail nav a:hover{background:var(--ht);color:var(--ink)}
.rail nav a[aria-current=true]{background:var(--h);border-color:var(--ink);color:var(--ink)}
.rail nav a[aria-current=true] i{color:var(--ink)}
.discuss{font:600 .625rem/1 var(--util);letter-spacing:.1em;text-transform:uppercase;color:var(--ink);
  text-decoration:none;white-space:nowrap;background:var(--gold);border:2px solid var(--ink);
  border-radius:999px;padding:.55rem .85rem;box-shadow:3px 3px 0 var(--ink)}
.discuss:hover{transform:translate(1px,1px);box-shadow:2px 2px 0 var(--ink);background:var(--gold)}

.hero{padding-block:clamp(2.25rem,6vw,4rem) clamp(1.5rem,4vw,2.5rem)}
.wordmark{font-size:clamp(2.7rem,10.5vw,7.4rem);line-height:.94;letter-spacing:-.046em;font-weight:900;margin:0 0 1.1rem}
.wordmark span{display:block}
.wordmark .b{color:var(--magenta);-webkit-text-stroke:2px var(--ink);paint-order:stroke fill}
.lede{font-size:clamp(1.08rem,2.3vw,1.35rem);line-height:1.48;letter-spacing:-.014em;max-width:34rem;margin:0 0 2.2rem;color:#3A3355}
.hero-top{display:grid;gap:1.4rem 2.5rem;align-items:start;margin-bottom:2.2rem}
@media(min-width:64rem){.hero-top{grid-template-columns:minmax(0,1fr) auto}}

.permit{position:relative;border:2px solid var(--ink);background:#fff;box-shadow:8px 8px 0 var(--ink);
  max-width:66rem;overflow:hidden}
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
.fields dd b{color:var(--magenta-ink)}
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

.contents{padding-block:clamp(2rem,5vw,3.5rem)}
.contents ol{list-style:none;margin:0;padding:0;display:grid;gap:.75rem;
  grid-template-columns:repeat(auto-fill,minmax(min(100%,17rem),1fr))}
.contents a{display:block;height:100%;padding:1rem;text-decoration:none;color:inherit;
  background:var(--ht);border:2px solid var(--ink);box-shadow:4px 4px 0 var(--ink)}
.contents a:hover{transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink);background:var(--h)}
.contents i{font-style:normal;display:block;font:600 .625rem/1 var(--util);letter-spacing:.14em;
  color:var(--hi);margin-bottom:.55rem}
.contents b{display:block;font-weight:800;font-size:1rem;line-height:1.28;letter-spacing:-.021em;margin-bottom:.35rem}
.contents em{font-size:.875rem;color:var(--soft);font-style:normal;line-height:1.45}

.part{border-top:2px solid var(--ink)}
.part>.mrz{border-top:0;border-bottom:2px solid var(--ink)}
.part-head{max-width:var(--wrap);margin:0 auto;padding:clamp(2rem,5vw,3.25rem) var(--pad) 0}
.part-head h1{font-size:clamp(1.85rem,4.6vw,2.9rem);letter-spacing:-.034em;font-weight:900;margin-bottom:.75rem}
.part-head .intro{max-width:38rem;color:var(--soft);margin:0}
.part-body{max-width:var(--wrap);margin:0 auto;min-width:0;
  padding:clamp(1.6rem,3.5vw,2.5rem) var(--pad) clamp(3rem,7vw,5rem)}

.reading{max-width:var(--measure)}
.reading.lead{margin-bottom:2rem}
.reading h3{font-size:1.0625rem;margin:1.8rem 0 .45rem}
.sub{margin-bottom:2.4rem}
h2{font-size:1.4rem;letter-spacing:-.026em;margin:0 0 .6rem;display:flex;gap:.65rem;align-items:baseline}
h2.bare{margin:2.4rem 0 1rem}
h2 .num{font:600 .6875rem/1.9 var(--util);color:var(--hi);font-style:normal;flex:none}
.thesis{font-weight:800;font-size:1.22rem;line-height:1.38;letter-spacing:-.021em;border-left:6px solid var(--h,var(--magenta));padding-left:1rem}
.aside{color:var(--soft);font-size:.9375rem}
.broll{font:600 .625rem/1.6 var(--util);letter-spacing:.1em;text-transform:uppercase;
  color:var(--magenta-ink);margin:1.2rem 0}
.broll::before{content:"★ "}
.bullets,.ord{list-style:none;padding:0;margin:0 0 1.05rem}
.bullets li,.ord li{position:relative;padding-left:1.5rem;margin-bottom:.55rem}
.bullets li::before{content:"◆";position:absolute;left:0;top:.05em;font-size:.62em;color:var(--h,var(--magenta))}
.ord{counter-reset:o}
.ord li{counter-increment:o;padding-left:2.1rem}
.ord li::before{content:counter(o,decimal-leading-zero);position:absolute;left:0;top:.12em;
  font:600 .6875rem/1.7 var(--util);color:var(--hi,var(--magenta-ink))}
.slot{font-size:.875rem;line-height:1.5;background:var(--gold-tint);border:2px dashed var(--gold-ink);
  padding:.6rem .8rem;color:#6A5200}
.slot b{display:inline-block;font:600 .5625rem/1 var(--util);letter-spacing:.12em;text-transform:uppercase;
  background:var(--gold);border:1px solid var(--gold-ink);padding:.3em .45em;margin-right:.5em;
  vertical-align:.08em;color:var(--ink)}

.slip{margin:1.5rem 0;padding:1.1rem 1.25rem;background:var(--ht,var(--gold-tint));
  border:2px solid var(--ink);box-shadow:5px 5px 0 var(--h,var(--gold));transform:rotate(var(--rot,-.5deg));
  font-weight:600;font-size:1.03rem;line-height:1.48;letter-spacing:-.011em}
.slip::before{content:"\\201C";font-size:2.4rem;line-height:0;vertical-align:-.35em;
  color:var(--h,var(--gold));margin-right:.08em}
.slip p{margin:0}
.slips{display:grid;align-items:start;gap:1.5rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,21rem),1fr))}
.slips .slip{margin:0}

.visa-grid{display:grid;align-items:start;gap:1.7rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,24rem),1fr))}
.visa{position:relative;background:#fff;border:2px solid var(--ink);box-shadow:6px 6px 0 var(--h);
  transform:rotate(var(--rot,0deg));display:flex;flex-direction:column}
.visa>header{display:flex;justify-content:space-between;align-items:center;gap:.6rem;background:var(--h);
  border-bottom:2px solid var(--ink);padding:.5rem .85rem}
.visa-date{font:600 .75rem/1 var(--util);letter-spacing:.05em;text-transform:uppercase;color:var(--ink)}
.visa-date i{font-style:normal;opacity:.55;margin-left:.4em}
.visa-serial{font:400 .625rem/1 var(--util);letter-spacing:.1em;color:#17122cb3}
.visa-body{padding:1rem 1.1rem 1.2rem;flex:1}
.visa-body h3{font-size:1.1rem;letter-spacing:-.024em;margin:0 0 .6rem}
.visa-body p{font-size:.9375rem;line-height:1.6;margin-bottom:.8rem}
.visa-body>*:last-child{margin-bottom:0}
.visa-body .slip{font-size:1rem;box-shadow:3px 3px 0 var(--h);margin:1rem 0}
.perf{height:9px;border-top:2px dashed var(--ink);
  background:radial-gradient(circle at 6px 4.5px,var(--page) 3.5px,#0000 3.6px) 0 0/12px 9px}

.card-grid{display:grid;align-items:start;gap:1.6rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,20rem),1fr))}
.lcard{position:relative;background:var(--ht);border:2px solid var(--ink);box-shadow:6px 6px 0 var(--h);
  padding:1.5rem 1.25rem 1.3rem}
.lnum{position:absolute;top:-.85rem;left:1rem;font:600 .75rem/1 var(--util);background:var(--h);
  border:2px solid var(--ink);border-radius:999px;padding:.45em .7em}
.lcard h3{font-size:1.1rem;letter-spacing:-.024em;margin:.35rem 0 .6rem}
.lcard p{font-size:.9375rem;line-height:1.6;margin-bottom:.8rem}
.lcard>*:last-child{margin-bottom:0}

.sheet{list-style:none;margin:0;padding:0;display:grid;gap:1.3rem}
.crit{display:grid;grid-template-columns:6.5rem 1fr;background:#fff;border:2px solid var(--ink);
  box-shadow:6px 6px 0 var(--h)}
.crit-mark{background:var(--ht);border-right:2px solid var(--ink);padding:1.1rem .8rem;display:grid;
  place-content:center;text-align:center;gap:.25rem}
.crit-mark span{font-weight:900;font-size:2.15rem;line-height:1;letter-spacing:-.045em;color:var(--hi)}
.crit-mark i{font:600 .5rem/1 var(--util);letter-spacing:.14em;text-transform:uppercase;color:var(--soft);
  font-style:normal}
.crit-body{padding:1.15rem 1.35rem 1.25rem;min-width:0}
.crit-body h3{font-size:1.15rem;letter-spacing:-.026em;margin:0 0 .5rem}
.crit-body p{font-size:.9375rem;line-height:1.6;margin-bottom:.8rem}
.crit-body>*:last-child{margin-bottom:0}
@media(max-width:34rem){.crit{grid-template-columns:1fr}
  .crit-mark{border-right:0;border-bottom:2px solid var(--ink);grid-auto-flow:column;
    justify-content:start;gap:.7rem;align-items:center;padding:.6rem .9rem}}

.panel{background:var(--ht);border:2px solid var(--ink);box-shadow:6px 6px 0 var(--h);
  padding:1.35rem 1.45rem;margin-bottom:1.7rem;max-width:52rem}
.panel>.reading{max-width:none}
.chip-block{margin:0 0 1.9rem;max-width:60rem}
.chip-lead{max-width:var(--measure);margin-bottom:.7rem}
.chips{display:flex;flex-wrap:wrap;gap:.5rem}
.chips.wide{margin:.4rem 0 1.8rem}
.chip{font:600 .75rem/1.35 var(--text);background:#fff;border:2px solid var(--ink);
  border-radius:999px;padding:.5em .9em;max-width:100%}
.chip:nth-child(5n+1){box-shadow:2px 2px 0 var(--magenta)}
.chip:nth-child(5n+2){box-shadow:2px 2px 0 var(--violet)}
.chip:nth-child(5n+3){box-shadow:2px 2px 0 var(--aqua)}
.chip:nth-child(5n+4){box-shadow:2px 2px 0 var(--cyan)}
.chip:nth-child(5n+5){box-shadow:2px 2px 0 var(--gold)}
.scope{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr));
  margin-bottom:1.8rem}
.scope-panel{background:var(--ht);border:2px solid var(--ink);box-shadow:6px 6px 0 var(--h);
  padding:1.25rem 1.35rem}
.scope-panel h3{font-size:1.1rem;margin:0 0 .85rem}

.transcript summary{cursor:pointer;list-style:none;display:inline-block;font:600 .6875rem/1 var(--util);
  letter-spacing:.12em;text-transform:uppercase;background:var(--h);border:2px solid var(--ink);
  border-radius:999px;padding:.8rem 1.15rem;box-shadow:4px 4px 0 var(--ink)}
.transcript summary::-webkit-details-marker{display:none}
.transcript summary span::after{content:"  +"}
.transcript[open] summary span::after{content:"  \\2013"}
.transcript summary:hover{transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
.transcript .reading{padding-top:2rem}

footer{border-top:2px solid var(--ink);background:var(--midnight);color:#E7E4F4}
.foot-in{max-width:var(--wrap);margin:0 auto;padding:clamp(2rem,5vw,3rem) var(--pad);display:flex;
  flex-wrap:wrap;gap:1.5rem 2rem;justify-content:space-between;align-items:flex-end}
.foot-in p{margin:0;font:400 .75rem/1.9 var(--util);color:#ABA5C9}
.foot-in a{color:var(--gold)}
.foot-in a:hover{background:#0000;color:#fff}
.foot-stars{font-size:1.15rem;letter-spacing:.4em;
  background:var(--foil);-webkit-background-clip:text;background-clip:text;color:#0000}

@media(max-width:34rem){
  .status{grid-template-columns:1fr;gap:.45rem}
  .status>.tag{justify-self:start;margin-top:0}
}
@media print{
  .rail,.discuss,.foil{display:none}
  body{background:#fff}
  .visa,.lcard,.crit,.panel,.slip,.permit,.scope-panel{box-shadow:none;transform:none;break-inside:avoid}
  .part{break-before:page}
  a{color:var(--ink)}
}
/* ── build apparatus ─────────────────────────────────────── */
.status{display:grid;grid-template-columns:5.6rem minmax(0,1fr);gap:0 1rem;align-items:start;
  margin:0 0 1.15rem;max-width:calc(var(--measure) + 6.6rem)}
.status>.tag{font:600 .5625rem/1 var(--util);letter-spacing:.12em;text-transform:uppercase;
  border:2px solid var(--ink);padding:.42em .3em;text-align:center;margin-top:.22em}
.status[data-tag=keep]>.tag{background:var(--aqua-tint);color:var(--aqua-ink)}
.status[data-tag=revise]>.tag{background:var(--gold-tint);color:var(--gold-ink)}
.status[data-tag=new]>.tag{background:var(--magenta-tint);color:var(--magenta-ink)}
.status>.txt>*:last-child{margin-bottom:0}
.status.plain{grid-template-columns:1fr;max-width:var(--measure)}
.status.plain>.tag{display:none}

.flagbox{display:grid;grid-template-columns:1.8rem minmax(0,1fr);gap:0 .7rem;margin:1.15rem 0 1.5rem;
  max-width:calc(var(--measure) + 2.8rem);background:var(--cyan-tint);
  border:2px solid var(--ink);border-left-width:7px;padding:.85rem 1rem}
.flagbox>.fm{font:600 1rem/1.2 var(--util);color:var(--cyan-ink);text-align:center}
.flagbox p{margin:0 0 .5rem;font-size:.9375rem;line-height:1.55}
.flagbox p:last-child{margin-bottom:0}
.flag-inline{display:inline-block;font:600 .6875rem/1.4 var(--util);color:var(--cyan-ink);
  background:var(--cyan-tint);border:1px solid var(--cyan-ink);padding:.1em .4em;margin:0 .15em}

.budget{font:600 .5625rem/1 var(--util);letter-spacing:.13em;text-transform:uppercase;
  color:var(--hi);border:2px solid var(--ink);background:var(--ht);padding:.5em .65em;
  display:inline-block;margin-top:.9rem}

/* ── tables ──────────────────────────────────────────────── */
.tbl{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.3rem 0 1.9rem;
  border:2px solid var(--ink);box-shadow:6px 6px 0 var(--h);background:#fff;
  max-width:100%;width:100%}
.tbl table{border-collapse:collapse;width:100%;min-width:52rem;font-size:.875rem}
.tbl.narrow table{min-width:34rem}
.tbl th{background:var(--h);border-bottom:2px solid var(--ink);text-align:left;
  padding:.6rem .8rem;font:600 .5625rem/1.3 var(--util);letter-spacing:.13em;
  text-transform:uppercase;color:var(--ink);vertical-align:bottom}
.tbl td{border-bottom:2px solid var(--line);border-right:2px solid var(--line);
  padding:.75rem .8rem;vertical-align:top;line-height:1.55}
.tbl td:last-child,.tbl th:last-child{border-right:0}
.tbl tr:last-child td{border-bottom:0}
.tbl td:first-child{background:var(--ht);font-weight:600;white-space:normal;width:14%;min-width:8.5rem}
.tbl.narrow td:first-child{min-width:7rem;font:600 .8125rem/1.5 var(--util)}
.tbl code{font-size:.8em}

/* ── build order ─────────────────────────────────────────── */
.order{list-style:none;margin:0;padding:0;display:grid;gap:.7rem;counter-reset:bo}
.order li{counter-increment:bo;display:grid;grid-template-columns:2.6rem minmax(0,1fr);gap:0 .9rem;
  align-items:center;background:var(--ht);border:2px solid var(--ink);
  box-shadow:4px 4px 0 var(--h);padding:.85rem 1rem;max-width:52rem}
.order li::before{content:counter(bo,decimal-leading-zero);font:600 1.15rem/1 var(--util);
  color:var(--hi);text-align:center}
.order li>span{font-size:.9375rem;line-height:1.55}

/* ── part meta row ───────────────────────────────────────── */
.part-meta{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin:0 0 .8rem}
.was{font:600 .5625rem/1 var(--util);letter-spacing:.12em;text-transform:uppercase;
  color:var(--soft);border:2px solid var(--line);padding:.45em .6em}
.newpart{font:600 .5625rem/1 var(--util);letter-spacing:.12em;text-transform:uppercase;
  color:var(--magenta-ink);background:var(--magenta-tint);border:2px solid var(--ink);padding:.45em .6em}
.sub-h{font-size:1.05rem;margin:1.9rem 0 .5rem;letter-spacing:-.02em}
.spine{max-width:38rem;font-size:1.02rem;line-height:1.6;margin:0 0 1.6rem;color:#3A3355}
.draftnote{font:400 .75rem/1.7 var(--util);color:var(--soft);max-width:44rem;margin:0 0 1.6rem}
.hero-part{font:600 .5625rem/1 var(--util);letter-spacing:.14em;text-transform:uppercase;
  color:var(--magenta-ink);margin:0 0 .5rem}

/* text keeps its measure; tables and lists of cards use the full column */
.reading.wide-ok{max-width:none;min-width:0}
.reading.wide-ok>p,.reading.wide-ok>.bullets,.reading.wide-ok>.ord,
.reading.wide-ok>h3,.reading.wide-ok>blockquote{max-width:var(--measure)}
.reading.wide-ok>.tbl{max-width:none}
.draftnote{margin-top:2.4rem}

/* print: let tables wrap instead of clipping at the page edge */
@media print{
  .tbl{box-shadow:none;overflow:visible}
  .tbl table,.tbl.narrow table{min-width:0}
}

/* ── comment register ────────────────────────────────────── */
.cmt{margin-top:2.6rem;border:2px solid var(--ink);background:#fff;box-shadow:6px 6px 0 var(--h);max-width:52rem}
.cmt-head{display:flex;justify-content:space-between;align-items:center;gap:1rem;
  padding:.7rem 1rem;background:var(--ht);border-bottom:2px solid var(--ink)}
.cmt-head b{font:600 .6875rem/1.4 var(--util);letter-spacing:.12em;text-transform:uppercase}
.cmt-count{font:600 .625rem/1 var(--util);background:#fff;border:2px solid var(--ink);
  border-radius:999px;padding:.35em .6em}
.cmt-list{list-style:none;margin:0;padding:0}
.cmt-list li{padding:.85rem 1rem;border-bottom:2px solid var(--line)}
.cmt-meta{font:600 .625rem/1.4 var(--util);letter-spacing:.08em;text-transform:uppercase;
  color:var(--hi);margin:0 0 .3rem}
.cmt-meta time{color:var(--soft);font-weight:400;margin-left:.6em;text-transform:none;letter-spacing:.02em}
.cmt-quote{font:400 .8125rem/1.5 var(--util);color:var(--soft);border-left:4px solid var(--h);
  padding:.15rem 0 .15rem .6rem;margin:.2rem 0 .45rem}
.cmt-body{font-size:.9375rem;line-height:1.55;margin:0;white-space:pre-wrap;overflow-wrap:anywhere}
.cmt-form{padding:.9rem 1rem 1rem;display:grid;gap:.6rem}
.cmt-form label{display:grid;gap:.3rem;font:600 .5625rem/1.4 var(--util);letter-spacing:.13em;
  text-transform:uppercase;color:var(--soft)}
.cmt-form input,.cmt-form textarea{font:inherit;font-size:.9375rem;border:2px solid var(--ink);
  background:var(--page);padding:.5rem .65rem;width:100%}
.cmt-form textarea{min-height:5.2rem;resize:vertical}
.cmt-chip{display:flex;align-items:flex-start;gap:.5rem;font:400 .8125rem/1.5 var(--util);
  background:var(--gold-tint);border:2px dashed var(--gold-ink);padding:.45rem .6rem;color:#6A5200}
.cmt-chip span{flex:1 1 auto;overflow-wrap:anywhere}
.cmt-chip button{flex:none;font:600 .75rem/1 var(--util);background:#fff;border:1px solid var(--gold-ink);
  color:var(--gold-ink);padding:.2em .45em;cursor:pointer}
.cmt-send{justify-self:start;font:600 .625rem/1 var(--util);letter-spacing:.1em;text-transform:uppercase;
  color:var(--ink);background:var(--gold);border:2px solid var(--ink);border-radius:999px;
  padding:.7rem 1rem;box-shadow:3px 3px 0 var(--ink);cursor:pointer}
.cmt-send:hover{transform:translate(1px,1px);box-shadow:2px 2px 0 var(--ink)}
.cmt-send:disabled{opacity:.55;cursor:wait;transform:none}
.cmt-note{font:400 .75rem/1.6 var(--util);color:var(--soft);margin:0}
.hp{position:absolute;left:-5000px;width:1px;height:1px;overflow:hidden}
@media print{.cmt{display:none}}
</style>
</head>
<body>

<div class="rail">
  <div class="rail-in">
    <nav aria-label="Sections">${nav}</nav>
  </div>
</div>

<div class="foil hero-foil" aria-hidden="true"></div>

<header class="hero wrap" data-hue="magenta">
  <p class="eyebrow">Newspeak House · Political Technology Programme · Cohort 2025–26</p>
  <h1 class="wordmark"><span>Sparkle</span><span class="b">Bureaucracy</span></h1>
  <p class="spine">${spine}</p>

  <div class="permit">
    <div class="foil" aria-hidden="true"></div>
    <div class="permit-grid">
      <div>
        <p class="hero-part">Part 01 · Video intro</p>
        <div class="window">
          ${VIDEO_EMBED
    ? `<iframe src="${VIDEO_EMBED}" title="Video introduction" allowfullscreen loading="lazy"></iframe>`
    : `<div class="ph"><div class="play"></div><p>Official introduction<br>Recording in progress</p></div>`}
        </div>
        <dl class="cap-field">
          <dt>Official introduction</dt>
          <dd>Runtime 4 min · to be viewed before the record</dd>
        </dl>
      </div>
      <dl class="fields">
        <div class="wide"><dt>Fellowship candidate</dt><dd>Fatima Sarah Khalid</dd></div>
        <div><dt>Class</dt><dd>2025–2026</dd></div>
        <div><dt>Serial</dt><dd>${SERIAL}</dd></div>
        <div class="wide"><dt>Composition</dt><dd><b>80%</b> credible institution · <b>20%</b> sparkle</dd></div>
        <div><dt>Activations run</dt><dd>${PERMIT.activations}</dd></div>
        <div><dt>Period of validity</dt><dd>${PERMIT.validity}</dd></div>
        <div><dt>Projects evaluated</dt><dd>${PERMIT.projectsEvaluated}</dd></div>
        <div><dt>Experiments specified</dt><dd>${PERMIT.experimentsSpecified}</dd></div>
        <div class="wide"><dt>Public web presence</dt><dd><a href="https://sparklebureaucracy.org">sparklebureaucracy.org</a></dd></div>
      </dl>
    </div>
    <div class="stamp"><b>Submitted<br>for<br>assessment</b><small>${SUBMIT_DATE}</small></div>
    <p class="mrz" aria-hidden="true">${mrz("PTGBRSPARKLE<BUREAUCRACY<<PROTOTYPE<SUBMISSION")}</p>
  </div>

  ${MODE === "build" ? `<p class="draftnote">${draft}</p>` : ""}
</header>

<section class="contents wrap" aria-label="Contents">
  <p class="eyebrow" style="--hi:var(--soft)">Contents</p>
  <ol>${parts.map((P, i) => `<li data-hue="${PART_HUE[i]}"><a href="#${P.id}">
    <i>${label(P)}</i><b>${P.label}</b>${MODE === "build" && (P.was || P.isNew) ? `<em>${P.isNew ? "New part" : P.was}</em>` : ""}</a></li>`).join("")}</ol>
  ${MODE === "build" && change ? `<div class="flagbox" style="margin-top:1.6rem"><span class="fm">▸</span><div><p><strong>Change from draft 1.</strong> ${change}</p></div></div>` : ""}
</section>

${sections}

<footer>
  <div class="foil" aria-hidden="true"></div>
  <div class="foot-in">
    <p><span class="foot-stars">★★★★★</span><br>
      Sparkle Bureaucracy · ${SERIAL}<br>
      Open diary <a href="${REPO}/lore">lore/</a> · Site <a href="https://sparklebureaucracy.org">sparklebureaucracy.org</a></p>
    <p>${COMMENTS ? `Comments are lodged directly on this page — each part has a comment register.<br>Highlight text before you type to quote it. No account needed.` : `Comment link to follow.`}</p>
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
  document.querySelectorAll('section.part').forEach(function(s){io.observe(s);});
})();
</script>
${COMMENTS ? `<script>
(function(){
  var API="/api/comments";
  var lastSel={part:null,text:""};
  document.addEventListener("selectionchange",function(){
    var s=document.getSelection();
    if(!s||s.isCollapsed)return;
    var t=s.toString().trim();
    if(!t)return;
    var n=s.anchorNode;n=n&&n.nodeType===1?n:n&&n.parentElement;
    var sec=n&&n.closest("section.part");
    if(sec&&!n.closest(".cmt"))lastSel={part:sec.id,text:t.slice(0,600)};
  });
  function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
  function fmt(iso){try{return new Date(iso).toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}catch(e){return""}}
  function row(c){
    var li=el("li");
    var m=el("p","cmt-meta",c.name);
    var t=el("time",null,fmt(c.created_at));t.setAttribute("datetime",c.created_at);m.appendChild(t);
    li.appendChild(m);
    if(c.quote)li.appendChild(el("p","cmt-quote",c.quote));
    li.appendChild(el("p","cmt-body",c.body));
    return li;
  }
  function bump(box,d){var c=box.querySelector(".cmt-count");c.textContent=(parseInt(c.textContent,10)||0)+d}
  var boxes={};
  [].forEach.call(document.querySelectorAll(".cmt"),function(box){
    var part=box.getAttribute("data-part");
    boxes[part]=box;
    var form=box.querySelector("form"),ta=form.querySelector("textarea"),
        chip=box.querySelector(".cmt-chip"),chipTxt=chip.querySelector("span"),
        note=box.querySelector(".cmt-note"),quote="";
    ta.addEventListener("focus",function(){
      if(!quote&&lastSel.part===part&&lastSel.text){
        quote=lastSel.text;chipTxt.textContent="\\u201C"+quote+"\\u201D";chip.hidden=false;
      }
    });
    chip.querySelector("button").addEventListener("click",function(){quote="";chip.hidden=true});
    form.addEventListener("submit",function(ev){
      ev.preventDefault();
      var name=form.querySelector('input[name="name"]').value.trim(),body=ta.value.trim();
      if(!name||!body){note.textContent="Name and comment are both required.";return}
      var btn=form.querySelector(".cmt-send");btn.disabled=true;
      fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({part:part,name:name,body:body,quote:quote,
          fax:form.querySelector('input[name="fax"]').value})})
      .then(function(r){if(!r.ok)throw 0;return r.json()})
      .then(function(c){
        box.querySelector(".cmt-list").appendChild(row(c));bump(box,1);
        ta.value="";quote="";chip.hidden=true;
        note.textContent="Filed. Thank you.";
      })
      .catch(function(){note.textContent="Couldn\\u2019t reach the register \\u2014 please try again."})
      .then(function(){btn.disabled=false});
    });
  });
  fetch(API).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(rows){
    rows.forEach(function(c){
      var b=boxes[c.part];
      if(b){b.querySelector(".cmt-list").appendChild(row(c));bump(b,1)}
    });
  }).catch(function(){
    Object.keys(boxes).forEach(function(k){
      boxes[k].querySelector(".cmt-note").textContent="Comment register offline right now \\u2014 comments will still be accepted once it wakes.";
    });
  });
})();
</script>` : ""}
</body>
</html>`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
console.log("mode:", MODE, "| parts:", parts.length, "| flags:", flagLines.length,
  "| links rewritten:", rewritten, "| bytes:", html.length);
