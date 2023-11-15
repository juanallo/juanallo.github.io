---
title: "Javascript as Promised"
description: "Promises have been there for a while now, officially released in ES6 but already being supported by most browsers before that and/or polyfiled by libraries"
pubDate: 2017-11-15T18:00:01Z
tags: "development, javascript"
image: "../images/2017-11-promisestates.png"
imgAlt: "Promise States: Pending/Fulfilled/Rejected"
hideHero: true
---

Promises have been there for a while now, officially released in ES6 but already being supported by most browsers before that and/or polyfiled by libraries. They are a game changer in Javascript, helping to make our code more functional and in result easier to maintain and read.

As Martin Fowler defined them

> Promises are objects which represent the pending result of an asynchronous operation.

### WHAT?

Yes, just using one line to explain all about Promises might not be enough! In this article I will try to clearly articulate **what a Promise is**, what **problems is coming to solve** and **how we can use them**.

<p class="note"> If you are new to Javascript, check <a class="highlight" href="/post/callbacks-in-javascript/">the callbacks post</a> first. This will help you understand some of the problems with async functions.
</p>

## What is a Promise?

A Promise is an object that will eventually contain the result of an asynchronous operation.

Our Promise can have one of three states:

- Pending — Asynchronous operation has not completed yet
- Fulfilled — Operation has completed and the Promise has a value
- Rejected — Operation has completed with an error or failed.

A promise is settled if it is not pending. Once a Promise has settled, it cannot transition to any other state.

![PromiseStates](../images/2017-11-promisestates.png)

### Creating you own Promise

A Promise has a constructor that receives a function with 2 parameters.

```js
function fetchFile(path) {
  return new Promise(function (resolve, reject) {
    $.get(path, resolve).fail(reject);
  });
}
```

- A new Object (promise) is return by fetchFile.
- The Promise recieves a function that will do the async call (It is executed in the act).
- When the async call is finished, resolve is called to let the promise know it should change it state to fulfilled.
- If, for some reason, the async call fails, reject is called to tell the promise that it should move to a rejected state.

**Note**: When an error happens, a frequent pattern is to send an Error to the catch:

```js
reject(Error("Data could not be found"));
```

### How can I access the result when it is fulfilled?

Every Promise exposes a then function that will receive a callback. The callback will be called when the Promise is fulfilled.

```js
fetchFile("userData.json")
  .then(function (userData) {
    console.log(userData.name);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Chaining then method calls

Then is made in such a declarative way, that it allows multiple then methods to be chained:

```js
fetchFile("userData.json")
  .then(function (userData) {
    return userData.userName; //userdata.userName = 'Juan Allo Ron'
  })
  .then(function (userName) {
    return "User Name: " + userName;
  })
  .then(function (msg) {
    console.log(msg); //prints 'User Name Juan Allo Ron'
  });
```

### Chaining Promises

Also, Promises can be chained:

```js
fetchFile("userData.json")
  .then(function (userData) {
    return fetchFile(userData.id + ".png");
  })
  .then(function (photo) {
    console.log(photo);
  });
```

In this example, after the first Promise is resolved a new Promise is called to fetch the user image. Notice that the Promise is returned, this will allow the execution of the rest of the then callbacks when this new Promise gets resolved.

1. userData.json is resolved
2. Then, user Photo is resolved
3. Then, console.log is called

### Managing Errors

Catch can be used to manage any error inside the async call or inside any then.

```js
fetchFile("userData.json")
  .then(function (userData) {
    console.log(userData.name);
  })
  .catch(function (error) {
    console.log(error);
  });
```

It is important to highlight that you can use one catch to manage any error. If something fails in the async call or in any of the then calls, then catch will be called. So, any of the following will execute the callback registered in the catch:

1 - Reject in the Promise:

```js
function failPromise() {
  return new Promise(function (resolve, reject) {
    reject(new Error("This will always fail"));
  });
}

failPromise()
  .then(function () {
    //never gets called
  })
  .catch(function (error) {
    console.log(error);
  });
```

2 - Exception in then

```js
fetchFile("userData.json")
  .then(function (userData) {
    throw new Error("failing in then");
  })
  .then(function () {
    //this never gets called
  })
  .catch(function (error) {
    console.log(error); //failing in then
  });
```

Also, if an exception is thrown in the execution, then the Promise gets rejected with that exception error.

```js
function exceptionPromise() {
  return new Promise(function (resolve, reject) {
    throw new Error("This will always fail");
  });
}

exceptionPromise()
  .then(function () {
    //never gets called
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Promise.all

What if you wanted to execute multiple Promises at the same time and wait for all the answers? Promise.all will give you that ability:

```js
Promise.all([fetchFile("userData.json"), fetchFile("someOtherData")])
  .then(function (listOfResults) {
    console.log(listOfResults[0]); //userData
    console.log(listOfResults[1]); //someOtherData
  })
  .catch(function (error) {
    console.log(error); //Promise.all is rejected if any of the elements are rejected
  });
```

### Promise.race

Race is similar as all, as it will let you depend on multiple promises, but it will get resolved as soon as any of those Promises is resolved.

Good use cases for race are timeouts or fallbacks:

#### Timeout

```js
Promise.race([
  fetchFile("http://example.com/file.txt"),
  delay(5000).then(function () {
    throw new Error("Timed out"); //if 5000 ms passed before fetchFile resolves, then this will throw an error and make everything fail.
  }),
])
  .then(function (text) {
    /*···*/
  })
  .catch(function (reason) {
    /* ··· */
  });
```

#### Fallbacks

```js
Promise.race([
  fetchFile("http://myFastServer.com/userPhoto.png"),
  fetchFile("http://backupServer.com/userPhoto.png"),
])
  .then(function (userPhoto) {
    console.log(userPhoto); //as only one Promise is resolved, then the data is from that Promise resolution
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Resolving a Promise right away

The Promise Interface exposes two more methods that will let you return a resolved or failed Promise:

- Promise.resolve(data)
- Promise.reject(data)

Using this utilities when can create a fetchFile with a cache:

```js
var cache = new Map();
 
function fetchFile(path) {
    const file = cache.get(path);
    if(file){
        Promise.resolve(file);
    }
    else {
        return new Promise(function (resolve, reject) {
            $.get(path, function (data) {
                cache.set(path, data);
                resolve(data);
            }).catch(reject);
        });
    }
}
```
Notice that, when the file is in the cache there is no need for an async operation, but our fetchFile should still return a Promise, so the interface is not broken. This is where Promise resolve comes to the rescue.

### Extending Promises

A Promise is an ES6 class, so it can be easily extended:

```js
class MyPromise extends Promise {
  // use default constructor

  success(resolve, reject) {
    return this.then(resolve, reject);
  }

  failure(reject) {
    return this.catch(reject);
  }
}
```

## Advantages of Promises

- Functional rather than imperative
- Declarative
- Cleaner, easier to read and maintain.
- Composable
- Managing Exceptions is easier.
- No inversion of control
- Chaining is easier
- Cleaner Signatures
- Standard
