# Prototype submission — build outline

*Draft 2, 7 August 2026. Derived from a full read of `sparkle-bureaucracy.md`. Status tags: **[KEEP]** exists and stands · **[REVISE]** exists but the new spine changes it · **[NEW]** needs writing. Word budgets are pacing guides, not targets.*

**The spine:** I came to find my mission. I found it. Here is what I built, the practice that proves it, the room it now needs, and the two decisions I am deliberately leaving open.

**Change from draft 1:** a new Part 3, *What got built*. The timeline is organised by activation, which scatters the working artifacts across 20+ entries so no reader ever sees the volume. The timeline tells the story; an inventory proves the output. Both are needed. Parts 3–7 shift to 4–8.

---

## Front matter

**[KEEP]** Name · Project title · Project URL · Faculty advisor and mentors.

**[REVISE]** *A note on format, for faculty.* Existing version is good. Pull the template-mapping table directly underneath it, and add one sentence naming the objection the way the video does — a prototype that is not a tool, assessed against criteria that mostly describe tools.

**[KEEP]** The eleven-row template mapping table. Load-bearing: it lets a faculty member verify nothing is missing.

**[KEEP]** The paragraph on counting convening alongside experiments, and the paragraph on what is deliberately excluded.

*≈400 words*

---

## Part 1 — Video intro

**[NEW]** Embedded video plus transcript below or in an appendix. The Doc can't embed; put the real embed on the site and link a thumbnail here.

*≈50 words framing + transcript*

---

## Part 2 — Introducing the project

The part that needs restructuring rather than editing. Current version leads with the bureaucracy bet and bolts the gap on afterwards; the video now does the reverse and the two should agree.

**[REVISE] The problem, first.** The gap — AI arriving the way a country arrives, credentials that don't parse, the communities most likely to be priced out. Then the four-point problem statement.

**[REVISE] The origin, second.** Same skeleton, different intent, as where the name came from rather than as the mission. The 80/20 ratio. Ed's line at the birthday.

**[KEEP] The three registers** — method / moment / horizon, and that they don't need collapsing. **[KEEP] The two questions.**

**[KEEP] What "sparkle" means, precisely** — the working definition from the 100-case sprint.

**[REVISE] The bar an experiment must clear.** The four parts, plus the fifth condition: can the experiment detect its own defectors? Date it as an August addition from the birthday and reunion evidence — the date is the point, because it shows the bar adapting.

**[NEW] What the network needs to become: the room.** Two paragraphs. A room is not a venue; it's a group that has settled that it wants to be there. Every activation that worked this year worked because that was already true. The roadmap rests on this and it currently exists nowhere in the submission.

**[REVISE] What the prototype consists of.** Network / experiments / diary — but replace the one-line artifact list with a pointer to Part 3, which now does this properly.

**[KEEP]** The honest caveat about the name.

*≈900 words*

---

## Part 3 — What got built *(NEW PART)*

**[NEW]** A build inventory, before the narrative timeline. For each: what it is, what it was for, what it proved, where it lives — and **who authored it**. The authorship column is not a disclaimer. Criterion 3 asks for collaborations credited, and "built to a partner's brief" is stronger evidence than "built from my own idea," because it means someone trusted you enough to commission it.

### Deployed applications

