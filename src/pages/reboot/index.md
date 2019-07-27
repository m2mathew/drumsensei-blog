---
title: "Reboot"
date: "2019-07-27"
length: "2 min read"
---

For about two years, I have come back to my blog with the intent to update the layout or underlying structure in some major way. I usually time-box myself to spend an evening working on it. But then I don't return for several months. 😕 This time worked!

![Reboot.](./reboot.gif)

I first launched this little corner of the internet in July 2015, nearly exactly four years ago. At the time I had switched gears from music education to full-time software development. As an easy way to jump in to blogging, I used the Mac-only program [RapidWeaver](https://www.realmacsoftware.com/rapidweaver/) with a custom template. I bought a hosting plan and could easily push my changes from RapidWeaver to my own hosted server. Over time I wrote here less often, a product of my leveling-up in web development. Eventually my system of "template pushed to hosting service" became useless. I could not update my site, and my own templates would not open on my machine. I got left behind by my own tech.

Times have changed. I know _considerably_ more about how the innards of the web works. I have spent about 4 years working as a web developer doing some pretty nifty work for my day job and a handful of clients. After experimenting with a few different ways of getting an "easy" blog made for myself, I settled on a pattern that works great for me.

This website is built on [GatsbyJS](https://www.gatsbyjs.org/). All files live in [Github](https://github.com/). I build and deploy the site using [Netlify](https://www.netlify.com/). I still use [Hover](https://www.hover.com/) for my domain. How does this make things easier? Glad you asked!

Now, I can open up a text editor like Visual Studio Code or similar. I can make a new [markdown file](https://daringfireball.net/projects/markdown/) that has a format that my GatsbyJS project is looking for: title, date, length, images, etc. Then I save my changes to Github. Netlify is configured to listen to a certain part of Github for any changes. If anything _does_ change, then Netlify automatically kicks off a build and deploys it to the web. My Hover domain settings are pointing at Netlify, so all changes will propagate through the internets for anyone visiting the website's name.

This setup has just enough nerdery for me to be interested and not much friction to get words on the page...er, screen. I think it's a good change. Recently, my journeys through music and software development have been percolating into articles upon articles in my head. I have a lot left to say, and now I can get back to saying it!
