---
title: "GoNIS - University final year project"
date: 2026-05-01
lastmod: 2026-05-01
description: "This is walking through my final year project for University."
---
  

# A Network Intrusion Detection System written in Go using AI

## Why the need for this?

There are existing solutions such as SNORT & Suricata but they do not use AI and cannot use multithreading nor have the debugging capability with the CPU and garbage collector - at the cost of some performance.

Snort does have muli-threading capabilities, but it requires extensive configuration - especially compared to the ease of a language such as Go - you download it using the package manager (apt, snap, pacman etc...) and then run the program or compile and then run the program.

TODO: Look at the dependencies in-depth and see if there are any potential security issues with external libraries.