| | Authorship | What it is | Evidence |
|---|---|---|---|
| **Sparkle Border Authority** | Conceived, built, maintained | End-to-end border ritual as live software. React/TypeScript/Vite. Applicant flow, manual visa creation, visitor signup, checkpoint assistance, admin overrides, reprints, live stats dashboard. Seven-step flow from 4-character code to A6 sticker print to arrival tracking. | Deployed; open-sourced at Anouk's request |
| **Project Mirror + the V1–V15 pipeline** | Led and built; named cohort contributions to the pipeline | 321 projects, fifteen published algorithm versions, 18 inferred evaluator constitutions with value modifiers and a popularity discount, Borda-count grand jury with strategic reasoning | `2025.newspeak.house/awards`; every version on GitHub |
| **Campaign Factory** | **Concept, system design and build mine.** Hannah O'Rourke set the goal — demo multi-agents, make campaigners take agents seriously — and supplied her campaign-building knowledge base, which is embedded in the product. Ideas originated by me, refined with her. | Give it a UK local or policy problem and a place; it researches the decision route, maps power and pressure, proposes strategy and tactics, drafts materials — showing the work as it happens. ~122 commits in a ten-day sprint | Deployed; Campaign Lab subsidises access on the house key |
| **Conference Pulse** | Built and maintained **to a written brief from Hannah O'Rourke** ⚑ *cite the brief doc — it's evidence* | Live conference companion — schedule, anonymous per-panel comments, votes, organiser dashboard, big-screen room view | Ran the AI & Campaigning conference; produced the 19-ballot vote |
| **Topic** (topic.forum) | Engineer; Ed Saperia product owner | Collaborative forum software — propose topics, vote with hearts, share availability, shape a schedule together. 43 commits day one, then finished like a product through July: QA sprints, feeds, CI, docs | Deployed |
| **NHIFA Field Console** | Conceived, built, ran | The spy-reunion app — in-app mission reveals, keyword guesses, handler bonus codes, timed submission lock, paced projector reveal, post-event debrief page | Ran 13 May |
| **sparklebureaucracy.org** | Built and maintained; started from an AI-generated design, migrated to Astro | Astro site with a Buttondown mailing list behind a provider-adapter API | Live since May |
| **Red Team, Blue Team** | Built for the Ration Club crowd | Live team button game | `nwspk/ration-club-button-game` |
| **Claw agents** | Built, inside the Clawclub community | Moltbook interactions, penpals, research and analysis pipelines — whimsical and instrumented on the same substrate | Built during the Clawclub series |

### The pattern in the authorship column

**[NEW]** Worth naming directly, because it is the strongest evidence in the submission and it is currently invisible.

Faculty brought me work three times, and the depth of my authorship varies across them — which is worth showing rather than flattening:

- **Topic** — Ed set product direction; the engineering and system design are mine.
- **Conference Pulse** — Hannah wrote a brief; I built and maintained it. The brief document is citable evidence and should be cited.
- **Campaign Factory** — Hannah set a goal and supplied a knowledge base; the concept, the ideas, the system design and the build are mine. This is originating a product against a provocation, not implementing a spec.

Two faculty members, independently, brought me things and treated me as the person who could build them. Nobody asked me to justify my standing first — the commission settled that question before the work started. That is a different kind of evidence than a testimonial: it is demonstrated demand for a specific capability, from inside the institution, and it is dated in the commit history.

It also connects to learning #1. The rooms that worked were rooms where the legitimacy question was already settled, and a commission is one way it gets settled — which is why these three shipped while the governance experiments did not.

### Campaign Factory: the method, commissioned

**[NEW]** The point that changes where this artifact sits in the submission.

Hannah's ask was not "build a campaign tool." It was **demo multi-agents and make campaigners take agents seriously** — a brief whose success condition was *affective*. She commissioned productive alarm.

Which means Campaign Factory is the one artifact in the record where a practitioner commissioned designed affect inside a consequential procedure — the working definition of sparkle, asked for by someone else, in their own domain, using their own knowledge base. The research finding that affect is broader than delight, and that moral discomfort counts, is not only my theory. A practitioner requested it.

It clears the four-part bar, and this has never been stated:

- **Institutional skeleton** — campaign planning's decision routes, power maps, deliverables
- **Affective re-skin** — the work shown as it happens, legible without pretending the capability isn't alarming
- **Decision pressure** — it proposes strategy and can be wrong; the slop-plans warning is that pressure being real
- **Durable artifact** — the replay at `campaign-factory.vercel.app/factory/replay/conference`, plus the drafted materials

⚑ The replay does not appear anywhere in `sparkle-bureaucracy.md`. It is the most demonstrable artifact in the record and it is undocumented.

**And it is the fourth delivery of one argument.** The CHEW keynote, the Agent Craft keynote, the OpenClaw 101 workshop and Campaign Factory all make the same case: articulate your work as a system, so you know where agents fit before someone arrives selling you something. Campaign Factory is the strongest of the four because it is the only one that leaves an artifact behind after the room empties — Ed's 28 April principle applied to my own translation work.

