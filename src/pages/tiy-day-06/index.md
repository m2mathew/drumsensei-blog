---
title: "The Iron Yard - Day 06"
date: "2015-09-02"
---

## Digging Deeper

On Tuesday we dove a little deeper into JavaScript discussing boolean operators, the ternary operator, and conditional statements.

![js-logo](https://res.cloudinary.com/drumsensei/image/upload/v1515222850/2015-09-02_1_wvwoau.jpg)

We also discussed several scenarios that JavaScript handles in a quirky way. Type coercion in JS has its own rules that will be wonderful to harness once a developer can fully grasp them.

For instance, let's assign a value to the variable "name" and put it into an important sentence:

```javascript
var name = "Mike";
var statement = name + " is really cool";
var name = "Bob";
console.log(statement);
```

One would think that the output would be "Bob is really cool"... Nope, it is still "Mike is really cool". Confused yet? The logic works like this:

1.  **Name** holds the value "Mike"
2.  **Statement** holds the value "Mike is really cool"
3.  **Name** is given a new value of "Bob" which replaces the original of "Mike"
4.  **Statement** is asked to show the value it contains, which is still "Mike" - we did not put a new value into Statement

Our homework was to use plain JavaScript to create a command line quiz in either normal mode, hard mode, or nightmare mode. We were to include 15 items that covered various HTML, CSS, and JS topics and then tell the user their number correct and percentage. I finished that and made some adjustments to also tell the user which topics they did best in and I made it display the correct answer if the user gets the question wrong. I also added a timer to tell the length of the test. As a bonus, I made a "100" display in ASCII characters if they get every question correct.

The nightmare mode (which I did not employ) asked the developer to make the quiz adaptive based on the success of the answered questions. I could see how this is possible, but my code would have been MUCH longer to make it work.

Now, I am _still_ working on my HTML forms homework from Monday. **I will finish this TODAY!!**
