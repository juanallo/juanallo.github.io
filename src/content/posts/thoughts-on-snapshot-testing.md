---

title: 'Thoughts on Snapshot Testing'
description: ""
pubDate: 2020-04-14
redirect_from: 
            - http://juanmanuelalloron.com/2020/04/14/thoughts-on-snapshot-testing/
tags: "best practices, coding, development, javascript, jest, js, programming, React, snapshot testing, software, test, testing, web"
image: "../images/defaultHero.jpg"
imgAlt: ""
---
Since I moved to react at work I have been using and trying different testing strategies and I wanted to share some thoughts and best practices around snapshot testing.

In the past I have worked on different projects on frontend, from simple websites to complex editors. Along the journey I have used different testing frameworks and tools.

While recently snapshot testing has become popular, in my opinion it can be a double edged sword, and here is why.

### Let’s play a game

Take a look to the following test:

```js
it(‘is just a snapshot test’, () => {
  const component = render()
  expect(component).toMatchSnapshot()
})
```

Can you guess what’s the component behavior?

Now, let’s take the same component and test it in a different way:

```js
it(‘is just a regular assert test’, () => {
  const component = render()
  expect(component.text()).toEqual(’April 4, 2020')
})
```

Now it is easier to guess, the component renders a formatted date!!!

This is a silly example, but tests are not only a way of proving correctness, they are also a way of documenting behavior. Snapshot testing will most of the time obfuscate that behavior making it harder to decipher it by reading the tests.

It is true that you could read the snapshot file and eventually get to the same result, but the fact that they are not even on the same file makes everything more error prone.

### Big snapshots

Another concern is that it can be easy for a snapshot test to get out of hand. We all have seen snapshots that are way over 500 lines. By then there are a couple of things that went wrong:

- The component is doing too much.
- The test is proving too much.
- It is easy for the test to fail for multiple reasons.
- It is easy for developers to disregard the failures and blindly accept the changes.

Finally snapshot testing will discourage doing integration tests as those will usually result in unmaintainable snapshot files.

### where to use it

I am Still learning and iterating on how to use snapshot testing best, but the biggest value I see is that they will tell you exactly what changed. So there are 2 places where they make most sense:

- **Where external dependencies are used**. Sometimes it is hard to visualize and understand what is changing when we update a dependency. Snapshot testing is a good way to see what changed and give you a better sense of how that could impact the app.
- **Quick way of writing throw away tests to refactor legacy code**. When refactoring legacy code the key is to define business test cases and then make sure that nothing changed. Snapshot is a great strategy for that, as it will let you quickly define test cases and then it will detect any minimal change.

### Some practices I follow

I still use snapshot testing a lot, sometimes more that I should! (probably because it is a quick way of testing). That being said, I try to follow these principles:

- Make sure is readable and it makes sense. Read the snapshot generated and check that it represents what is being tested.
- Aim to have test cases that cover only one use case at a time.
- Keep the snapshot file small, so it is likely someone will follow the changes on a PR review.
- Mock when a module/dependency/component is not needed or adds noise to the snapshot file.
- Use `toMatchInlineSnapshot` for small components/objects. Following the original example, by using inlineSnapshot you can still provide readability to the test and document the use case properly.

```js
it(‘is using inline snapshots’, () => {
  const component = render()
  expect(component)
   .toMatchInlineSnapshot('<div>April 4, 2020</div>')
})
```

* Avoid them for integration testing or for big complex components (Specially if you are not doing shallow rendering).
* Something is better than nothing. When in doubt consider adding them. It is better to test than not to test.
* Don’t just blindly accept. If possible try to understand what changed, and make sense of it. This is not sometimes possible or easy, but if you follow the previous principles it should not be a big burden.

Not convinced yet, here are some other posts that I found useful:

- [Effective Snapshot Testing By Kent C. Dodds](https://kentcdodds.com/blog/effective-snapshot-testing)
- [Why I stopped using Snapshot testing with Jest](https://medium.com/@tomgold_48918/why-i-stopped-using-snapshot-testing-with-jest-3279fe41ffb2)
- [What's wrong with Snapshot tests](https://blog.usejournal.com/whats-wrong-with-snapshot-tests-37fbe20dfe8e)

Enjoy!!!
