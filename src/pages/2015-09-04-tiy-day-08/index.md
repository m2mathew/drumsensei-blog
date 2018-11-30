---
title: "The Iron Yard - Day 08"
date: "2015-09-04"
---

## Tic-Tac-Toe

In our quest to learn about loops of all kinds, the task at hand is to create a game of tic-tac-toe (also, called "[Noughts and Crosses](https://en.wikipedia.org/wiki/Tic-tac-toe)" across the pond) built in JavaScript to run in node on the command line.

![noughts-and-crosses](http://res.cloudinary.com/drumsensei/image/upload/v1515472118/noughts-and-crosses_ijhphc.png)

There are some complications to this problem that are not obvious at first. We are making it a two-player game (except for nightmare mode is building an AI to play against). We start off asking for the players' names, and setting the current player to player1. Then the player must enter the coordinates of their move in the format "x y" (yes, with the space). The move is stored in an array that holds three arrays which I am calling gameBoard.

All of that is fairly simple (yet time-consuming) except we need the array to hold the numbers of the coordinate, and the way it was entered is a string. Thankfully, in JavaScript there is a method called [`.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) that allows a string to be split by a separator, which I defined as `" "`. This leaves us with a string of two numbers. The trick now is to use [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) to get the numbers pulled out of the string and put into the array as a numeric value. This was a bit of a logical challenge simply because I had not really used all of these little processes before. However, like my old days as a music educator, I just have to tell myself (instead of the students) that the best way to learn is by doing it!

For the next part, I don't _love_ the way I constructed it yet. We must determine if the entered information was, in fact, the correct format, an acceptable number (1, 2, or 3), and that no one has taken that location. My solution here is incomplete and inelegant. I will continue to work through it!

I did manage to make the game board print with the correct player's token in the correct spot. That was a huge moment! Also, I have made it successfully switch players and I have gotten as far as declaring a winner if they get a row of their token (still have column, diagonal, and cat left!).

All in all this has been a good week, but I still have to touch up some of the responsive site stuff from earlier this week. I will do that today. We have a campus-wide huddle at 10:00am and [Iron Pints](https://www.stickermule.com/marketplace/6316-iron-pints-sticker) at 3:30pm. Also, I have to take my car in to double-check that the light that came on will be ok. **Heading back to BIG D tonight!**

Oh... and my oldest child turns thirteen on Sunday. We got old all of a sudden!
