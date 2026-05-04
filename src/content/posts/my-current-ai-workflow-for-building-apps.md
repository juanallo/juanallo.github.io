---
title: 'My Current AI Workflow for Building Apps'
description: "The AI workflow I am using now: discovery, UI prototyping, PRDs, issues, Ralph, cmux, TDD, Playwright, and the memory loop I still need to close."
pubDate: 2026-05-02
tags: "ai, agents, workflow, productivity, vibe-coding, playwright, tdd, obsidian, claude-code, cursor"
image: "../images/my-current-ai-workflow-for-building-apps.jpg"
imgAlt: "Workflow diagram for AI-assisted product development"
draft: false
---

AI is evolving fast, new things are released everyday and I don't think there's a one solution fits all approach that will scale. I keep trying to turn AI from a pile of tools into a workflow I can trust.

The hard part is not finding another model, another coding agent, or another UI generator. The hard part is knowing what each tool is for, what artifact it should produce, and when I should stop exploring and start building.

The shape I am using right now looks like this:

1. 🕵️‍♂️ **Discovery** – [ChatGPT](https://chat.openai.com/), [deep-research](https://github.com/199-biotechnologies/claude-deep-research-skill), and [last30days](https://github.com/mvanhorn/last30days-skill) help me understand the space.
2. 🧠 **Synthesis** – [six-hats](https://github.com/juanallo/six-hats-skill) turns the research into a position.
3. 🎨 **UI exploration** – [v0](https://v0.dev/) and [Stitch](https://stitch.design/) give me quick options.
4. 🛠️ **Design system** – [Pencil](https://www.pencil.dev/) turns the direction into something more coherent and reusable.
5. 📝 **Build planning** – [Matt Pocock's grill-with-docs](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me), [PRDs](/blog/prd-to-issues-skill), and issues turn the idea into work.
6. ⚙️ **Execution** – A custom [Ralph](https://github.com/StevenStavrakis/ralph-loop) loop runs the work sequentially today, with [cmux](https://github.com/StevenStavrakis/cmux) helping me manage the agents.
7. ✅ **Quality** – [TDD](/blog/tdd-skill) and [Playwright E2E](https://github.com/microsoft/playwright) keep the AI output honest.
8. 🚀 **Mobility and memory** – [Zo](https://zo.computer/) is my away-from-desk agent, keeping me connected to my workflows when I’m on the move. My next frontier is closing the loop on long-term memory and orchestrating agents more intelligently.

I think of it less as a stack and more as a score: each tool comes in at a different point, plays a part, and then gets out of the way.

## Discovery: get signal before deciding

I still start with ChatGPT a lot. It is fast, cheap, and good for early divergence. If I have a rough idea, I can throw it into ChatGPT and get ten directions back before I decide whether the idea deserves heavier research.

When I want outside-in signal, I use [last30days](https://github.com/mvanhorn/last30days-skill). It answers a different question: what is the world saying right now? It is useful for scanning Reddit, X, YouTube, Hacker News, and the web before I accidentally build against last year's assumptions.

When I need something I can trust more, I use [deep-research](https://github.com/199-biotechnologies/claude-deep-research-skill). That is the citation-backed pass. It is where I want sources, not vibes.

Then I run the output through my [six-hats skill](https://github.com/juanallo/six-hats-skill), which I wrote about in [Six Hats: A Decision Skill That Completes My AI Context Stack](/post/six-hats-decision-debate-skill/). The important part is the order:

1. ChatGPT gives me quick divergence.
2. last30days tells me what is current.
3. deep-research gives me sourced claims.
4. six-hats turns the pile into a position.

Six-hats is the merge step. Without it, I end up with research, links, options, and no decision. With it, I get disagreement, tradeoffs, and a Blue Hat recommendation I can react to.

## UI: prototype wide, systemize later

For UI, I do not have a strict rule between [v0](https://v0.dev/) and [Stitch](https://stitch.design/). I use both for quick ideation and prototyping. The goal is not to crown a winner. The goal is to see multiple shapes fast.

This matters because early UI work is often about taste and direction, not code quality. I want to see: does this want to be dense or spacious? Is the main interaction a dashboard, a timeline, a canvas, a command palette, a form, or something else? A few generated variants can surface that faster than arguing with a blank file.

Once I have a direction, I have been using [Pencil](https://www.pencil.dev/) as the next step. I take inspiration from a website, a Dribbble shot, or one of the prototypes, and use Pencil to turn that direction into a more scalable design system.

That is the key distinction:

- v0 and Stitch are for **options**.
- Pencil is for **system**.

Pencil also gives the AI something more concrete to verify against. If the design exists only as "make it look better", the agent guesses. If there is an actual system, screens, components, and visual direction, the agent has a target.

This is one of the biggest lessons from using AI for UI: vague taste does not scale, but a concrete design artifact does.

Recently, I've also started using the [impeccable design skills](https://github.com/StevenStavrakis/teach-impeccable) to iterate on designs and raise their quality. After reaching a first pass on UI with v0, Stitch, or Pencil, I can run a polish or critique skill to push the work beyond "looks plausible" and toward something noticeably sharper. These skills give targeted feedback, suggest concrete visual tweaks, or even rework pieces that feel generic. 

The key is moving from initial exploration (where variety and speed matter) into deliberate iteration — catching inconsistent visual rhythm, weak hierarchy, or spots where the design feels a bit soulless. AI is now helping me close the gap, not just generate drafts.

Overall, the recipe is:
- v0 and Stitch for **fast ideas**
- Pencil for **design system**
- Impeccable and critique skills for **iterative polish**

> **Side note:** One missing piece I'm curious to add here is a deliberate _paper prototyping_ or quick low-fidelity step. I've started to think that even with AI and rapid digital UIs, a few minutes spent sketching flows, layouts, or screens on paper would flag UX issues faster than jumping straight into Figma, v0, or Stitch. It's something I want to experiment with in my workflow: using cheap, throwaway sketches as a buffer between raw ideas and digital prototypes, to make sure the structure is solid before the tools make it look "done" too early.

## Build: turn the decision into work

Once the direction is clear, I move into the build pipeline.

The sequence I want is:

1. **[grill-with-docs](https://github.com/mattpocock/skills/tree/main/skills/engineering/grill-with-docs)** - pressure-test the idea with docs and context.
2. **[to-prd](https://github.com/mattpocock/skills/tree/main/skills/engineering/to-prd)** - turn the idea into a product requirements document.
3. **[to-issues](https://github.com/mattpocock/skills/tree/main/skills/engineering/to-issues)** - break the PRD into implementation issues.
4. **Ralph loop** - pick up the issues and start implementing them.

I have my own Ralph loop. Right now it runs sequentially: take an issue, work it, move to the next one. That is not the final form, but it is useful because it forces the work into small slices instead of asking an agent to "build the whole app" and hoping for the best.

I use [cmux](https://cmux.com/) to manage this world of terminal agents. It gives me a better way to keep multiple panes, sessions, notifications, and agents visible. In practice, I am using a mix of Cursor Agent, OpenCode, Gemini, and Codex depending on the task.

The agent choice is still more art than science. Some are better at broad implementation. Some are better at careful edits. Some are useful as a second opinion. What matters more than the specific agent is that the work is shaped before it gets to them.

The mistake I keep trying to avoid is using agents as a replacement for thinking. They are much better when the research, decision, design, PRD, and issue are already clear.

## Quality: TDD plus Playwright

For quality, the current loop is [TDD](https://github.com/mattpocock/skills/tree/main/skills/engineering/tdd) plus Playwright E2E.

The TDD skill is for implementation discipline. It is especially useful when the slice has logic, data handling, edge cases, or contracts I do not want to regress. I want the agent to prove the behavior in tests before it rearranges the code.

Playwright E2E covers the user-facing paths. It is the difference between "the component compiles" and "a user can actually do the thing." For UI-heavy projects, this matters a lot because generated code can look plausible while still breaking a flow.

This quality layer is still evolving. The next step I want is more BDD-style AI QA: agents that can run scenario-based checks in a Given / When / Then style on top of Playwright. I do not just want tests that assert selectors. I want agents that can read the product intent, exercise the app like a user, and report whether the experience matches the scenario.

## Mobility: lightweight work from anywhere

I have also been using [Zo Computer](https://www.zo.computer/) as a lightweight away-from-desk layer.

Right now, Zo is not replacing my local development setup. It is more like an always-on cloud computer I can reach from my phone or Telegram. That makes it useful for quick brainstorming, research, and keeping work moving when I am not sitting at my desk.

I think there are more uses for it, but I do not want to pretend I have fully figured them out yet. The current role is simple: it lets me keep a thread alive from my phone.

That is becoming more important as the rest of the workflow gets more agentic. If the work can run for a while, I need ways to check on it, nudge it, and capture thoughts when I am away from the main machine.

## The loop I still need to close

The strongest part of the workflow today is the path from idea to implementation:

Discovery -> decision -> UI direction -> PRD -> issues -> Ralph -> tests.

The weakest part is the feedback loop.

I already use Obsidian as my brain. I have project stand-ups and notes that record what is happening on projects, especially the ones I do not touch every day. That helps me remember context, but it is not yet fully plugged into the AI workflow.

The next version needs better long-term memory for both me and the agents.

There are a few directions I am looking at:

- A simple markdown-based memory pattern, like [Bare Bones Memory](https://gist.github.com/southpolesteve/b39a3528790bc99fe3f2c2b9e3263ef8), where session logs, active projects, and project files stay readable and local.
- A more tool-driven approach, like [local-memory MCP](https://lobehub.com/mcp/danieleugenewilliams-local-memory-mcp), where assistants can store and retrieve persistent memory through an MCP server.
- A future **reflect** skill that takes history from ChatGPT and other AI tools, normalizes it, and writes the useful parts into Obsidian.
- More remote orchestration through [Agent of Empires](https://github.com/njbrake/agent-of-empires), especially for managing multiple agents, worktrees, and a web or phone dashboard.

I am not using Agent of Empires yet. It is a next step. What I like about it is the direction: multiple agent sessions, worktrees, status, and remote access as a first-class workflow instead of a pile of terminal tabs.

I also want Ralph to become more parallel. Sequential is a good starting point because it keeps the blast radius small. But once the issue boundaries are clean enough, I want multiple agents working across isolated branches or worktrees, with better review and merge discipline.

## What this workflow is really about

The tools will change. They already change every few weeks.

What I care about is the shape:

- Start with wide exploration.
- Bring in current signal and sourced research.
- Force a decision.
- Turn UI direction into a reusable system.
- Convert the idea into a PRD and issues.
- Let agents execute small slices.
- Prove the behavior with TDD and Playwright.
- Capture what happened so the next session starts smarter.

That last step is the one I am still building. Right now, the workflow is pretty good at producing work. The next version needs to get better at remembering why the work happened, what changed, what failed, and what the agents should know next time.

That is the real unlock I am chasing: not just faster coding, but a compounding system where each project leaves behind better context for the next one.
