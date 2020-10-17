---
title: "The Iron Yard - Day 03"
date: "2015-08-26"
---
￼Today we had engaging lecture and examples over the specificity of CSS selectors. I definitely do not fully have it down, but it is starting to form in my brain matter.

![laptop-with-stickers](https://res.cloudinary.com/drumsensei/image/upload/v1514954685/2015-08-26_1_lsg15j.jpg)

HyperText Markup Language (a.k.a. HTML) is content. It contains everything that you see on the page that is _stuff_. The containers that hold text, pictures, and links can be made to look prettier by adding Cascading Style Sheets (henceforth dubbed CSS).

CSS makes use of **selectors** to apply a certain style to the _content_ in the HTML page. In best practice, the HTML and CSS code are found in two (or more!) different files which are linked together at the top of each HTML page.

Color, font-size, height, width, and many other values can be added or adjusted to the content of the page using CSS. If you have seen a website, then you have definitely seen this in action. Without the CSS, the page looks like an outline on black text on a white background

### CSS Selectors are fun!

Tag selectors are HTML tags (such as `<header>`, `<body>`, `<img>`, `<a>`, etc.) that we target in order to style.

Tag selector example in CSS

```css
body {
  text-align: center;
  font-family: "Roboto Mono", sans serif;
}
```

Class selectors are custom names that a developer can create to help modify the appearance and behavior or certain attributes.

In the HTML document they take the form:

```css
<HTML_element class="class-name">
```

In the CSS file they are preceded with a period like so:

```css
.class-name {...}
```

Class selector example in CSS

```css
.class-name {
  display: inline;
  margin: 0 auto;
}
```

ID selectors are unique names that will only apply to a single element on the page (or a set of things, depending on how implemented). For best practice they can only be used one time per HTML document.

ID selector example in CSS:

```css
#batman {
  background-color: black;
  color: black;
}
```

That was the easy stuff. The fun begins when we try to determine what happens when the selectors are combined. Which one takes precedence? Will my text be blue or red?

Lastly, a `<style>` tag included in the HTML side of things can override any of the CSS selectors from above. It is generally considered a party foul to use `style` in that context. Styling can be done "inline" in HTML, but this is an activity perfectly suited to CSS.

FUN stuff!!
