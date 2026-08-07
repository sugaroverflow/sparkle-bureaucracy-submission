# Sparkle Bureaucracy — prototype submission

Single-page HTML build of the Newspeak House prototype submission (Political
Technology Programme, cohort 2025–26), kept separate from
[sparklebureaucracy.org](https://sparklebureaucracy.org) so the submission is a
frozen, point-in-time artifact: the site can keep evolving (or restructuring)
without moving the page faculty are annotating.

## Files

- `outline.md` — source of truth. Structure, status tags (`[KEEP]` /
  `[REVISE]` / `[NEW]`), word budgets, and `⚑` verification flags.
- `build.js` — zero-dependency generator (Node, no npm install).
- `index.html` — the built page. Never hand-edit; always rebuild.

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

## Comments (Hypothesis)

Faculty comment via [Hypothesis](https://web.hypothes.is) — the embed script
is already on the page, so no browser extension is needed; readers highlight
any text and annotate in place.

One-time setup:

1. Create a Hypothesis account, then a **private group** (e.g. "SB faculty
   review") at hypothes.is → Groups → Create new group.
2. Copy the group's invite link into `HYP_GROUP_URL` in `build.js` and
   rebuild. This makes the "Annotate" button appear in the rail and adds the
   join link to the footer.
3. Reviewers join the group once via that link, then pick the group in the
   Hypothesis sidebar before annotating. Annotations in a private group are
   visible only to members.

Note: anyone who obtains the invite link can join the group.

## Deploy (GitHub Pages)

The page has `<meta name="robots" content="noindex">`, but Pages URLs are
public to anyone with the link. **Before deploying**, clear the permission
flags in `outline.md` (Oxfam naming, the "five months of research"
attribution) — the flag gate enforces this for submission mode.

1. Repo → Settings → Pages → Deploy from branch → `main` / root.
2. Commit a rebuilt `index.html` (it is the served artifact).
3. Optional: a `CNAME` for e.g. `submission.sparklebureaucracy.org` later.

## Relationship to the record

`outline.md` structures the submission; the full project record lives in the
site repo (`submission/sparkle-bureaucracy.md` and `lore/`). Relative links in
the outline are rewritten to that repo on GitHub by `build.js` (`REPO` const).