**The mechanism, stated plainly for learning #5:** meeting a community inside its own work means embedding a practitioner's knowledge base in the system. That is replicable, and it is why this one landed.

One honest note: "and then I added the multi-agent flair" undersells it. The multi-agent decomposition is what makes the work showable and replayable. The architecture *is* the pedagogy — without it there is an output but no visible system, and the whole point was the visible system.

### Built by others, with my support

**[NEW]** A short block, and it strengthens rather than weakens the claim. The awards pipeline pulled the cohort in — Davit on values taxonomy, Gamithra's ITN/A framework, Alexandra on aggregation, Jamie on synthetic users, Fran on People's Choice. Credit each by name, describe what they built, don't claim it.

The **People's Choice system** — audience criteria submitted by QR code, an agent generating a live ranking of the shortlist, results processed in the break and announced live — was **built by Fran, with my support**, inside an evaluation architecture I led.

⚑ Your existing Part I already names all five of these people, so anonymising here would be inconsistent with what's already written — name her.

On "support": describe what you actually did rather than the relationship. Unblocked the agent step, reviewed the ranking logic, made room for it in the showcase run of play — whichever is true. That's verifiable and it's sufficient. "Mentored" is a claim about how someone else experienced you, and it can be remembered differently.

This block is also the clearest evidence for the thesis you state up front: building your thing while building the cohort at the same time.

### Worked case study: the Campaign Lab arc

**[NEW]** The submission's centrepiece, and currently scattered across five sections. Seven months with one partner community, producing three artifacts, hard metrics, onward demand, and two instructive failures. If you'd rather promote this to its own Part, it stands alone — but it belongs next to the inventory because it is the argument the inventory is evidence for.

Campaign Factory stays the centrepiece. The arc is the case around it.

#### The arc, dated

| | |
|---|---|
| **2 April** | Prototype Previews. Hannah offers intros and pilots, says "we will have people up for piloting things," points at Campaign Lab's `pipresist.uk` (Tyrone's), offers help with experiments and evaluation frameworks. Logged as *acted on*. |
| ⚑ **April–May** | **Gap in the record.** Your weekly entry says the relationship "goes back at least to" 24 May and "how it started before that is still unrecorded." Fill this — it's the origin of your biggest partnership. |
| **24 May** | **OpenClaw 101 workshop**, run for Campaign Lab. Slidev deck: agents, skills, factories, and the future of AI workflows (`sugaroverflow/openclaw101-workshop`). The hack-night teaching thread formalised. |
| **12–17 July** | **Campaign Factory** built (`CampaignLab/campaign-factory`) — ~122 commits, 60 on 15 July alone ⚑ *verify against the repo*. Launched requiring the user's own Anthropic or OpenRouter key. |
| **15–16 July** | **Conference Pulse** built in parallel (`CampaignLab/conference-pulse`), to Hannah's written brief. |
| **16 July** | **The AI & Campaigning Conference** at Newspeak House. Nine sessions. Both artifacts run live. |
| **week of 20 July** | Free-access code goes onto the house key — "bring your own API key" stops being the price of admission, with a kill-switch as the safety valve. |
| **20 July** | Campaign Lab newsletters Campaign Factory out to their list. |
| **17–21 July** | Civic Tech Field Guide: theory-of-change material offered for Campaign Factory's strategy section, a request to share it onward, and an invitation to demo with Hannah at a vibe-code show & tell. |
| **20 July – 3 August** | **Oxfam GB.** Campaign engagement manager writes unprompted after seeing it at the conference; requests a team demo and Q&A; a September workshop is being organised with Asil Sidahmed. ⚑ *Thread private — anecdotal summary only, and check whether she's happy to be named.* |
| **31 July** | The session with Hannah that produced the problem statement and three registers. The partnership also produced the mission clarity. |

#### What it produced

Three artifacts, two repos in the partner's organisation, one workshop deck, and a live instrument. Note the repo location as a point in your favour rather than a caveat: a partner org hosting your code is a stronger trust signal than self-hosting.

#### The numbers

From the Conference Pulse production database, 16 July, nine sessions:

