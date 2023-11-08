---

title: 'Multiple options to deploy your web application'
description: ""
pubDate: 2021-02-05
redirect_from: 
            - http://juanmanuelalloron.com/2021/02/05/multiple-options-to-deploy-your-web-application/
tags: "deploy, development, hosting, javascript, React, release, web, Weekly Digest"
image: "../images/defaultHero.jpg"
imgAlt: ""
---
In this weekly digest I have compiled a list of tutorials to deploy your website or app into different hosting providers.

There are tons of great solutions out there to help you out deploying your projects. Of course there are slight differences between them and pros/cons but the best way to learn them is to try them out.

_While most of this guides focus on react applications, you can easily follow some of the steps to deploy any other JS based app._

### Github Pages

Let's start with one that should be the easiest to setup: [Github pages](https://pages.github.com/). No it is a static site hosting service so it could be useful for projects that don't require any backend or maybe blogs (generated statically or that rely on the repository filesystem). Follow this quick [guide to deploy a react application](https://malshikay.medium.com/deploy-your-react-app-to-github-pages-bf3f7acfe369).

### Amazon Web Services (AWS)

[AWS Amplify ](https://aws.amazon.com/amplify/faqs/)is a great option to deploy a static site. Check this video on [how to deploy a NextJs static site](https://egghead.io/lessons/react-using-git-to-deploy-a-next-app-to-aws-amplify-hosting). If you are looking for an option with create-react-app, check out this article that shows [how to deploy a simple weather app to AWS Amplify](https://khan-saifullah.medium.com/creating-and-deploying-a-simple-react-application-with-aws-amplify-6ce11995f706).

If you are looking to explore a dockerized approach, check this guide that [deploys an react docker app to AWS ECS using Terraform](https://hemantjain.medium.com/deploying-dockerised-react-weather-application-on-aws-ecs-using-the-terraform-iac-tool-962e38219403). You can always check the [AWS Elastic Container Service documentation](https://aws.amazon.com/ecs/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&ecs-blogs.sort-by=item.additionalFields.createdDate&ecs-blogs.sort-order=desc) to learn more about how containers are deployment and managed.

### Google Cloud

Google cloud storage could be a great option to deploy a static site. Check this tutorial on [How To Deploy Your React App To The Google Cloud Engine](https://ra-6446.medium.com/how-to-deploy-your-react-app-to-the-google-cloud-engine-55b3282f2cb1).

For a dockerized approach you would need to run it in Google Kubernetes Engine (GKE). The [google docs to deploy a containerized web application](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app) are a great place to start. You can also check this [Github repository for a boilerplate](https://github.com/MatthewCYLau/react-gke).

Another service in the Google Cloud family is [Firebase](https://firebase.google.com/). Check this guide to [deploy a create react app in firebase](https://medium.com/@mashiur_cse/deploying-a-react-app-using-firebase-hosting-4a5c94f2ea9e). If you want to take it one step forward, you could [leverage Github actions to automatically deploy into Firebase](https://victorbruce82.medium.com/automate-react-builds-to-firebase-hosting-preview-channels-and-deploy-using-github-actions-207c896fb4d6).

### Heroku

Heroku has been there forever and is still a solid solution to deploy web projects. Check this quick guide on [how to deploy a React application](https://medium.com/@parshuramsudda/deploying-react-app-in-heroku-4e98bde73bb2). To use your [custom domain, you can follow this guide](https://medium.com/better-programming/deploying-your-react-app-with-a-custom-domain-in-minutes-5c58f3675784).

If you are looking to automate deployments, you can follow this [tutorial that relies on Github Actions.](https://medium.com/swlh/auto-deploying-a-monorepo-to-heroku-with-github-actions-da62e8ae172c)

Finally, explore [how to deploy a full-stack app in this tutorial](https://www.freecodecamp.org/news/how-to-deploy-a-full-stack-web-app-with-heroku/).

### Netlify

If you want to check [Netlify](https://www.netlify.com/) out check this[ guide to deploy from the CLI](https://dev.to/fahadimran/how-to-deploy-your-react-app-with-a-single-command-using-netlify-4oph). There are also other options, like just dropping the content into a folder or connecting to gihub. [Explore all the options in this guide](https://medium.com/@shivam_softwareartist/deploy-your-static-website-on-netlify-4c9c11dbaef9).

There are other CI/CD services like [Buddy](https://buddy.works/) that can also help with automatic releases. Check this guide on [how to deploy with Buddy to Netifly](https://medium.com/better-programming/how-to-deploy-your-static-sites-for-free-aeeb3d3ff0f6).

### Digital Ocean

Digital Ocean is another elegant solution if you are thinking containers. You can follow [this guide to get started](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-to-digitalocean-app-platform).

### Vercel

If you are thinking about using NextJS, then you definitively need to check [Vercel](https://vercel.com/). [Their guides](https://vercel.com/guides) are super complete, so I recommend you to start there.

### And more...

[LogRocket published a similar article that features other providers like: Gitlab Pages, Moovweb XDN, Roast, Render and Surge.](https://blog.logrocket.com/8-ways-to-deploy-a-react-app-for-free/?s=09)

