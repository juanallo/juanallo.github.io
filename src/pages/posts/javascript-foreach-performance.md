---
layout: '@/templates/BasePost.astro'
title: 'Javascript ForEach Performance'
description: ""
pubDate: 2020-04-05
redirect_from: 
            - http://juanmanuelalloron.com/?p=147
tags: "Whatever"
imgSrc: "/assets/images/defaultHero.jpg"
---
Performance is always important when delivering experiences to end users. Poor client side performant applications, will end up delivering poor experiences.

But, performance is something that is not always measured early and also is something that not every developer is focused on. Unfortunately, the overall performance of the web application will depend on every decision developers take daily.

For example, let's look at the for loop in Javascript. There are a lot of libraries that we as developers use to help us work in Javascript everyday. Some of those libraries offer more flexible foreach like Underscore and Jquery. It is likely that we will end up using those libraries because of the benefits they offer, but it is also important to understand the drawbacks on using them.

Specially on performance, \$.each or underscore \_.each will perform worse than the native for. Below you will see the profiling of these 3 different ways of doing a foreach (native, Jquery, and Underscore)

NATIVE

UNDERSCORE

JQUERY

Based on those findings, you can see that using the native is always the best option. Maybe between native and underscore there is not that much difference, but definitely Jquery is doing something extra that we might not be looking for.

Also, it is easy to make your own library to add a similar foreach behavior, making the code easier to read:

OWN LIBRARY

And as you can see the performance for that piece of code is close to the native one.

As you can see from the examples above, every decision, that we as developers take everyday, will have an impact on performance. We need to be aware of that and take the necessary actions every time.
