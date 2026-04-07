---
title: "Making this site"
date: 2024-05-30
lastmod: 2024-11-25
description: "The switch between Node.js & Svelte (Scale isn't an issue atm so this is a purely a starters perspective)."
---

## How Was This Site Made?

The site was constructed using SvelteKit (originally Node & Express.js) with Cloudflare Pages for hosting (previously NameCheap). I switched frameworks midway through development, primarily because SvelteKit's reusable component architecture eliminated significant routing and component code that would otherwise require manual writing.

## Inspiration

The colour scheme draws from the gruvbox theme for vim, which I find visually comfortable and use across my entire development environment, including terminal applications. For typography, the site implements Fira Code, chosen for its aesthetic appeal and ligature support — features like `->`, `<--->`, `!=`, `<=`, `>=`, `===`, and `=====>`  are a nice touch.

## Hosting

The original hosting solution was a VPS through NameCheap, which functioned adequately with Node and Express.js. When attempting to migrate to SvelteKit, the VPS's outdated npm and Node versions (4+ versions behind current releases) made execution impossible. This prompted a search for cost-effective alternatives, leading to discovery of GitHub Pages and Cloudflare Pages — both offering free hosting.

Cloudflare Pages proved especially appealing due to straightforward setup, automatic deployment from Git repositories, and seamless custom domain integration. I appreciate traditional server management's educational value and control, though hardware and electricity costs make self-hosting impractical.

## Programming the Website

Development began with Node.js and Express.js, leveraging previous experience building A-level projects with these technologies. The switch to SvelteKit brought component-based architecture which made building and maintaining the site significantly easier.
