---
title: First Blog
date: "2024-05-30"
description: "First blog on the site"
---

## how was this site made?
This website has been made using sveltekit in conjunction with cloudflare pages. This changed halfway through development from using Node.js with express.js. This was mainly due to sveltekits reusable components -> not having to write so much for routing requests in the site (& good documentation, but Node and Express have LOTS because they have been around for much longer).

## hosting
I originally used a VPS on Namecheap, and this worked very well for Node & Express.js.
However, when I tried to run Svelte, it would not work due to the fact that the versions of NPM & Node were at least 4 versions behind the current ones - which meant I couldn't actually run svelte on the VPS. 