- **240 votes · 263 comments · 28 private feedback messages**
- **67 unique voting devices · 45 unique commenting devices.** Comments are anonymous, so total unique participants sits between 67 and 112, likely near the lower end.
- AI live-take summaries generated for **7 of the 9** active sessions.
- **Retention: 49 of 67 voters (73%) voted in two or more panels. 25 voted in five or more. Three voted in all eight** that had voting open.
- Your own panel — Agents: working tools or over-hyped?, with Hannah and Ed — returned **19 votes, 12 comments, 47% "could work."**

Keep your own caveat: unique devices counts nobody who only watched the projector, so it is a floor on reach, not attendance. Stating that makes the rest more credible.

**Where campaigners think agents are real** — measured by your instrument, and useful as field research rather than as reaction to your session:

*Already real* — social listening 88%, AI content 76%, "anyone can build it" 67%. *Could work* — AI persuasion bot 73%, canvass coach game 58%, agents 47%. *Just hype* — election prediction 82%, synthetic personas 52%.

That last one is a direct input to the flagship decision: the community you'd run Public Voice Customs or Mirror Commons with is currently split on whether synthetic representation is real at all.

#### What it proves

- **Translation beats evangelism, with a stated mechanism.** Meeting a community inside its own work meant embedding a practitioner's knowledge base in the system. That's replicable, and it's why this landed where a talk wouldn't have.
- **The affect was commissioned, not asserted.** Hannah's ask had an affective success condition. Designed charge in a consequential procedure, requested by a practitioner in her own domain.
- **Sparkle sometimes removes a ritual.** The free-access code deleted a gate rather than decorating one — the research finding, live, with a kill-switch.
- **Repeat participation, measured.** 73% returning is the hardest thing to prove for a civic tool, and it's the evidence a network-as-prototype claim actually needs.
- **An instrument that can see disengagement.** Pulse sampled repeatedly rather than at entry, and the four comments between 14:00 and 16:00 match the independent feedback complaints about heat and breaks. It detected a room condition through participation data. That's the transferable design principle behind the fifth condition — and it's demonstrated rather than proposed.
- **The pull is the product.** Newsletter, Civic Tech Field Guide, Oxfam — all inbound, none solicited.

#### What failed

- **240 votes, 2 mailing-list signups.** The most useful number in the record. An instrument used 240 times converted almost nobody into the network.
- **And there's a probable cause, which makes it a better failure.** Matt Stempeck reported that the newsletter signup form blocked him — *"Suspicious activity detected."* A form that rejects people is a mechanical explanation for the conversion, not just a strategic one. Fix it, and report both together.
- **Your own panel was the least emphatic result of the day.** 12 comments, 47% "could work." Include it. The honest context helps: it ran at 17:00 after the dead zone, and vote participation had declined from 45 in the first panel to 15 in the last, so 19 was above the trailing trend. Reporting the weak number is what makes the strong ones believable.
- **The launch gate.** Campaign Factory shipped requiring users to bring their own API key — an accessibility failure you identified and fixed within a week.
- **The data nearly didn't survive.** The panel feedback was recovered from the production database ahead of a 30-day purge. No retention policy existed for the instrument's own evidence.

#### Unresolved

The sharpest question from the comment wall — how do you stop people's first experience being slop campaign plans? — is Campaign Factory's quality bar and it is not yet answered. Say so, and say what you'd do about it.

#### Artifacts to link

`campaign-factory.vercel.app` · the conference replay at `/factory/replay/conference` ⚑ *absent from your record entirely* · `CampaignLab/campaign-factory` · `CampaignLab/conference-pulse` · the OpenClaw 101 deck · Hannah's Conference Pulse brief ⚑ *cite it* · the full panel feedback capture.

### Physical and print artifacts

**[NEW]** Printed A6 visa stickers · dossier mini-zines via an A6-onto-A3 imposition pipeline · mission cards · reset slips · debrief cards. Worth its own short block: the durable-artifact principle from Ed's 28 April note, made physical.

### What didn't work

**[NEW]** The section the template asks for — 3.5, *What Broke / Failed / Felt Wrong*, annotated "(This is *good* — faculty want to see adaptation.)" It doesn't currently exist anywhere in the submission, and you have real material. For each: what it was, what went wrong, what you did about it.

