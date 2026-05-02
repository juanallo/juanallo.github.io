---
title: 'Six Hats: A Decision Skill That Completes My AI Context Stack'
description: "I built a six-hats debate skill so my agent can pressure-test decisions instead of cheerleading them. Here's how it pairs with last30days, deep-research, and grill-me to build real context for a project."
pubDate: 2026-05-01
tags: "ai, claude, claude-code, skills, decision-making, six-hats, productivity, agents"
image: "../images/six-hats-skill.jpg"
imgAlt: "Abstract hero image for a post about a six hats decision-debate skill"
draft: false
---

I keep adding small skills to my agent setup, and I keep noticing the same gap: AI is great at *collecting* and *synthesizing*, but not at *taking sides*. When I ask for "thoughts on X," I usually get a balanced essay where every paragraph hedges the previous one. That's not a decision — that's a Wikipedia entry with feelings.

So I built **[six-hats-skill](https://github.com/juanallo/six-hats-skill)**, a Claude/Cursor skill that runs an Edward de Bono–style six-hats debate over a topic, in three rounds, ending with a moderated recommendation.

The point isn't the framework. The point is forcing the agent into roles that *disagree on purpose*, and then making one of those roles synthesize a real call at the end.

## What it actually does

You hand it a decision and an output path. It runs three sequential rounds with these roles:

- **White Hat** — facts, known data, gaps in knowledge
- **Red Hat** — gut feel, intuition, emotional reaction (no need to justify)
- **Yellow Hat** — upside, best-case, why this could work
- **Black Hat** — risks, failure modes, sharpest objections
- **Green Hat** — alternatives, reframes, lateral options
- **Blue Hat** — moderator; doesn't argue, just synthesizes the final call

Each round sees the previous round, so positions can shift, sharpen, or concede. At the end, Blue Hat writes a final recommendation, key agreements, unresolved tensions, and next steps to a markdown file — the format my Obsidian vault wants.

Two examples are in the repo:

- [Career — frontend tooling vs. AI companies](https://github.com/juanallo/six-hats-skill/blob/main/examples/six-hats-career-advice.md)
- [Tech — React in 2026](https://github.com/juanallo/six-hats-skill/blob/main/examples/six-hats-react-2026.md)

The React one is a good demo of the value: the hats actually *disagree* about whether the framework's maturity is leverage or a trap, and Blue Hat lands on a real position ("treat your stack as a liability to be managed, not an asset to be defended") instead of "it depends." That sentence wouldn't have come out of a single-prompt synthesis.

## Why this slots into a stack of skills

I've been leaning on three other skills heavily, and six-hats is the missing fourth corner.

| Skill | What it gives me | When I reach for it |
| ----- | ---------------- | ------------------- |
| **[last30days](https://github.com/mvanhorn/last30days-skill)** | Outside-in signal — what Reddit, X, YouTube, HN are *actually* saying in the last 30 days | Early scoping. "Is this even a real thing right now?" |
| **[deep-research](https://github.com/199-biotechnologies/claude-deep-research-skill)** | Citation-backed, multi-source synthesis with a real methodology | When I need to *trust* a claim, not just feel it |
| **[grill-me](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me)** | Relentless interview about *my* plan, branch by branch | After I have a draft plan and need it stress-tested |
| **six-hats** (new) | Structured internal debate from six opposing lenses, ending in a recommendation | When I need to *decide*, not just understand |

Each one answers a different question:

- last30days → **What's the world saying?**
- deep-research → **What's actually true and well-sourced?**
- grill-me → **Where is my plan weak?**
- six-hats → **What's the right call, given everything above?**

If I only use the first three, I end up with a pile of evidence and no decision. Six-hats turns the pile into a position.

## The loop I've settled into

For anything bigger than a one-day spike, the flow now looks like this:

1. **last30days `<topic>`** — quick scan of what's being discussed right now. This catches things that aren't in my head yet (new tools, hot takes, dead repos, recent regressions).
2. **deep-research `<topic>`** — I run this when last30days surfaces a claim I want to lean on. I want citations, not vibes, before I commit to a direction.
3. **six-hats** — I feed the topic plus the research into a debate. White Hat now has *real* facts to cite. Black Hat has *real* failure modes from production reports. Green Hat has *real* alternatives instead of made-up ones.
4. **grill-me** — once Blue Hat gives me a recommendation, I let grill-me tear into *my* version of the plan, branch by branch, until I can't dodge a question.
5. **Decide and write it down** — usually a short doc in the vault with the Blue Hat synthesis on top, the grill-me transcript below, and links to the research.

The order matters. Six-hats *before* research is a vibes session. Grill-me *before* six-hats grills you on a position you haven't actually picked yet. Putting them in order turns four general-purpose skills into a pipeline.

## What changed when I added six-hats

A few things I wasn't expecting:

- **Black Hat catches what I won't.** I'm naturally a Yellow Hat about my own ideas. Having the agent role-play a real devil's advocate, with the previous round's optimism in front of it, surfaces objections I would have rationalized away.
- **Red Hat is weirdly useful.** "What does this *feel* like?" sounds soft, but it's where I notice exhaustion, hype-fatigue, or excitement that I should pay attention to. The career example in the repo is mostly carried by Red Hat naming the fatigue.
- **Blue Hat forces a position.** This is the whole game. The constraint that Blue Hat must end with a final recommendation — not a balanced summary — is what makes the output usable. I disagree with it sometimes, and that's fine; disagreeing with a clear position is *much* easier than disagreeing with "here are some considerations."
- **It's better with research loaded in.** Run six-hats cold and the hats invent stats. Run it after last30days + deep-research and the White Hat round reads like a brief. Same skill, very different output.

## Things I'd tell myself before building it

- **Sequential beats parallel.** I tried running the hats in parallel first to save time. The debate quality collapsed — each hat needs to see the previous ones to actually engage. The skill enforces sequential order on purpose.
- **Don't let Blue Hat debate.** Early versions had Blue Hat chiming in during rounds. It poisoned the debate — the moderator can't also be a player. Now Blue Hat only shows up at the end.
- **Write the output to disk, every time.** Same lesson as my [content pipeline post](/blog/claude-skills-as-my-personal-content-pipeline) — if it's not a file in the vault, it didn't happen. The skill always writes `debate-{timestamp}.md` to the path you specify.
- **Composability is the point.** Six-hats is small on purpose. It doesn't do research, it doesn't grill, it doesn't manage projects. It does *one* thing — structured opposing debate ending in a recommendation — so it can plug into whatever pipeline I'm in this week.

## Try it

If you already have a Claude Code, Cursor, or `~/.agents/skills` setup, installation is one line:

```bash
git clone https://github.com/juanallo/six-hats-skill ~/.claude/skills/six-hats
```

(Or `~/.cursor/skills/six-hats`, or `~/.agents/skills/six-hats` — same shape.)

Then ask your agent something like:

> Run a six hats debate on whether we should migrate this app from REST to GraphQL. Save it to `./decisions`.

Repo and full SKILL.md: **[github.com/juanallo/six-hats-skill](https://github.com/juanallo/six-hats-skill)**.

If you're already using last30days, deep-research, or grill-me, drop six-hats in next to them and try the full loop on a real decision you're sitting on. The interesting moment is when the four skills disagree with each other. That's usually where the real call lives.
