---
title: "The Iron Yard - Day 07"
date: "2015-09-02"
---

## The Matrix

We have learned about arrays and objects. We are now aware of the matrix.

![falling-integers-on-a-shell-screen](http://res.cloudinary.com/drumsensei/image/upload/v1515249171/2015-09-02_2_olhi6l.jpg)

### Arrays - overview

An **array** is a data structure that lists information in what we can think of as an ordered list. This might be most useful when needing a list of items such as a cash register needing to access prices or perhaps an inventory. Square brackets are used to start off an array, and all data types can be stored here.

An empty array named `groceries` looks like this:

```
var groceries = [];
```

### Objects - overview

An **object** is a data structure that functions more like a large bag that holds pieces of information in any order. Objects are central to the more advanced abilities of modern programming languages. The information stored in an object has a label to go with the value. Curly braces indicate the beginning and end of an object, and all data types can be stored here, as well.

An empty object named `kitchen` looks like this:

```
var kitchen = {};
```

### Array in use

We need to insert data into our array, so we will use the array method `.push()` to insert data into the front of the structure. (You can also add data at the end or the middle, as needed.)

```
groceries.push('milk');
groceries.push('eggs');
groceries.push('bacon');
```

So our array now looks like this:

```
> ['milk', 'eggs', 'bacon']
```

These values inside the array can be retrieved and used by referring to label of the _position_ of the value. For instance, milk is at position 0, eggs at position 1, bacon at position 2. (Due to largely historical reasons, most computer scientists will begin counting with zero.)

If we need to access an element of the array and reassign a new value to the spot that holds milk, that would look like this (pronounced "groceries sub zero):

```
groceries[0] = 'whole milk';
```

### Object in use

Unlike an array, an object is not ordered, so we cannot _push_ things to the object. Instead we have to access _keys_ that behave as labels for the objects inside the array. If the keys do not already exist, then they will be created as we give them a value. For example:

```
kitchen.flour = '2lb';
kitchen.eggs = 1;
kitchen.coffee = true;
```

The above values don't have just a generic label but have a custom label. If we need to access the values inside an object we can access it much like above. If we want to reassign a new value to an object, then that would be identical to the assignment above.

Objects have two ways to retrieve data from inside: dot notation (usually preferred) or curly braces notation.

A **matrix** is created when we store an array as an element inside an array. If we had three arrays stored inside of an array, then that might look something like this:

```
var matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
```

This could conceivably lead to some rather complex data structures.

Anyone ready for tic-tac-toe?
