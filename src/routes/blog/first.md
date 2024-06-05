---
title: First Blog
date: "2024-05-30"
description: "First blog on the site (About the technologies of the site etc..)"
---

## how was this site made?
This website has been made using sveltekit (previously Node & Express.js) & Cloudflare pages for posting (previously NameCheap). This changed halfway through development from using Node.js with Express.js. This was mainly due to sveltekit's reusable components -> not having to write so much for routing requests & components like headers.

## hosting
I originally used a VPS on Namecheap, and this worked very well for Node & Express.js. However, when I tried to run Svelte, it would not work due to the fact that the versions of NPM & Node were at least 4 versions behind the current ones - which meant I couldn't actually run svelte on the VPS. So I had to find an alternative that wasn't going to cost me more than Namecheap. This was when I found out about Github Pages & Cloudflare, which can host the site for free (much better than Namecheap could). Github pages could also host sveletekit which was perfect. Since then its been nothing but easy setup & management (even linking to my own domain) - all you have to do is link the page with the git repository and updates are very easy.
