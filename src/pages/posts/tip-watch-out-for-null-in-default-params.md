---
layout: '@/templates/BasePost.astro'
title: 'Tip: Watch out for null in default params'
description: ""
pubDate: 2020-06-04
redirect_from: 
            - http://juanmanuelalloron.com/2020/06/04/tip-watch-out-for-null-in-default-params/
tags: "es6, javascript, js, Quick Tips, vanilla JavaScript"
imgSrc: "/assets/images/defaultHero.jpg"
---
Defaults in function parameters is a feature that simplified my code a lot. But there is one caveat that we need to be aware of! Let's start with an example:

```
function say(message = 'Hello World') {
    console.log(message)
}
```

Now, what's the output of the following statements:

```
say('hi')
say()
say(undefined)
say(null)
```

Most of them will work as you would expect....but there is always a trick in JS.... when calling `say(null)` as `null` is a value, the default won't be triggered causing `null` to be logged. In this example is easy to see it quickly, but this gets trickier in real world applications.

### How do we avoid this?

I try not to use `null` at all and that tends to reduce this problem. Are you using any other solution? I would love to hear about it. Send me a message [@juan_allo](https://twitter.com/juan_allo).

Enjoy!!!
