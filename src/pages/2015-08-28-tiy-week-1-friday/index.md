---
title: "The Iron Yard - Week 1 Friday"
date: "2015-08-28"
---

## SASS part 2

Something learned very early in development or programming is the beautiful phrase "Don't Repeat Yourself" - usually referred to as DRY. Learning about Sass at [The Iron Yard](http://www.theironyard.com), on my own a bit, and at a local Austin meet-up was a great way to work it in to my homework project. The group ATXSass had the great speakers [Abby Larner](http://abbylarner.com/) and [Una Kravets](http://unakravets.com/about.html). This was a fun presentation about the basics of the tool. Also, having gone to this meetup in ATX and several meetups in the my hometown of Dallas (woot!), I can easily say that the tech scene thrives on getting together. There is something magical about finally meeting the people that dance across your Twitter account as pixels... They are really real people, turns out!

Some more thoughts about Sass, the beneficial CSS pre-compiler follow the nice sassy picture.

![doctor-who-wearing-a-bow-tie](http://res.cloudinary.com/drumsensei/image/upload/v1514954685/2015-08-28_1_zcxmaf.jpg)

## Mixins

This handy-dandy feature behaves like a variable but lets you put in more lines of code. If you are familiar with a formal programming language like C++ or JavaScript, then you might consider this to act like a function.

At the top of your code (or really anywhere _before_ you need it) add a **mixin** by including this code:

```
@ mixin link() {
  background-color: pink;
  color: white;
}
```

This means that we want to use the visual configuration of white text on a pink background - and we are likely going to use it more than once in the body of the code. Perhaps this is useful if a person is dealing with several sections that will have the same formatting.

When the mixin is needed in the code (after it has been declared!), then just use this to include it:

```
@include link();
```

Now...a great reason I saw to use this in code. It is becoming accepted to use the measurement "em" when dealing with font size. This is based on the current font size or approximately 16 pixels. (Pixels are points of light on the screen) - If you have a picture that is 800x600, then you are dealing with 800 pixels horizontally and 600 pixels vertically). Using a "em"s is smart when considering that the end user will likely increase the size of the content (think smartphone or tablet). This means that the font size will scale appropriately when the entire page is "zoomed in".

Here is a snippet of code that will allow us to insert font sizes as the "em" measurement, but also provide a measurement in pixels.

```
@mixin font($em) {
  font-size: ($em*16) + px;
  font-size: ($em) + em;
}
```

(**NB:** not all browsers on all devices support all of the things written, so it is a good idea to provide measures like this to shore up your code to be backwards-compatible to older browsers).

The perceptive student will note the `$em` is a variable. Mixins can include variables, which makes this a very powerful tool! This can be called from within the code like this:

```
footer {
  color: blue;
  font-weight: bold;
  @include font(4);
}
```

There is SO MUCH MORE to learning Sass, but this is a good primer for getting started. I know that I am learning a ton more about how to use it to shorten my code and to keep it DRY!
