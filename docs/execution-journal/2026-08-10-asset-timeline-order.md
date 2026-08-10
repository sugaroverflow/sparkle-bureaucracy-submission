## 2026-08-10T21:04:13Z - Asset folders in timeline order

### Goal

Make the photo-drop folders sort in the same chronological order as the fellowship timeline without breaking generated image paths.

### Changes

- Renamed the 26 active folders in `public/assets/` with ISO-style date prefixes.
- Added the canonical timeline order to `build.js` and made generated photo URLs use the prefixed folders.
- Sorted the generated asset README by folder name and removed four obsolete empty slug folders.

### Decisions

- Folders are ordered by an activity's start date. The field-notes room therefore uses `2025-12-14` rather than its April end date.
- The undated AI safety study group uses an `ongoing-` prefix.
- The Decode Taiwan meetup uses `2026-02-03`, verified against the Newspeak House event listing.
- The thank-you gallery uses `2026-08-10`, the submission build date.

### Tradeoffs

- Date prefixes are an explicit map in `build.js`, so adding or renaming an event also requires adding its slug and date to that map. Unknown slugs fall back to an `undated-` prefix rather than silently receiving an invented date.

### Risks

- Renaming an event title can change its slug. The fallback keeps the build working, but the folder may move out of timeline order until the list is updated.

### Verification

- `npm run build` passes with 9 parts, 25 entries, and 0 unresolved markers.
- Generated HTML references the prefixed folders for Birthday Passports, Campaign Factory, and Conference Pulse.
- Existing photos, including newly added Birthday Passports images, remain in their corresponding renamed folders.
- `git diff --check` passes.

### Demo Impact

Photo collection is easier to follow chronologically, while the generated submission continues to use real images whenever a folder contains them.

### Customer-Facing Context

Not applicable; this is submission-asset organization.

### Next Recommended Step

Continue dropping photos into the dated folders, then rebuild before reviewing the final submission page.
