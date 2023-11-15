---

title: 'Tip: use Z'
description: "Aren’t you tired of always typing the same routes in the terminal? When I found z it changed my productivity. What’s z? A terminal command to help you quickly navigate across directories…"
pubDate: 2020-05-28
tags: "coding, development, osx terminal, Quick Tips"
image: "../images/tip-use-z.jpg"
imgAlt: "An image showing the output of the command man z"
---
Aren't you tired of always typing the same routes in the terminal? When I found `z` it changed my productivity.

## What's z?

A terminal command to help you quickly navigate across directories. It will learn from common directories you browse and offer a shortcut for them:

![](../images/2020-05-using-z.gif)

### Installing

```bash
brew install z
```

If you don't use `brew` you just need to download it from the [repository](https://github.com/rupa/z) and add z.sh in your path.

```bash
# Download to latest to home dir
wget https://raw.githubusercontent.com/rupa/z/master/z.sh -O ~/z.sh
# Add to .bashrc
echo . /path/to/z.sh >> ~/.bashrc #or ~/.zshrc
```

Trust me it's totally worth it!

Enjoy!!
