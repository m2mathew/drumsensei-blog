---
title: "React Native - Setting It Up"
date: "2020-10-12"
length: "8 min read"
---

## What is React Native?

React Native is a project started and maintained by Facebook. React Native (or **RN** for short) allows developers to write JavaScript code (think ReactJS) that can build the same app on the iOS and Android platforms. This abstraction over native code means that web developers who are familiar with React can get code running on the native platforms relatively quickly with React Native. It's also a great way to introduce developers to some Java (in Android native code) and Swift/Objective-C (in iOS native code). This is bound to happen since some tinkering in the native side of things is inevitable on anything more than a very basic application.


## Why React Native?

Oh, I was getting ahead of myself. React Native makes it quick to get up and running with React code that is compiled to native code. It's a pretty astonishing feat to run even the basic "hello world" and see it working on a real device in your hand. It feels like it shouldn't be possible to do it so easily.

It's pretty likely the someone on your team of web developers knows a little React, itself an abstraction over JavaScript. (Yes, JavaScript is _technically_ called ECMAScript, but let's not be overly pedantic.) React's JSX feels a lot like using HTML, and this pattern is followed in RN, as well. Using JavaScript makes it trivial to do things like take a long list of contacts and map over them to display in a list with custom components. Anyone who has used React even a little bit will feel right at home with React Native.

Keep in mind that there is no Document Object Model a.k.a. DOM in native code. Our friendly HTML elements do not exist. That means our normal elements become RN components:

```yaml
<div> → <View>
<p> → <Text>
<img> → <Image>
```

All of the components in React Native start with an uppercase letter. After reading through the introduction section in the ["Getting Started" docs](https://reactnative.dev/docs/getting-started) (I suggest going through it a couple of times), a developer will be able to wrap their mind around the switch from DOM to RN's version of native-land. It won't take long to start to see which components can be used where. It's quick to get started!

Oh, did I mention one of the targets for RN development is "Web"? This means you can abandon all `<div>`s and only write everything in React Native.

## Expo or nah?

Expo is a fancy tool that let's you wirelessly run your React Native app on a phone you are holding in your hand.

## iOS Setup



## Android Setup


