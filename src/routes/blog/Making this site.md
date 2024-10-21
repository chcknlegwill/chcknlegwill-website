---
title: Making this site
date: "2024-05-30"
lastModified: "2024-9-30"
description: "The switch between Node.js & Svelte (Scale isn't an issue atm so this is a purely a starters perspective)."
---

## how was this site made?
This website has been made using sveltekit (previously Node & Express.js) & Cloudflare pages for posting (previously NameCheap). This changed halfway through development from using Node.js with Express.js. This was mainly due to sveltekit's reusable components -> not having to write so much for routing requests & components like headers.

## Inspiration
The colourscheme was inspired by the [gruvbox theme for vim](https://github.com/vim-scripts/gruvbox?tab=readme-ov-file) I like this theme very much as it is very easy on the eyes and I use it for almost everything - including the terminal (terminator is the best). For the font I also use one of my personal favorites [Fira Code](https://fonts.google.com/specimen/Fira+Code). I love this font just because it looks the best & has ligatures which are very cool, just look at this: `-> <---> != <= >= === =====>`. 

## hosting
I originally used a VPS on Namecheap, and this worked very well for Node & Express.js. However, when I tried to run Svelte, it would not work due to the fact that the versions of NPM & Node were at least 4 versions behind the current ones - which meant I couldn't actually run svelte on the VPS. So I had to find an alternative that wasn't going to cost me more than Namecheap. This was when I found out about Github Pages & Cloudflare, which can host the site for free (much better than Namecheap could). Github pages could also host sveletekit which was perfect. Since then its been nothing but easy setupfo  & management (even linking to my own domain) - all you have to do is link the page with the git repository and updates are very easy. Although I do personally like having my own server as it teaches you lots and gives you full control to do most things (obviously hosting it yourself would be the best option but I have nowhere near that level of hardware available & cannot afford the electricity costs). Cloudflare pages was very easy to set-up & I will definitely be hosting any other projects on Pages (github or cloudflare) just because it's so easy.


## Programming the website 
This project started as a node.js & express.js project. This was because I had some previous experience building a few simple applications for my A-level project using Node & Express.js. I enjoy writing web servers as it has very nice and very abundant documentation as well as the benefit of using plain html, css & javascript which can be more clear to beginers before they jump straight into things like sveltekit with .svelte files which could confuse newcomers - it's very clear to the users which file does what which is very useful whilst learning. I personally prefer sveltekit at the moment because the routing setup is MUCH easier for quick projects rather than writing lots of middleware and TONS of routing functions (at least in my experience) for each route e.g. /, /blog, /about/.../, /projects/... that the user may take can be very time-consuming to write a function for each one. Whereas svletekit does this automatically through how the files are structured:  

<img src="/src/lib/assets/blog/1.png" alt="code" width="100%"/>

As you can see, the Node & Express.js server on the left has routes that are very declarative - I have had to specify the routes used by the server.js file (lines 20-37). After that I then have to also add for each directory e.g. /blog, /projects another .js file to further route the requests to where they need to go:

<div id="img-left-txt-right"> 
  <img id="img2" src="/src/lib/assets/blog/2.png" alt="bruh" width="300%"/>

  <p id="no-margin" width="" >As you can see in the screenshot on the left of blog.js - I have had to write out the specific paths for each file in order for it to be served. This is much different compared to sveltekit as they use a file-based routing system which is much more intuitive and faster than writing the routes themselves.Although this does mean that sveltekit is less flexible than Node / Express.js style routing.</p>
</div>
