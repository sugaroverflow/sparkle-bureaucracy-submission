# Sparkle Bureaucracy — prototype submission

Single-page HTML build of the Newspeak House prototype submission (Political
Technology Programme, cohort 2025–26), kept separate from
[sparklebureaucracy.org](https://sparklebureaucracy.org) so the submission is a
frozen, point-in-time artifact: the site can keep evolving (or restructuring)
without moving the page faculty are annotating.

## Files

- `submission.md` — **source of truth**: the submission content in the
  00–06 structure. Parts are `## NN | Title`; timeline entries are
  `### date | type | title` with `photos: N`, `**Field:** value` rows, and
  `#### Evidence/Technical/Feedback` drawers; criteria are `### N | Title`
  with `- [x]` checks. `@todo` and `⚑` markers gate submission mode.
- `outline.md` — the draft-2 build outline, kept as an execution log.
- `build.js` — the generator (plain Node, no deps; `npm run build`).
- `public/index.html` — the built page. Never hand-edit; always rebuild.
- `api/annotations.js` / `api/comments.js` — annotation store (live) and the
  dormant comment register (Vercel functions backed by Neon Postgres).

## Build

```sh
node build.js                  # build mode: tags, flags, budgets visible
MODE=submission node build.js  # faculty-facing: build apparatus hidden
```

Submission mode **refuses to build while any `⚑` flag remains** in
`outline.md`. This is deliberate: a hidden flag would ship its surrounding
claim without its caveat (e.g. a name used without confirmed permission).
Resolve the flag in the markdown — verify it, cite it, or remove the claim —
then rebuild.

## Annotations (inline, no accounts)

Reviewers sign the **visitors' book** (bottom-right card) with just a display
name — remembered in `localStorage`, no account — then highlight any text on
the page and a comment popup appears at the selection. Annotations render as
highlights for everyone with the link. Built on
[RecogitoJS](https://github.com/recogito/recogito-js) 1.8.4 (BSD-3-Clause),
self-hosted in `public/vendor/` — deliberately chosen over its maintained
successor `@recogito/text-annotator` because RecogitoJS bundles the complete
editor popup (the successor is headless); it's archived upstream, which is
acceptable for a page that lives a few weeks.

- `GET /api/annotations` — all live annotations (W3C Web Annotation JSON).
- `POST` / `PUT /api/annotations` — upsert by the annotation's client id.
- `DELETE /api/annotations?id=X` — **tombstone, not a hard delete**: rows are
  flagged `deleted`, never destroyed, so no reviewer action can erase
  evidence. Resurrect or hard-delete via SQL in the Neon dashboard.

Known trade-offs: identity is honor-system (any reviewer could edit another's
note — tombstones are the backstop); annotations anchor to the page text, so
**annotations made on the build-mode draft may not re-anchor after the
submission-mode flip** — ask faculty to annotate only the final version.

Export for the record after assessment:

```sh
curl -s https://sb-prototype-submission.vercel.app/api/annotations > annotations-export.json
```

The earlier per-part comment threads (`api/comments.js`, `COMMENTS` flag in
`build.js`) are off but intact; don't run both — the registers mutate the DOM
inside the annotatable container, which risks mis-anchoring annotations.

## Deploy (Vercel)

Live at **https://sb-prototype-submission.vercel.app** (project
`sb-prototype-submission`, team `sugaroverflow`; Neon database
`neon-charcoal-village` via the Vercel Marketplace integration — `DATABASE_URL`
is set on the project, and `.env.local` has a copy for `vercel dev`).

```sh
vercel deploy --prod --yes   # ships current committed + local state
vercel dev                   # full stack locally (page + API)
```

Vercel runs `npm run build` (build mode) on deploy. The page is noindexed but
the URL is public: **the Oxfam and attribution ⚑ flags should be resolved
before the link is shared beyond faculty.** The flag gate enforces this for
submission mode; build mode is on you.

To ship the faculty-facing version: `vercel env add MODE production` with
value `submission`, then deploy — the build will **fail on purpose** until
every ⚑ flag is resolved in `outline.md`.

GitHub (`sugaroverflow/sb-prototype-submission`, private) stays the source of
truth; deploys are manual from the working tree for now.

## Relationship to the record

`outline.md` structures the submission; the full project record lives in the
site repo (`submission/sparkle-bureaucracy.md` and `lore/`). Relative links in
the outline are rewritten to that repo on GitHub by `build.js` (`REPO` const).
