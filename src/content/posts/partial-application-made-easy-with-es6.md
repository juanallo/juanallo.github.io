---

title: 'Partial Application made easy with ES6'
description: "In this post I will present a quick example on how ES6 can improve readability and help build code that is easier to maintain. Also, I will be exploring partial application, a nice technique to keep in your developer toolbox."
pubDate: 2018-11-12
tags: "development, es6, functional programming, javascript, partial application"
image: "../images/defaultHero.jpg"
imgAlt: ""
---
In this post I will present a quick example on how ES6 can improve readability and help build code that is easier to maintain.

Also, I will be exploring partial application, a nice technique to keep in your developer toolbox.

## What is partial application?

In functional programming, applying **partial application** to a function means reducing the amount of arguments a function receives by fixing some of them upfront.

Let's use a simple example to illustrate this:

I have a Logger function that receives 2 parameters:

- Log Name
- Message

```js
const log = (logName, message) => {
  console.log(`${logName}: ${message}`);
}
```

So, I can call my logger every time I want to log a message.

```js
log('test','checking my generic log.'); // outputs: test: checking my generic log.
```

Most of my times, I would use the same Log Name, and here I can leverage partial application to define that log Name once:

```js
const testLog = partial(log, 'test');
testLog('checking my test log'); //outputs: test: checking my test log

```

This can have multiple uses and it is a nice technique to reach when building solutions.

## General Partial Application function

Let's build a simple function that will let us use partial application in any function:

```js
const partial = (fn, ...partialArguments) => {
  return (...newArguments) => {
    return fn.apply(fn, [...partialArguments, ...newArguments]);
  }
}
```

- As you can see, our partial function receives the original fn and a set of arguments. Those will be the ones fixed.
- Then, it returns another function that can receive more arguments.
- Finally, merges all the arguments together when calling the original function.
- We leverage apply to send the arguments to the original function and call it.

## Why is this easier now?

As the title insinuates with the new ES6 features this is easier than ever. As you can see in our partial implementation we are leveraging Rest and spread operators to build the list of arguments.

Without these features, the implementation of partial would be harder to read and understand:

```js
function partial(fn) {
    var partialArguments = Array.prototype.slice.call(arguments, 1);
 
    return function() {
      var newArguments = Array.prototype.slice.call(arguments, 0);
      return fn.apply(fn, partialArguments.concat(newArguments));
    };
}
```

Not only is more imperative and harder to read, but also, leverages some tricks to access the function arguments and convert that to an array

```js
Array.prototype.slice.call(arguments, 1);
```