- **The interactive lab wiki** (23 June). A dependency-free static lab notebook with experiment search, status filters, detail views, a local note queue, and the public/private boundary rendered in the interface. It didn't work as intended. Your own execution journal already logged why in advance — content duplicated from the markdown would drift, the `localStorage` note queue was a sketch and not collaboration infrastructure, and the thing was a prototype shell needing real links and dates. Worth keeping precisely because the risks were named before the attempt and then materialised.
- **The assessment log dragged UX**, and the file size caused page-load crashes; patched with lazy-loading.
- **The governance experiments produced a lot of process and sometimes very little outcome.** Already in your sensemaking map.
- **Participant evidence for Birthday Passports was never preserved.** The record already admits this. Leave the admission in.
- **The instrument gap** — the dashboard and the Field Console counted intake, not inhabitation. Cross-reference to learnings.
- **The site restructure, paused 31 July** pending the mission question, and still paused.
- **The governance and community writing, unpublished.** You called it the most honest thinking you did this year and it never went out. Say so.

This section is a direct feed to criterion 6 — reference it from there rather than repeating it.

### Lab infrastructure — four experiments that actually ran

**[NEW]** Distinct from the nine prospective ones, and currently invisible in the submission. From `experiments.md`, each with hypothesis, method, what happened, what was learned, evidence, risks and faculty questions:

1. **Agent-Assisted Prototype Diary** — notes, commits and logs into structured, human-approved entries. This submission package is its first real run.
2. **Faculty Feedback Loop** — feedback tracked to action.
3. **Collaborator and Prior-Art Scout**
4. **Sparkle Bureaucracy Experiment Cards**

This is the lab practising its own bureaucracy, and it's the cleanest proof that the method isn't only aimed outward.

### Research corpus

**[NEW]** Four linked longlists of 25 (projects, organisations, directories, people/networks) · three deep-evidence lanes · the movements-and-tactics lane · calibration · `website-selection.md` and the seven founder questions it left open · the prior-art log · the research inventory built from the 294-message field-notes export.

### Specified but not yet run

**[NEW]** Two sets, and they're different vintages — worth showing both, because the second supersedes the first and that's evidence of learning:

- **19–23 June sprint:** Verification Queue · Consultation Customs · Hybrid Delegation Assembly · Agent-Assisted Lab Clerk.
- **23 June idea bank, nine ranked candidates:** Public Voice Customs · Mirror Commons · The Exception Window · Permission Passport Office · The Value Court · Claw Civil Service · Shadow Labour Claims Office · Liquid Mandate Assembly · Sparkle Border Field Kit. Each with a smallest-credible-run spec, artifacts, evidence list and named risks.

### Talks and workshops

**[NEW]** Agent Craft 2026 keynote · CHEW Festival "Evaluation 2030" keynote · OpenClaw 101 for Campaign Lab · Clawcon London co-organised. These are artifacts too — they're where translation actually happened, and two of them produced inbound leads.

*≈1,200 words*

---

## Part 4 — The timeline *(was Part 3)*

Chronological, one `Add to the doc` slot per entry. Now free to be narrative, because Part 3 carries the inventory.

**[NEW] Open with 15 December 2025 — the legitimacy field note.** Currently buried in the appendix transcript; it should be the first dated entry, quoted. It establishes that the year's central finding was diagnosed in week three and published in public. Include the *why would we follow the rules* line, the constitutional-assumptions passage, and *I would rather people opt in.*

⚑ Verify the fellowship start date before calling it "week three."

**[KEEP]** All existing entries in sequence, plus **[NEW]** the June Topic entry, which is currently marked *Blurb TBD*.

⚑ Settle the activation count — "21" and "20+" are both in circulation.

**[NEW] A visible inflection marker at term 2.** Short block, not a full entry: the decision to stop asking the house to settle the legitimacy question and go find rooms where it was settled. Then what the dates show — from February the centre of gravity moves outward, and the house appears as venue rather than jurisdiction.

⚑ Verify term 2 dates. Earliest hard evidence is Clawclub #1, 17 February.

