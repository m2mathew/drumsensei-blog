---
title: "The Iron Yard - Day 13"
date: "2015-09-15"
---

## JS + HTML = 😎

Our homework over the weekend was to construct a to-do list using vanilla JavaScript i.e. just plain ol' JavaScript with no bonus features or extra doodly-whatsits. [My implementation](http://www.drumsensei.com/warehouse/homework/vanilla-todo-list/index.html) of this works pretty well. I wanted to add a few more features to it, but I had to learn some deeper concepts first.

On Friday [our instructor](http://nutellahabit.com/) told us it was his favorite day of the entire span of twelve weeks. We officially learned to connect JavaScript to our HTML to produce a page like we are used to seeing in the wild. Remember, [constant reader](http://stephenking.com/index.html), the JavaScript is what enables actions to happen on the page inside of your browser. For instance, if you look at [my very plain to-do list](http://www.drumsensei.com/warehouse/homework/vanilla-todo-list/index.html), you will notice that clicking the button next to the text input area will make that text appear below in a list format. While this may seem like an easy task, it does involve many steps.

First, we target the specific areas on the webpage that need action. On my list, those specific areas are the input text field, the clickable button and the "list" section below that.

Second, we create functions that tell us what action we wish to happen. For instance, when I click the button, the text from the input text area should become visible in the list section. At this point we should have thought about what areas are needed and what we need to happen with those areas.

Lastly, we add what JavaScript calls "event listeners" to be the messenger between our targeted areas and the desired functions. In my example of the list, I have JavaScript "listening" for a 'click' from the user on the button next to the input text area. When that button is clicked, the text is added to an array behind the scenes, the list section at the bottom is erased and redrawn with the updated list. All of this happens so fast that we cannot see it, but for every item added to the list, the entire list is erased and started over with all values. I am told that this will be useful later!

My reset button on the list example works in a similar fashion. It is "listening" for a 'click' to happen and then it interacts with the list values by resetting them all back to empty or zero and then redrawing the list section to reflect that.

In honor of our teacher [Aaron](https://twitter.com/alarner), enjoy some nutella...

![cat-eating-nutella](http://res.cloudinary.com/drumsensei/image/upload/v1515473731/nutella-cat_muwza6.gif)
