---
layout: '@/templates/BasePost.astro'
title: 'Callbacks in Javascript'
description: ""
pubDate: 2017-11-15
redirect_from: 
            - http://juanmanuelalloron.com/2017/11/15/callbacks-in-javascript/
tags: "development, javascript"
imgSrc: "/assets/images/defaultHero.jpg"
---
Any usual function call in Javascript is considered a synchronous call. The engine will get to that line, call that function and wait for it to get resolved. When that gets resolved it will continue to the next line. Consider the following example:

In the previous example, when the engine gets to the first increment, it will wait for the function to be resolved in order to continue to the next call.

Now, by nature in JS any I/O operation is asynchronous (common async operations are reading and writing files, communicating to DB, sending and receiving data from a server or a Rest Client). This means that the operation will take some time to resolve. In this case, JS will not wait for the function to be resolved to continue to the next line.

Here userData will be undefined, because \$.get is Async, so when it got executed, the engine did not wait for the JSON to be resolved. So, how do we actually get the JSON value? The short answer is using a callback!.

A callback is just another function that we will pass to in this case $.get. $.get will use this callback an execute it when the JSON is actually fetched (passing the actual content). So, this is how we can make this happen into our example:

let userName; //variable to store the user name.

function doSomethingElse() { //some more code for our main program. }

/\*\* \* To be called when the actual user data gets fetched. \*/ function userDataFetched(userData){ userName = userData.name; console.log(userName); //here userName has been resolved.

}

\$.get('userData.json', userDataFetched);

console.log(userName); //userName is undefined doSomethingElse();

We are passing the callback to the[ jquery get ](https://api.jquery.com/jquery.get/)function, so when the JSON is actually fetched, that callback will be called. Notice that the console.log immediately after the \$.get call prints undefined, as the file has not been fetched and the callback has not been called before that line gets executed.

JS runs in a single threaded engine, so all the lines in one JS file will be executed and any callbacks will be queued to be executed after the JS file. This means that if any of our remaining code needs to use the user data it will have to be added into the photo Fetched callback.

So, if _doSomethingElse();_ needs the user data it will have to be moved into the callback:

let userName; //variable to store the user name.

function doSomethingElse() { //some more code for our main program. }

/\*\* \* To be called when the actual user data gets fetched. \*/ function userDataFetched(userData){ userName = userData.name; console.log(userName); //here userName has been resolved. doSomethingElse(); }

\$.get('userData.json', userDataFetched);

console.log(userName); //userName is undefined

## Issues with Callbacks

As you will notice right away, any async operation will break the normal flow of execution, so we need to break our set of instructions into the callbacks. This presents a big problem, as it will get trickier to read and maintain the code.

Now, after fetching the user data, we want to fetch his image to show it in his profile.

let userName, userPhoto;

function doSomethingElse() { //some more code for our main program. }

function userPhotoFetched(photo) { userPhoto = photo; doSomethingElse(); }

/\*\* \* To be called when the actual user data gets fetched. \*/ function userDataFetched(userData){ userName = userData.name; console.log(userName); //here userName has been resolved.

\$.get(userName + '.png', userPhotoFetched); //now that we know the user name we can fetch the photo. }

\$.get('userData.json', userDataFetched);

Finally, what would happen if instead of only the photo I needed to get the user profile video? Let’s consider that example:

let userName, userPhoto, userVideo;

function printUserData(name, photo, video) { console.log(name, photo, video); }

function userVideoFetched(video){ userVideo = video; if(userPhoto) { //check if photo was already fetched printUserData(userName, userPhoto, userVideo); } }

function userPhotoFetched(photo) { userPhoto = photo; if(userVideo) { //check if video was already fetched printUserData(userName, userPhoto, userVideo); } }

/\*\* \* To be called when the actual user data gets fetched. \*/ function userDataFetched(userData){ userName = userData.name; console.log(userName); //here userName has been resolved.

$.get(userName + '.png', userPhotoFetched); //now that we know the user name we can fetch the photo. $.get(userName + '.mp4', userVideoFetched); //we want to also fetch his video. }

\$.get('userData.json', userDataFetched);

In the example, things start to become more complicated, as the flow will depend on which content gets resolved first, we now need to wait for both and we don’t know which one will be executed first!

## Key Takeaways:

A callback is a function that:

- Is passed as an argument to another function (parent function)
- Is invoked after some kind of event (like finishing fetching a file)
- The parent function controls when it is invoked
- They are commonly used to respond to events and async calls.

Main issues:

- Alter the flow, making it harder to follow.
- Require extra code to manage synchronization between them.
- Make code harder to read and maintain.

Are they are necessary evil??? [I Promise](https://juanmanuelalloron.wordpress.com/2017/11/15/javascript-as-promised/) you they are not!
