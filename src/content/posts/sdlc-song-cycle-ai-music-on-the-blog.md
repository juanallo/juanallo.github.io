---
title: "The SDLC Song Cycle: AI music about shipping software"
description: "Seven Gemini-generated tracks walk the software delivery lifecycle—from human sign-off to legacy maintenance—and now live on this blog with video, MP3s, and a persistent player."
pubDate: 2026-06-02
tags: "music, gemini, AI, astro, developer-life, sdlc, projects"
image: "../images/sdlc-song-cycle.jpg"
imgAlt: "Poster art for Human in the Loop, the opening track of the SDLC song cycle"
draft: false
---

A while back I [taught LLMs to play the drums](/post/teaching-llms-to-play-the-drums/) with a keyboard notation and a little browser player. That experiment was about *notation*. Could a model follow a tight format and still feel musical?

This one is different. I wanted full songs: lyrics, genre, mood, and production. The joke was simple: what if each phase of the software delivery lifecycle had its own track and each track sounded like the phase *felt*?

The result is a seven song cycle called **The SDLC Song Cycle**, built with [Gemini](https://gemini.google.com/) and hosted here at [/music/](/music/).

## Why the SDLC?

Every team has its own rituals, but the emotional arc is weirdly universal:

1. Someone still has to approve the thing.
2. Planning starts crisp, then scope shows up wearing a friendly smile.
3. Architecture debates turn theatrical.
4. Implementation becomes a tangle you swear you'll untangle next sprint.
5. Tests pass on your machine and fail somewhere else.
6. Friday afternoon deploy energy hits.
7. Years later you're nursing code nobody remembers writing.

That's the album order. Not because it's the only valid SDLC model, because it's the one that maps cleanly to songs.

## The tracklist

| # | Phase | Track | Vibe |
| - | ----- | ----- | ---- |
| 1 | Human judgment | [Human in the Loop](/music/human-in-the-loop/) | Opening track automation meets sign-off |
| 2 | Planning & analysis | [Scope Creep (Is Chasing Me)](/music/scope-creep/) | Indie rock about the "tiny tweak" |
| 3 | Design & architecture | [Monolith vs. Microservices](/music/monolith-vs-microservices/) | Synthwave rap battle |
| 4 | Implementation | [Spaghetti Code Symphony](/music/spaghetti-code-symphony/) | Progressive metal for the duct-tape masterpiece |
| 5 | Testing & integration | [It Worked on My Machine](/music/it-worked-on-my-machine/) | Pop/punk anthem for green locally, red in CI |
| 6 | Deployment | [Pipeline to Production (Friday at 4:55 PM)](/music/pipeline-to-production/) | Cinematic techno for the merge before the weekend |
| 7 | Maintenance | [Legacy Code Blues](/music/legacy-code-blues/) | Acoustic blues for the system everyone depends on |

## Making the songs with Gemini

I didn't set out to produce a polished album. I set out to see whether **prompt + phase + genre** could produce something listenable and whether changing the genre per phase would make the cycle feel intentional instead of random.

[Gemini](https://gemini.google.com/) did the heavy lifting: arrangement, vocals, mix. My job was curating prompts until a track matched the joke (e.g. scope creep as something that *chases* you, Friday deploy as techno with a clock in the title). Some tracks took a few generations; others landed on the first pass. I'm not a musician (same disclaimer as the drum-kit post) so "good enough to ship" was the bar.

## From drum notation to song cycles

The drum experiment was about **control**: a strict alphabet, predictable playback, compare models on adherence.

The SDLC cycle is about **vibe**: hand the phase to a generative audio model and see if the punchline lands. Less engineering rigor, more "would you play this in the team retro?"

Both are still AI + music + developer humor. If you liked the drum post, start with [Human in the Loop](/music/human-in-the-loop/) and let the player run through the set or grab MP3s if you want them offline.

If you make your own SDLC (or CI/CD, or on-call) song cycle, I'd love to hear it—[@juan_allo](https://x.com/juan_allo) is the easiest place to reach me.
