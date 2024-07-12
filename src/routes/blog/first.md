---
title: First Blog
date: "2024-05-30"
description: "First blog on the site (About the technologies of the site etc..)"
---

## how was this site made?
This website has been made using sveltekit (previously Node & Express.js) & Cloudflare pages for posting (previously NameCheap). This changed halfway through development from using Node.js with Express.js. This was mainly due to sveltekit's reusable components -> not having to write so much for routing requests & components like headers.

## Inspiration
The colourscheme was inspired by the [gruvbox theme for vim](https://github.com/vim-scripts/gruvbox?tab=readme-ov-file) I like this theme very much as it is very easy on the eyes and I use it for almost everything - including the terminal (terminator is the best). For the font I also use one of my personal favorites [Fira Code](https://fonts.google.com/specimen/Fira+Code). I love this font just because it looks the best & has ligatures which are very cool: just look at this: `-> <---> != <= >= === =====>` cool huh? 

## hosting
I originally used a VPS on Namecheap, and this worked very well for Node & Express.js. However, when I tried to run Svelte, it would not work due to the fact that the versions of NPM & Node were at least 4 versions behind the current ones - which meant I couldn't actually run svelte on the VPS. So I had to find an alternative that wasn't going to cost me more than Namecheap. This was when I found out about Github Pages & Cloudflare, which can host the site for free (much better than Namecheap could). Github pages could also host sveletekit which was perfect. Since then its been nothing but easy setup & management (even linking to my own domain) - all you have to do is link the page with the git repository and updates are very easy. Although I do personally like having my own server as it teaches you lots and gives you full control to do most things (obviously hosting it yourself would be the best option but I have nowhere near that level of hardware available & cannot afford the electricity costs). Cloudflare pages was very easy to set-up & I will definitely be hosting any other projects on Pages (github or cloudflare) just because it's so easy.