# Sparkle Bureaucracy — prototype submission

## 00 | Setting the stage

For my 2025–2026 prototype at Newspeak House — London's College of Political Technology, I am submitting **Sparkle Bureaucracy**: a network of people using AI to prototype more optimistic futures. This site is the story of building it: the experiments, the events, the learning in public, lessons learned, and the roadmap of where it's headed. I've kept all the open questions and uncertainty in there as well - as that's part of the process!

#### Where everything lives

| [Prototype diary template](https://docs.google.com/document/d/1SXbFwUmXxomZ4kC2LRUYoZ-_L1_ku1OkXP0RnMNmr6w/edit) | Corresponding section below |
| --- | --- |
| 1. Project Summary | Part 01 |
| 2. Project Map — features, risks, dependencies | Parts 01 & 04; risk registers in the [complete record](https://github.com/sugaroverflow/sparkle-bureaucracy-site/blob/main/submission/sparkle-bureaucracy.md) |
| 3. Weekly Diary Entries | the record's `lore/weekly` section — nine dated entries, February–July |
| 4. Prior Art Log | the record's prior-art log + the 100-case research corpus |
| 5. User & Community Engagement Log | the record's engagement log, plus Parts 02–03 and 05 here |
| 6. Prototype & Experiments Log | Part 02, with the full logs in the record |
| 7. Design Notes | woven through Part 02's entries; artifacts linked live |
| 8. Technical Notes | the Technical drawers in Part 02 + the record's technical-notes section |
| 9. Faculty Feedback Tracking | the Feedback drawers in Part 02 + the record's faculty-feedback tracker |
| 10. Readiness Checklist | Part 06 — the six criteria addressed directly |
| 11. Final Reflection | Part 07 |

## 01 | Introducing the project

Sparkle Bureaucracy (SB) is a network of people using AI to prototype more optimistic futures. My prototype is the network itself and throughout the fellowship, I contributed to the programme, hosted events, designed and ran experiments, and interacted with different communities that have all led to refining and iterating on what this prototype and its mission is.

It started out as a mission to prototype better organizational and service futures with the use of emerging technology, and pulled inspiration from all of my experience working with open source, civic tech, and governments. The name, "Sparkle Bureaucracy" stood for the dichotomy between "bureaucracy" carrying the seriousness and "sparkle" carrying the delight. It was meant to lower the threat, make experimenting socially acceptable in an audience of people that might feel a bit risk averse, and create a space that felt like it was inviting the kind of thinking that inspires people to try new things.

I started SB thinking that I wanted to run experiments on existing government services like passport renewals, DMV processes, voting in elections. I wanted to ask questions like *What does a better licence renewal process look like?* or *What does liquid democracy look like if the results are livestreamed while you can still change your vote?* To test this dream of running experiments that were poking fun at a real process, while also being reflective of the bureaucratic inequities, I ran an immigration scheme at my own birthday party - passports, visa types, credentials, and a checkpoint - and watched what happened. People were delighted to participate, they co-created fiction to go along with the narrative and inherently understood the game. They asked curious questions about the layers of the process -  *why were the visitor visas in black & white* or *why do some people have a priority privilege for cake?* and those questions reflected back to me that they understood the pieces of the bureaucratic process that I was trying to play with.

While I was very much interested in running more experiments like these, I found that I was discovering a new gap in the communities that I was in - one that felt far more existential and important to me than better government services. The gap between people who use AI and the people who *understand* how it works.

Growing up in New York City as the daughter of immigrants, I saw engineers and neuroscientists from abroad work as taxi drivers, start up gas stations, or grocery stores so that their children could have more opportunities in the US. Their skills were illegible to the system they'd migrated to. Some bureaucratic process had decided that no matter how smart they were, their credentials didn't count. I always believed that I just had to follow the rules and do my best - and that one day, that effort would be rewarded by the system. The reading I've done this year and been exposed to as a result of the programme has made me doubt that. And I've been reflecting back on watching those immigrants build education pipelines for their children to be legible to the system.

I believe AI is going to make immigrants out of all of us. I don't believe it's going to take our jobs, but the widening gap between the people who actually understand how it works and the people who use it like a consumer technology is going to become dangerous. The wider that gap gets, the harder it will be to cross it.

We experienced this first-hand as a cohort with The Political Tech Awards - once we had AI agents in the evaluation process, it became more and more difficult for other members of the cohort to engage in the exercise. I ended up becoming a conduit for agents - translating what people wanted to encode into the evaluation exercise - into the technology that we'd incorporated into the release. And then later, I took that a step further, I decided to build digital twins for each member of the cohort, to attempt and see if AI agents could infer their values based on their public record of work. The reaction to these twins was all across the board - from people who were absolutely horrified and requested full erasure of the record, to people who were bemused and interested in what the agent had discovered and documented about them and validated some of its findings.

Similarly, I found that my agents - and later agent factory - enabled me to build and test much quicker than the others and... creating applications started to feel trivial. The more important question was often *why am I building this?* and *What impact am I trying to have as a result of the thing I'm building?* I found myself building applications to show what was possible with agents - in hack night sessions at Code Club / Prototype Club, with open claw agents that supported what other people were looking for (scraping data, checking for vulnerabilities, finding people to invite to RightsUnCon), and in building social experiences for events.

For example, when defining the Cohort 2024 x 2025 reunion event at Ration Club, I wondered how I could get the two cohorts to get to know each other, without someone explicitly asking the question *So what is your prototype about?* because if anyone from the 2025-2026 candidates heard that question, they'd likely shut down. So I designed a Spy Reunion game, built out a digital dashboard where people could submit clues, set up a visual tracker for the competition in the coat room - where people could see the live scores as they played. People marvelled at how quickly I'd built the app, but they also created entire game narratives themselves - like the impromptu interrogation room in the Classroom. Nearly all the conversations after the game was over were about (1) the technology and how I'd built the application, and (2) how it enabled so much community in an evening. It furthered my instinct that we *can* use emerging technology like AI to enable what we believe is "Tech for Good".

Throughout the year, I've tested this hypothesis in various ways. When OpenClaw hit popularity in January, I started hosting monthly hacknights - ClawClub to host people. I was genuinely excited to meet people, learn what they were working on, and get a lay of the land. Sometimes we sold out and more than 60 people arrived, and other times it was a core group of 15 who were building and testing their agents. I learned a lot from that community about how people understand AI, how they use it, and whether they understand or even care about the implications of it.

All of these communities in Newspeak Hall — the civic tech people, the emerging-technology builders, the RightsCon folks, the Protocols for Publishers summit, the vTaiwan delegation, the charity evaluators, the campaigners — helped me think and refine on who the community of people who use AI to build optimistic futures are.

Those communities also changed the question. It stopped being only *How can bureaucracy feel different?* and became *Who gets to shape how AI impacts us?* So the problem statement, as it stands now: the state is failing in a lot of countries. AI offers an opportunity to fix some of that. We as technologists need to make sure the people working at the grassroots aren't left behind. And we can use AI to prototype and imagine a different future. It comes down to two questions anyone can ask. **What can I use AI for?** or **What can AI do for me?**

The real pivot happened in the middle of July, at the AI & Campaigning conference where I built Campaign Factory. I'd been tasked with building something with agents that would help campaigners understand that agents were not just hype, but a real tool that they needed to consider. After lots of brainstorming, learning about the details of building out campaigns, and decomposing what I understood about AI agents into a visual and process oriented format - Campaign Factory was born. And it was so exciting to launch it at the conference and see everyone react to what a multi agent factory could do for them.

It was after the launch of Campaign Factory through faculty mentorship that I started to realize that *my* mission and what I cared about had changed. While better government services will always be important to me, SB being a bridge for those communities who won't have the access to understand, use, and thrive on prototyping with AI - is what feels crucial right now.

Getting here took so much more than I expected, and I'll let the diary be the evidence of that. It's important to note that I've always imagined myself as a builder - as someone who gains credibility from the artifacts that I produce, whether that's code or content. The underlying tension that has existed since the creation of Sparkle Bureaucracy is the idea that I can also be someone who creates a network or builds a new community around the thing that *I* believe is important. And fighting that imposter syndrome for nearly all of Term 2 and 3 was an absolute struggle, but I do believe that I've found something here that feels special enough to take forward.

## 02 | Experiments Log

This is a log of experiments, projects, and contributions to the fellowship that inspired the different iterations of Sparkle Bureaucracy. I've included some of the fields from the Prototype Diary template where they made sense.

### 14 Dec – 1 Apr | experiment | The field-notes room


After a conversation with Ed about how I wanted to push myself to work in public, I created the public Matrix room, `field-notes: fatima`, to document everything from what I was reading, what I was inspired by, different ideas for what to build, and topics I was exploring. Reviewing the export of this channel after the year is over surfaces topics from power and AI: the surveillance-pricing investigation, shadow governance and needing permission in rule-light systems, AI system observability, agentic workflow risk. Fifteen arXiv papers, a dozen+ GitHub repos of AI projects, the Civic Tech Field Guide, gov.uk.

**What happened:** I was nervous at first to let people see my work in progress, but the channel was a great way for people to engage with me on topics, to bring up things that I had written about, or share similar topics with me.

**What I learned:** Sharing the channel with the cohort earlier would've been a great exercise. What I never was able to do was publish the field notes publicly as they were happening.

**impact on SB:** The year's research into all of these topics helped me refine my interests, keep tabs on what other people in the industry were building, and bring a political lens to the problems I was interested in - some of them were very "solve this for agents" but not political technology and so in the first term, that was an interesting tension to learn from.

#### Evidence

- 294 messages over three and a half months (the raw export logs 329 events including joins and edits), 205 of them in the December–January stretch.
- The room's own marker taxonomy: 📔 field notes ×137 · 🔗 links ×41 · 📥 papers ×37 · 💾 tools ×20 · 💡 ideas ×15 · ❓ questions ×4.
- 15 distinct arXiv papers, 10+ external repos, ~30 tools and platforms logged — the corpus itemised in Part 04.

### 11 Mar | experiment | Sparkle Border Authority: "Birthday Passports"


On my birthday, I ran a full border crossing for people to enter the party — identity checks, purpose-of-visit declarations, secondary screening, visa classes with privileges, printed A6 visa stickers, checkpoints, admin overrides, and a live immigration stats dashboard ([the app](https://sparkle-border-authority.vercel.app/), still deployed). The language layer did more work than I expected: "sparkle compliance," "diplomatic glitter." Compliance felt like joining a story world, and people co-created the fiction which was really fun!

**Hypothesis:** I wanted to see how a fun version of an exhausting bureaucratic ritual would impact the crowd and what the experience would be like.

**What happened:** Guests went through the full ritual and co-created the fiction. It was interesting to observe different reactions from people - how they leaned into the secondary screening, what parts of the process actually triggered them, the stories they told me about immigration and their passports as a result, and the different ways the hierarchy of "privilege" was discussed. People wondered if the different categories were randomly assigned, then asked me about it, and were surprised to learn that I had selected the privileges that people received based on favoritism and that led to some fascinating discussions about power and equity.

**What I learned:** A birthday felt like the safest sandbox I could think of for studying how authority feels, because the power is temporary and everyone has consented to it. Later, Ed remarked that birthdays are basically dictatorships and I agree with that take. Most were willing to play along since it was my special day.

**impact on SB:** The birthday immigration protocol was basically the launch of all ideas around Sparkle Bureaucracy, before the name of the project was even coined. As a result of the experiment, cohort + faculty came to me with ideas and explorations - which led to lots more experiments.

> "That's Sparkle Bureaucracy." — Ed Saperia, on seeing Sparkle Border Authority

#### Technical

- React, TypeScript, Vite; browser storage for local state continuity.
- Seven-step flow: 4-character code → identity confirmation → purpose/declaration forms → screening logic with secondary-review path → visa class and privileges → A6 sticker print → checkpoint handoff and arrival tracking.
- Operational surfaces: applicant flow, manual visa creation, visitor signup, checkpoint assistance, admin overrides, reprints, live stats dashboard.
- Open-sourced at Anouk Ruhaak's request: [sugaroverflow/sparkle-border-authority](https://github.com/sugaroverflow/sparkle-border-authority).

#### Evidence

- The app remains deployed at [sparkle-border-authority.vercel.app](https://sparkle-border-authority.vercel.app/).
- Printed A6 visa stickers as physical artifacts in passport books that people took home with them.
- **43 entries were filed** using the Border Authority app, generating around 87 border-entry interactions. This includes **16 Citizens** and about 26 visitor visas generated (there were some dupes and process restarts that were unaccounted for in the metrics).

#### Feedback

- Anouk Ruhaak (Prototype Previews): "Please open source the sparkle passport / visa!!"

### 30 Mar | experiment | Project Mirror + the V1–V15 awards pipeline


At the end of our Political Tech Awards project, we'd evaluated 321 political projects through different types of rationale from random scoring to structured dossiers using Civic Tech Field Guide taxonomy, OpenAlex citations, and ProPublica financials, to values-as-constitutions and multi-jury agent systems.

Project Mirror asked a different question: what if all 18 cohort members had been in the room? I wanted to see if AI agents could reliably study the public records of the cohort members and infer their values, ranking the projects in a way that they might have. So I built them all digital twins - a nine step multi agent pipeline that gathered all the data it could find on the person, verified it, put together a constitution for them, and then evaluated the projects, providing rationale at every step of the way. Several long nights and $500 later, I published all of my findings and then used the digital twins to rank the projects, leading up to our winner - Liquid Feedback, which given all the constitutions and evaluation criteria identified, makes a lot of sense for a group like ours.

**Hypothesis:** publishing an evaluation algorithm version by version, with rationale, makes institutional judgment legible — and moves the argument from "trust us" to "argue with this specific choice."

**What I learned:** transparency isn't trust. Just because people's public record of work is out there doesn't give an agentic system consent to evaluate it. A few cohort members reacted very strongly to the use of their data and aggregation of something synthetic that seemed to represent them. I had to reiterate many times that Project Mirror was not a representation of my personal values or how I believed AI should be used, but an experiment to push the frontier of how AI *could* be used. It led to a lot of interesting debates about whether or not synthetic users can be used for good and what those use cases might be.

**impact on SB:** Project Mirror was one of the first technically complex multi agents systems that I built. Not only did I have to work with 18 concurrent agents, I had to consider verification loops, data integrity, and how these agents communicated with one another and made decisions. I learned a lot about how to design a system that requires agents and I was able to use those learnings in the talks that you'll read about later in the year.

> "A little bittersweet, because these are synthetic representations. But I think where we are is the cusp of something… technology that keeps us in the judgment loop and lets us work together better." — from the Project Mirror closing reflection

#### Technical

- Core flow: research public profiles → inferred evaluator constitution per person → score 321 projects → ranked outputs with rationale → aggregation → Borda-count deliberation with strategic reasoning.
- Key design choices: constitutions describe evaluative stance, not claimed beliefs; value modifiers make normative assumptions inspectable; a popularity discount counterbalances LLM familiarity bias; aggregation-method variation treated as evidence, not noise.
- Every version published: [2025.newspeak.house/awards](https://2025.newspeak.house/awards).

#### Evidence

- The live awards site with the full V1–V15 history.
- The showcase mechanic: the audience was handed the 321-project longlist and asked to rank it — *and to note how they were deciding* — before seeing the committee's method.
- Winner Liquid Feedback: 18-point lead, 13 deliberation arguments, no manipulation that held.

#### Feedback

- Multiple faculty members requested a digital twin as they were curious (a) what information could be inferred about them from their public record, and (b) what projects their agent would rank.
- "Please build some for the team." — a manager, on hearing about synthetic evaluator agents.
- Asil Sidahmed's live reflection at the showcase → the permanent ethical line, and the Mirror Commons spec.

### 29 Apr | experiment | Red Team, Blue Team at Ration Club


Alex Vince and I vibe coded this game as a social experiment at Ration Club one night in ten minutes and then went and tested it on everyone in the space. ([nwspk/ration-club-button-game](https://github.com/nwspk/ration-club-button-game)).

**What it was:** a fast, live, two-team game for a room of guests.

**What it taught:** this was a great way to see what the space was for - and how quickly you could prototype and test assumptions. The results of the game led to a lot of debates, on whether being on Red or Blue team was "better" and why it was better, including deep dives on fascism and morality. It surprised me that something *so* simple could be so political!

### 9–24 May | experiment | sparklebureaucracy.org + the mailing list


Finally launched the public presence of Sparkle Bureaucracy with a mailing list! "A mailing list and eventually an event series" was the network-building commitment I'd written in the diary. This is the point it became infrastructure.

**What it was:** the network's public front door, and its first piece of owned infrastructure.

**What happened:** live since May, redesigned in August around the problem statement and three registers, with the experiments and an interest register on the page.

**What I learned:** you can't tell people you're working on a network if they don't have somewhere to follow along and subscribe. And surprisingly, a lot of people subscribed (35 total subscribers as of August 10 2026) - sometimes not even because they understood the network, but because they were at an event where I gave a talk or at one of the games I hosted.

#### Technical

- Astro; Buttondown behind a provider-adapter API; self-hosted analytics (Umami) with per-experiment interest events.

#### Evidence

- **35 mailing-list subscribers to date** — including Rosario Piazza, a data-and-AI policy researcher who joined after the Evaluation 2030 keynote.
- The bug, owned: Matt Stempeck reported the signup form blocking him ("Suspicious activity detected", ~21 Jul). Cause found (the embed endpoint's spam heuristics on server-proxied signups), form fixed, authenticated API path added.
- Dr Eugenie Regan (August): "You are an inspiration, Fatima! I've shared your website with family and friends today!"

### 13 May | experiment | Cohort Reunion: Spy Edition (NHIFA)


Nobody in my cohort wanted to answer "how is your prototype going?" one more time, so the reunion became a spy agency. The NHIFA Field Console was an application that revealed each player's mission to them, allowed them to submit keyword guesses and handler bonus codes. It also had a live "game tracker" screen which we set up in the coat room so the competition knew the scores as they were being awarded, which made everyone 10x more competitive. Players were also given physical notebooks to track their notes and brainstorm keywords.

**Hypothesis:** networking reframed as a game was successfully able to get two cohorts to socialize with one another!

**What happened:** people competed, played their missions, and stayed for the reveal. Competition and games lower the bar to social interaction! And it also created space for people to be creative and set up their own narratives - like the interrogation room in the Classroom or the pair by pair swaps in the Terrace that occurred organically.

**What I learned:** the spy game added the thing the border never had, which is a post-event ritual! People wanted to debrief the game, offer feedback, and hear more about how it went so I set up a post event page showcasing some metrics - like who was the fastest to submit codes or who got the most wrong. It was really cool to see how the cohorts organically created competition and narratives of their own. It was also really great to receive feedback and get lots of questions about how "how did you build this so quickly" and get to tell them about my agents.

**impact on SB:** I learned that people love physical artifacts from social experiments, but they also love the data. They want to know *how* they performed in a game so tracking those metrics was valuable.

#### Technical

- NHIFA Field Console: in-app mission reveals, keyword guesses, handler bonus codes, timed submission lock, paced projector reveal, post-event debrief page — 21 commits, 12–15 May.
- Physical artifacts: dossier mini-zines via an A6-onto-A3 imposition pipeline, mission cards, reset slips, debrief cards.

#### Evidence
- Roughly **38 people** used the NHIFA app — **28 fellow-agents (12 from cohort '24, 16 from '25)** plus **10 handlers** — generating an estimated 250 of 384 possible cover-identity guesses and around 40–50 bonus-code redemptions during the evening.
- Weeks later, Francesca Galli forked the repository to run a similar game with her friends for a birthday party.

### 19–23 Jun | experiment | The nine-experiment idea bank


The original concept of Sparkle Bureaucracy involved setting up experiments that challenged existing bureaucratic processes. There were 9 of these that I wanted to design: Public Voice Customs, Mirror Commons, The Exception Window, Permission Passport Office, The Value Court, Claw Civil Service, Shadow Labour Claims Office, Liquid Mandate Assembly, Sparkle Border Field Kit - each specified to smallest-credible-run level, with artifacts, evidence lists, and named risks.

**What it taught:** Attempting to document these experiment ideas made me realize I wasn't really clear on what the lens of SB was and what I was trying to do with the network. Most of them felt like games, rather than activations.

**impact on SB:** Because I also felt shy about sharing these experiment ideas in the open, they sat for a while without being published - and made me realize the mission of the network maybe wasn't aligned with my interests (or the new emerging gap that I was seeing and interested in)

#### Feedback

- Emily Mayhew's consultation question ("why is public consultation such a dull awful bureaucratic cold process?") fed Public Voice Customs and Mirror Commons' consent model in the idea bank.
- Ed Saperia's artifact principle (28 Apr — "every interaction with SB should leave a durable artifact: a certificate, a key, a title") became the durable-artifact leg of the four-part bar.

### 23 Jun | experiment | Timetable / Topic (topic.forum)


Ed reached out about a project idea that he had for managing the fellowship's course topics, sharing availability, and understanding students' interests. We worked together to go through his project specification brief and I took the task of architecting the build according to it. This was the first "Newspeak House × Sparkle Bureaucracy production," finished like a product through July with QA sprints, feeds, CI and docs.

**What it was:** a faculty commission. Ed Saperia as product owner, the engineering and system design mine.

**What happened:** deployed at topic.forum, launching soon in Sept 2026!

**What I learned:** The traditional way of building something like this required a product owner and an engineer to work together, in sprints, defining each task and item as they went. With AI agents today, it was feasible for me to setup guardrails on the repository in regards to things like new functionality (don't rebuild large parts of the codebase), testing requirements (all new interactions require tests), and stability (certain parts of the authentication and environments are off limits) - and enable Ed as the product owner to engineer parts of the project himself. It was an interesting case study in bridging someone who doesn't know a lot about AI and agents into someone who can vibe engineer their own project, within a sandbox controlled by a domain expert. A new style of consultation!

#### Technical

- 43 commits on day one, ~66 by 30 June; a further build wave 21–25 July (~37 commits) and a 32-commit QA sprint on 27 July (PRs #139–146).
- All the faculty now have accounts on the platform (16 users!) and their topic content for the 2026-2027 year are in as well.

### 12–17 Jul | experiment | Campaign Factory


This was built in a 3 day sprint with Hannah O'Rourke as the subject matter expert on campaigners. My task was to scare campaigners into realizing that AI agents were *real* and not hype. And in order to do so the application had to achieve two things - (1) it had to be relevant to them as an audience of campaigners and (2) it had to demonstrate multi agent factories in a way that could be understood by a non-technical and AI-averse audience.

Give [Campaign Factory](https://campaign-factory.vercel.app) a UK local or public-policy problem and a place, and it researches the decision route, maps power and pressure, proposes strategy and tactics, and drafts campaign materials — *showing the work as it happens*, with Hannah's campaign-building knowledge base embedded in the system. You can watch [the full experience that the audience had as a replay on the site.](https://campaign-factory.vercel.app/factory/replay/conference)

**Hypothesis:** meeting a community inside its own work — their problems, their vocabulary, their knowledge base embedded in the system has the biggest impact! Because of Hannah's influence, the output of the factory was credible enough to represent work that the audience recognized, which meant that the technical implications of agents landed its mark.

**Method:** 3-day sprint in the partner's own GitHub organisation ([CampaignLab/campaign-factory](https://github.com/CampaignLab/campaign-factory)); multi-agent decomposition so the work is showable and replayable, because the architecture is doing the teaching.

**What happened:** the room's verdict on the conference panel — "Agents: working tools or over-hyped?", with Hannah and Ed — came back 19 ballots: 9 *could be useful with work*, 7 *already useful and real*, 3 *just hype*. The week after Campaign Lab sent Campaign Factory out in their newsletter.

**What I learned:**  This project changed what I thought counted as "sparkle". *How can I give people the experience of using a multi agent factory in a visual format?* was a difficult question to answer and to be honest, I'm not sure it was the best response so it requires more iteration. However, it was fascinating to see their reactions - to see what parts of the design they absorbed - whether they understood orchestration patterns or agent to agent handoffs or that the system didn't have to be linear, the way that interacting with an LLM often is.

**impact on SB:** "Campaign Factory, grown up" is a flagship candidate — already live, already partnered, already testimonialed — and the inbound pull it generated from Oxfam GB and the Civic Tech Field Guide is shaping the roadmap. It also drew a line in the sand after Project Mirror and made me realize that my interests in AI could influence the pivot that SB needed to take in order to be a bridge.

> "Campaign Factory built for her what it would take her five months to research." — campaigner at the AI & Campaigning Conference

> "Incredible! would love to see a write up of how this was built." — from the panel comment wall

#### Technical

- Multi-agent pipeline that researches decision routes, maps power and pressure, proposes strategy and tactics, and drafts materials — with the run replayable end-to-end ([the conference replay](https://campaign-factory.vercel.app/factory/replay/conference)).
- Launched requiring the user's own Anthropic or OpenRouter key; the free-access code (`FREE-CAMPAIGN-BUILD`) went onto the house key from 21 July, with a kill-switch. Campaign Lab subsidises access.
- The repo lives in the partner's organisation, which I read as a trust signal rather than a caveat.

#### Evidence

- 19 votes on the ballot on conference pulse.
- **31 total campaigns** generated on the application.
- Inbound after the conference: **Abby Mason** (Campaign Engagement Manager, Oxfam GB) — "amazing to see the platform you have built" — requesting a team demo and Q&A; a September workshop is being organised. - **Matt Stempeck + Daniel Mackisack** (Civic Tech Field Guide) offering Matt's theory-of-change app to embed into the strategy section, asking to share it with coworkers "and then, the world," and inviting a CTFG vibe-code show & tell demo.
- Campaign Lab newslettered Campaign Factory to their list on 20 July.


#### Feedback

- Campaign Factory generates a lot of slop and that was a concern raised by the audience. For a tool like this to be useful, it needs a lot more fine tuning in the prompts and steps - and more user research as to what would be most efficient and helpful.
- Questions around whether an LLM could generate the same thing - my testing has found that a ChatGPT or Claude on extra high reasoning or Deep Research mode could generate 10–15% of the brief at a time - however it would require separate conversations and manually carrying context over. Because this was a 19 agent pipeline, there were agents dedicated to research, verification, and handoff - so the context windows were shared.


### 15–16 Jul | experiment | Conference Pulse


The companion application for the AI & Campaigning Conference, built from a brief provided by Hannah. It included the live schedule, anonymous per-panel comments, an admin dashboard, a big-screen room view, LLM summary of incoming comments, and voting. Basically a custom slido for an event that had a very specific audience engagement.

**Method:** built to the brief in the partner's organisation ([CampaignLab/conference-pulse](https://github.com/CampaignLab/conference-pulse)).

**What happened:** 240 votes, 263 comments, and 28 private feedback messages across nine sessions. And the instrument saw the room — the comments between 14:00 and 16:00 match independent complaints about heat and breaks. Disengagement was detected through participation data.

**What I learned:** We talk a lot in the industry about the rise of personal software, but I really do think that Conference Pulse was a valuable thing to build as it filled a very specific style of conference and engagement and worked well.

**impact on SB:** Hannah's design of "hype or not" in her voting segment and the "incoming comments from the audience" while the LLM was summarizing created this "side" event during the talks. People were submitting comments to see how the LLM summary might change. Towards the end of the conference, someone even tried to prompt inject the application, which resulted in a lot of fun when it was unsuccessful and the LLM summarized "audience tried to prompt inject but failed". It's interesting how custom designed tools can create organic interactions that weren't planned as part of the conference (or even expected given the topic/schedule).

#### Technical

- Live schedule, anonymous per-panel comments and votes, organiser dashboard, big-screen room view; AI live-take summaries generated for 7 of 9 sessions.
- The panel feedback was recovered from the production database ahead of a 30-day purge. No retention policy existed for the instrument's own evidence until then.

#### Evidence

- From the production database (16 July, nine sessions): **240 votes · 263 comments · 28 private feedback messages · 67 unique voting devices**
- **Retention: 49 of 67 voters (73%) voted in two or more panels**; 25 in five or more; three in all eight with voting open.


## 03 | Events Log

In addition to experiments and projects, I also contributed to events. Throughout hosting these events and talks, I was able to talk to lots of people and communities about AI, how they used it, what they felt about it, and identify the different opportunities in which SB could support them in that journey.

### 2 Feb | convening | Code Club → Prototype Club → Prototype Coworking Day


I inherited Code Club from the institution and ran it every other week from February. At first, we had workshops and themed sessions where we debated trending topics and technology. Later, it evolved to meet the cohort's needs — **Code Club** (2 Feb – 16 Mar) → **Prototype Club** (from 13 Apr) → **Prototype Coworking Day**.

**What it taught:** Ed named something on 14 April that I had missed from inside it: Prototype Club was itself an SB project. I had been building the thing and the cohort at the same time.

### 4–5 Feb | encounter | Protocols for Publishers — showcase + stakeholder summit


A two-day showcase and stakeholder summit at the house, and one of the communities in Newspeak Hall that helped me narrow down what my own community should be.

**What it taught:** "Democracy dies when truth is behind a paywall and misinformation is free." The journalists and technologists at the PfP meetup have strong sentiments against AI, the use of AI, and the implications of it. And as someone who is an AI optimist, it's always good to get exposure to the ways that AI is negatively impacting other industries. And what the arguments against using it are.

### Feb | encounter | Decode Taiwan Open Tech meetup


I have long been a fan of the vTaiwan movement, they're a demonstration of all the things that I believe to be true and inspiring about civic tech - so meeting them at Newspeak Hall felt like a growing up story in so many ways. It was great to see the realistic 10 year journey, how they've dealt with changes in government and bureaucratic blockers to change. And how they've made their mission of co-creating possible and practical through the use of technology.

**What it taught:** vTaiwan continues to be a movement, one might even call it a network of technologists and policy people who have a shared mission that they care about. The many tools that they've deployed, either through the government or through collaboration with open source communities are citizen facing and respond to the needs of their people. It's a model for a civic tech movement that has been very successful and it was great to get a behind the scenes picture of what worked and what didn't work and hear from them about their challenges and successes.

It was also really heartwarming because around this time, I told them I wasn't sure what I was going to do with my prototype - and after our 3 hour long coffee chat, they all wished me well and said that they knew SB would be so great! And that was something I reminded myself of when I had the worst of the imposter syndrome in regards to starting a movement. They were some of the first "subscribers" in that way!

### 17 Feb | convening | Clawclub (series) + Clawcon London


I started ClawClub because I wanted to be in rooms with people who were building with OpenClaw and wanted to know how they were building and what they were creating. The monthly series ran through the spring and included anywhere from 15 to 60 people filling the hall, building, sharing, occasionally selling each other hardware (lol). As a result of the legitimacy that I gained from hosting the meetup, I was able to get in touch with the crew of the (now) Open Claw Foundation and become a co-organizer for bringing ClawCon from SF to London - audience of 800!

**What it taught:** Hannah always reminds me that "Legitimacy is constructed" and I truly saw this via ClawClub. What began as a meetup where I wanted to meet like minded people working on things led to multiple keynote and collaboration opportunities for me in London. It gave me a lot of confidence to the "why me" question of Sparkle Bureaucracy and I started to feel that maybe I *was* the right person to start a new thing.

### 21 Feb | encounter | A Bohm Dialogue on human, more-than-human, and artificial intelligences


A dialogue session on AI and intelligences that was facilitated via Bohm dialogue. It was around 20 strangers in a room discussing AI and human cognition. I was so flabbergasted by the discussions, I had to leave early.

**What it taught:** People truly do not understand AI, and personify it to a degree that enrages me. I also learned something about myself that night, which is that showing up as the technical expert can make people insecure enough to get defensive and stop hearing me. This was valuable in validating the "Sparkle" in Sparkle Bureaucracy, because that would lower the bar and make this network approachable.

### 25 Mar | convening | Lumina House takeover of Ration Club


Cross-community collaboration, and social choreography at scale. The organizers of Lumina House reached out to get to know us better and I organized a takeover so we could blend the two communities. It was quoted to be one of "the best ration clubs ever" and community members who generally avoid the event dropped in and enjoyed themselves, which I think is the highest praise for an organizer.


**What it taught:** Different communities talk about the same things in completely different languages, so cross-pollination is a skill the network needs rather than a nice side effect! Something about the "why me" question also landed. The people I look up to are ML and AI researchers who know far more than I do. But for some of the people around me, I am the closest thing to that they have. I don't think that means the imposter syndrome is resolved. I think that is what being the *bridge* means.

### 2 Apr | talk | Prototype Previews: Sparkle Bureaucracy meets the faculty


Checkpoint! This was the faculty's first official encounter with Sparkle Bureaucracy. I pitched it as the original - a network of people prototyping organizational and service futures. I talked about my experiences with bureaucracy and working in government - and how I was convinced that better government services were needed. I was hesitant about where this was going, because the movement wasn't entirely clear to me either, but the feedback was overwhelmingly positive.

**What it taught:** Every piece of feedback below got a response, tracked to an action in the faculty-feedback tracker. This night set half the year's threads in motion and I believe it led to many of the conversations that resulted in the experiments and projects above.

#### Feedback

- Ed Saperia: "I think this will go very far — very contemporary, hits very relevant questions, in a way that's quite straightforward, generative, and accessible… with an AI angle which makes it fresh."
- Matt Stempeck: "an experiment lab for imagining how emerging tech can change the way our systems work without abandoning them" — the phrase the prototype grew into. Also his: "if you can't dance it's not my revolution."
- Hannah O'Rourke: intros to AI-in-gov and optimistic-narratives people; MP-office applications from casework; "we will have people up for piloting things"; pointed at Campaign Lab's [pipresist.uk](https://pipresist.uk/) — the seed of everything that followed with them — and offered help with evaluation frameworks.
- Chris Owen prescribed *Radical Help* → read ("we architected our systems poorly and can radically re-imagine them"). Emily Mayhew asked why public consultation is "such a dull awful bureaucratic cold process" → folded into the synthetic-voice experiment cards. Anouk Ruhaak demanded the sparkle passport be open-sourced → it is.
- James Moulding: "I liked optimistical." → the word stays.
- Sinead Doyle: "I really enjoy the aesthetic of your slides ✨" (Ed: "you are basically the target audience for this project").

### 30 Apr | encounter | "Are You a Software Update?" book launch


A book launch at the house that presented a much sharper edge to a pattern I'd been seeing in my experiences at AI meetups in London.

**What it taught:** Not all forms of power announce themselves. Infrastructure built for scale carries a totalising logic and there's a fascist tendency in it, which is uncomfortable to sit with when you're building the friendly version of something. I started to think about why movements were helpful when the systems were controlled by a few frontier labs.

### 8 May | convening | Rights UnCon


The RightsCon-adjacent unconference at the Hall, hosted with Anouk Ruhaak in two days when RightsCon was cancelled due to China's interference. It was a thrilling experience, we used agents to identify organizations and people that we should invite to the conference, built out the schedule in a brainstorming session, and threw a whole event together in a matter of days. Legitimacy is truly constructed!

**What it taught:** The digital rights community is one that I've known of within civic tech circles, but had not gotten much exposure to. On the scale of AI-averse to AI-optimist, most of the attendees were even further down to AI-averse than the technology journalists! Like many of the communities mentioned in this diary, the digital rights people helped me validate and adjust the scale. They are a community that I care a lot about, but one that will be tricky to involve in any SB movement without a more thoughtful approach around the use and implications of AI. But for that reason - a very helpful exposure!


### 20 May | encounter | "The Majority Myth" book launch


Met the author, Edmund Lewis Maklouf, before his book launch at the house. He found SB really interesting — very much needed if people are going to get better government services — and pointed me at the immigrant mindset the literature calls the model minority myth: the belief that if you do good, work hard, and follow the rules, you'll be noticed and rewarded.

**What it taught:** it made me ask what my true motivations for this project actually are. I'm still sitting with that one because it's a heavy one. It made me realize that I often wait for the letter of the law to give me permission and a sandbox to play experiments in, but the lesson of Newspeak House is the opposite - and I'm still convincing myself of that.

### 24 May | talk | OpenClaw 101 workshop, for Campaign Lab


Invited to run a workshop for Campaign Lab on OpenClaw including agents, skills, factories, and the future of AI workflows. ([The slide deck](https://github.com/sugaroverflow/openclaw101-workshop)).

**What it taught:** Getting everyone set up on using Open Claw reminded me how frontier these tools really are (the setup was so finicky) and that it really does take a domain expert to be able to get people up and running. It was also really interesting to discuss with people what their use cases were - which is something I enjoyed at ClawClub as well, and is something that I'd like to implement in SB's hack nights.

### 12 Jun | talk | Keynote at Agent Craft 2026 (invited): "The Agent Hype Is Real. So Is the Mess"


I was invited to give a keynote to kick off the first [Agent Craft 2026 conference](https://luma.com/AgentCraft2026), organized by AI for the Rest of Us, a community designed for everyone to learn about AI. The talk was requested as a field report - the organizers were interested in the lessons learned from building and testing with agents in the wild.

After the launch of this talk, I received multiple opportunities to speak at conferences later this year! Tom Fieldman of mySociety offered experiment ideas and an introduction to a practitioner using AI agents to fill out government forms. Paul Silcock, a CTO building production AI agents, called the framing "so valuable" and asked me to present to his team.

**What it taught:** This was the debut of my instincts on where the industry is headed and where AI fluency needs to go. The framing arc of this keynote was that people had to move from **prompt → system → loops** to be able to effectively use multi agent tools. When it landed so well with the audience, even I was a bit surprised! This audience consisted of people who are somewhat to mid technical - and not necessarily engineers or builders - and so the language required to tell them about this shift from prompts to systems was somewhat technical, but moreso than the language I used at the OpenClaw workshop for campaigners. These different engagements have allowed me to tell the same story of where AI is going in different ways for different audiences - and that has been really interesting to help SB's mission evolve.

### 15 Jun | talk | Keynote at CHEW Festival (invited): "Evaluation 2030"


I received this opportunity through Ed's introduction. The CHEW Festival team attended our Awards showcase, so they had seen my work with Project Mirror. What they were most interested in was getting their audience up to speed with where multi agent systems were headed. Michelle Man, head of CHEW, provided all the context I needed (much like Hannah did for the Campaigners) to map my ideas to something that would feel relevant to the audience and their day to day workload.

I kicked off the conference, challenging people to shift their thinking from prompt-based to systems-based before agents arrive.

> articulate your work as a system first, so when vendors show up selling things, you know where agents actually fit.

15+ people lined up afterwards to tell me their specific stories and where they could implement agents. Over the following two months, Michelle Man, the festival organiser, reached out asking for a blog because they "continued to hear great feedback" and attendees were requesting more information. Octavia Field Reid also invited me to do a brown-bag at the Ada Lovelace Institute to debate her researchers on AI optimism, which felt very Sparkle Bureaucracy coded.

**What it taught:** This was another type of audience and their reactions helped me validate my instinct on the gap between those who just use AI as consumers and those that build it.

### 12 Dec → weekly | convening | Content Co-Creation Fridays


Co-founded with Francesca Galli, with Matt Stempeck's sponsorship, because I was inspired to work in the open and wanted company doing it. A weekly "shut up & write"-style focus session at the house for faculty and fellowship candidates: set a goal, pick focused or collaborative mode, check in on progress — research write-ups, blog posts, decks, demo scripts, videos ([Luma](https://luma.com/o7t15995)).

**What it taught:** the working-in-public method, made into a shared weekly ritual. I wish I was able to ship more of the things that I wrote, but imposter syndrome is such a drag.

### ongoing | convening | The AI safety study group


A reading-and-discussion group on AI safety materials, with people from neighbouring institutions invited in. We met monthly, designed the readings, and had in depth discussions challenging our understanding on the different topics and fields interwoven in AI safety.

**What it taught:** considering the implications of AI safety amongst peers also learning and reading the same material is valuable because it lowers the bar as compared to discussing it with experts. I wasn't aware of many of the influences of the movement and also didn't realize how much I already knew about good evaluations.

### Note!

Not every contribution to the fellowship inspired Sparkle Bureaucracy or impacted my thinking around the AI gap. Some of the more civic tech aligned contributions were left out from this diary as they were iterations towards things I found important and interesting - but perhaps not aligned with the mission as clearly. For example organizing **Funding 101 for Civic & Political Tech** with Georgia Bullen (7 April); organizing the **PoliTech Awards committee meetings** (the evaluation methodology and Project Mirror are SB; the committee logistics were house service); co-hosting the **Censorship & Surveillance Resistant Comms** discussion with Nicholas Botti (1 March).

## 04 | Learning in Public

My challenge to myself was to do all of my learning in public, and while my field notes channel was public to the cohort, it wasn't public to the world. In this very expansive section of the diary, you will find a record of the discussions in my Matrix channel, to the papers and tools I researched, and the little essays I wrote when I was reflecting on the course, on AI, and governance.

Not all of this is relevant to the current output of the prototype, but functions more as a diary. You'd probably find the field note journals most interesting - they're organized by title of the essay.

#### Fatima's Field Channel

Before the diary was a diary, it was a room: `field-notes: fatima`, public by design, with an explicit contract that anything posted could become public. **294 field notes · 15 arXiv papers · 10 external repos · ~30 tools logged.** The room's own marker taxonomy tells the story of a year's attention: 📔 field notes ×137, 🔗 links ×41, 📥 papers ×37, 💾 tools ×20, 💡 ideas ×15, ❓ questions ×4. The notes themselves, in order, by kind:

+++2 Papers read
+ 14 Dec 2025 | HBS paper on dynamic pricing harm | Harvard Business School paper arguing pricing algorithms pose policy problems far broader than the collusion regulators currently focus on. | https://www.hbs.edu/ris/Publication%20Files/22-050_ec28aaca-2b94-477f-84e6-e8b58428ba43.pdf | Dynamic Pricing Algorithms, Consumer Harm, and Regulatory Response. Regulators and scholars have focused on pricing algorithms facilitating explicit and tacit collusion; the article argues the policy challenges are far broader than collusive conduct.
+ 14 Dec 2025 | arXiv: EU and US pricing regulation | Comparative working paper on whether EU and US privacy law, DSA and DMA restrain online algorithmic pricing. | https://arxiv.org/abs/2509.24345 | Comparative working paper on how EU and US data protection and privacy laws address online algorithmic pricing, evaluating whether the current legal regime protects individuals, and analysing the DSA and DMA as supplementary mechanisms to EU data protection law.
+ 14 Dec 2025 | arXiv: the RLHF trilemma | Paper formalising that representativeness, tractability and robustness cannot all hold at once, explaining RLHF pathologies via complexity bounds. | https://arxiv.org/abs/2511.19504 | "formalize an alignment trilemma showing that representativeness, tractability, and robustness cannot all be satisfied simultaneously, explaining RLHF pathologies through complexity bounds"
+ 14 Dec 2025 | arXiv: cognitive orchestration via knowledge alignment | OSC paper on agents adapting communication by modelling collaborators' cognitive states, addressing coordination and context handoff. | https://arxiv.org/abs/2509.04876 | "Shows how agents can dynamically adapt communication by modeling collaborators' cognitive states, which helps solve the agent coordination and context handoff problem in complex tasks."
+ 14 Dec 2025 | arXiv: comprehensive review of AI agents | 2025 survey mapping the state of AI agents and multi-agent collaboration, specialisation and orchestration. | https://arxiv.org/abs/2508.11957 | "Overviews the state of AI agents and multi-agent collaboration in 2025, useful for mapping how specialization and orchestration are evolving."
+ 14 Dec 2025 | arXiv: communication-centric multi-agent survey | Beyond Self-Talk surveys how LLM agents communicate and coordinate, highlighting scalability, security and collaboration challenges. | https://arxiv.org/abs/2502.14321 | "Offers a 2025 survey on how LLM-based agents communicate and coordinate, highlighting scalability, security, and collaboration challenges central to multi-agent design."
+ 15 Dec 2025 | arXiv: eccentric automatic prompts | Testing sixty system message snippets across three models on GSM8K; positive-thinking prompts often help but results do not generalise. | https://arxiv.org/abs/2402.10949 | "We assess the performance of 60 combinations of system message snippets, tested with and without Chain of Thought prompting, across three models with parameters ranging from 7 to 70 billion on the GSM8K dataset. Our findings reveal that results do not universally generalize across models."
+ 17 Dec 2025 | bare arXiv paper drop | Shares arXiv 2001.00973 with no commentary. | https://arxiv.org/abs/2001.00973 | Bare arXiv link posted with no commentary.
+ 13 Jan 2026 | MIT recursive language model paper | Treats massive documents as a searchable database the model queries on demand instead of forcing everything into attention. | https://arxiv.org/abs/2512.24601 | "MIT's new Recursive Language Model (RLM) approach flips the script entirely. Instead of forcing everything into the attention window, it treats massive documents like a searchable database the model can query on demand."
+ 14 Jan 2026 | bare arXiv paper drop | Shares arXiv 2601.04620 with no commentary. | https://arxiv.org/html/2601.04620v1 | Bare arXiv link posted with no commentary.
+ 29 Jan 2026 | bare arXiv paper drop | Shares arXiv 2503.23037 with no commentary. | https://arxiv.org/abs/2503.23037 | Bare arXiv link posted with no commentary.
+ 2 Mar 2026 | arXiv: LLMs discovering MARL algorithms | AlphaEvolve, an evolutionary coding agent, automatically discovers new multiagent learning algorithms beyond hand-tuned CFR and PSRO variants. | https://arxiv.org/abs/2602.16928 | MARL advances in imperfect-information games have depended on manual iterative refinement; families like Counterfactual Regret Minimization rest on solid theory but their best variants rely on human intuition. The work proposes AlphaEvolve, an evolutionary coding agent, to automatically discover new multiagent learning algorithms.
+ 9 Mar 2026 | bare arXiv paper drop | Shares arXiv 2505.04171 with no commentary. | https://arxiv.org/abs/2505.04171v1 | Bare arXiv link posted with no commentary.
+ 19 Mar 2026 | arXiv: corrigibility in multi-agent games | Shares a paper on corrigibility and alignment in multi agent games. | https://arxiv.org/pdf/2501.05360v1 | "On Corrigibility and Alignment in Multi Agent Games"

+++2 Tools tested
+ 14 Dec 2025 | tool: CLoD multi-model gateway | One API to 26 plus models with built-in programmable cost, safety and compliance controls. | https://clod.io/ | "CLōD gives you one API to access 26+ models with built-in programmable cost, safety, and compliance controls."
+ 14 Dec 2025 | tool: Labelbox data labelling | Labelbox labels data and evaluates models, tagging images, rating responses and transcribing audio for more accurate systems. | https://labelbox.com/ | "Labelbox labels your data (tagging images, rating model responses, transcribing audio) and evaluates your AI models so you can train more accurate systems"
+ 14 Dec 2025 | tool: Mira recording smart glasses | Glasses that record conversations and surface details through a private display, from the team behind the viral spy glasses. | https://trymira.com/ | "Mira are smart glasses that record your conversations and meetings, then instantly pull up details when you need them through a private display (raised $6.6M, from the team behind those viral spy glasses)."
+ 14 Dec 2025 | tool: CamelCamelCamel price tracking | Amazon price history tracker used in academic studies auditing Amazon's dynamic price changes. | https://uk.camelcamelcamel.com/ | "used in academic studies to audit Amazon's dynamic changes"
+ 14 Dec 2025 | tool: Keepa longitudinal price data | Keepa price tracker, used for longitudinal price analysis in algorithmic-pricing research. | https://keepa.com/#!app | "used for longitudinal price analysis in algorithmic-pricing research"
+ 14 Dec 2025 | tool: Who Targets Me ad transparency | Political ad transparency tooling for individuals, academics and journalists; Ed notes it was built at Newspeak House. | https://whotargets.me/en/ | "Who Targets Me makes online political ads more transparent … with tools for individuals, data and support for academics, researchers and journalists, and advocating for better policy from platforms, regulators and governments." Ed: built at Newspeak House.
+ 14 Dec 2025 | tool: Permission Slip | Shares the Permission Slip consumer data rights tool from the Civic Tech Guide. | https://app.civictech.guide/p/permission-slip/r/recwXpliV8Hhs8HPc | Shares the Permission Slip consumer data rights tool from the Civic Tech Guide.
+ 12 Jan 2026 | tool: ralph-wiggum self-referential loop plugin | Claude Code plugin that keeps an agent iterating until defined conditions are met. | https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum | "Iterative, self-referential AI development loops in Claude Code with this plugin - the agent will keep going until defined conditions are met"
+ 12 Jan 2026 | tool: zeroshot multi-agent coordination engine | Planner, worker and validators in isolated contexts iterating until validators approve, with failures feeding the next internal loop. | https://github.com/covibes/zeroshot | "a multi-agent coordination engine for Claude Code. It runs a planner, worker, and validators in isolated contexts, iterating until validators approve or reject with concrete issues." It uses failures as input to the next iteration and decides whether to retry, revise strategy, or stop.
+ 13 Jan 2026 | tool: minimal RLM implementation | Alex Zhang's stripped-down reference implementation of recursive language models. | https://github.com/alexzhang13/rlm-minimal | Bare link to a stripped-down reference implementation of recursive language models.
+ 29 Jan 2026 | tool: Mistral Vibe | Shares Mistral's Vibe product page. | https://mistral.ai/products/vibe | Bare link to Mistral's Vibe product page.
+ 29 Jan 2026 | tool: WebArena agent benchmark | Shares the WebArena environment for benchmarking web agents. | https://webarena.dev/ | Bare link to the WebArena environment for benchmarking web agents.
+ 29 Jan 2026 | tool: skills.sh registry | Shares skills.sh, a directory for agent skills. | https://skills.sh/ | Bare link to skills.sh, a directory for agent skills.
+ 29 Jan 2026 | tool: compound engineering plugin | Shares EveryInc's compound engineering plugin repository. | https://github.com/EveryInc/compound-engineering-plugin | Bare link to EveryInc's compound engineering plugin repository.
+ 31 Jan 2026 | tool: Claude supermemory | Supermemory builds episodic and static user profiles, injecting context and capturing memory snapshots, replacing her clunky manual knowledge docs. | https://github.com/supermemoryai/claude-supermemory | "Launched today!! So exciting." "I've been running a similar style loop with manually updating my knowledge docs with refreshed memory docs. But it's been a clunky RAG process … supermemory MCP looks like it context injects and captures memory snapshots over time throughout the convo! Need to try!"
+ 4 Feb 2026 | untagged tool link | Shares hydra.opiusai.com with no commentary. | https://hydra.opiusai.com/ | Bare link posted with no commentary.
+ 5 Feb 2026 | tool: nanobot | Shares HKUDS nanobot repository. | https://github.com/HKUDS/nanobot | Bare link to the HKUDS nanobot repository.
+ 5 Feb 2026 | tool: SummonAIKit | Shares summonaikit.com. | https://summonaikit.com/ | Bare link posted with no commentary.
+ 14 Feb 2026 | tool: arena.ai code arena | Shares arena.ai in code modality. | https://arena.ai/?chat-modality=code | Bare link posted with no commentary.
+ 19 Feb 2026 | tool: memories.sh durable agent state | Durable local-first state and a TypeScript SDK for wiring memory into any LLM; she jokes someone already built her idea. | https://memories.sh/ | "Durable state for coding agents and a TypeScript SDK for AI apps. Store rules, recall context, and wire memory into any LLM - local-first, sync when you need it." Her comment: "lol not a single unique thought - found a project for this"
+ 26 Feb 2026 | tool: agentprivacy.ai | Shares agentprivacy.ai. | https://agentprivacy.ai/ | Bare link posted with no commentary.
+ 26 Feb 2026 | tool: Inspect Scout | Shares Meridian Labs' inspect_scout evaluation tooling. | https://meridianlabs-ai.github.io/inspect_scout/ | Bare link to Meridian Labs' inspect scout evaluation tooling.
+ 26 Feb 2026 | tool: openwork.software | Shares openwork.software. | https://openwork.software/ | Bare link posted with no commentary.
+ 4 Mar 2026 | tool: LangWatch agent observability | OpenTelemetry-style platform to trace, simulate, evaluate and monitor agents end to end, with a closed eval loop and annotation queues. | https://github.com/langwatch/langwatch | "The complete platform for LLM evaluation and AI agent testing … trace, evaluate, simulate, and monitor your agents end-to-end." She adds: "Open telemetry tool for ai agents! … I'm very excited about this and need to give it a run."

+++ Ideas
+ 14 Dec 2025 | idea: newsletters piped into Matrix | An app that forwards newsletters sent to a dedicated Gmail alias into her Matrix channel and eventually her blog. | - | "an app that takes newsletters and emails to sugaroverflow+nwspk@gmail.com and pushes them to my matrix channel (which will eventually publish to my blog)"
+ 14 Dec 2025 | idea: algorithmic pricing watchdog | A system that monitors retailers, scrapes prices and flags patterns suggesting personalised or dynamic pricing. | - | "Algorithmic-Pricing Watchdog - A system that monitors online retailers, scrapes prices, and detects unusual patterns that suggest personalised or dynamic pricing."
+ 14 Dec 2025 | idea: dynamic pricing auditor | A tool simulating multiple personas across locations, devices and histories to test whether prices are adjusted unfairly. | - | "Dynamic-Pricing Auditor - A tool that simulates multiple user personas (different locations, devices, histories) to see whether prices are being adjusted unfairly."
+ 14 Dec 2025 | idea: stalker pricing exposure | A tool that shows people how their personal data influences the price they are shown. | - | "Stalker Pricing Exposure - tracks how your personal data influences the price you're shown, if at all."
+ 31 Jan 2026 | idea: animal crossing for AI agents | A one-line idea for an Animal Crossing style world populated by AI agents. | - | "animal crossing but for ai agents"
+ 1 Feb 2026 | idea: agent that summarises the channel | An agent to summarise this Matrix channel, possibly via Onyx. | - | "an agent to summarize the channel and or onyx"
+ 4 Feb 2026 | idea: bot tags matching fieldwork | A bot that reads the cohort knowledge production spreadsheet and tags people whose fieldwork matches. | - | "Bot that reads our knowledge production spreadsheet and tags people on matching fieldwork"
+ 4 Feb 2026 | idea: catch-up bot with knowledge graph | A bot that spots who has not read Matrix lately and offers a queryable knowledge graph and summary. | - | "bot that knows who hasn't viewed matrix in a while, offers queryable knowledge graph + summary"
+ 19 Feb 2026 | idea: memory across agentic tools | Reading a tweet, she notes that memory portability between agentic tools is a real gap. | https://x.com/JuanPa/status/2024269239444807758 | "was reading the above tweet and thinking about how memory across agentic tools is a gap"
+ 9 Mar 2026 | idea: portable agent customisations | A coworker notes it is hard to copy agent customisations across tools, or see how frontend engineers configure theirs. | - | "talked to a coworker today about how it's hard to copy over agent customizations across different tools and contexts - it would be great to see how our frontend engineers are using their custom agents differently from me (backend)"
+ 9 Mar 2026 | idea: visual agent builder | A tool for visually constructing a multi-agent ecosystem that an agent then builds for you, inspired by Gas Town. | - | "a visual agent builder - I was thinking about how effective gastown was for multi-agent workflows and separation of specialities and sub-agents - could there a be tool that allows people to visually construct the ecosystem and then an agent that builds it for them?"
+ 9 Mar 2026 | idea: staged evaluation tiers for awards | Seven tiers from one LLM ranking implicitly to constitutional human editing, studying how values shape AI rankings as political tools. | - | "politech awards spin-off: a staged evaluation system that reveals how values shape AI-driven rankings of projects." Tier 0 one LLM ranks using implicit values; Tier 2 multiple models expose ideological differences; Tier 6 humans intervene only constitutionally; Tier 7 collect preferences to train a smaller aligned model.
+ 10 Mar 2026 | idea: a house guide one-pager | Suggests a short house guide on the cohort website; Ed notes the example is for a coworking space. | - | She shares a house guide example. Ed: "note that this is for a coworking space." Fatima: "i think we could have a much smaller one like a one pager", "on our website".
+ 10 Mar 2026 | idea: zapier for agent swarms | Wants visual orchestration for swarms, then finds aitable, dazl, deforge, mindpal, langflow and sim already doing it. | https://aitable.ai/ | "zapier but for agent swarms" — then "found one!" and a run of existing tools: aitable.ai, dazl.dev, deforge.io, mindpal.space, langflow.org and simstudioai/sim.

+++ Field discussions
++ 14 Dec 2025 | field notes room opens publicly | Fatima launches a public Matrix field-notes channel with open history so bots can read it and posts can be shared.
welcome to my field notes channel! it took a few tries to get this right, but it's a public channel with history set to anyone - so it can be used by bots and shared with everyone 🎉

*(some of these posts were from Nov 23 - Dec 12, but had to migrated from the previous, encrypted channel)*
++ 14 Dec 2025 | Hannah Aubry and decentralised social platforms | Curiosity about Hannah's career path, plus Fatima's older Open Source Summit talk on Mastodon, Bluesky and decentralised protocols.
I'm curious to see how this plays out and connect with Hannah about her plans! She was previously on their Board and has worked in Open Source and Developer Relations - so it's also interesting career path.

https://www.linkedin.com/posts/hannahaubry_i-am-thrilled-to-share-the-news-that-i-joined-ugcPost-7396472394892091392-H1Nl

2 years ago, I gave a talk at Open Source Summit called "Adapting to the New Era of Social Platforms in Open Source" exploring the explosion of Mastodon, Blue Sky / the pros and cons of decentralized social platforms and the protocols powering them
It was still early and I didn't totally understand all the protocols at the time
Then the hype died down and well people didn't pick up Mastodon as much as hoped..
So I'm interested to see them invest in community!! And see if they're competing directly with some of the choices that other mainstream platforms are making (re data and privacy)
https://www.youtube.com/watch?v=UEyRQWogbxk
originally posted on Nov 20, 2025
→ https://www.linkedin.com/posts/hannahaubry_i-am-thrilled-to-share-the-news-that-i-joined-ugcPost-7396472394892091392-H1Nl
++ 14 Dec 2025 | homework from Matt Stempeck | Pick one interesting thing per Civic Tech Guide category; she flags open source AI, algo transparency, audits, AI literacy.
Homework from Matt Stempeck

Tell me about 1 thing you find interesting from each section in our next check-in. If you rule it out entirely, just skip it. https://app.civictech.guide/categories

- ethical AI safety space (includes prosocial alternatives)
- governance
- public sector AI
- **open source AI**
- deepfakes
- **algo transparency** - actively evolving area given difficulty of explainability
- **audits**
- **ai iteracy** - AI slop vs code slop

_originally posted on Nov 20, 2025_
→ https://app.civictech.guide/categories
++ 14 Dec 2025 | homework from Six | Two readings: field-building and the epistemic culture of AI safety, and The Fallacy of AI Functionality.
Homework from Six

Field-building and the epistemic culture of AI safety
(https://firstmonday.org/ojs/index.php/fm/article/view/13626)
The Fallacy of AI Functionality (https://facctconference.org/static/pdfs_2022/facct22-3533158.pdf)

_originally posted on Nov 20, 2025_
→ https://firstmonday.org/ojs/index.php/fm/article/view/13626
++ 14 Dec 2025 | cline-bench benchmarks real engineering problems | Cline's new benchmark initiative evaluates agents on real open-source repository work rather than lab puzzles, continuing their transparency commitment.
https://cline.bot/blog/cline-bench-initiative

Lots of enthusiasm around the release of cline-bench this week - the mission is to benchmark agents in real-world engineering problems and not lab puzzles. And only open source repositories are eligible.

Cline's whole thing has always been open source and transparency - so it's great to see them committed to that.
originally posted on Nov 21, 2025
→ https://cline.bot/blog/cline-bench-initiative
++ 14 Dec 2025 | CrowdStrike finds hidden AI-coded vulnerabilities | Research showing DeepSeek-R1 produces severely vulnerable code up to fifty percent more often on politically sensitive CCP topics.
https://www.crowdstrike.com/en-us/blog/crowdstrike-researchers-identify-hidden-vulnerabilities-ai-coded-software/

“However, we found that when DeepSeek-R1 receives prompts containing topics the Chinese Communist Party (CCP) likely considers politically sensitive, the likelihood of it producing code with severe security vulnerabilities increases by up to 50%."
→ https://www.crowdstrike.com/en-us/blog/crowdstrike-researchers-identify-hidden-vulnerabilities-ai-coded-software/
++ 14 Dec 2025 | community interest companies explained | Government guidance on CICs, learned via Fred's session on music, artists and open source; companies required to benefit community.
https://www.gov.uk/government/publications/community-interest-companies-how-to-form-a-cic/community-interest-companies-guidance-chapters
Learned about CIC from Fred’s session on music and artists and open source. Type of company that is required to benefit the community rather than make a profit
→ https://www.gov.uk/government/publications/community-interest-companies-how-to-form-a-cic/community-interest-companies-guidance-chapters
++ 14 Dec 2025 | Ed on CIC tradeoffs | Ed Saperia calls CICs a halfway house between company and charity, weaker on tax and funding, but publicly registered.
Ed Saperia:

sort of a halfway between a regular company and a charity

generally considered less good because you don't get the same tax advantages and it's not eligible for lots of kinds of funding

it's cool that there's a public register though
++ 14 Dec 2025 | question: roles that aren't committees | Asks what non-committee role structures look like; Ed answers individual roles, because committees make responsibility unclear.
what are some structures of roles that aren’t committees?

_originally posted on Nov 23, 2025_

Ed Saperia

Individual roles!

fatima

Like a finite set of roles?
For example

“website maintainer”
“ration club manager”
Based on duties?
Or more broad?

Ed Saperia

The idea of roles is that they make responsibility clear
Committees don’t do that very well
++ 14 Dec 2025 | Biden executive order 14110 | Links the 2023 order on safe, secure and trustworthy AI requiring developers to share safety testing results.
[Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence - Biden's order (Executive Order 14110)](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence):

Issued in October 2023, this order aimed to create guidelines for responsible AI use in government, require developers to share safety testing results, and promote trustworthy AI.

_originally posted on Nov 24, 2025_
→ https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence
++ 14 Dec 2025 | anarchy reading list from Ed | Anarchic Agreements field guide to collective organising, plus Uri Gordon on anarchism and the politics of technology.
reading on anarchy from Ed

https://www.abebooks.co.uk/9781629639635/Anarchic-Agreements-Field-Guide-Collective-162963963X/plp
https://theanarchistlibrary.org/library/uri-gordon-anarchism-and-the-politics-of-technology
→ https://www.abebooks.co.uk/9781629639635/Anarchic-Agreements-Field-Guide-Collective-162963963X/plp
++ 14 Dec 2025 | swiss cheese model for AI safety | arXiv taxonomy and reference architecture for multi-layered runtime guardrails around foundation-model agents, hard because agent behaviour is non-deterministic.
[ Swiss Cheese Model for AI Safety](https://arxiv.org/abs/2408.02205): A Taxonomy and Reference Architecture for Multi-Layered Guardrails of Foundation Model Based Agents

Researchers are exploring better ways to design guardrails to ensure that the runtime behavior of FM-based agents remains within specific boundaries. Nevertheless, designing effective runtime guardrails is challenging due to the agents' autonomous and non-deterministic behavior. The involvement of multiple pipeline stages and agent artifacts, such as goals, plans, tools, at runtime further complicates these issues.
→ https://arxiv.org/abs/2408.02205
++ 14 Dec 2025 | introduction to AI safety textbook | Shares the free online AI Safety, Ethics, and Society book as a foundational reference.
[Introduction to AI Safety, Ethics, and Society](https://www.aisafetybook.com/)
→ https://www.aisafetybook.com/
++ 14 Dec 2025 | RL-learned context compression | Rajan's writeup on training Qwen to invent its own tenfold context compression so research agents can run for days.
https://www.rajan.sh/llm-compression

in order to have research agents that can run for days, we need context compaction

i used RL to have LLMs naturally learn their own 10x compression! Qwen learned to pack more info per token (ie use Mandarin tokens, prune text)
→ https://www.rajan.sh/llm-compression
++ 14 Dec 2025 | NSF national AI research resource | Links the NAIRR focus area page on US public AI research infrastructure.
https://www.nsf.gov/focus-areas/ai/nairr
→ https://www.nsf.gov/focus-areas/ai/nairr
++ 14 Dec 2025 | claude skill for concise output | Shares a community Claude skill file that constrains agents to concise output.
https://github.com/NTCoding/claude-skillz/blob/main/concise-output/SKILL.md
→ https://github.com/NTCoding/claude-skillz/blob/main/concise-output/SKILL.md
++ 14 Dec 2025 | bitter lesson of LLM extensions | Sawyer Hood argues hand-rolled agent and plugin scaffolding collapses under complexity; models will learn to compose capabilities themselves.
https://www.sawyerhood.com/blog/llm-extension

“The Bitter Lesson of LLM Extensions” argues that as we bolt agents, tools, and plugins onto LLMs, the real “bitter lesson” is that most hand-rolled extension systems collapse under complexity, and the long-term win will be letting models themselves learn how to adapt and compose capabilities on the fly.
→ https://www.sawyerhood.com/blog/llm-extension
++ 14 Dec 2025 | New York algorithmic pricing law | New York's Algorithmic Pricing Disclosure Act took effect November 2025, requiring disclosure when personal data sets an individual's price.
[New York’s Algorithmic Pricing Disclosure Law Takes Effect](https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/new-yorks-algorithmic-pricing-disclosure-law-takes-effect)

New York Attorney General Letitia James recently announced that on November 10, 2025, New York’s Algorithmic Pricing Disclosure Act (the ​“Act”) officially took effect. Codified at N.Y. Gen. Bus. Law § 349-a, the Act requires that companies making use of consumer-specific data to set prices clearly and inform consumers when those prices have been determined by an algorithm. It was enacted as part of New York’s omnibus budget bill, which also introduced other consumer protection measures, including amendments to the state’s Automatic Renewal Law that we covered in June. This measure reflects emerging legislative interest in addressing ​“surveillance pricing”, or individualized pricing practices that rely on personal data to adjust the cost of goods or services.
→ https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/new-yorks-algorithmic-pricing-disclosure-law-takes-effect
++ 14 Dec 2025 | F-Secure on hidden online premiums | Explainer showing two shoppers can see different prices at the same moment based on device, postcode or location.
[Surveillance Pricing Is Quietly Raising the Cost of Online Shopping](https://www.f-secure.com/en/partners/insights/surveillance-pricing-is-quietly-raising-the-cost-of-online-shopping)

You may be paying a hidden premium when shopping online, determined not by what you buy or when you buy it, but by who you are. In fact, two people can look at the same product at the same moment yet see completely different prices—not because of sales, stock levels, or errors, but simply because one is shopping on a Mac, living in a particular zip code, or standing in a store's parking lot.

That's the result of surveillance pricing, where online retailers use advanced data collection, predictive algorithms, and AI to profile shoppers, predict the maximum each person would be willing to pay, and set prices within milliseconds.
→ https://www.f-secure.com/en/partners/insights/surveillance-pricing-is-quietly-raising-the-cost-of-online-shopping
++ 14 Dec 2025 | Karpathy on Software 2.0 | Karpathy argues AI is best understood as a new computing paradigm automating digital information processing, easily automating what you can verify.
[Software 2.0 easily automates what you can verify- Karpathy / x](https://x.com/karpathy/status/1990116666194456651)

various historical precedents: electricity, industrial revolution, etc., I think the strongest analogy is that of AI as a new computing paradigm (Software 2.0) because both are…
AI has been compared to various historical precedents: electricity, industrial revolution, etc., I think the strongest analogy is that of AI as a new computing paradigm (Software 2.0) because both are fundamentally about the automation of digital information processing.
→ https://x.com/karpathy/status/1990116666194456651
++ 14 Dec 2025 | Ed suggests algorithmic management | Ed points to algorithmic management, the ETUC trade union manual on negotiating the algorithm, and the Digital Statecraft manifesto.
Readings/Advice from Ed Saperia

You might be interested in "Algorithmic Management"

Similar to surveillance algorithms, but with a focus on the rights of the people being managed

Six will have things to say on this

This kind of thing https://www.etuc.org/sites/default/files/publication/file/2025-09/Negotiating%20the%20Algorithm%20-%20Trade%20Union%20Manual_ETUC%20%28updated%29.pdf

I'd also engage with the "AI in government" folks, ask Andreas will probably have suggestions for how to get plugged into this
Also maybe go find out who these people are https://digitalstatecraft.academy/the_digital_statecraft_manifesto_v1-0/
→ https://www.etuc.org/sites/default/files/publication/file/2025-09/Negotiating%20the%20Algorithm%20-%20Trade%20Union%20Manual_ETUC%20%28updated%29.pdf
++ 14 Dec 2025 | Aadi shares tech and law syllabus | Cornell Tech/Law Colloquium plus an INFO1200 syllabus covering technology, law and surveillance curricula.
reading  from Aadi

- broader tech, law, and surveillance, curriculums (syllabus attached)
- Tech/Law Colloquium – Exploring new developments at the intersection of law and information technology https://tlc.cis.cornell.edu/

Syllabus-FA25-INFO1200-LEC001-DRAFT.pdf
→ https://tlc.cis.cornell.edu/
++ 14 Dec 2025 | Hirschman on exit and voice | Exit, Voice, and Loyalty as a framework for disengagement, silence and morale decay in collective projects.
Albert O. Hirschman – Exit, Voice, and Loyalty https://www.hup.harvard.edu/books/9780674276604

Provides a precise framework for understanding disengagement, silence, and morale decay in collective projects.
→ https://www.hup.harvard.edu/books/9780674276604
++ 14 Dec 2025 | Olson on collective action | The Logic of Collective Action explains why people rationally disengage from shared projects they believe in.
Mancur Olson – The Logic of Collective Action
https://www.hup.harvard.edu/books/9780674537514

Explains why people rationally disengage from shared projects even when they believe in them.
→ https://www.hup.harvard.edu/books/9780674537514
++ 14 Dec 2025 | Scott on seeing like a state | Seeing Like a State on how simplified or rule-free systems erase lived experience and reproduce inequality.
James C. Scott – Seeing Like a State
https://yalebooks.yale.edu/book/9780300078152/seeing-like-a-state/

Helps explain why simplified or “rule-free” systems often erase lived experience and reproduce inequality.
→ https://yalebooks.yale.edu/book/9780300078152/seeing-like-a-state/
++ 14 Dec 2025 | Matrix rooms must be unencrypted for bots | mstem and Ed advised to use public-to-space rooms with readable history, because bots cannot operate in encrypted channels.
mstem: Ed Saperia - I think I finally fixed the channel issues. For bot related channels or notes like these, we should recommend `public to space` and `anyone can read history at anytime` instead of encrypted because bots can't run then.

thank you!! :)
++ 14 Dec 2025 | reread the Tyranny of Structurelessness | Alex Vince recommends revisiting Jo Freeman's essay with a new lens after the governance discussions.
based on this, it might be good to read the Tyranny of Structurelessness with a new lens (as recommended by alex vince) https://www.jofreeman.com/joreen/tyranny.htm
→ https://www.jofreeman.com/joreen/tyranny.htm
++ 14 Dec 2025 | Matt on research strategy | Mentoring notes on hosting small niche events, coffee chats, landscape analysis, expert interviews and mapping levers of change.
Mentoring Meeting with Matt on Research Strategy - Notes:

**Event Strategy**

- Host your own small events and invite the specific people you want to go deeper with.
- Keep the event description narrow and niche to attract the right crowd.
- A tight group of six deeply interested people beats a larger, more superficial panel.
- Could it be an event series?
- Consider hallway-track style encounters (e.g., Dan from CFA) as a model for organic depth.
- Once you specify your focus, faculty can help connect you to their networks.
- Bring in at least one “big name” whose presence would be meaningful for your team and attendees.

**Formats & Precedents to consider**

- Practitioner-focused, research-aligned format.
- Loosely structured brainstorms and “brain trust” feedback sessions.
- People enjoy showing up to help shape something early.
- Newspeak House as a reference for a shorter, high-density event.
- Coffee chats:

    - Come prepared with targeted questions and a notebook.
    - Make the ask explicit: e.g., informing product direction or contributing to your research.

**Exploration & Mapping**

- Go deep first, then broaden.
- Identify the key emerging “lights” in the space.
- It’s still early enough that you can help shape the field.
- As activity appears, start mapping:

    - Levers of change
    - Tools
    - Where your solution fits

**Landscape Analysis**

- Clarify who’s doing what and where.
- Track major players, their approaches, and their theories of change.
- Situate yourself through expert interviews:

    - What’s effective?
    - What has and hasn’t worked?
    - Where is the field heading?
    - What interventions are promising?
    - What problems are already solved?
    - Where are the real gaps—especially ones shaped by your viewpoint and skillset?

**Community**

- Identify the communities you want to work with and start building relationships through events, chats, and mapping work.
++ 14 Dec 2025 | spark test across AI subfields | Rates roughly twenty AI governance, technical and adjacent areas by personal spark; evals, RAG, agentic workflows and legibility score highest.
**Spark Test!**

After talking to Matt earlier this week and going over the civic tech guide categories and some of the Deep Research I ran with LLMs on "areas in the periphery of AI", I collected a "spark test list" to react to different scopes.

I left myself some notes on why I reacted a certain way. Some of the Applied areas I'm more familiar. For others, I briefly looked up:

- what it means
- a concrete example
- technical connections
- a representative source/research backing

(Matrix doesn't support Markdown tables so lots of text coming)

---

**✨ GOVERNANCE / SAFETY**

**Model evals & red-teaming**

• Description: Testing risky or dangerous model behaviors.

• Example: ARC Evals; UK AISI Public Evaluations.

• Spark: ⭐⭐⭐⭐⭐

• Notes: Dangerous-behavior tests, identity inference, misuse evals, benchmark building, surveillance algorithms.

**Compute governance**

• Description: Policies for access to advanced compute.

• Example: US BIS Export Controls; EU Chips Act.

• Spark: ⭐

• Notes: Not into infra; tiny curiosity about hardware geopolitics.

**Open-source licensing**

• Description: Rules for using open-model weights.

• Example: OpenRAIL Licenses.

• Spark: 🚫

• Notes: No interest.

**Open-source AI alternatives**

• Description: Open-weight model ecosystems.

• Example: Mistral; Falcon; Meta Llama.

• Spark: ⭐⭐⭐

• Notes: Curious who trains open models + how they evolve.

**Global coordination**

• Description: International safety alignment + incident sharing.

• Example: G7 Hiroshima AI Safety Process.

• Spark: ⭐⭐⭐⭐

• Notes: Interested in shared benchmarks + global reporting.

**Safety standards**

• Description: Rules for evaluations, audits, and compliance.

• Example: NIST AI RMF; ISO/IEC 42001.

• Spark: ⭐⭐

• Notes: Important but slow adoption; relevant when tied to eval specs.

**Institutional design**

• Description: Creating new AI oversight bodies.

• Example: EU AI Office (2025).

• Spark: 🚫

• Notes: No interest.

**Public-sector AI workflows**

• Description: How governments adopt and use AI.

• Example: Estonia KRATT AI.

• Spark: ⭐⭐⭐

• Notes: Interesting but slow-moving.

---

**⚙️ APPLIED TECHNICAL**

**RAG architectures**

• Description: Retrieval + generation pipelines.

• Example: Microsoft GraphRAG.

• Spark: ⭐⭐⭐⭐⭐

• Notes: Full technical space; deeply compelling.

**Interpretability**

• Description: Understanding model/system behavior.

• Example: Anthropic Mech-Interp; OpenAI System Behavior Profiles.

• Spark: ⭐⭐

• Notes: Interested in agent debugging + retrieval attribution (not circuits-level).

**Interoperability (MCP)**

• Description: Protocols for cross-tool coordination.

• Example: Model Context Protocol (MCP).

• Spark: ⭐⭐⭐⭐

• Notes: Very into systems interfaces + shared protocols.

**Model editing**

• Description: Modify model knowledge without retraining.

• Example: ROME; MEMIT.

• Spark: ⭐⭐⭐

• Notes: Curious about targeted knowledge changes.

**Synthetic data**

• Description: AI-generated datasets.

• Example: NVIDIA NeMo synthetic data.

• Spark: ⭐⭐

• Notes: Mild interest, mostly for reasoning augmentation.

**Agentic workflows**

• Description: Multi-step, tool-using systems.

• Example: OpenAI Systems Agents.

• Spark: ⭐⭐⭐⭐⭐

• Notes: Huge spark; core of your daily work but still technically exciting.

**Edge inference**

• Description: Running models locally on-device.

• Example: Apple Neural Engine.

• Spark: 🚫

• Notes: Not a point of interest.

**Secure compute / TEEs**

• Description: Enclave-based privacy-preserving execution.

• Example: Azure Confidential Compute (SGX).

• Spark: 🚫

• Notes: Not compute-focused.

---

**🌍 ADJACENT**

**AI political economy**

• Description: How power + access shape AI ecosystems.

• Example: Data & Society AI Supply Chain Research.

• Spark: ⭐⭐⭐⭐⭐

• Notes: Interested in access barriers, inference pricing, multi-agent compute workarounds, surveillance as a business model

**Legibility & bureaucracy**

• Description: How systems demand structured, interoperable inputs.

• Example: [GOV.UK](http://gov.uk/) Notify & Forms.

• Spark: ⭐⭐⭐⭐⭐

• Notes: Deep interest in interoperability, eval design, hallucination cleanup.

**Identity & epistemic justice**

• Description: Bias + inference harms.

• Example: MIT Gender Shades.

• Spark: ⭐

• Notes: Important work but not your expertise.

**Global South perspectives**

• Description: AI outside Western contexts.

• Example: Masakhane NLP.

• Spark: 🚫

• Notes: No expertise.

**Climate-aligned scaling**

• Description: Energy constraints on model scaling.

• Example: Stanford CRFM Energy Reports.

• Spark: 🚫

• Notes: Not your focus.

**Law & rights frameworks**

• Description: Legal requirements shaping technical AI behavior.

• Example: EU AI Act; NYC Local Law 144.

• Spark: ⭐⭐⭐⭐

• Notes: Interested in explanation rights, interoperability regulation, surveillance laws, eval constraints, biometric regulation

**Anthropological analyses**

• Description: How humans adapt around AI systems.

• Example: Data & Society STS ethnography.

• Spark: 🚫

• Notes: Not an area of interest.
++ 14 Dec 2025 | three clusters of topics | Groups sparks into system-level evaluation and safety, governance as technical constraint, and AI access and alternatives.
Field Note: Clusters of Topics ✨️

Cluster A --> System-Level Evaluation & Safety

**Core question:**

How do complex AI systems (RAG + agents + tools) fail especially in surveillance-like ways?

**Included subdomains:**

• Model evals & red-teaming 4⭐️

• Agentic workflows 4⭐️

• RAG architectures 4⭐️

• System-level interpretability 4⭐️

**Civic Tech Guide alignment:**

• Ethical AI Safety Space

• Algo Transparency / Explainability

• AI Literacy (RAG/agent debugging)

**Why this matters:**

System behaviors → real harms (identity inference, hallucination chains, autonomy drift).

Evaluations don’t catch these.

Cluster B --> Governance as Technical Constraint

**Core question:**

How do laws and institutions enforce transparency and safety through technical requirements?

**Included subdomains:**

• Legibility & bureaucracy 4⭐️

• AI political economy 4⭐️

• Law & rights frameworks 4⭐️

• Global coordination 4⭐️

**Civic Tech Guide alignment:**

• Governance

• Public Sector AI

• Audits

• Algo Transparency (policy → compliance)

**Why this matters:**

Rules → interfaces + eval methods.

Governance becomes architecture.

Cluster C --> AI Access & Alternatives

**Core question:**

Who gets to build and evaluate AI and who gets locked out?

**Included subdomain:**

• Open-source AI alternatives 4⭐️

**Civic Tech Guide alignment:**

• Open Source AI

• Ethical AI Safety Space (broader evaluability)

**Why this matters:**

Access = oversight.

Oversight = safety.

---

useful to come back to these later on after I've gone down a route.
++ 14 Dec 2025 | stage one exploration and discovery plan | December plan to map emergent behaviours, eval blind spots and governance constraints, aiming for candidate problems by January.
**Field Note - Stage 1: Exploration & Discovery**

My instincts are leaning towards Cluster A (system-level behavior evaluation) and Cluster B (governance as technical constraint). I feel like I may be obliged to support to Cluster C (open source)because of my background, but I worry that area moves slow. May deprioritize for now and chase some other sparks.

Ever since I've started reading on surveillance algorithms, I've been a little obsessed!

I’m discovering they’re part of a broader class of systems where AI makes impactful decisions we can’t fully observe or evaluate. I’m mapping that category so I understand where surveillance fits in and which gaps matter most.

My goal for the next few weeks is test whether these instincts hold up under actual exposure to the existing projects and research and papers! I want to be at a point in January where I can start scheduling coffee chats and doing some of those landscape analysis interviews (with a more clear scope)

**Timeline:** December 2025
**Purpose:** Gather enough understanding of the space to make a confident scope decision.

**Goals:**

Build a foundational understanding of:

• emergent behaviors in multi-component AI systems (agents + RAG, etc.)

• current evaluation methods and where they fall short

• transparency and accountability requirements (e.g surveillance algorithms, dynamic pricing)

**Map the problem space by collecting:**

• projects, research sources, and case studies

• real-world examples where behaviors exceed what we can observe or govern

• sparks of “ugh someone needs to fix this”

**Expected outputs by end of December:**

• A Problem Space Map summarizing behaviors, evaluation blind spots, governance constraints, and actors

• 5–7 logged examples where these tensions show up in the wild

• 3–5 candidate problems that feel both real and energizing

Which emergent AI decision behaviors, especially those that infer sensitive information and adjust outcomes dynamically, are hardest to observe, evaluate, or challenge today, and what governance and technical mechanisms could make them accountable?

_originally posted on Dec 12, 2025_
++ 15 Dec 2025 | Arnstein's ladder of citizen participation | Arnstein's 1969 paper names informing, consultation and placation as tokenism, matching her sense of procedural futility.
A LADDER OF CITIZEN PARTICIPATION, Sherry R. Arnstein
https://www.historyofsocialwork.org/1969_ENG_Ladderofparticipation/1969%2C%20Arnstein%2C%20ladder%20of%20participation%2C%20original%20text%20OCR%20C.pdf

What you’re calling procedural futility is basically: the process invites voice but doesn’t route it into consequential decisions. When people learn (even once or twice) that objections don’t change the plan, “participation” becomes a performance: you talk, the document grows, and then the authority proceeds as originally intended.

That maps cleanly onto Arnstein’s ladder: rungs like Informing / Consultation / Placation are “tokenism” — people can “be heard,” but they lack power to ensure their views are heeded.
→ https://www.historyofsocialwork.org/1969_ENG_Ladderofparticipation/1969%2C%20Arnstein%2C%20ladder%20of%20participation%2C%20original%20text%20OCR%20C.pdf
++ 15 Dec 2025 | Nancy Fraser on rethinking recognition | Fraser shifts recognition from a cultural identity model to a status model removing institutional barriers to peer participation.
Nancy Fraser, Rethinking Recognition
https://newleftreview.org/issues/ii3/articles/nancy-fraser-rethinking-recognition

Nancy Fraser’s approach to recognition is to shift from a culturalist interpretation of the Hegelian model based on the achievement of a positive self-image, to a Weberian model based on inclusion in an institutionalized status order. In what follows I am quoting from her May 2000 article in New Left Review, Rethinking Recognition. Here she contrasts the “identity model” of recognition underlying affirmative anti-sexism and anti-racism movements, for example, which aim to valorize group identity, to a “status model” whose aim is to remove institutional barriers to individual members of the group achieving participation as peers in the wider society.
→ https://newleftreview.org/issues/ii3/articles/nancy-fraser-rethinking-recognition
++ 15 Dec 2025 | three framing questions for system behaviour | Where model behaviour ends and system behaviour begins, what developers only think they control, and which failures evals miss.
1. System boundaries

Where does “model behavior” end and “system behavior” begin?

What components introduce new attack or inference surfaces?

2. Control illusion

What do developers think they control?

What actually controls outputs in practice?

3. Evaluation blind spots

Which failures are invisible to standard model evals?

What would you need to log or instrument to even notice them?
++ 17 Dec 2025 | Anthropic's multi-agent research system | Shares Anthropic's engineering writeup on their orchestrator-plus-parallel-researchers architecture.
https://www.anthropic.com/engineering/multi-agent-research-system
→ https://www.anthropic.com/engineering/multi-agent-research-system
++ 17 Dec 2025 | question: failures between components | Chained RAG, agents, tools and evaluators each pass their own evals yet combine into hallucinations and reinforced mistakes.
**Where do failures show up between components in multi agent systems, and why don’t our evals see them?**

Modern systems chain RAG → agents → tools → evaluators and each component can pass it’s own evals. When combined, we see new behaviors like hallucinations, agents reinforcing each other’s mistakes, or harmful outcomes - that don’t appear in single tests. This makes it hard to detect failures.

- Which existing eval methods fail to surface these behaviors, and why?
- What kinds of stress tests would expose “reasonable locally, harmful globally” outcomes?
++ 17 Dec 2025 | question: where sensitive inferences happen | Systems never trained on race, health or income still act as if they know them by combining ordinary signals.
**Where in real AI systems do sensitive inferences actually happen, even when no model is explicitly trained to make them?**

Many AI systems never store or predict sensitive traits like race, health status, or income. But they still end up *acting as if they know them*. This happens when systems combine ordinary signals across multiple steps.

For example a system uses location, time of activity, and spending patterns to route someone into a higher-risk category. Or a content moderation pipeline combines language style, social connections, and past behavior to decide who gets flagged or deprioritized.

This can be hard to detect because each step might look reasoable on it’s own or the inference is spread across retrieval and routing or existing checks aren’t focused on system level behavior.
- Where does the system first start treating people differently based on those signals?
- How could we test or log for indirect inference without requiring access to model internals?
++ 18 Dec 2025 | Ed asks how to test supervisor pattern | Ed wonders how you would systematically test the shortcomings of the supervisor orchestration pattern.
I wonder how you’d go about systematically testing the shortcomings of the supervisor pattern, do you have any ideas?
++ 5 Jan 2026 | recursive language models manage context | Prime Intellect on storing inputs in Python and delegating to sub-agents instead of loading everything into the main context.
https://www.primeintellect.ai/blog/rlm

Recursive Language Models let agents manage massive context by storing inputs in Python and delegating work to sub-agents instead of loading everything into the main model's context—early tests show gains on long-context task (environments).
→ https://www.primeintellect.ai/blog/rlm
++ 12 Jan 2026 | building platforms above the loop | Work discussion on humans setting intent and constraints while AI generates, tests and validates, escalating only at decision points.
Something we're discussing at work is how do we built platforms for AI that are "above the loop"

The loop is currently how we build software:
-  Humans still have to coordinate intent, break down the work, deal with agent failures, and set up the tasks.
- Agents execute the tasks, but people decide when to stop or continue.

Above the loop (I find is similar to the supervisor orchestration pattern) is when :
- humans set intent, constraints, and direction
- ai systems generate, test, revise, and validate changes - and only reach out to the human about decision points

so instead of deciding every code change, the human is deciding "what should exist"

it's very exciting to see this!
++ 12 Jan 2026 | self-improving agents roundup | Yohei Nakajima's survey of academic projects where an agent edits and improves its own code or policies.
https://yoheinakajima.com/better-ways-to-build-self-improving-ai-agents/
academic projects where an agent edits and improves its own code or policies, not just responses.
→ https://yoheinakajima.com/better-ways-to-build-self-improving-ai-agents/
++ 12 Jan 2026 | are agent swarms actually better now | Ed is surprised swarm approaches never worked well; Fatima notes they make mess and only run on Claude Code.
Ed Saperia: I've always been surprised that these don't get better results, but, maybe they do now

Fatima: this was first released two weeks ago

Ed Saperia: I mean, "things of this nature"

Fatima: so this might be a resurgence of iterative loop ideas

Fatima: it feels new to me(!) but i may not have been paying attention in the past few weeks

Fatima: ahhh i think this might be different this time

Fatima: but i may also be falling for the hype hehe

Ed Saperia: there have been various "agent swarm" type things over the past couple of years

Fatima: this is true!

Ed Saperia: no I mean I expect they're getting better quickly

Fatima: they seem to be

Fatima: but they're also creating a lot of mess

Ed Saperia: as I say, I am surprised they aren't good

Fatima: plus they mostly only work with claude code at the moment

Fatima: and i would need infinite tokens
++ 12 Jan 2026 | ralph explained for idiots | Shares a joke thread explaining the ralph looping technique.
https://x.com/agrimsingh/status/2010412150918189210
ralph for idiots: the only explanation you need

(is joke)
→ https://x.com/agrimsingh/status/2010412150918189210
++ 20 Jan 2026 | Slipstream protocol for agent communication | Hugging Face writeup on cutting agent communication costs by leveraging existing language rather than inventing a machine protocol.
https://huggingface.co/blog/anthonym21/slipstream-for-agent-communication

A new protocol called Slipstream offers a powerful and surprisingly counter-intuitive solution. It cuts through the noise to dramatically reduce communication costs and make large-scale agent systems economically viable. This article unpacks the most impactful takeaways from the research, revealing how the solution isn't to invent a new machine language, but to leverage the one we already have.

this is very cool!
→ https://huggingface.co/blog/anthonym21/slipstream-for-agent-communication
++ 20 Jan 2026 | models reason as an internal committee | Paper showing reasoning models simulate persona-like internal dialogue; steering a surprise feature doubled accuracy. She is intrigued.
https://arxiv.org/abs/2601.10825

Researchers from Google, University of Chicago, and Santa Fe Institute show that LLMs like DeepSeek-R1 and QwQ-32B improve reasoning not by length alone but by simulating internal dialogues among diverse, persona-like perspectives. These models display more question-answering, disagreement, and reconciliation than instruction-tuned baselines. Steering a “surprise” discourse feature doubled reasoning accuracy, increasing activation of personality and expertise features. Reinforcement learning reinforced these behaviors, especially when models were fine-tuned on multi-agent dialogues, accelerating reasoning improvements. In short, the model is forming an internal committee to solve problems, echoing human cognition and group collaboration. That’s a leap in understanding both AI and possibly the nature of reasoning itself

AN INTERNAL COMMITEEE

Need to read this soon because I’m INTRIGUED
→ https://arxiv.org/abs/2601.10825
++ 26 Jan 2026 | Ed: council of experts is old | Ed notes council of experts has been a named prompting method for a while.
“Council of Experts” has been a named method for a while I think
++ 28 Jan 2026 | Clawdbot and Moltbot local agents | mstem shares the Verge report; Ed says the creator visited Newspeak House and suggests code club, mstem advises a VM.
Matt Stempeck: https://www.theverge.com/report/869004/moltbot-clawdbot-local-ai-agent

Ed Saperia: The creator of this was at NH last week

Ed Saperia: We should probably be playing with it

Ed Saperia: Maybe a good focus for code club on Monday

Fatima: very cool!

Matt Stempeck: play with it on a virtual machine, methinks

Fatima: haha for sure

Fatima: i only have my work laptop :P

Matt Stempeck: i'm excited and terrified by these things

Ed Saperia: they are certainly exciting and terrifying

Ed Saperia: but if we're not the people to experiment with them then who is?

Fatima: agreed!
→ https://www.theverge.com/report/869004/moltbot-clawdbot-local-ai-agent
++ 29 Jan 2026 | Ollama launch announcement | Shares Ollama's launch blog post.
https://ollama.com/blog/launch
→ https://ollama.com/blog/launch
++ 29 Jan 2026 | Kimi K2.5 and agent swarms | Kimi's K2.5 release blog plus Simon Smith asking whether swarms plus Agent Skills scale across an enterprise.
https://www.kimi.com/blog/kimi-k2-5.html

https://x.com/_simonsmith/status/2016234897413964057

I've been thinking about the best way to organize agents in step-by-step workflows where each agent has skills defined by Agent Skills file, and to then scale this across an enterprise. Today Kimi dropped its K2.5 model along with Agent Swarms, and I thought: could this be it?
→ https://www.kimi.com/blog/kimi-k2-5.html
++ 29 Jan 2026 | Simon Willison tests parallel planning | Gist testing Kimi's multi-agent planning claims by breaking a Datasette S3 upload plugin into ten parallel tasks.
https://gist.github.com/simonw/ee2583b2eb5706400a4737f56d57c456

As a more interesting test, I decided to exercise the claims around multi-agent planning with this prompt:

I want to build a Datasette plugin that offers a UI to upload files to an S3 bucket and stores information about them in a SQLite table. Break this down into ten tasks suitable for execution by parallel coding agents.
→ https://gist.github.com/simonw/ee2583b2eb5706400a4737f56d57c456
++ 29 Jan 2026 | AI shopping tools raise pricing stakes | Tech Policy Press on big tech AI shopping agents raising the stakes for surveillance pricing laws.
https://www.techpolicy.press/big-techs-ai-shopping-tools-raise-stakes-for-surveillance-pricing-laws/
→ https://www.techpolicy.press/big-techs-ai-shopping-tools-raise-stakes-for-surveillance-pricing-laws/
++ 29 Jan 2026 | Karpathy on the coherence threshold | Shares Karpathy's post about crossing into mostly supervising agents rather than writing code himself.
https://x.com/karpathy/status/2015883857489522876
→ https://x.com/karpathy/status/2015883857489522876
++ 29 Jan 2026 | Clawdbot is the rebrand | Realises Clawdbot and Moltbot are the same viral open-source assistant that proactively messages you, and she missed it going viral.
aha! this is Clawdbot rebranded!

https://www.reddit.com/r/LocalLLM/comments/1qmrwxl/clawdbot_the_ai_assistant_that_actually_messages/

Clawdbot is an open-source AI assistant (9K+ GitHub stars) with a different approach: it proactively messages you instead of waiting for prompts. If you've used Poke (or others), it works the same way, but is more configurable and obviously open-source. I might even cancel my subscription with Poke now.

I was so busy with work things last week, I completely this missed this going viral!
→ https://www.reddit.com/r/LocalLLM/comments/1qmrwxl/clawdbot_the_ai_assistant_that_actually_messages/
++ 29 Jan 2026 | build tools that help people think | Sam Altman on human slop as well as AI slop, and building genuinely good brainstorming partners.
try to build tools that help people think better

Sam: It’s popular to talk about “AI slop,” but there’s also a huge amount of human-generated slop in the world. (swyx: we agree!) Coming up with genuinely good, new ideas is hard. I increasingly believe that we think at the limits of our tools, and that we should explicitly try to build tools that help people think better. [_From the Open AI town hall_](https://www.youtube.com/watch?v=Wpxv-8nG8ec&t=1179s)

We can build really great brainstorming partners. There have been like three or four people in my life that I have consistently found every time I hang out with them, I leave with a lot of ideas. They’re people who are just really good at asking questions or giving you seeds to build on.
→ https://www.youtube.com/watch?v=Wpxv-8nG8ec
++ 29 Jan 2026 | swyx on the AI Paul Graham | Reflections arguing thought-partner agents fail as RAG on essays; a five percent accurate PG would still be valuable.
Swyx's Reflections in SmolAi were really poignant, sharing them here to read again.

**Reflections on “AI Paul Graham”**
There are a few reactions I have here that I’ll fire off in quick succession:

It’s nice to see him acknowledge that the potential of AI is not just in helping to attract more attention through generated images and videos and marketing text (AI GTM, the first question from the town hall), but also it should be used in raising the quality of product, because there is a lot of human-origin slop too!

In many ways, Sam here is trying to bring in what YCombinator does for improving founder success to the general thought partnership capability of ChatGPT. Everyone could benefit from having their own personal YC Group Partner, on demand, no office hours. Much less having a PG-tier Partner. And yes, this is just the business form of the more general domain of advising and coaching, which probably everyone can benefit from if we knew how to make it good enough.

Many, many people have tried to build an “AI Paul Graham” bot. These flopped because they mostly did RAG or finetunes on his essays. Information Retrieval isn’t what PG -does- for Sam. He challenges you, runs you through multiple internal world models and pattern matches of past learned experiences, filters through what he should say to elicit the best response out of you instead of simply blurting out what he thinks token by token, and raises your ambitions.

For both model trainers and agent harness builders, it’s instructive to draw a spectrum from the poorest implementation to the most ambitious implementation you can think of, and think about the sequencing of intelligent feedback and pushback you need.

It is too lazy to wait for the God Model to arrive to do all these, there are probably concrete thought partner jobs that can be broken out into Agent Skills and MCP tools and Multi-agent Swarms and other tricks of the AI Engineer trade.

“Accuracy” for an AI PG is not 90%, not even 50% — even a 5% accurate PG is acceptable and valuable (and is probably reflective of most real life conversations with him - most questions or comments are NOT valuable, but a human filter on the comments will surface some very generative and out of distribution “seeds”). So this is a very scalable “throw shit at the wall” task where AI can act as mass generator and Humans can act as discriminator/judge, and our existence proof that high-miss-rate question generation is still useful is YCombinator and Sam’s personal experience.

When faced with “AI as thought partner” I see a lot of parallels with the alignment problem, and I often think about the Weak-to-Strong Superalignment diagram:

Where we are currently treating agents as a junior Software Engineer or “research intern” (this is certainly the relationship we have with ChatGPT or Prism today), we want to build the PG agent that is smarter than us, and perhaps the path there is to build smart agents for dumber people/usecases and then ladder up from there.
++ 29 Jan 2026 | weak-to-strong generalization | Shares OpenAI's weak-to-strong superalignment work as a parallel to building thought partners smarter than us.
https://openai.com/index/weak-to-strong-generalization/
→ https://openai.com/index/weak-to-strong-generalization/
++ 29 Jan 2026 | coding agent phase shift is real | Agentic coding loops are a step change but agents skip clarifying questions and edit unrelated files in established codebases.
**Coding agent “phase shift” is real**

but messy: Multiple posts reflect a step-change in practice: founders and engineers are increasingly running “agentic” coding loops, yet hitting new failure modes: agents that don’t ask clarifying questions, get “confused,” or edit unrelated files. [Mikhail Parakhin describes reaching the point where he can specify a scheduler and trust it to work, but still can’t let agents loose on established codebases due to collateral edits](https://substack.com/redirect/96882b75-d628-4d98-87ca-e28d6536c427?j=eyJ1IjoiMm5jaXEifQ.UVxyhsf-HdqTJcGLa9qNmFnHCmiz83YtfDe9Hjfqx5w). Andrew Karpathy [describes it as the threshold of coherence ](https://x.com/karpathy/status/2015883857489522876) -  said he went from writing 80% of his code manually to 80% via AI agents in just a few weeks and now he’s mostly programming in English and supervising machines. That’s a real shift in how we build software. What happens to the "10X engineer" - the ratio of productivity between the mean and the max engineer?
++ 29 Jan 2026 | skills as a shared interface layer | Workflow logic moving from prompts into reusable skill files, via DeepLearning's course, LangChain and Hugging Face's upskill.
**Skills are crystallizing into a shared interface layer:**
A major theme is moving workflow logic out of prompts into reusable “skills” (files/folders of instructions, loaded on demand).
- [Deep Learning launched an Agent Skills with Anthropic course](https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/)
- LangChain is pushing “Skills” via progressive disclosure as lightweight, shareable units
- [HF showcased “upskill”](https://t.co/phEVhVc0k5): convert strong-model traces into transferable skills, then evaluate impact
→ https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/
++ 29 Jan 2026 | context management for deep agents | As addressable task length grows, context management becomes critical to prevent context rot within finite memory.
[Context Management for Deep Agents
](https://x.com/masondrxy/status/2016548078346736014?s=20)
As the addressable task length of AI agents continues to grow, effective context management becomes critical to prevent context rot and to manage LLMs' finite memory constraints.
→ https://x.com/masondrxy/status/2016548078346736014
++ 29 Jan 2026 | Yegge on software survival 3.0 | Shares Steve Yegge's essay; she later says she read it twice and is obsessed.
Fatima: https://steve-yegge.medium.com/software-survival-3-0-97a2a6255f7b

Ed Saperia: This is great

Ed Saperia: good old yegge

Fatima: I have read it twice

Fatima: I am obsessed
→ https://steve-yegge.medium.com/software-survival-3-0-97a2a6255f7b
++ 29 Jan 2026 | Kimi swarms versus supervisor pattern | Mini field note: Kimi trains coordination via parallel-agent RL so collaboration emerges, unlike an explicit inspectable orchestrator.
Field note (mini) - Kimi’s swarms vs the Supervisor pattern

I’ve been reading a lot of the hype around Kimi’s “agent swarms” and got curious about how they’re different from the existing (and very widely used) supervisor / orchestrator pattern. As I understand it so far, the difference is less about having many agents and more about how coordination works.

Kimi’s swarm is framed as a trainable orchestration via Parallel-Agent RL. Multiple agents act at the same time, and a reward signal trains how they divide work, share information, sequence actions, or override each other. Coordination isn’t written out as rules; it’s something that emerges from training, because certain collaboration patterns get higher rewards. Agents can be spawned dynamically, and control can shift between them, there isn’t a permanently fixed supervisor.

In contrast, the supervisor pattern I’m familiar with has an explicit orchestrator (the controller) that decides tasks, splits them up, orders execution, and aggregates outputs from specialist agents. The coordination logic lives in code or prompts, and the other agents are mostly workers or tools. It’s a more inspectable setup (to a degree).

What I think is “special” about Kimi’s swarm, at least in how it’s being framed, is that coordination itself is *learned*, not predefined. The agents learn how to work together, and in theory, the system can adapt its collaboration strategy across tasks without new orchestration code.

Still very much a note-to-self! I need to read more and actually play with Kimi - lots of bookmarks to follow up on!
++ 31 Jan 2026 | local models on a Mac Studio | Shares a thread on running local models, because she wants Clawdbot running locally on her Mac Studio.
https://x.com/krunkosaurus/status/2017125560988872979 - because I want to use local models on my Mac Studio for my clawdbot
→ https://x.com/krunkosaurus/status/2017125560988872979
++ 1 Feb 2026 | Clawdbot on DigitalOcean | Notes from running Clawdbot on DigitalOcean, praising the friendly chat UI but hitting API and skill limitations.
notes playing around with Clawdbot on Digital Ocean via https://www.digitalocean.com/blog/moltbot-on-digitalocean

- really interesting that they scaffolded a user friendly UI to chat with the bot

some limitations in regards to the types of APIs you can use and the types of skills you can add
→ https://www.digitalocean.com/blog/moltbot-on-digitalocean
++ 2 Feb 2026 | two untagged link drops | Shares two x.com links with no commentary.
https://x.com/pbteja1998/status/2017662163540971756?s=46

https://x.com/francedot/status/2015178880215298557?s=46
→ https://x.com/pbteja1998/status/2017662163540971756
++ 4 Feb 2026 | ingesting Matrix into Onyx | Onyx lacks Matrix support but has an ingestion API; Ed says daily dumps would be easy, she worries about preserving context.
Fatima: Onyx doesn’t seem to support matrix out of the box

Ed Saperia: no but that would be a good project

Fatima: true

Fatima: they have an ingestion API

Ed Saperia: grabbing all the matrix data every day and throwing it in will probably be very easy

Fatima: yes

Fatima: i was worried about preserving the context of chat/channel/person

Ed Saperia: it comes as a big json file no? so it should be able to deal with that
++ 5 Feb 2026 | Surge leaderboard | Shares the SurgeHQ model leaderboard.
https://surgehq.ai/leaderboard
→ https://surgehq.ai/leaderboard
++ 12 Feb 2026 | GLM-5 scales for agentic tasks | GLM-5 grows to 744B parameters with sparse attention, targeting complex systems engineering and long-horizon agentic work.
https://z.ai/blog/glm-5

We are launching GLM-5, targeting complex systems engineering and long-horizon agentic tasks. Scaling is still one of the most important ways to improve the intelligence efficiency of Artificial General Intelligence (AGI). Compared to GLM-4.5, GLM-5 scales from 355B parameters (32B active) to 744B parameters (40B active), and increases pre-training data from 23T to 28.5T tokens. GLM-5 also integrates DeepSeek Sparse Attention (DSA), significantly reducing deployment cost while preserving long-context capacity.
→ https://z.ai/blog/glm-5
++ 13 Feb 2026 | political consciousness as perpetual quest | Shares Valerie Miller's paper on political consciousness.
https://justassociates.org/wp-content/uploads/2022/02/political-consciousness-perpetual-quest-valarie-miller.pdf
→ https://justassociates.org/wp-content/uploads/2022/02/political-consciousness-perpetual-quest-valarie-miller.pdf
++ 14 Feb 2026 | MiniMax M25 release | Shares MiniMax's M25 announcement.
https://www.minimax.io/news/minimax-m25
→ https://www.minimax.io/news/minimax-m25
++ 15 Feb 2026 | built a Matrix publisher bot | Bot fetches channel history, keeps emoji-tagged posts and threads, maps them to types and builds content.json as a reusable template.
https://github.com/nwspk/matrix-publisher-bot

built a matrix publisher bot that fetches the full message history of a channel, keeps only the emoji tagged posts and their threads, maps them to a type (`journal, link, field-note`) and crafts a `content.json` for the website. It's a "github template" so all fellows can use the template to generate their own fork and can adjust the content types for example.
→ https://github.com/nwspk/matrix-publisher-bot
++ 15 Feb 2026 | cohort site fellow landing pages | In-progress pull request rendering content.json into reading list, publications and explorations sections, vibe engineered and still buggy.
https://github.com/nwspk/2025.newspeak.house/pull/37
in progress build of individual landing pages on the cohort website that pull the data from the `content.json` of the matrix publisher bot and create a portfolio of the fellow's content. In my case, it follows the structure of the posts here:
- *reading list* -> links + projects (or tools I'm interested in)
- *publications* -> field notes + links to blog posts on substack
- *explorations* -> questions + ideas

need to test and debug a bit more as it was vibe engineered - and there's a few bugs I need to fix while keeping the functionality isolated enough that fellows can implement their own publisher + parser (within the site) for their pages.
→ https://github.com/nwspk/2025.newspeak.house/pull/37
++ 16 Feb 2026 | fran on awe and nuance | fran_galli notes a bias toward awe at modernist work that is just another conformity; Fatima still fixated on the neutrality guy.
fran: Interesting to read your reflections! personally I find there is a bias sometimes to be in "awe" of modernist odd stuff that "does it differently" when maybe it is just another flavour of conformity. You reminded me of a BBC radio show doing political satire and they had this fake ad piece that was something like "Donate £10 today to teach a Gen Z the concept of nuance" ahahah I think it applies intergenerationally though

Fatima: In hindsight, the man personally who ranted about “how objective and beautifully neutral the film was” occupied so much of my mind for hours later haha

Fatima: I haven’t yet read any public critique of the movie
++ 19 Feb 2026 | Ed on assuming someone built it | Ed finds it empowering to assume someone else has already done the thing.
in some ways empowering to be able to assume someone else did the thing
++ 2 Mar 2026 | Ed on imagination and prior art | Ed argues if you can assume someone already built your idea, imagination is the only limit on what you can bring forth.
I mean, if you have an idea, and you can assume that someone will have done it already, there's no limit to what you can bring forth in the world if you have enough imagination :)
++ 4 Mar 2026 | Yegge's Wasteland sequel | Steve Yegge's third instalment after Beads and Gas Town, on federated agent work systems.
https://steve-yegge.medium.com/welcome-to-the-wasteland-a-thousand-gas-towns-a5eb9bc8dc1f

Well, it's been a long 2 months, but it's finally here, the sequel to Gas Town. It's the third movie in my series: first Beads, then Gas Town, and now The Wasteland -- A Thousand Gas Towns. The biggest and best federated work system the world has ever seen.
→ https://steve-yegge.medium.com/welcome-to-the-wasteland-a-thousand-gas-towns-a5eb9bc8dc1f
++ 9 Mar 2026 | question: political calibration across models | After seeing Grok and Claude deliberate differently in awards iteration six, she asks whether RLHF political calibration generalises.
from the results of our politech awards - iteration v6 - I've been wondering after seeing the deliberations from Grok vs Claude - does Sonnet 4's RLHF calibration around political statements and alignment exist in other models too. Will review the paper and then see if I can be inspired to test some of the models on the awards afterwards.
++ 9 Mar 2026 | one-shot prompt surprise | Journal on a single prompt generating a whole functional Politech Awards ranking site, leaving her impressed but overwhelmed by lost control.
Journal: One-shot prompt surprise - politech ranking project

I wanted to build a UI for ranking projects for the Politech Awards that would allow users to rank the projects and generate Pull Requests. I used the following prompt - and it one-shotted a _whole_ site. It was fully functional and very cool - but made me stop and wonder - _is this what I wanted to build? This is a very overwhelming experience and there's no clear user journey._

It was certainly a fascinating moment as I use a lot of agentic technology both in vibe engineering side projects and at work, with custom agents, models, and workflows - but I am generally really hesitant to relinquish full control.

It was the first time that I felt simultaneously impressed and overwhelmed by the results!

the prompt:

Review https://github.com/nwspk/politech-awards-2026 and https://2025.newspeak.house/awards.

Design an implementation plan for a new greenfield app: politech-projects-ranking-ui.

Context:
- Algorithm: the-algorithm.ts
- Data: results.json, iterations.json, candidates.csv (321 projects)
- Current site shows a single iteration (heuristic, rationale, top/bottom projects)

Goal:
Build a UI ranking system that publishes the official rankings and lets the cohort explore how rankings change based on values, priorities, and judgments.

Core capabilities:
- Show all projects with rank/score and iteration metadata
- Allow switching between iterations
- Let users adjust value weights/priorities and see rankings update live (no-code ranking builder)
- Allow saving ranking snapshots
- Public judging interface with pairwise comparisons and value sliders
- Store judging data for later analysis (agreement, stated vs revealed preferences, cohort vs algorithm ranking)
- “Projects I like” → recommend similar projects
- Optional: infer values from a blog/profile and generate a ranking from those values
- Support multiple preset viewpoints (different value weightings) and compare rankings

Technical expectations:
- Use results.json / iterations.json / candidates.csv as core data
- Define TypeScript models for projects, rankings, iterations, judgments, and snapshots
- Decide whether to fetch data from GitHub or sync locally
- Separate read-only ranking UI from interactive judging features
- Specify frontend, backend/BaaS, and storage

Output:
product architecture, MVP vs later phases, data model, backend plan, ranking logic approach, analytics design, stack recommendations, and key risks.

the results

https://arc.net/e/53C01F8A-F8AB-48CE-8C47-A4F14475BDFC

ideas for next steps

I would like to try and build a sequential user journey that builds from the simplest to more complex, such as:
stage 1 - select keywords, see rankings
stage 2 - select keywords, use slider, see rankings
stage 3 - pairwise
stage 4 - LLM inference from your existing blog posts or shared links
stage 5 - something more deliberate
stage 6 - if I can build something that allows people to edit the multi agent run like a flow builder and then submit a PR with some code that a dev can review + test, that would be so cool
++ 26 Mar 2026 | backlog of unwritten field notes | Lists twelve pieces she wants to write, including term reflections, clawclub, the birthday immigration system and sparkle bureaucracy.
things I want to write about, but haven't gotten a chance!

- first term reflections (in draft!)
- second term reflections (must start!)
- clawclub 1&2 and photos!
- small vs big audiences and workshops
- censorship + surveillance resistance comms workshop + game idea
- lumina house takeover!
- majority myth - book club with the author
- the birthday immigration system!
- data governance models and cow farmers!
- what happens where there's transparency but no accountability
- chalkboards and how we tell the world who we are - and why that's hard
- sparkle bureaucracy
++ 29 Mar 2026 | Gamithra suggests cohort agents | Project idea from Gamithra to run synthetic agents answering questions about the fellowship and prototypes at Ration Club.
project idea from Gamithra - set up synthetic agents to answer questions about fellowship and prototypes at Ration Club so we can have fun :)
++ 29 Mar 2026 | a group chat of mirror agents | Ed suggests putting an agent for every cohort member in one group chat; Aadi already asked to talk to his.
Ed Saperia: you have an agent for everyone in the cohort now, you can have them all in a group chat and people can talk to them

Fatima: Hahaha aadi asked to talk his mirror agent and now I really want to deploy it

Ed Saperia: haha great idea
++ 1 Apr 2026 | two untagged link drops | Shares two x.com links with no commentary.
https://x.com/himanshustwts/status/2038924027411222533?s=46

https://x.com/ellen_in_sf/status/2039098050837463504?s=46
→ https://x.com/himanshustwts/status/2038924027411222533
++ 1 Apr 2026 | the Claude Code source leak | Wants to play with the leaked Claude Code source, via Latent Space's writeup.
gotto play around with the Claude code leak hehe
https://www.latent.space/p/ainews-the-claude-code-source-leak
→ https://www.latent.space/p/ainews-the-claude-code-source-leak

#### Field notes journal

The year's own writing — each note opens in full.

++ 14 Dec 2025 | Mastodon hires for trust and safety | Field note on Mastodon hiring a Community Director focused on Trust and Safety to reflect its many communities' needs.
Field Note - Trust & Safety at Mastodon

It's so interesting that Mastodon, as an organization, is choosing to hire a Community Director and specifically for Trust & Safety.

My top priority is to ensure that Mastodon’s plans for these areas reflect the needs of Mastodon’s many different communities.
++ 14 Dec 2025 | surveillance pricing rabbit hole begins | Field note on a NYT opinion video about dynamic pricing that led her deep into individualised surveillance pricing harms.
Field Note: [NYtimes Opinion - video - Goodbye, Price Tags. Hello, Dynamic Pricing.](https://www.nytimes.com/video/opinion/100000010545598/dynamic-pricing-algorithms.html?searchResultPosition=7)

I loved the way the story was crafted in this piece - about how dynamic pricing is going to target and stalk us in order to squeeze as much money as we're able to pay based on needs the algorithm anticipates through other smart devices or connected services.

I came across this video piece on tiktok and it led me down a rabbit hole of "surveillance pricing" where retailers and platforms will use algorithms and personal data (device type, location, browsing history, past purchases, things you've said aloud to your smart home, etc) to set _individualized_ prices - so two people might see completely different prices at the exact same time for the exact same item!

In many ways, this undermines transparency and fairness since consumers (a) may not be away that they're being charged more or (b) may not be aware why they're being charged more!
Most pieces talk about how regulators need to do more - but there might be an opportunity here on signaling that this is likely already at play in the market and will cause real harms.
→ https://www.nytimes.com/video/opinion/100000010545598/dynamic-pricing-algorithms.html
++ 14 Dec 2025 | what makes a community a community | Field note on grief when cohort members disengage, and whether communities need shared responsibility rather than just shared membership.
Field Note: What makes a community a community? Is it shared membership, or shared responsibility?

I’ve been thinking a lot about the engagement of the cohort and why I feel upset when people disengage. Perhaps it’s a personal thing, such as a feeling of abandoned.

When I really consider that, however, it’s more complex. The fellowship, to me, was a sort of group project to build and govern a small community that is, as Ed often says, like a small country. I believe communities require stewardship, care, explicit communications, discomfort (because we can build anything if we are all comfortable), and collective responsibility.

However, the format by which our cohort is running (in some ways by “default”) - with fluid responsibility and not accountability, to me feels like… the anthithesis to how I implicitly understand communities to be built.

Betrayal is not the right word here, but I certainly feel that when no one is “required” to steward and no one “owes” each other anything, then we can’t build a community we actually want to be a part of, that requires intentional work.

It’s a complex feeling. I empathize with the reasons for disengaging while also feel hurt by the “dropping of the group project”.

Is this grief that the shared project is being abandoned? Grief for the version of the cohort I imagined you we could potentially build together where we would get past the everyday polices that we know to be unhelpful (like codes of conduct) and reimagine what those systems could look like with a new lens to take back to the real world?

I’m trying to decouple my instinct to hold the community together from my excitement about the fellowship itself, but I suspect people like me will always yearn for communities where everyone is bought in.
Maybe learning to take small steps… and confronting how people actually engage is part of this political education and I just don’t see it because I’m in it.

And there may still be ways for the core group to model community with more structure or experimentation.

How do I keep modeling the kind of community I believe in, while also protecting myself from “hurt” and accepting that people will engage at their own limits and that this, too, is part of… politics?

_originally posted on Dec 8, 2025_
++ 14 Dec 2025 | three person teams and power | Field note arguing a developer, product manager and user researcher distributes power better than stacking a team with developers.
Field Note: Three Person Teams, Power, and the Shape of Leadership

In our Leading Tech Projects class, Peyman ran an exercise asking what it actually takes to lead a new technology project. We mapped out all the roles and capabilities we could think of, then clustered and prioritized them into tiers. After that, we were given a constraint: _you only get three people on the team. What do those roles look like?_

People proposed many roles, including two developers and one product manager. I strongly disagreed.

My discomfort with that structure isn’t about undervaluing engineering - it’s about power. When you stack a team with developers and remove explicit roles for user research or design, decisions about UX, accessibility, and user experience don’t disappear. They get absorbed by whoever is closest to implementation. In practice, that often means developers making product and design decisions by default, not because they’re best positioned to do so, but because the structure leaves no alternative.

My counterproposal was a team composed of:

- one developer
- one product manager
- one user researcher

This structure distributes power more deliberately. The developer can focus on technical implementation and system design. The product manager can take responsibility for delivery, coordination, supplier management, disaster recovery, and organizational tooling. And the user researcher can protect the integrity of user needs, grounding decisions in research, accessibility testing, and data rather than intuition or convenience.

This proposal isn’t theoretical. It’s influenced by civic tech fellowship models like Code for America, where small, cross-functional teams are designed to cover not just skills, but overlapping accountabilities. In those settings, the user researcher often acts as a counterweight to purely technical optimization, ensuring that “what can be built” doesn’t eclipse “what should be built.”

What I’m really arguing here is that minimal teams make power dynamics more visible, not less. The question isn’t whether trade-offs will happen, it’s whether we design teams that acknowledge them explicitly.
++ 14 Dec 2025 | permission inside a rule-free house | Field note on needing structural legitimacy to act at Newspeak House, and how marginalisation teaches you to seek cover.
Field Note: Permission, Invisible Norms, and Acting Inside a "Free" System

After sharing some of my feelings about disengagement and governance with people in the cohort, I found myself in an unexpected conversation about permission. (Well, Ed was responsible for bringing my hopes and dreams and discomfort with informal roles and expectations - but that's a side note)

Newspeak House is designed as a space without fixed rules. Every year, the cohort is meant to define its own norms. We’re all peers. In theory, no one needs permission to act. In fact, many cohort members feel empowered by this - that they don't need anyone's permission, that they'll just do what they want. I really admire that!

And yet, despite understanding the idea logically and wanting to be that person, I notice that I do need permission.

What was difficult to convey is that don’t experience this as a lack of confidence. Although that is feedback that I receive constantly in corporate contexts. I know I can lead. I know I’m capable.

But when it comes to starting programs, proposing policies, or changing how the house operates, I feel a strong pull toward structure: a document, a principle, a process I can point to. Something that legitimizes action.

Part of this may come from my vocation. As an engineer, I’m comfortable with rules, systems, and explicit structure. Ambiguity can feel blocking rather than freeing.

But I don’t think that’s the full story.

I suspect this instinct is more deeply political. As someone who has experienced marginalization, I’ve learned through real consequences that acting without permission in the world often carries risk. In many systems, people like me are penalized more harshly for stepping outside informal or unspoken boundaries. Over time, that teaches you to seek cover: consensus, legitimacy, shared responsibility.

What’s interesting is that this instinct disappears when harm or safety is at stake. In moments involving psychological safety or code-of-conduct violations, I don’t feel the need for permission. I act, because the moral imperative is clear. And I act because I have the experience to know to act in the best interests of the victim - I’ve done this before.

But in cases of governance or experimentation, I hesitate, not because I don’t care - in fact I care a LOT, but because I’m still carrying the outside world into a space that claims to be free of it.

This makes me wonder whether I’m still operating as if systemic oppression is present, even in a place intentionally designed to suspend it. And if that’s true, what does it mean for prefigurative politics? If we’re trying to model new forms of governance inside the house, but we arrive with deeply internalized norms shaped by unequal systems, how do we unlearn those things? Is the design of the course meant to challenge the invisible norms that we bring with us?

Now I’m wondering how invisible histories or invisible norms shape behavior, even in spaces that imagine themselves as neutral. And before anyone says it - no space is ever truly neutral. Even in a space like Newspeak House, with the explict standard of being without rules and everyone can set rules - there are explicit structures of privelege (e.g the people who feel they can act w/o any structural legitimacy prove that).Is learning to act differently is part of the political education I came here for? Because if it is, and if I walk away from this year knowing when to ignore the structures that limit or oppress me - that would certainly be both political and wonderful.

_originally posted on Dec 12, 2025_
++ 15 Dec 2025 | shadow governance and unpaid labour | Field note on informal governance falling to whoever does the labour, and occupying a spokesperson role nobody officially recognises.
Field Note: Shadow Governance

I’ve expressed this in the retro document, but in some of the readings from the course material and in conversations with Ed, I’ve been thinking more about this. In groups like ours that reject formal authority and prefer informal structures, governance doesn’t just disappear, it sort of gets distributed to those who hold the most labor.

Someone is still doing all the work - housekeeping, offering advice, legitimacy, managing ration club or the guest room, or lobbying. When that labor is informal, it often goes unacknowledged unless you see it happen (like someone putting away the dishes every day or running a workshop after you’ve been talking about a thing for ages), and it becomes “Shadow Governance”.

What I’m noticing is that I occupy this role that doesn’t exist. I took it on naturally and I take full accountability for that - I articulate the different stakes and tensions that I hear from people, I lobby the faculty for procedural change and share the implicit conflicts before they happen, I try to warn the institution about frustration when it still feels early.

I believe the group benefits from this work because it legitimizes the documentation that we as a group provide via other channels. This arguably the most political thing we’ve done - collected, synthesized and presented our feedback and demands. I did my best to try and socialize those demands with faculty that I trust - only today was I told that this is called “lobbying”.

The group benefits from this work, but does not recognize it as an official role. At the time when the role was proposed, recognizing it led to several uncomfortable questions about who would have influence, who would have power over information, and why was that needed?

I think this is also why… I take on a larger emotional cost when things go wrong. Not because the failure was in any way my fault, but because I implicitly try to hold the group together. This was painfully visible to me in the governance retro. When two people exited the process, I felt this collapse of my worst case scenario. I had a feeling this retrospective wouldn’t work - I tried to voice those concerns early. I had this instinct that the group needed cohesion and that would be tricky to resolve.

As I’ve been reading some of the papers assigned to us in Six’s class, I’m learning that political theory focuses on formal authority. Our informal systems in the house depend on so much “integration labor” - work that keeps people from Exiting - because they feel they can't use their voice. I guess I felt responsible for (even though I’m actively trying not to do this) the coherence of the group and in turn, their experience with Ed, and in that moment, I could not find a way to repair it.

Someone asked me today if I wanted to be spokesperson for recognition - and I felt a bit strange about that. Maybe that’s what it looks like from the outside to someone who doesn’t understand the concept of spokespersons. I already have that recognition broadly in the industry I work in. To assume that was my primary motivation feels wrong, in a sense.

Being a spokesperson is like living on two islands and you being the bridge. Your role is to transfer as much information across the bridge in both directions as is needed. Too much information and you’ll cause chaos on either side. Too little information and there’s a loss of trust. And sometimes you make decisions to move information across in the best interest of either side. It’s a very tricky position to be in and I have a lot of experience doing it in the corporate sector.

But a shadow spokesperson? That’s just framed as a personality aka “everyone likes her” or “she’s good at explaining” or “she’s just emotionally invested”- rather than understood as labor around governance. In reality, the work of translating so many inputs and then re-filtering them for the context between sub groups, is a process that preserves trust.

_What happens when you try to legitimize a role inside a system that may not believe legitimacy itself exists?_
++ 15 Dec 2025 | legitimacy of the governance module | Field note on cohort members refusing that any house rule could bind them, blocking real debate about policy design.
---

Field Note: On the legitimacy of the governance module

This has been sitting with me since before the governance retrospective, but even more so since then that clarifies why I keep feeling “stuck”.

When I talk about experiments in the governance module, especially the idea of temporarily assigning authority or playing with rules, I often hear some version of:

“Even if you were dictator and there was a signed charter, why would we follow the rules?”

It’s usually said in good faith, sometimes even in good faith debate. When I push on this, my allies in the house say, “well that’s life” or “well that’s politics”

Is it? I’ve been trying to understand why this answer feels unsatisfying to me. This isn’t the politics that I came to practice at the house, this is the politics of convincing people that the legitimacy and value of a thing that I thought they already had bought into.

I came into this fellowship believing that opting in meant opting into the governance module, that we were agreeing, as a collective, by the rules we would design, test, contest, and revise together. I thought that engagement, at the very least was required, not agreement. But other cohort members seem to have opted into a much narrower version of the fellowship: shared house, shared conversations, and this optional play in the sandbox that can’t ever _really_ constrain them.

Those are very different constitutional assumptions.

What I’m noticing is that we keep trying to debate _policies_ without ever settling what would make a rule binding in the first place. Every time a proposal is raised, the conversation snaps back to legitimacy: _why should this count? why should I care? why should I comply?_ That snap-back blocks the kind of political disagreement I actually want.

I want people to fight me on implementation details, on scope, on enforcement, on harm. I want to argue about whether a digital ID at the door produces exclusion, or whether differentiated access rules create power in ways we don’t want. But instead of those debates, I keep encountering a deeper refusal: _the suggestion that no rule here could ever be binding, regardless of how it’s designed._

Reading excerpts from _Max Weber, Economy and Society (authority & legitimacy)_ and _Elinor Ostrom, Governing the Commons_ has helped me name what feels off. Authority doesn’t persist because it’s declared - it persists because people _treat_ it as legitimate. Rules can only stay alive if people who follow them can shape them, when there are shared expectations, and when there are consequences to refusal. I’ve been told that the institution would support compliance to signed charters via forms of exclusion - but I don’t believe in that form of compliance. I would rather have people opt in somehow.

That realization reframes a lot of the frustration I’ve been feeling. I’m trying to run experiments in a system that hasn’t decided whether it wants to be governable at all. The governance _experiments_ aren’t being rejected, they’re just not participating.

That’s a valid choice, but it changes what this place is and it changes the way that the 3-4 of us who believe in the experiments will experience the fellowship as we understood it.

Without that shared commitment to the legitimacy of the governance module, governance becomes this optional performance, this sandbox game that a few are playing in the house that has no real power or impact or authority. That lack of interest in the opportunity and space and resources we have been given to play around with, it actively demoralizes me.

For those of us who came here believing this was a rare, unique space to test rules, norms, and systems with real stakes, that decision quietly redraws the boundaries of the fellowship itself - and I don’t know if I want to work within those limits.
++ 16 Dec 2025 | multi-agent architecture and context limits | Field note asking whether legacy systems can be agent-legible, what agent-friendly architecture looks like, and how handoff should work.
Field Note: Multi-Agent Systems, Architecture, and the Limits of Context

After discussing team structure in Peyman's class on "Do we need developers?", we moved into a second question: *which parts of this work can be delegated to AI?*

The framing that stuck with me was asking two questions:
- What do I care about?
- What could I work on with AI?

Right now, the industry seems to be moving toward specialization through tools and agents. We chain different systems together, Figma for design and research, code-generation tools for backend or frontend work, analytics tools, QA tools sometimes all inside one platform (GitLab ;) ), sometimes stitched together across many. Functionally, this already feels like agent-to-agent or tool-to-tool collaboration, even if we don’t always name it that way.

I know that we’re heading toward multi-agent specialization - not just many tools, but many agents with distinct roles, responsibilities, and domains.

This raises a set of questions I've been thinking about:
- If you have strong documentation, clean architecture, and well-written code, is that enough for agents to align with an existing system, especially one that’s 10+ years old?
- Or do agent-friendly systems need to be designed differently from the start?
- What does an agent-based architecture actually look like? Is it microservices? Component-based design? Something else?
- How do we design for agent handoff rather than pockets of execution chained together?

Right now, it feels like handoff is the missing piece. We have agents that can do impressive things on their islands of code, but less clarity on how responsibility, context, and intent move between them.

There’s also a scaling problem here. As systems grow, context windows become a hard constraint. At some point, no single agent can “understand” the whole system. Does that mean agents are ultimately responsible only for their own islands of code, communicating through structured interfaces or protocols like MCP? And if so, how much coordination overhead does that introduce?

I'm curious about these tensions as a result of Peyman's class, thinking about the in between of legacy systems and new architectures, between specialization and coherence, and between what we want agents to do and what context actually allows.
++ 17 Dec 2025 | handoff is the hard part | Field note arguing execution is easy and systems dodge agent-to-agent handoff of intent by centralising it in orchestrators.
Field Note: Multi-Agent Handoff and Context

While presenting about agentic workflows with engineers at a large financial institution, the term that kept coming up in questions wasn’t _reasoning_ or _autonomy_. It was **handoff**.

That caught my attention.

By handoff, I don’t mean chaining prompts or passing outputs. I mean the transfer of state, intent, assumptions, and responsibility from one agent to another. Not just “here’s the result”, but “here’s why this work exists, what constraints matter, and what you now own”.

Most multi-agent systems don’t really do that. They pass artifacts such as text, summaries, tool outputs and expect the next agent to infer the rest. That inference step is where things become fragile. At first this feels like a gap, but looking closer, it seems more like deliberate design.

This is where context engineering keeps coming up for me, not as prompt tuning but as a systems constraint. As systems grow, no single agent can hold the full picture. Instead of trying to move full context, intent, and responsibility between agents, most systems centralize those things elsewhere.

[Anthropic’s multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) is a useful example here. Their setup relies on an orchestrator agent to plan the work, decompose queries, spin up parallel researchers, and integrate the results. Intent, assumptions, and responsibility are held centrally and re-expressed at each step when they're passed to the next agent. Tools like LangGraph or Agent Squad also do so by centralizing intent and control rather than enabling agents to hand work to each other directly.

So I guess the hard part of multi-agent systems isn’t getting agents to do work. Execution is the easy bit. The hard part is everything that happens _between_ agents. Rather than solving agent-to-agent handoff directly, today’s systems avoid it by routing all coordination through orchestrators as a central point.

There’s a similar pattern with evaluation. Letting agents critique or evaluate other agents can scale quality control, and LLM-as-judge approaches will work well when they’re designed well. Evaluation only works because intent and constraints are held outside the agents themselves. Without that central context, evaluation risks optimizing for surface correctness rather than whether the system is actually doing the right thing.

Protocols like MCP help standardize how agents access tools and shared state, but they don’t really solve handoff either. They make context accessible, not transferable. Intent, assumptions, and responsibility still live in orchestrators, glue code, or prompt conventions.

I’m left with a few open questions:

- What is the smallest amount of context that is actually needed to hand off from agent to agent?
- Is centralized orchestration a temporary solution, are there alternatives?
- Are there existing systems (or papers) that attempt agent-to-agent handoff of intent or ownership, and where do they break down in practice?
- This makes me wonder whether some of the challenge behaviors in agentic systems may be happening in the orchestration layer.
→ https://www.anthropic.com/engineering/multi-agent-research-system
++ 19 Dec 2025 | when optimism feels like social risk | Field note on groups where critique becomes posture and hope reads as naivety, draining her sense of purpose.
**Field Note: When Optimism Feels Like a Social Risk**

This has been sitting with me for weeks. After conversations with Ed and faculty, it’s gotten sharper, but I’m still not sure what this experience really is, or whether it has political viability.

There’s a thing that happens in groups that I care about where critique becomes the dominant point of conversation. Not critique as analysis or disagreement, but critique as posture, where the “system” we exist in whether that’s the cohort or an open source team, is fundamentally broken, the powers that be are “irredeemable” and nothing short of total rejection is acceptable.

And I find that in groups like these, over time, there’s a hostility to hope.

As someone who tries to cradle a tiny flame of optimism, I find it challenged as naivety. Attempts to contextualize, or to reason about what might still be possible, the opportunity space ahead of us, are met with suspicion or ridicule as a gut reaction.

I’ve also encountered this in open source communities I’ve volunteered in. Once an “enemy” of sorts is established, it becomes a very tricky operation to propose any kind of compromise without looking complicit. But without compromise, nothing actually resolves. Volunteers get no closure. The community can’t move forward in a way that preserves the sustainability of either the people or the project.

This dynamic seems to find me in every group, team, or company I’m part of (or perhaps it is a pattern that I find myself drawn to as a result of caring for the building of communities?) And it crushes my hope. Not because I disagree with the critique, I often share it, but because there’s no room left for action. There’s no space to be curious, to imagine moving forward, to repair, iterate, or make partial progress. The only acceptable stance seems to be collective fatalism.

Most recently, I feel this in my sense of purpose in the fellowship. I’m here because I believe deeply in the vision, in building, testing, and intervening in systems and experiments that I know have failed me in the real world, and through that, learning politics by doing. But when optimism becomes socially risky, I start to feel like I don’t fit, like I need to shrink my hopes and ambitions to meet the moment.

If I’m lucky, there are people who replenish my optimism, because they, too, feel unheard and feel the weight of the current political situation pressing on them. The Americans in the cohort, for example, share a kind of implicit understanding of purpose. They understand this political moment, sense that something is shifting, and feel called, like I do, to do more. Those conversations restore my energy and clarity. They remind me why I care and why I moved my entire life to be here. But when I feel replenished and return to conversations at the house, the group norm reasserts itself. I find myself grasping at the threads of hope I had so carefully braided earlier that week, or even earlier that day.

What makes this especially difficult is that I care deeply about the individuals in this group. Their opinions and feelings matter to me. I want to stay engaged, and leaving feels like abandonment or like minimizing their pain. This in-between space is really a rocky road and I find myself feeling drained more often than I am replenished. I also don't want to withdraw entirely.

In the past, I’ve only been “successful” in navigating this when I was given a clear charter of power. In open source, that meant asking maintainers to step away when their positions were no longer serving them or the project, especially when they were silencing newer, curious voices who wanted to work rather than only critique. In corporate environments, it meant reassigning responsibilities and holding people accountable for the work they were meant to do. In situations like this where I didn't have agency to change anything, I usually burned out trying to recapture my hope week after week and eventually left the organization.

Maybe that’s the only way I know how to handle this. Or maybe there are other routes, working at the individual level, explicitly building a group of people who still have hope, and naming what’s happening out loud so we can refill each other’s energy intentionally.

Being able to name this pattern feels important. If I can see it clearly, maybe I can build a skill for living with it or intervening without losing my hope next time.

Open questions:

•	How do groups reset norms once they’ve drifted this way?

•	What are the early signs that you're headed this way?

•	At what point does naming harm stop creating capacity and start eroding it?
++ 6 Feb 2026 | before managers, look at organizations | Field note on Laloux's red to teal paradigms, which management activities are really needed, and why permission-less cultures do not exist.
Field Note: Before we come for Managers, we need to look at Organizations

I suppose the purpose of this class session was "Do we still Managers?" and will AI replace them? I fully expected Peyman to present us with question early on. Instead, we dove into the meta a bit. Before we can really analyze the role of managers in organizations, need to talk about organizations themselves - and how they evolve (and sometimes don't).

organizational paradigms

In “[Reinventing Organizations](http://www.reinventingorganizations.com/?utm_source=newsletter&utm_medium=email&utm_campaign=work_week_41_2018_three_categories_of_human_organizations&utm_term=2018-10-12)”, author Frederic Laloux writes that “_[a]n organization cannot evolve beyond its leadership’s stage of [consciousness]._” He describes specific stages of organizational paradigms:

- **Red** - organizations ruled with a absolute power, limited to the immediate reach and influence of their leader. Red organizations are often described as wolf packs or the mafia. Everyone is motivated by fear, change is management can happen through a change in power dynamics.
- **Amber** - organizations with a top down conformist structure of power with rigid stages of management and hierarchies to pass down stable, replicable processes to large groups of people. Consider the Catholic Church or an army.
- **Orange** - typical organizations that make decisions based on evidence, acting like machines - setting goals, breaking those into benchmarks or OKRS, and then working towards them. These goals can be driven by shareholder value for example. Most companies exist at this orange stage.
- **Green** - a newer model for organizations that is values driven, with a culture of empowerment, multi stakeholders that share in decisions and benefits of those decisions. Individuals in these organizations are able to drive things forward.
- **Teal** - is an evolutionary model for organizations - where everyone is a manager, and everyone has the autonomy and authority to fix issues themselves. Distributed, remote teams are in a key position to take advantage of this new model, because the architecture and real estate of a physical workspace can’t play into reinforcing a hierarchy.

What struck me about this analysis of organizational paradigms was slotting in the organizations that I've worked for and reflecting on how they've moved along the scale - which is certainly not linear. Because in every organization, there are pockets of teal - where employees have autonomy and authority to act, vs pockets of red - where a VP might have absolute power, say, and control. I also considered the fact that organizations don't always evolve forward, they often regress.

Under the pressure of the market, scarce resources, or industry's rapid change, even mature green organizations can slide back into tightly controlled, slower decision processes, and higher amounts of centralization. For example, towards an IPO, even the employees with the most autonomy might find themselves following beauocratic hierarchical processes due to compliance needs.

A question that was posed in class was -  _**in a genuinely good culture or system, can you leave it up to people to decide what they should do?**_ this is an interesting one to think about in reference to AI agents and the future of work.

organizational reshuffles

Organisational reshuffles is also an interesting lens here. When structures change, people often _rethink the organisation itself,_ its values, its rules, what is actually allowed. That moment of ambiguity can feel destabilising, but it might also be one of the few times real reflection becomes possible. Space to rethink isn’t always a failure mode; sometimes it’s the point.

activity - management activities

We ran an activity in class: list “management activities” and then sort them into categories:

things that don’t need management at all, things that are necessary and centralized, things that may be necessary depending on context, and things that aren’t necessary.

The exercise quietly dismantled the idea that “management” is a single role. Instead, it’s a bundle of functions, some structural, some cultural, some political. And some bundles of tasks, we found over discussion, weren't even necessary for the manager to do.

**Doesn’t have to be management**
* Organising product
* Project management (doesn’t need to be centralised)
* Time allocation
* Initiative / experimentation

**Necessary and centralised**
* Consensus mechanisms
* Policy enforcement
* Core strategy / value-setting (emerging core strategy / value team)

**Can be necessary (context-dependent)**
* Product management (depends on scale and cross-functionality)
* Project management (varies by context)
* Governance under scarcity
* Resource prioritisation during limited resources or reshuffles

**Not necessary**
* Vision setting
* “Corporate BS”

This is where the fantasy of fully distributed, future-leaning teams started to fray. Many such models assume abundance: enough time, enough money, enough attention. In reality, teams operate under limited resources. You can decentralise how people allocate their time, but the _consensus mechanisms_ - what ultimately gets prioritised, funded, or enforced - often remain centralised. Scarcity pulls authority back toward the centre.

Product and project management surfaced as examples. In theory, they could be decentralized. In practice, they rarely are, especially when dependencies stack up. Policy enforcement, even more so, tends to centralize by necessity. This isn’t a moral failure; it’s an organizational gravity well.

culture vs process

That tension showed up again in the discussion of culture versus process. Is it more important to have a handbook, or an open form of discussion? A static policy, or a living document? The more interesting framing wasn’t either/or, but _what the handbook actually does_. Handbooks are often ignored and yet they generate discussion. People argue with them, interpret them, feel constrained or protected by them. Their real value may lie less in compliance and more in the sense-making they provoke.

Which leads to a harder question: **is there a level of discomfort we should be willing to tolerate in order to create the change we say we want?**

Expense policies is another example. Clear rules can feel restrictive, but they also reduce ambiguity and unfairness. Looser, emergent norms can feel freer, but risk uneven application and hidden power. Is it possible to evolve policies that are flexible _and_ fair, freer in practice, without abandoning guidance or reasonableness?

bias for action

Wanting people to try things and learn from attempts isn’t enough. You have to make it _successful to try_. Bias for action turns out to be a skill, not a slogan and it has maturity levels. At its best, it looks like controlled experimentation, not reckless motion. It requires scaffolding.

python vs C

To illustrate this situation, let's take a look at two programming languages.

Python encourages action: forgiving defaults, fast feedback, easy rollback.

C demands precision, upfront correctness, and carries higher consequences for mistakes.

Neither is inherently better (although you might find that enthusiasts disagree with this take) but they produce very different behaviors. Organizations, like languages, encode values into their constraints.

Some conditions for a healthy bias-for-action culture are:

- fast feedback mechanisms and rollback paths,
- well-understood impact and blast radius,
- frameworks for experimentation with explicit gates for lower risk,
- and crucially, structure even in “permission-less” environments.

permission-less cultures

I probably need a whole separate field note on permission-less cultures, because I don't believe they exist - and it hit close to home. Trying to be action-oriented without clear boundaries often creates _more_ ambiguity, not less. Even anarchist systems have rules. “No permission needed” still requires shared understanding of limits.

The phrase “go and act” came up repeatedly,  mostly as a warning. It doesn’t work. For many people, playing it safe is more natural, especially in civic or institutional contexts where failure carries reputational or moral weight. Even with frameworks in place, acting can feel risky.

So the real challenge becomes perceptual: **how do you show people that the risk is actually small?** Could you test something in one year instead of three? Can you make reversibility visible? Signals matter and organizations are constantly sending them, often unintentionally.

culture change takes time

Finally, culture change takes time. It takes months for an organization to acclimate to a new culture and it happens very, very slowly. Institutional safety and psychological safety are distinct but intertwined. And that global contexts complicate everything  what feels safe, fast, or acceptable in one region may not in another.

I left class with the sense that the real question isn’t whether we still need managers, but **what managers are actually for**. If autonomy is the goal, someone still has to design the conditions that make autonomy survivable. Goals, values, guardrails, feedback loops, this is the work that doesn’t disappear just because hierarchy does.

In the next class, we will take a deeper look at the goals, values, and conditions for bias for action, empowerment - and whether managers are no longer needed if processes can be decentralized.
→ http://www.reinventingorganizations.com/
++ 7 Feb 2026 | growing up amongst my heroes | Field note on invisible civic tech labour in New York, and heroes who became peers, mentors and friends ten years later.
Field Note: Growing up amongst my heroes

Civic tech can be quite a small world in many ways and growing up amongst my heroes, was quite difficult. While I shared their ideals, inherited their jadedness, and was inspired by their hopes and dreams - I did not have the experience to follow them into the fight. Instead, I did what I knew best - the coding, the networking, the community building.

I think back to the times that I volunteered at BetaNYC meetups or cleaned up after events Civic Hall. I was in charge of ordering the stickers for Microsoft Civic or picking up enough pizza for the Ambassadors program meetings. I coordinated multiple people, remembered the names of speakers, and at every hack night, checked in with people on the status of their projects.

It wasn't until I came to Newspeak House and I've started to catch up with friends from across the industries that I've worked in that I realized how much of the work that I gave no credit to - because it felt invisible in terms of on paper achievements - was actually so useful and taught me all the variety and depth of skills that I can draw on now.

And everyone's genuine enthusiasm - from the folks that I worked with on drupal community efforts, to the people that I organized civic hack nights with - all are so thrilled for this part of my life, that it really makes me feel both validated and inspired and honestly, full of hope for myself and what I want to achieve.

Back then, I always felt that I could never catch up to my heroes. I always felt it was unfair, we often joked that it was, that I had inherited both their dreams and their jadedness _too_ early in my career, while I was still in college, and had to climb up the ranks before I could do the things that they were doing. And _still_ there was a part of me that was still so inspired that I continued to, despite the burnt out, go back to work in the public service.

Ten years later,  my heroes are now my friends, my mentors, and my confidantes. They're no longer people that I once fan girled over after a conference talk or tried to impress on twitter - they're people who I've shared experiences with, talked deeply about issues with, and solved things together with. In so many ways, they are peers - even if they have many more years of experience than me.

Perhaps because I now see them as humans and not as heroes that the perspective has changed. Or perhaps I see myself as competent and capable and able to stand alongside them, rather within their shadows.

John said something interesting to me today and it was that perhaps, one's purpose in life, if not entirely legible internally, will only become legible externally after one's death - and perhaps that means the meaning was more complex - than someone perhaps, who has a clear meaning in life.

And I wondered - ah, perhaps my measurement of success is having one clear thread - a singular purpose in life, by which all of my work and passion weave through. And because my actual purpose in life cannot be contained by a single thread, it doesn't meet my criteria of success.
++ 7 Feb 2026 | Taiwan digital democracy, ten years later | Field note on meeting Audrey Tang in 2017, g0v, Open Culture Foundation, and being a bridge between systems.
Ten years later, I'm still inspired by stories from Taiwan's digital democracy

Two weeks ago, I was reviewing the Newspeak House calendar - and in an effort to curtail the loneliness of moving to a new city, I was selecting events that I might be interested in attending. The `Decode Taiwan Open Tech: Open source and civic tech meetup in London for latest communities updates from Taiwan` immediately caught my eye and as I expected, both g0v and Open Culture Foundation were mentioned in the description.

This really took me back - and it further reinforced why this institution is so unique and brings together so many communities that overlap and do similar kinds of work.

When I first started out in Civic Tech in New York City, I volunteered at Personal Democracy Forum for a ticket to the conference. I was often assigned the role of greeting and guiding speakers. In 2017, 2-3 years into my early journey of civic tech - I'd come in from Boston, where I was working for the Digital Team, to volunteer. And I had the explicit honor of greeting Audrey Tang, the then Digital Minister of Taiwan, and leading her to the speakers ready room. I was an absolute fan girl and the whole interaction was a blur.

Later that day, sitting in the audience - in the gallery above where the volunteers got to look over the stage, I watched - mesmerized as Audrey Tang delivered her keynote - "STORIES FROM FROM THE FUTURE OF DEMOCRACY: TAIWAN" describing the digital ministry's efforts to pioneer "digital democracy", using polis for civic participation and strategies for combatting disinformation.

I was absolutely enamored with the whole thing - from the digital ministry of taiwan to g0v and their decentralized governance for managing the community. In fact, I remember talking to some of the volunteers about wanting to move to Taiwan and join g0v (you know me, I follow the spark).

I made a few friends at the conference who worked in g0v efforts and we kept in touch over the years, even when I dipped out of civic tech into the private sector and then resurfaced as a Code for Canada fellow.

So it was really a walk down memory lane to see Taiwan on the schedule for Newspeak House. I reached out to the organizer of the event for a coffee chat - and they were delighted to meet, and even brought some of their friends.

The coffee chat felt like we'd known each other for years. They asked about the fellowship and then shared some advice regarding research, narrowing scope, and finding your life's purpose. It was so interesting to hear about where the OCF sits - between the civil society, efforts like g0v, and the Digital Ministry.

It reminded me of how I consider Developer Relations to be a bridge - between the product/engineers and the users/customers. And my job is being the runner, to carry information across from side to side, to translate it as best possible for the other side to be able to use of, to maintain the bridge so that they trust it enough to use it, and to make judgements about the urgency of relaying information. DevRel are basically spokespeople in governance, but they also carry so much of the product knowledge and technical expertise to be credible.

Rosalind and I talked about the ambiguity of research and how sometimes in finding one's life's purpose, one must sometimes look to the function and not the theme. It may be that many people I admire know exactly what they want to do with lives, they know what theme they want to impact and they works towards that goal. Other forms of purpose are acceptable beyond themes, for example - perhaps my purpose is being a facilitator of projects and people, or a bridge between systems that do not understand each other.

The visit from the Taiwan delegation gave me so much to think about because it presented a mirror to the past - a time where I was so excited about civic tech and knew very little, in contrast to now - where even though I understand the field and have made an impact, there's still so much more that I want to do.

Stay tuned for a field note about their presentation and all the projects I learned about!
++ 13 Feb 2026 | who taught us the rules | Draft field note on administrative burden, her father bending systems, sedimented legitimacy, and designing rules before they harden.
(Rough Draft) Field Note: Reflecting on a Fellowship Where Rules Can Be Rewritten / Who Taught Us the Rules

The first time that I noticed systems meant to support people in fact actually excluded them was the free lunch in elementary school. In first grade, trying to get a free lunch was a bureaucratic rollercoaster. I felt ashamed that my father had to prove his retirement status and income in order for me to be able to eat lunch at school because we could hardly afford lunch otherwise. So that chocolate milk I had every morning when I arrived, it weighed on me heavily because we had to earn it.

Why are systems that are meant to support people so difficult to access?

There is now research that calls this “administrative burden,” the idea that paperwork, verification requirements, and documentation act as gatekeeping mechanisms even in programs designed to support low income families. I did not have that language at the time. I only knew that something about it felt wrong.

Certain systems make it harder for people to access services that they need. And because of the way they are built, people may not even attempt to advocate for themselves.

This is just one of the patterns I have been reflecting on. Systems that I have observed over the years either include some people and exclude others, add friction to the process for the groups most in need, or create an intimidating process that adds too much cost.

My parents were immigrants. They emigrated to Canada and then to the United States in the 1960s, and their perspective on how to interact with systems is so different from mine. My father, in particular, saw rules as flexible, power as attainable, and systems that meant to squash the hopes and ideals of immigrants as unnecessary to pay any mind to. He would bend or navigate around systems that didn't serve him.

For example, he would sign me up for a private elementary school education, negotiate a scholarship that did not exist, and then use my academic abilities to prove it was worth it. He would convince, charm, and negotiate his way into rooms and doors that were historically closed for our people. Part of it was his ability to present as white passing and his British accent, which made him more palatable to the majority, but the bulk of it was his lived experience. Being the other in so many foreign countries gave him this innate confidence that he was owed power, owed a seat at the table, owed an audience.

When it came to high school admissions, my neighborhood in Queens was zoned to one school. On paper, zoning looks neutral. In practice, school zones mirror housing segregation, and housing segregation mirrors income inequality. If you grow up in an underprivileged neighborhood, your local schools are likely to reflect that.

My father was not fond of the assigned school, so we went to school board meetings to try and get an exception without much luck. He would not let this go. He continued to contact the school board and talk to related officials. One day, during the summer before the semester started, he dropped by the high school he wanted me to attend and ran into the new Principal on the grounds in a t shirt and shorts because he was not expecting to meet parents. They became friends. My father explained my situation and suggested that a letter from the Principal inviting me to the school would move the process out of the school board’s hands. He agreed. With that letter, I was enrolled in the school my dad wanted for me.

The admissions process for Queens high schools seems neutral on paper, but it rewards insider knowledge. How to apply. Where to apply. Who advises you. What counts as merit. What paperwork and timing matter. What exceptions exist. Who knows about them.

My parents, and my dad especially, saw this discrepancy clearly because they had to navigate systems repeatedly, first in Canada and then in the United States.

I was different. I grew up in an era where Muslims were othered in society after 9/11. We were not welcome. I internalized rules as fixed and legitimate. To me, breaking the rules was not an option. There were consequences. My father and I often got into arguments about this. I watched him bend systems and get results. I cringed. I assumed he would be punished. He rarely was. He insisted I should do the same, but I had so much discomfort around bending the rules.

Power shows up in small ways. Who gets access to information early. Who understands the process. Who has someone to ask. Who knows the real rules.

Over time, I began to notice that most systems are layered. They are built on precedent and accumulated logic. They persist long after their original rationale. I learned recently about leaseholds in England and Wales, a medieval landholding structure that still shapes modern property ownership. A feudal remnant still determining who owns land and who holds time limited rights.

That was when it struck me again. We live inside sediment. Layer upon layer of inherited logic.

Which is why Newspeak House feels so strange and so special.

Reflecting on these experiences makes me really appreciate the opportunity that the Newspeak House fellowship presents. A house with resources and faculty that we can utilize. We could govern it as a small country, with rules, policies, and processes. We could layer different systems, play prefigurative politics, and build the society that we want to see in the world.

Why is this special?

Because systems in the world exist with such layered inheritance and are hard to change precisely because they are stacked with years of precedent and rules. To change systems like retirement benefits, Medicare, school admissions, or immigration requires thinking out of the box, which is very difficult to do when you are overwhelmed within the system trying to get things done.

Here, at least in theory, we are not bound by centuries of sediment.

At Newspeak House, rules are not treated as fixed inheritance. The system resets every year without full knowledge of the previous systems. It is a space where rules can be created, contested, replaced. It is where you can analyze systems as systems and prototype alternatives because you have the space to design, test, and create better systems than the ones you have interfaced with in the real world.

This feels so special and so unique because out in the real world we are always pushing against sedimented legitimacy.

To change the world in any meaningful way, we need to be able to displace systems, to analyze, shake up, and create purposeful improvements that do not simply get absorbed by the old logic.

The awards exercise is a smaller example of this. This is not about who wins the award. It is about building a system of evaluation. How do we decide, asynchronously and as a committee, what counts as impact and evidence. How do we encode our values into an algorithmic process, with or without AI. And then how do we publicly justify those decisions as part of the system we created to do these evaluations.

The core of this for me, and the part that hits home the most, is the question of legitimacy.

As a young girl, I took rules and systems and laws as the highest form of legitimacy possible. I did not believe they could be bent or modified or made an exception to. I watched my father break rules and somehow still get his way. Later in life, I watched senior officials and leadership do the same.

New systems do not displace old ones simply by being better. They displace them by earning legitimacy.

Most people spend their lives navigating institutions they did not build, arguing within rules they did not write. Here, we are being handed the chance to design systems before they harden.

I sometimes wonder whether that feels different depending on how you grew up. If you were always comfortable inside systems, perhaps designing one does not feel radical. But if you grew up feeling governed by rules you could not bend, watching your family fight administrative friction just to access what was promised to them, then being handed the chance to create rules from scratch feels almost unreal.

And even here, we default to precedent. We reproduce familiar hierarchies. We hesitate to truly unsettle inherited logic.

Designing systems is heavier than criticizing them. It forces the question of authority. What gives us the right to decide what counts. What makes our process legitimate.

This house gives us something rare. The space to practice constructing legitimacy intentionally. The question is whether we will recognize the opportunity in our hands before the time is up.
++ 14 Feb 2026 | disagreeing with Koyaanisqatsi | Field note resisting the film's single moral arc, defending cars, planes and transit as immigrant mobility rather than alienation.
Field Note: Reflecting on watching and disagreeing with Koyaanisqatsi

Tonight, I attended a screening of _Koyaanisqatsi_ with a group at Newspeak House. The audience was mesmerized. Words like “so truthful,” “objective,” and “work of art” floated around the discussion circle afterwards. People were in awe. They admired the precision of the cuts, the rhythm of the music, and noted that while it used real footage, it still managed to create a plot.

I felt something else.

About ten minutes into the film, when the mountains panned into power lines, I almost laughed because at that point it was clear to me what the film was going to present. Before that, I had been curious about the transition and where we were headed. After that, I felt I understood the thesis.

Shortly after, the music swells and we end on a family sitting on the sand at the beach, panning out to reveal a looming power plant behind them. I laughed quietly. Not because it was funny, and not to mock the craft, but because it felt like such an obvious rhetorical move.

As the film continued, I noticed a pattern of selection. When it zoomed in on human faces, they were often wary, blank, or distrustful. There were one or two smiling faces, but they felt incidental. Whenever it showed technology or urban advancement, it paired those images with speed, fast-paced music, and an implication of alienation: people moving urgently through subway stations, streets, or factories.

It was beautifully crafted. But I felt resistant to what it was trying to do.

It felt as though the film was asking me to dehumanize these people, to see them as extensions of machines. That was difficult for me. I saw the women placing food onto factory belts sped up 10x and thought about how physically demanding that job must be. I saw people entering subways en masse and remembered how easily I could visit my parents from the city on weekends. I saw highways filled with cars meant to disillusion me, and thought about how, for immigrant families like mine, cars represented economic mobility and access.

The film seemed to position these advances in ways that encouraged suspicion and critique, while I felt the reality was more nuanced. Have we polluted the earth through industrialism? Yes. But have we also created electronic wheelchairs, video calls, and transit systems that expand freedom and connection? Also yes.

In the discussion, people insisted the film was neutral because it used real footage. What I felt was resistance.

Does industrial modernity creates alienation? Yes, it does. Does acceleration destabilize life? Yes, it can. But there's so much more to it than just that - and the film curated one moral valence and held it without counterweight.

While watching cars in factories, I thought of immigrant families who rely on those cars for mobility, for work, for better schools. While watching planes underscored by ominous music, I thought of reunions, migration, expanded worlds. The film abstracted humanity into masses; I hated that.

In the discussion circle, I felt slightly off. Everyone was in awe of the artistry and the messaging. I briefly wondered whether I lacked artistic capacity. But I do respect the craft. I can appreciate the juxtapositions, the rhythm, the scale. It was an experience. I simply felt myself resisting the narrative from early on. Once I recognized the device with the power lines, I lost some ability to fall into the flow, and perhaps that dulled the awe.

I don’t reject the film’s concerns. I reject the exclusivity. The film presents itself as truth. I disagree because it feels like only a slice of the whole story.

Perhaps my resistance comes from an instinct toward the need for nuance - an unwillingness to accept a single moral arc when the reality of modern life feels so layered. If that means I struggle to surrender to narratives that compress nuance into verdict, then that too is part of how I see the world.

Three longer pieces grew out of that room's thinking:

- **The resistance is information** (26 Jul) — the essay where I found my own loop. *"I know I can build something worthy of attention. I do not yet trust that my way of seeing is itself worthy of attention."* Naming it broke it.
- **How networks are born — and second thoughts** — the session with Ed and James on mission, taste, and letting people show up, and then the weekend where the advice wouldn't settle.
- **What I actually care about** (31 Jul) — the hour with Hannah that turned six months of different iterations and imposter syndrome into a new missio statement.

#### Mentorship

In the Prototype Diary template, there's a section to acknowledge faculty mentorship and feedback. There is truly too much to document. In so many discussions after events, in 1:1 meetings, in the late nights after ration club - I found myself learning, growing, challenged, and inspired. Even the times that I felt shy talking about Sparkle Bureaucracy itself because I wasn't sure what it really was or what I was building - people engaged me on the different parts of the mission or on ai agents or factories or things they were building and wanted my opinion on.

If pairwork had survived this cohort, there would be more documentation here. But while this is the lightest part of the diary, it's one of the more irreplaceable parts of the experience.

#### The bookshelf

I haven't finished all these books yet, but these are some of the recommendations from the faculty and cohort that really influenced all of the ways I've been thinking about this project - and I wanted to share that here.

| Book | From | What I learned |
| --- | --- | --- |
| [*The Utopia of Rules*](https://en.wikipedia.org/wiki/The_Utopia_of_Rules) — David Graeber | Anouk Ruhaak | The canonical SB text by title alone — Graeber's "dead zones of the imagination" are exactly what sparkle attacks: the bet that forms, queues and stamps can carry play and meaning instead of dread. Half the project's name answers this book. |
| [*Radical Help*](https://www.hilarycottam.com/) — Hilary Cottam | Chris Owen | "We architected our systems poorly and can radically re-imagine them." Relational welfare is the humane baseline: proof the civic encounter can be redesigned without any technology at all — SB's AI-native work has to at least clear that bar. |
| *Incorruptible* — Eric Ries | Theodore Keloglou (also the house Book Club's pick, 16 Jun) | How institutions keep their integrity while changing — the question every SB experiment puts to the ritual it re-skins: what must not bend when the intent changes? |
| *Who Thought This Was a Good Idea?* — Alyssa Mastromonaco | Hannah O'Rourke | Operations as care: the unglamorous staffwork that makes big rooms function. The mission-cards, reset-slips and print-pipeline end of SB is this book's territory. |
| [*The Employees*](https://en.wikipedia.org/wiki/The_Employees) — Olga Ravn | Six Silberman | A crew reviewing their coexistence with their objects and with each other — the strangeness of working alongside non-human colleagues, read while building agent crews of my own. |
| *The Majority Myth* — Edmund Lewis Maklouf | Met the author at his launch (20 May) | The model-minority thread: what are my true motivations for this project? Still sitting with it |
| [*Seeing Like a State*](https://en.wikipedia.org/wiki/Seeing_Like_a_State) — James C. Scott | Field notes, 14 Dec — excerpts | Why simplified, "legible" systems erase lived experience and reproduce inequality — the seed of the legibility-and-bureaucracy lane, and the ancestor of the skeleton-versus-intent bet |
| [*Exit, Voice, and Loyalty*](https://en.wikipedia.org/wiki/Exit,_Voice,_and_Loyalty) — Albert O. Hirschman | Field notes, 14 Dec — excerpts | The precise frame for disengagement, silence and morale decay in collective projects — the cohort question, named |
| [*The Logic of Collective Action*](https://en.wikipedia.org/wiki/The_Logic_of_Collective_Action) — Mancur Olson | Field notes, 14 Dec — excerpts | Why people rationally disengage from shared projects they believe in — read the week the cohort's disengagement first stung |
| [*Reinventing Organizations*](https://en.wikipedia.org/wiki/Frederic_Laloux) — Frédéric Laloux | Field notes, 6 Feb — excerpts | The red-to-teal paradigms behind "what are managers actually for" — and why permission-less cultures don't exist: even anarchist systems have rules |
| *Anarchic Agreements* | Ed Saperia — field notes, 14 Dec; excerpts | A field guide to collective organising without formal authority — read against the house's own rule-light design |
| ["The Tyranny of Structurelessness"](https://www.jofreeman.com/joreen/tyranny.htm) — Jo Freeman | Alex Vince (a re-read, with a new lens) | Structureless groups don't escape power — they hide it. The essay behind the shadow-governance field note, and half the argument for why the lab writes its rules down |

#### Prior art

Librarian check-ins with Matt Stempeck resulted in a collection of prior art - projects that were interesting as I explored different directions with SB. I also ran a 100-case research sprint with agents across multiple lanes to consolidate SB-aligned projects or movements.

| Project | What it does | What I'm learning from it | How SB differs or is influenced by |
| --- | --- | --- | --- |
| [*Papers, Please*](https://papersplea.se/) — Lucas Pope | Puts the player behind an authoritarian border-inspection desk; documents, quotas, refusal | Policy should arrive as a felt interface, with every mundane stamp connected to a human consequence | SB intervenes in a real procedure; the game diagnoses the institution rather than improving it |
| [Models All the Way Down](https://knowingmachines.org/models-all-the-way) | Visual investigation of how 5.8bn image–text pairs became LAION-5B | Make scale bodily comprehensible; trace mundane classifications to public consequences | SB aims at appeal/correction routes the investigation leaves unresolved |
| [New World Summit](https://www.jonasstaal.nl/) — Jonas Staal | Alternative parliaments co-created with excluded political movements | Redesign the room, symbols and authorised participants together; let speculative administration harden into infrastructure | Influence: the courage to build alternative institutions as real, inhabitable rooms — the border authority and the spy agency are small parliaments of this kind |
| [Project Re:form](https://civilla.org/work/project-reform-case-study) — Civilla | Statewide redesign of a benefits application and the staff practice around it | A form can become a respectful invitation without theatricality or AI | SB is AI-native; Re:form proves the low-tech baseline |
| [JustFix Letter of Complaint](https://app.justfix.org/en/loc/) | Tenants generate and certify-send a formal repair-demand letter | The full pipeline matters; a person should leave with an artifact that changes how they can approach power | Influence: the durable-artifact leg of the experiment bar — a person should leave holding something that changes how they can approach power |
| [Haqdarshak](https://www.haqdarshak.com/) | AI-supported entitlement discovery behind trained local agents | Let AI strengthen a trusted neighbour as the civic interface | Influence: the trusted-person-as-interface finding — SB's translation work aims at intermediaries too (campaigners, evaluators), not only end users |
| [OpenCRVS](https://www.opencrvs.org/) | Open, offline-capable civil registration | Acknowledgement and status are emotional design — show a person they've been seen | Influence: acknowledgement and status as designed affect — SBA's visa classes and arrival tracking are a playful cover of this pattern |
| [Buurtzorg](https://www.buurtzorg.com/) | Dutch home care via small self-managing teams | Technology can remove managerial layers and support professional discretion rather than automate judgment | Influence: structure itself as affective design — the network's small-events rhythm over big panels follows the same logic |
| [vTaiwan](https://info.vtaiwan.tw/) + [pol.is](https://pol.is/) | Agenda-setting, opinion mapping, facilitated deliberation, point-by-point government response | Make disagreement navigable; separate consensus from popularity; require a visible institutional response | The movement-plus-tool precedent — SB may need a canonical tool or a portfolio of rituals |
| [Habermas Machine](https://deepmind.google/research/publications/65220/) — DeepMind | AI drafts common-ground statements; participants criticise and it revises | Synthesis should be iterative and contestable; measure perceived clarity and bias instead of declaring neutrality | Influences Public Voice Customs: synthesis must stay iterative and contestable; SB adds the affective layer and the civic-capability requirement |
| [Talk to the City](https://ai.objectives.institute/talk-to-the-city-1) | LLM turns testimony into navigable clusters linked to source voices | Contestability: clusters retain links to underlying material | SB treats felt experience as a first-class claim |
| [Document Assembly Line](https://suffolklitlab.org/) — Suffolk LIT Lab | Guided interviews → assembled court forms → e-filing | Durable, open, shared legal infrastructure with real institutional adoption | SB researches the felt experience the record says is missing: whether the process reduced fear or humiliation |
| [Pathfinder](https://www.mobilepathways.org/pathfinder) — Mobile Pathways | AI immigration case intelligence for legal-service orgs | AI capacity built *for* trusted intermediaries rather than replacing them | The technology currently sparkles for the professional intermediary; SB targets the resident's encounter |
| [Clear My Record](https://codeforamerica.org/) — Code for America | Government-initiated bulk record clearance | Sparkly precisely because a humiliating ritual disappears and the burden moves back to the institution | SB insists on notice and correction — invisible automation can become another opaque system |
| [HRC Explorer Grants](https://gateway.hrc.govt.nz/funding/ideas-funding/2026-explorer-grants) | Anonymous short application, threshold review, qualified lottery | Replaces false-precision ranking — an honest institutional response to uncertainty | Affect is not explicitly designed here; SB designs it |
| [Helsinki Summer Streets / UrbanistAI](https://site.urbanistai.com/helsinki-summer-streets-1) | Residents and planners manipulate generated images as shared planning objects | Generative imagery as a shared object, not a design oracle | SB requires reception evidence before affect claims |
| [Rahvakogu / People's Assembly](https://kogu.ee/en/activity/peoples-assembly/) — warning case | Estonian citizens' assembly whose parliamentary handoff failed | A strong participatory process can reduce trust when the institution fails to close the handoff | SB treats the institutional handoff as part of the experience |
| Consult (the Humphrey suite) — UK Gov | Theme frameworks per consultation question; inspectable analyst dashboards | Human-inspectable theme mapping as the safe shape for AI consultation analysis | SB differs: it aims at the felt encounter of consultation, not only the analyst's dashboard — Public Voice Customs starts where Consult stops |
| Cambridge Design Code + [Go Vocal](https://www.govocal.com/) | AI thematic summaries of open-text planning feedback, staff-checked against source | Staff verification against source is the contestability step | Influence: staff verification against source as the contestability step — mirrored in Project Mirror's human-approval gates |
| [Policy Synth](https://policysynth.ai/) — NJ AI Task Force | Workers rank AI-caused problems; agents evolve policy proposals | Worker-ranked problems as the input to agentic policy generation | SB differs: keeps affect and legitimacy central where Policy Synth optimises the pipeline; the jury-and-constitution work is the shared ground |
| [Decidim](https://www.decidim.barcelona/) / [CONSUL](https://consuldemocracy.org/) | Municipal participation infrastructure at scale (€30m Barcelona, €100m Madrid budgets) | Participation infrastructure that reaches real allocation decisions | SB differs: experiments-as-releases rather than platform-first — Decidim is the kind of infrastructure a matured flagship could plug into |
| [FixMyStreet](https://www.fixmystreet.com/) — mySociety | Report a problem, route it to the responsible authority, publish the status trail | Public status trail as accountability | Influence: the public status trail as accountability — SBA's live dashboard and Conference Pulse's visible participation borrow the pattern |
| [LiquidFeedback](https://liquidfeedback.org/) | Liquid democracy software | Delegation, revocation, and voting operationalised as civic infrastructure | An SB version would focus on the felt ritual and trust comparison, not only the software |
| [Creative Bureaucracy Festival](https://creativebureaucracy.org/) | Festival around public-sector imagination | There is an existing audience for optimistic bureaucratic reform | SB is more explicitly AI-native, experimental, and prototype-led |
| [OneTeamGov](https://oneteamgov.uk/) | Public-sector reform community | Useful adjacent community and reform energy | SB uses more theatrical, AI-native, artifact-based experiments |
| [Civic Tech Field Guide](https://directory.civictech.guide/) | Directory and taxonomy of civic technology | Helps classify the project and test novelty | SB should become legible enough to be added as a pattern or project |
| [PipResist](https://pipresist.uk/) — Campaign Lab | Turns voice notes into government consultation responses | Lowering the barrier to civic voice is a live, adjacent build | Public Voice Customs focuses on the receiving side: making volume, substance, and uncertainty legible without authenticity policing |
| [Who Targets Me](https://whotargets.me/en/) *(field notes)* | Crowdsourced transparency for online political ads | — | Influence: transparency tooling born at Newspeak House — the house lineage SB continues |
| [Permission Slip](https://app.civictech.guide/p/permission-slip/) *(field notes)* | Consumer tool for exercising data rights | — | Influence: an agent exercising rights on your behalf prefigures Mirror Commons' consent machinery |
| GOV.UK Notify & Forms *(field notes)* | Shared government notification and form platforms | Legibility: how systems demand structured, interoperable inputs | Influence: the legibility lane — how systems demand structured, interoperable inputs is the skeleton SB re-skins |
| [The Fallacy of AI Functionality](https://facctconference.org/static/pdfs_2022/facct22-3533158.pdf) (FAccT 2022) *(field notes)* | Paper: AI harms often stem from systems that simply don't work | — | Influence: functionality-first scepticism became SB's honesty norm — demo what works, log what broke |
| Negotiating the Algorithm — ETUC manual *(field notes)* | Union handbook for bargaining over algorithmic management | — | Influence: making algorithmic power legible to the people it manages — kin to the moment register |
| [Digital Statecraft Manifesto](https://digitalstatecraft.academy/) *(field notes)* | Manifesto/network on statecraft in the digital era | "Go find out who these people are" | Watch-list: possible allies for the govtech horizon — "go find out who these people are" |

#### Inspirations

| Movement | Ingredient of sparkle |
| --- | --- |
| [Glitter Revolution](https://en.wikipedia.org/wiki/Glitter_Revolution) (#NoMeCuidanMeViolan) | Material that behaves politically — the affective device physically marks power and survives as a distributed visual language |
| Operation Inflation (Portland inflatables) | An inhabitable counter-role — costume changes participation without pretending confrontation is safe |
| [LASTESIS](https://en.wikipedia.org/wiki/Las_Tesis), *Un violador en tu camino* | A replicable score — choreography turns individualised harm into collective accusation, allowing local translation |
| [Otpor!](https://en.wikipedia.org/wiki/Otpor)'s Milošević barrel | A designed institutional dilemma — humour from mapping the opponent's response options |
| [Mothers of Plaza de Mayo](https://en.wikipedia.org/wiki/Mothers_of_the_Plaza_de_Mayo) | A counter-procedure — garment, place and cadence create status and memory where the state withholds both |
| [ACT UP](https://en.wikipedia.org/wiki/ACT_UP) | Affect joined to procedural literacy — graphic force and grief leading into organised expertise |
| [Women of Liberia Mass Action for Peace](https://en.wikipedia.org/wiki/Women_of_Liberia_Mass_Action_for_Peace) | Symbol that escalates into leverage — a counter-uniform connects witness to negotiation pressure |
| Hīkoi mō te Tiriti / the parliamentary haka | Living protocol confronting official procedure — embodied authority meets a precise legislative document |


## 05 | The Roadmap

I'm still figuring out where this goes!

What I do know and I've articulated across the experiments, events, and reflections above is *what I care about* and *what I hope this network will do for people in communities that do good*. This roadmap is built off those assumptions, but like all things will iterate!

There are a few things I can document so far that are important:

1. The **moment** — the AI /fluency/gap/ window closing on civic communities on someone else's terms
2. The **method** — playful, working experiments that let people feel how systems work and how this technology can help/harm/impact.
3. The **horizon** — using emerging technology to impact civic services

#### The rhythm of the network

From my experience running events and engaging with communities, this year:

- **Hackathon → demo night** is the anchor cycle: build together around suggested civic topics, then show the work. It's Clawclub's lesson made regular, where people can convene around a big moment, and the building together is what creates the sense of the community.
- **Socials built as experiences** (2× a year — game nights, Xmas, summer): the Birthday Passports and spy-reunion lesson. Games lower the bar to social interaction, so the experiments are the social infrastructure rather than entertainment between the real work. And they also allow me and other organizers to showcase the power of newer technology tools as a case study.
- **Hear-from-experts sessions** — one domain at a time for a specific audience.
- **Problem discovery** — gatherings that bring in people *with problems*, not technologists: cross-pollination, coffee chats. The network's intake ritual, so the work starts from real civic needs. Inspired by CFA brigade hack nights.
#### The map

| month | title | description |
| --- | --- | --- |
| Aug 2026 | Prototype assessment | This submission! |
| Late Aug 2026 | Campaign Factory demo at CTFG | The vibe-code show & tell at the Civic Tech Field Guide, with Hannah. |
| Aug 2026 | CHEW follow-up blog | The Evaluation 2030 write-up the festival has asked for 3 times. |
| Sep 2026 | AI agents for good — hackathon | The network's first event under its own banner: prototype a different future, with suggested civic topics and challenges. |
| Sep 2026 | Oxfam GB workshop | Campaign Factory with Oxfam's campaign engagement team, co-run with Asil Sidahmed — inbound from the Campaign Factory demo at the conference. |
| Sep–Dec 2026 | Hack nights, monthly | The Clawclub rhythm under the network's own banner — build together, share what's new, bring hardware. |
| Oct 2026 | Demo night | Projects from the hackathon, plus anyone else with something to show. |
| Oct 2026 | Lovelace brown-bag | The AI-optimism debate with Lovelace's researchers — an invitation that came out of the Evaluation 2030 keynote. |
| Oct 2026 | Paul Silcock team session | The production-agents team presentation — an invitation from Agent Craft 2026. |
| Autumn 2026 | The name decision | Whether "Sparkle Bureaucracy" stays the network's name follows what the flagship becomes. |
| Nov–Dec 2026 | Flagship: smallest credible run | The chosen experiment runs at its smallest honest size, evidence-first. |
| Dec 2026 | Winter social, built as an experience | The experiments are the social infrastructure — game night rules apply. |

#### Open questions carried forward

? The name | "Sparkle Bureaucracy" seems to have outgrown the mission, but the name still feels special. I think a renaming is important to reflect the shift from redesigning service futures to prototyping optimistic futures with AI, but I don't know what this will be called yet.
? The flagship | As a builder, I really want to have a flagship project - a tangible artifact that headlines the network like pol.is for vTaiwan as an analogy. Candidates include working further on Campaign Factory, building something gov adjacent, or Peyman's idea to build "What can AI do for me?" as a product that traces your work and then gives you ways to optimize with AI.
? Partners & sponsors | There are lots of potential cross collaboration opportunities with networks that have similar overlay in how they work and communicate: Faculty.AI · AI Builders · Creative Bureaucracy Festival · AI for the Rest of Us · MHCLG Local AI · Google.org · James Plunkett / Kinship Works · UKAuthority.

## 06 | Addressing the criteria

Sparkle Bureaucracy is not a single tool with a user base and a scoped community, but it is an original contribution to the field of political technology - because it carves out a space for a community that doesn't already exist with a mission to build things together with a certain type of optimistic energy.

### 1 | Political technology fit

- [x] Can be reasonably added to the Civic Tech Field Guide
- [x] Used or tested by civic/political/public sector communities — Campaign Lab, charity evaluators, Oxfam GB (future), the cohort, Ration Club community
- [x] Infrastructural, used by multiple groups — the lab serves multiple civic communities rather than one

The lab's artifacts are civic and political technology end to end: [Sparkle Border Authority](https://github.com/sugaroverflow/sparkle-border-authority) (bureaucratic ritual as live software), [Project Mirror and the open V1–V15 awards pipeline](https://github.com/nwspk/politech-awards-2026/blob/main/docs/project-mirror-v2/methodology.md) (participatory evaluation of 321 political-tech projects), [Campaign Factory](https://campaign-factory.vercel.app/factory/replay/conference) (campaign strategy research for UK civic problems), [Conference Pulse (live conference participation)](https://campaign-lab-conference-pulse.vercel.app/), [Topic](https://github.com/sugaroverflow/timetable) (community scheduling and forum software).

### 2 | Public web presence

- [x] Live URL — [sparklebureaucracy.org](https://sparklebureaucracy.org) with a live mailing list since 24 May with 35 subscribers.
- [x] Clear documentation — this microsite, and the full lore is available in the [site repo](https://github.com/sugaroverflow/sparkle-bureaucracy-site)
- [x] What is being assessed is visible online — live deployed prototypes (SBA, Campaign Factory, the awards site, topic.forum) and this submission page itself

### 3 | Original work

- [x] Original features described
- [x] Contributes something substantial
- [x] Prior-art adaptation documented

### 4 | Not obsolete

- [x] Meaningfully different from similar tools — **designed affect on top of real procedure, AI-native, aimed at the upskilling window, with under-resourced civic contexts as a stated boost**
- [x] Evidence of learning from previous attempts — the 100-case corpus classifies neighbours as exemplars, ancestors, infrastructure-awaiting-sparkle, and warning cases
- [ ] Avoids the category's predictable failure patterns
- [x] Librarian check-ins — both completed; the conversations with Matt Stempeck are in the field-notes

The full prior-art table and inspirations constellation live in Part 04.

**Where I may have missed:** It's hard to say that a network avoids predictable failure patterns - because I haven't launched the demo nights and community itself. However, I have avoided some predictable failure patterns in the designs of the experiments and events like ClawClub and Prototype Club (for example, adapting to the needs of the cohort as an audience, by making the club private rather than open to the public which was causing dissent and discomfort).

### 5 | Evidence of use

- [x] Testimonials — distributed with each of the experiments and events
- [x] Metrics — in the entries they belong to: Conference Pulse production data and the 19-ballot vote (16 Jul), Clawclub attendance (17 Feb), 321 projects and the 18-point Borda result (30 Mar), commit histories throughout
- [x] Activity logs — the engagement log, the commit histories, the open diary on github
- [ ] Community validation

Evidence of use usually asks, "who used the tool?" and I can report that on a tool by tool usage. Applied to the network, however, community validation is tricky. There are people across the different communities that I've built with, given talks to, or engaged with - with whom the mission of the network has resonated very strongly, so perhaps that *is* community validation.

If the evidence is, instead, **communities engaging through experiments.** Ration Club guests went through a live border ritual and co-created the fiction. The cohort was inside Project Mirror, ran its own live ranking, and played the spy reunion. Clawclub filled the hall. Campaign Lab co-built Campaign Factory, ran it at their conference, and subsidises free access. 15+ charity evaluators queued after a keynote, and the festival organizer has requested a blog write up 3 times. Oxfam GB requested a team demo, the Civic Tech Field Guide invited demos, and a CTO from an agents company suggested a demo to his team. So maybe this is just the beginning of what Sparkle Bureaucracy will inspire!

> On **Campaign Factory**: "Amazing to see the platform you have built." — Abby Mason, Campaign Engagement Manager, Oxfam GB

> On **sparklebureaucracy.org**: "You are an inspiration, Fatima! I've shared your website with family and friends today!" — Dr Eugenie Regan

**Where I may have missed:** Participant evidence and feedback for Birthday Passports was never preserved at all. Most of the experiments did not explicitly request feedback or capture user experiences, so a lot of the lessons learned are anecdotal and could have been more *data driven*. In the future, even for the social experiments, I should build in some kind of feedback loop similar to what we did at the end of the Politech Awards Showcase.

### 6 | Methodological soundness

- [x] Foreseeable failure modes identified
- [ ] Approach adapted based on those risks
- [ ] No clear predictable reason for failure remains — the category's predictable failure is a vibe with no program

**Where I may have missed:** It was nearly impossible to run the experiments I designed in the house, because of the cohort's resistance to prefigurative politics and because the legitimacy of the course was structurally in question for most of the year. As early as December 15, you can see in my field journal, that I started to move my center of gravity outward - started hosting ClawClub and organizing external takeovers. However, all of my engagements were pieces of a whole - and while they were iterative and helped me come to the new mission of SB, they weren't planned in the way that testing an application would - so I don't know how to answer these criteria.

## 07 | Final Reflection

#### What I set out to do

As a builder, I was expecting to build a tool with a set of users from a community and multiple iterations of that tool after user research and testing. I think of that now and wonder if it would've been easier than where I've actually ended up. And that's not because building a tool and user research is *easy*, but because Sparkle Bureaucracy - or whatever new name this network takes on - reflects so much of *me* in its mission.

It's *me* who is optimistic about AI, it's *me* who wants people who do good in this world to learn how to use AI so that they won't be exploited by insane vendor contracts when the gap gets too large. It's *me* who hopes that it's the bipoc technologists, journalists, policy writers, campaigners, civic hackers, and activists who will be able to use AI to amplify their work and compete with all of the people who, in these systems, have power. It's *me* who believes that in a few years, those who understand AI will have power - and I *want* to be one of those people, but I *also want* to be someone who builds and maintains a bridge for other people to be one of those people.

It's not what I set out to do, but ever since I've articulated parts of this new mission, I don't think I could ever go back.

#### What I actually built

So many experiments and projects and tools! *A border regime application at my birthday, a multi agent pipeline of digital twins, and a spy agency reunion facilitation app. Faculty commissioned two artifacts, which I built with a partner community. A hack-night community filled the hall. Two keynotes generated queues and follow-up demands I am still answering.*

These were not part of the plan originally, but they accumulated - and each one, through building with AI, taught me something about the technology, the people that used or reacted to it, and had an impact on how I feel about the gap.

What I actually built feels like a vision for the network - I suppose I haven't built the network itself yet - but fans of the network exist. I believe I have demonstrated that building community, engaging people, and launching a project are all things that I'm very capable of doing!

#### What I learned about political technology

This would probably be an essay on its own, so I will aim to be brief!

- Systems can be changed! You don't need to dismantle the entire structure to change the intent or the experience of people in the system. There are also patterns in systems and disrupting a pattern can change the experience, too.
- Legitimacy is constructed! I trusted my ability to execute far more than my right to originate something new because I never felt credible enough. The ways that we measure credibility as engineers are so different from the ways that the rest of world measures credibility - and it's been an exercise in accepting that. At the same time, it's been fun to see the ways that legitimacy can be gained through smaller means when you're not trying to get the whole system to legitimize you!
- There are many forms of political technology and contrary to what I first thought, the lens is not always something that is political in nature. Rather, it can be technology that empowers a niche group or changes the way we interact with something known in a new way.
- If you're building political technology, document the process and proof more than you think you'll need. Because things change quickly, a single conversation at an event can give you a whole new idea, and documenting it means that you have a record of all the rabbit holes you've tried (or all the failure modes you've tested).
- How people show up is part of the system and sometimes there's very little you can do other than change the way that you show up and be change.
- Small, consented temporary sandboxes can be constructed in order to come to real findings about big systems (re: the value of prefigurative politics, really)


#### How the project changed

Sparkle Bureaucracy, in its first creation, felt like Ed had taken a lens across my entire life - of all the things I worked on and cared about, and found a single thread that was my mission. It was both exciting and terrifying because it was so personal to me. An experiment lab where the community would prototype and experience govtech adjacent experiments and takeaway inspiration from the emerging technology they used and the projects themselves to influence technology.

Given that definition, I was concerned that it felt unrealistic in a way - it was an experiment lab without any demonstrable outcome - it didn't change the actual civic services, it just created a sandbox to experiment and that didn't feel *good enough* for impact. In my discussions with my mentor, Matt, and faculty - I realized there were ways to mitigate this by collaborating with partner institutions like OneTeamGov that were doing the work on the ground in governments and building out the experiences that way so the outcomes would feel more impactful.

In parallel, I started to notice and validate my theory on the AI fluency gap and while I was still trying to navigate the imposter syndrome of starting a whole network - faculty mentorship sessions helped me come to the conclusion that two things were happening:

(1) I was outgrowing the original mission of SB and more interested in closing the AI fluency gap - that's where most of my recent experiments and projects had moved to, but it took me some time to reflect on this and then articulate it.

(2) I realized that I was scared to start a network outside of existing permission structures - a personal growth moment. All the projects, communities, or activism initiatives I've ever launched have existed inside systems - either supportive or antagonistic systems - that required me to take leadership roles. SB would be the first time that I just spun up something new, entirely because I thought it should exist, and that was a fear that I had to overcome.

I wouldn't have come to either of these realizations without all the exposure to different communities, engagement at events, and opportunities to give talks and workshops and receive feedback. It's been a whole journey!

#### What I would do next with more time

- Brainstorm with trusted faculty and cohort members on what the new name for this network should be and what a potential flagship project could look like.
- Plan and put the Agents Hackathon for Good on the calendar! And then kick off the demo nights.

What I would do next is in the roadmap, but I do want to touch on what I would do *differently*!

There was so much missed opportunity in this fellowship and that was a combination of the cohort's feelings about the course or my own fear to take up too much space. While I don't want to have regrets, I do think it's important to document what could have gone better, so here is the list:

- Run more takeovers! If Ration Club was more popular on our end in terms of hosting, this would've been a great way to change the energy every month and cross pollinate with other communities.
- Do prefigurative experiments! I would've loved to do more of the spy reunion and border patrol experiences - those were mostly "games", but there must be other patterns of social interaction that aren't games, but still facilitate experiential learning.
- Expand on the digital twins! There was so much excitement and rage all at the same time when it came to Project Mirror and a lot of opportunity space to play with expanding its scope or changing what the twins did that I never really got a chance to explore.

## 08 | Thank You

gallery: 18

*Because a network prototype is made of people.*

- ♥ **James Moulding** — for helping me wrap my head around networks, for believing in the optimistical Sparkle Bureaucracy when even I wasn't sure what it was, and for all the feedback and support!
- ✨ **Francesca Galli** — for being the reason I was confident and excited to run the Sparkle Border Authority at my birthday, and for always joining in on my crazy adventures!
- ✿ **Alexandra Ciocanel** — for sending over things that aligned with Sparkle Bureaucracy and for organizing the AI safety study group and discussions!
- ♥ **Anouk Ruhaak** — for indulging me on the implications of AI even while hating it, for testing the limits of my agents, and for the adventure of creating and hosting a whole conference in two days.
- ✦ **Connor Dunlop** - for being supportive of experiments and sharing your expertise on AI policy.
- ✦ **Gamithra Marga** — for inspiring and collaborating with me on the awards project LLM pipelines!
- ✿ **Hoagy Davis-Digges** — for listening to me vent about all things legitimacy of the course, and being very kind about it.
- ✿ **Joshua Becker** — for the long thoughtful email exchanges and for always looking out for me!
- ✿ **Fred O'Brien** — for creating a community of technology journalists that I could observe, learn from, and have interesting discussions with!
- ✨ **Andreas Varotsis** — for always collaborating on ideas, discussing the latest AI trends, and for supporting ClawClub initiatives.
- ♥ **Aadi Kulkarni** — for supporting ClawClub and always believing in me even when I couldn't believe in myself.
- ♥ **Hannah O'Rourke** — for being emotional support, for the pilot projects, and for repeatedly reminding me — through evidence — that legitimacy is constructed, not earned!
- ❋ **Peyman Owladi** — for giving me so much to debate about in your module and for your ideas around what SB's flagship project could be.
- ★ **Ed Saperia** - for seeing the entire vision of Sparkle Bureaucracy from the start and being so genuinely excited about all that it could be that it actually scared me.
- ❋ **Sam Bellard** - for taking care of us, being around the house and offering your expertise.
- ✿ **David Powell** — for being someone that cared about communities, supporting all of my (weird) initiatives and experiments, and providing feedback!
- ♥ **Huda Abdirahim** — for coming back to us so we could brainstorm interesting projects and talk about the impact of AI!
- ★ **Sinead Doyle** - for being interested in the design of sparkle bureaucracy and for all the interesting discussions in your module!
- ✦ **Chris Owen** — for all the tech discussions and debates about AI and for supporting Prototype and Code Club!
- ❋ **Nick Botti** — for the feedback, the emotional support, and the deep debates on American politics and the implications of AI!
- ★ **Theo Keloglou** — for reminding me over and over again that the most important thing to consider was my personal mission and how it aligned with my work - and for believing I should be a CEO?!
- ❋ **Zarinah Agnew** — for inspiring me to think about people, motivations, and what kind of impact I want in the communities I exist in.
- ★ **Jamie Coombes** — for all the things we did for the amazing awards showcase!
- ✿ **Tuna Acisu** — for supporting the bday dictatorship and reminding me that perfection is not the goal!
- ♥ **Alex Vince** — for the leadership sessions, for being someone I could rely on, and for the ways that you challenged me to try new things!
- ★ **Emily Mayhew** - for the late night discussions and debates on political lenses and life experiences.
- ★ **Asil Sidahmed** — for teaching me about real political movements, the impact of technology, and the personal impacts of this fellowship!
- ♥ **Matt Stempeck** — for being the best mentor ever, for helping me figure out what I want to do, and for being excited about the things I've built!
- ❋ **Six Silberman** — for the readings that made me weigh the pros and cons of technology, for treating me like an expert, and for implicitly answering the "why me" with our conversations.
