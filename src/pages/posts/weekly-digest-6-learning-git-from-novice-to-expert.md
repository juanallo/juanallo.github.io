---
layout: '@/templates/BasePost.astro'
title: 'Weekly Digest #6: Learning Git from novice to expert'
description: ""
pubDate: 2020-04-26
redirect_from: 
            - http://juanmanuelalloron.com/2020/04/26/weekly-digest-6-learning-git-from-novice-to-expert/
tags: "100 days of code, 100daysOfCode, coding, dev tools, develop, git, github, javascript, programming, Weekly Digest"
imgSrc: "/assets/images/defaultHero.jpg"
---
Recently I have been helping to create content to onboard new developers. One of the topics I prepared was Git. I have been using git for more than 12 years, and while doing research I was surprised to learn new things. So I decided to share some useful links with everyone.

- First things first, in April Git turned out [15 years](https://thenewstack.io/git-is-15-years-old-what-now/), so happy Birthday!

- [What’s git and how it changed the way we code](https://thenewstack.io/git-at-15-how-git-changed-the-way-we-code/). And check this quick article on [how to get started with Git](https://opensource.com/article/20/4/get-started-git?sc_cid=7016000000127ECAAY).

- [Super complete git cheatsheet](https://dev.to/zinox9/git-github-cheatsheet-22ok). If you are looking for a printable version, check [Github PDF cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf).

- If you are looking for some tutorials to learn the basics check [BitBucket tutorials](https://www.atlassian.com/git/tutorials) and an [interactive way to learn branching](https://learngitbranching.js.org/).

- You need autocomplete for the terminal. [Check this tutorial on how to set it up](https://github.com/bobthecow/git-flow-completion/wiki/Install-Bash-git-completion)

- Also, I am lazy and I hope you too, so consider having some aliases for common commands. You can use something like [git-alias](https://www.npmjs.com/package/git-alias) or add your own to your terminal profile. Here are some of the ones I use:

  ```
  alias gs=”git status” alias gpull=”git pull --rebase” alias gm=”git commit -m”
  ```

- While most of the time I use the terminal, sometimes I reach for a UI editor. Here is a list of the [top 10 UI clients](https://dev.to/zinox9/git-github-cheatsheet-22ok). I have used Sourcetree a lot in the past.

- I found this article and blowed my mind. I use git diff a lot before making commits (just to make sure I am not adding anything unnecessary). In [Better git diffs with FZF](https://medium.com/@GroundControl/better-git-diffs-with-fzf-89083739a9cb) Rafael Mendiola shows how you can improve the git diff experience, navigate through files and see previews on the right! **NOTE**: the exact command on the post did not work for me, but I used this instead:

  ```
  fd() {   git diff $@ --name-only | fzf -m --ansi --preview "git diff $@ --color=always -- {-1}" }
  ```

  ![1t8hrt6aaeazyaihw3aoalg](/assets/images/post/2020-04-1t8hrt6aaeazyaihw3aoalg.gif)

- If you use VS code, then it is worth it to check [GitLens extension](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens).

- [Some Github pro tips](https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/). I am planning to try [OctoTree](https://www.octotree.io/) soon.

- Also if you use Github intensively check this list of [recommended Github integrations for 2020](https://blog.bitsrc.io/recommended-github-integrations-for-2020-35042c71cb69).

- Lastly, 2 advanced commands that can help you in your darkest moments:

  - [git bisect](https://www.metaltoad.com/blog/beginners-guide-git-bisect-process-elimination). Interactive way of walking trough commits to find specific changes.
  - [git reflog](https://www.atlassian.com/git/tutorials/refs-and-the-reflog). Not only commits can be rollbacked, Git keeps a log of all the actions, and you can go back in history too.

I want to end with a funny story. While we were doing prep for the presentation, I was showing a quick slide on what Git is and someone asked me: What does Git stands for? Honestly, I did not know so I did some research:

> Git is not an acronym, in slang “git” means “a stupid person”. Linus Torvalds when he created the first version name it “the stupid content tracker” and that is how Git was born!

Enjoy!!

Follow me on twitter at _[@juan_allo](https://twitter.com/juan_allo)_!
