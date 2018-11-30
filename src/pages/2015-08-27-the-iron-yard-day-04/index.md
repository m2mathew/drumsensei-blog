---
title: "The Iron Yard - Day 04"
date: "2015-08-27"
---

## Sass

![sassy-sunglasses](http://res.cloudinary.com/drumsensei/image/upload/v1514954685/2015-08-27_1_ykljmc.svg)

_(image courtesy of sass-lang.com)_

Whoa, baby, this stuff is cool. Syntactically Awesome Style Sheets or, SASS, makes writing CSS a much easier process. There are two versions. Hamburger A is Sass, Hamburger B is SCSS.

We learned about the SCSS flavor in class today at [The Iron Yard](http://www.theironyard.com/). Sass lets a developer write complex CSS in a simplified way using various patterns.

## Nesting

This makes the HTML and CSS look more similar in structure. The code snippet below has a `nav` tag (which functions as a `div` container, just semantically different) which contains an `anchor` tag. The SCSS lets a developer nest a CSS property inside of other ones. SCSS will automatically compile to stock CSS in another file. As a visual person, this is extremely helpful because I can now easily see which tags are inside of others as opposed to searching through hundreds of CSS tags.

This is generated:

```
nav {
  background-color: #fff;
  padding: 0.5em 0;

  a {
    margin: 0 1em;
    color: #565D64;
  }
}
```

Which puts this into the stock CSS file:

```
nav {
  background-color: #fff;
  padding: 0.5em 0;
}

nav a {
  margin: 0 1em;
  color: #565D64;
}
```

And you might be thinking, "Big whoop. That is just as easy to write in CSS!" Well, you might be right, pardner, but as you mentally extend this to a larger framework of a site, it becomes easy to imagine the usefulness of this here technique.

## Variables

SCSS allows defined variables to be used throughout the code. I learned about some scenarios today which made this seem like the greatest thing since the wristwatch. For example...

### Situation

You are a designer (or an indy developer) dealing with three different main colors on the site you are building. You apply the variable method to your colors like so:

```
$primaryColor: #bada55;
```

And you apply it to code like this:

```
a {
  color: red;
  background-color: pink;
}
```

You are building your site and all is fine until one afternoon your client says that she really wants a **deeper shade of green**. No sweat if you used the `$primaryColor` variable. Just go switch the variable at the top of the file and all of the colors switch throughout the layout.

Thankfully, there was also a meetup for ATXSass the very same day that I learned about Sass. What a break! I headed downtown to the [Capital Factory](http://capitalfactory.com/) and learned more about Sass from [Abby Larner](http://abbylarner.com/) and [Una Kravets](http://unakravets.com/about.html). More to come about Sass, so stay tuned.
