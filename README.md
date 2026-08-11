# Prototype Submission » Sparkle Bureaucracy

**Live: https://sparkle-bureaucracy-submission.vercel.app**

This is my prototype submission for the [Newspeak House](https://newspeak.house)
Political Technology Programme (cohort 2025–26): the story of a year building
**Sparkle Bureaucracy** — a network of people using AI to prototype more
optimistic futures. Instead of a Google Doc, the submission is a single-page
microsite the faculty can read and annotate inline: nine parts covering the
experiments log, events log, learning in public (field notes, essays, papers,
tools, prior art), the roadmap, an honest reading of the assessment criteria,
and a final reflection.

Sparkle Bureaucracy itself lives at
[sparklebureaucracy.org](https://sparklebureaucracy.org) —
source in [`sugaroverflow/sparkle-bureaucracy-site`](https://github.com/sugaroverflow/sparkle-bureaucracy-site),
which also holds the complete project record this page was distilled from
(`submission/sparkle-bureaucracy.md`).

## How it was built

Everything is generated from one markdown file by a zero-dependency Node
script — no framework, no build tooling, no npm installs. I wrote and edited
the content in `submission.md`; the generator parses its conventions into the
themed page. Built iteratively with [Claude Code](https://claude.com/claude-code)
doing the generator/design work while I owned every word of the content.

- `submission.md` — **source of truth.** Parts are `## NN | Title`; timeline
  entries are `### date | type | title` cards (types: documentation /
  experiment / event / keynote / project → colour) with `**Field:** value`
  rows and `#### Evidence` / `#### Technical` / `#### Feedback` drawers;
  `++ date | title | caption` journal entries hold the field notes verbatim;
  criteria are checklists where `- [x]` renders ✓ and `- [ ]` renders **?**.
- `build.js` — the generator (plain Node; `node build.js`). Emits
  `public/index.html` + `public/styles.css` with content-hashed cache busting.
  `MODE=submission` refuses to build while any `@todo`/`⚑` marker remains —
  a hidden flag would ship a claim without its caveat.
- `public/assets/<entry-slug>/` — photo drop folders: drop images in, rebuild,
  they appear on the matching card (no renaming needed).
- `api/annotations.js` — the feedback backend (Vercel function + Neon
  Postgres).

## Inline feedback, no accounts

Reviewers sign the **prototype feedback** card with just a display name
(remembered in `localStorage`), then highlight any text to leave an
annotation. Built on self-hosted
[RecogitoJS](https://github.com/recogito/recogito-js) 1.8.4
(`public/vendor/`). Deletes are tombstones, never hard deletes. Export after
assessment:

```sh
curl -s https://sparkle-bureaucracy-submission.vercel.app/api/annotations > annotations-export.json
```

## Deploy

Pushes to `main` auto-deploy via the Vercel GitHub integration (project
`sb-prototype-submission`, team `sugaroverflow`; Neon database via the
Marketplace integration sets `DATABASE_URL`). `vercel deploy --prod --yes`
also works from the working tree; `vercel dev` runs the full stack locally.
