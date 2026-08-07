# Sparkle Bureaucracy — prototype submission

Single-page HTML build of the Newspeak House prototype submission (Political
Technology Programme, cohort 2025–26), kept separate from
[sparklebureaucracy.org](https://sparklebureaucracy.org) so the submission is a
frozen, point-in-time artifact: the site can keep evolving (or restructuring)
without moving the page faculty are annotating.

## Files

- `outline.md` — source of truth. Structure, status tags (`[KEEP]` /
  `[REVISE]` / `[NEW]`), word budgets, and `⚑` verification flags.
- `build.js` — the generator (plain Node, no deps; `npm run build`).
- `public/index.html` — the built page. Never hand-edit; always rebuild.
- `api/comments.js` — the comment register API (Vercel function backed by
  Neon Postgres; the only npm dependency).

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

## Comments (on-page register)

Every part ends with a **comment register**: reviewers type a name and a
comment — no account, no third-party service. If they highlight text on the
page before typing, the selection is attached to the comment as a quote.
Comments are stored in this project's own Neon Postgres database and are
visible to everyone with the link.

- `GET /api/comments` — all comments (JSON).
- `POST /api/comments` — `{part, name, body, quote?}`; honeypot field `fax`
  must be empty; lengths capped server-side.
- `DELETE /api/comments?id=N` — moderation; requires the `x-admin-token`
  header. The token lives in `.admin-token` locally (gitignored) and in the
  `ADMIN_TOKEN` Vercel env var.

Moderate from the terminal:

```sh
curl -X DELETE "https://sb-prototype-submission.vercel.app/api/comments?id=N" \
  -H "x-admin-token: $(cat .admin-token)"
```

Export the register for the record (e.g. after assessment):

```sh
curl -s https://sb-prototype-submission.vercel.app/api/comments > comments-export.json
```

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
