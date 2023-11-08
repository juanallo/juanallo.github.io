---

title: 'Weekly Digest #10: On Remix, Snowpack, Rome and Web-vitals'
description: ""
pubDate: 2020-05-24
redirect_from: 
            - http://juanmanuelalloron.com/2020/05/24/weekly-digest-on-remix-snowpack-rome-and-web-vitals/
tags: "development, javascript, js, React, remix, romeJS, web, web vitals, Weekly Digest"
image: "../images/2020-05-new-projects-in-town-big-2.png"
imgAlt: ""
---
The never ending flow of innovation is what I love about the web. There are so many great ideas! In the past few months a lot of innovation happened and in this weekly digest I want to share all those new projects that I am tracking.

### Remix Run

Let's start with [Remix.run](https://remix.run/). Recently [Ryan Florence](https://twitter.com/ryanflorence) (`react-router` author) announced that he is working on a framework for React. It is still not public but here is what I learned:

- It’s not only Ryan but also [Michael Jackson](https://twitter.com/mjackson) (also author of react-router). Which means that a lot of their learnings from `react-router` will be used here!
- They are planning to build a framework that will provide: SSR, data loading, caching, SEO, accessibility, routing and probably more!. You can learn more in the [official blog](https://blog.remix.run/p/remix-preview) or in twitter [@remix_run](https://twitter.com/remix_run).
- If you are intrigued and you want to learn more, check this [video](https://www.youtube.com/watch?v=MYxwlmeyu9w).
- As I mentioned there is not much yet, but Ryan was clever enough to save his spot in [NPM](https://www.npmjs.com/package/react-remix). Of course is empty, but it is interesting to see that he published it 2 years ago. So wondering how long they have been baking this idea and working on this project?
- One small caveat is that Remix is probably going to be a paid framework. I guess it would be interesting to see what the pricing models end up being.
- How does it compare to NextJS? I might answer this in future posts!

### Time for [Snowpack](https://www.snowpack.dev/).

- What is it? Well another cool build tool like Webpack, Rollup, Browserify, etc, etc, etc.
- Why I am excited about it? Competition is always good. When NPM got slow and was not working Yarn was born. What happened with NPM ? They made a lot of changes and improvements. Maybe the same happens with other bundlers? :fingers_crossed:
- The [official docs](https://www.snowpack.dev/) are super complete. There is a public beta, so you can install it and try it! `npm install --save-dev snowpack@next`
- Let’s go straight into the fight: [Snowpack vs Webpack](https://blog.logrocket.com/snowpack-vs-webpack/).
- Do you want to see how the community feels about it? Check the comments in the [Hacker News post](https://news.ycombinator.com/item?id=21989967).

### RomeJS

All roads lead to [Rome](https://romejs.dev/). Recently Facebook announced their own sets of tools to build Javascript projects. From linting & code formatting to bundling.

- Check the[ Github Repository](https://github.com/romejs/rome) for more information and details.
- Also, there is no NPM package yet, but you can quickly clone their repo and use it. Check the [installation guide](https://romejs.dev/docs/introduction/installation) to get started.
- Why start from scratch and create everything that is already there? I am not entirely sure why we don’t just rely on mature tools, but Facebook likes to reinvent things, let’s see how it goes!
- If you want to learn more, check this [guide](https://jasonformat.com/rome-javascript-toolchain/) by Jason Miller. Also, see what others think in this [Hacker News thread](https://news.ycombinator.com/item?id=22430682).

### Web Vitals

Performance in our websites and web application is critical these days. We have so many tools and browsers are making it easier for us (Except IE11). So there is no excuse!. I follow Google closely in everything performance related, they are the ones that have been pushing the boundaries and recently they announced [web vitals](https://web.dev/vitals/).

- What? Web Vitals is Google latest iteration on performance metrics and tools.
- For a while they have been promoting [Lighthouse](https://developers.google.com/web/tools/lighthouse) and metrics like First Contentful Paint (FCP) and Time to Interactive (TTI). And after absorbing data from how that was working and learnings, they evolved into new main metrics: Largest Contentful Paint (LCP), First Input Delay (FID) and Content Layout Shift (CLS)
- What does it mean for us? TTI was complex to measure and optimize but by moving to LCP we will have more success on measuring and providing great experiences.
- Not sure how CLS is going to play out in terms of search ranking but we should start paying close attention to it.
- Want to try it? Check the[ chrome extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma?hl=en).

---

Still feel like learning about more exciting tech? Check this [episode](https://syntax.fm/show/216/tech-to-watch-in-2020) from my favorite podcast [Syntax](https://syntax.fm/)!!

I recognize that the amount of moving pieces in FE is overwhelming.

- How do you know what to pick?
- Do you go with the trend?
- Do you stay with the classics/basics?
- How likely is this project to be alive in 3 months? In a year?

My advice is to be always informed. Just keep a high level understanding of new projects and news around the web. Don’t try to learn everything in detail (It is impossible), use the news in your advantage. For example, I am currently coding with React at work, so that’s my main focus, I only go deep into projects/news around React. The rest, I like to be informed, maybe get some practice on them if time permits!

Enjoy!!