**[REVISE] Birthday Passports and Cohort Reunion.** Leave as written. The participation caveat belongs in Learnings as a later finding — more honest about when you saw it.

**[KEEP]** What's deliberately not in this timeline.

*≈2,000 words*

---

## Part 5 — The learnings *(was Part 4)*

Nine becomes eleven, with one substantially rewritten.

**[NEW] #1 — Legitimacy has to be settled before design can be debated.** The lead learning; it explains the shape of the year. Where the frame is unsettled every proposal snaps back to *why should this bind me* and the design argument never happens. Where it's settled you go straight to implementation. Note that it generalises — same mechanism as consultation flooding, and as transparency failing to produce trust.

**[KEEP] Same skeleton, different intent.**

**[REVISE] Games lower the bar — to entry, not to consent.** The correction, dated August as a revision of the earlier entries. Games don't manufacture consent to the frame and they hide its absence, because signing up looks like playing. Name the instrument gap: the dashboard and the Field Console counted intake, not inhabitation. Then the fifth condition. Keep it constitutional, no names.

**[NEW] Whimsy and rigour run on the same substrate.** From the Claw agents finding — the playful agents generated real social engagement, the research agents generated real evidence, same technical base. It's the strongest available argument that the 80/20 ratio is a method rather than a tone, and it's in no learnings list.

**[KEEP]** Transparency isn't trust · The inference is not consent · Translation beats evangelism · Affect is broader than delight, and its named failure mode · The three registers don't need collapsing · The lab's own bureaucracy is an experiment.

**[REVISE] The resistance is information.** Trim. With #1 in place it only needs the concealment loop and the *legitimacy is constructed* resolution.

**[KEEP] What the communities around the work taught me** — the full bulleted list.

*≈2,000 words*

---

## Part 6 — The roadmap *(was Part 5)*

**[NEW]** One opening paragraph: why a network and not a product. Pull from Part 2's room paragraph. Turns the roadmap from a wish list into the conclusion of the argument.

**[KEEP]** Near term · flagship candidates and the two routes · the rhythm · scope, in and out.

**[REVISE] Open questions carried forward.** Same four, reframed: the flagship stays open *because* of learning #1, not despite it.

*≈700 words*

---

## Part 7 — Addressing the criteria *(was Part 6)*

**[REVISE] 1. Qualifies as political technology.** Now much stronger — point at Part 3. Nine deployed applications, not five — plus print artifacts, four lab experiments that ran, thirteen specified, and a documented failure log.

**[KEEP] 2. Public web presence** · **3. Originality** · **4. Non-redundancy.**

**[REVISE] 5. Active user community.** Add the distinction the year produced — attendance versus inhabited participation, and that you now measure the difference. Pre-empts the sharpest attack on a network-as-prototype claim, which is that a headcount is not a user base.

**[REVISE] 6. No clear methodological failure.** Strongest section, gets stronger: the fifth condition arrived at from your own data; the instrument gap named rather than hidden; the December note as evidence the environmental constraint was diagnosed early and in public; four lab experiments that ran with human approval gates; and the record visibly correcting its own earlier claims.

*≈1,200 words*

---

## Part 8 — Evidence shelf *(was Part 7)*

**[KEEP]** All existing quotes, the people list, partners, the inspired-by constellation.

**[NEW]** Add from the December field note: *even if you were dictator and there was a signed charter, why would we follow the rules?* · *those are very different constitutional assumptions* · *I would rather people opt in.*

⚑ Outstanding: the "five months of research" attribution *(get name/permission)* · whether a debrief card can be reproduced · participant evidence for Birthday Passports was never preserved and the record already says so — leave that admission in.

*≈600 words*

---

## Build order, given the deadline

1. **Part 3** — the inventory and the Campaign Lab case study. Highest return, and mostly assembly rather than writing.
2. **Part 2** — the restructure everything else has to agree with.
3. **Part 7**, criteria 1, 5 and 6.
4. **Part 5** — learnings #1, the games revision, the whimsy/rigour addition.
5. **Part 4** — the December entry, the term-2 marker, the Topic blurb. Everything else is written.
6. **Part 6** — one new paragraph.
7. **Part 8** — three quotes.
8. Photos into the `Add to the doc` slots last, one pass.
