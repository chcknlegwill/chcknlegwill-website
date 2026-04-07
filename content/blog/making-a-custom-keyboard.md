---
title: "Making a custom keyboard."
date: 2024-10-15
lastmod: 2024-11-02
description: "Making a keyboard from scratch - the ferris keyboard."
---

## Thanks & Important Links

I'd like to give credit to two key resources that made this possible:

1. **Ben Vallack's Ferris Keyboard Video** — Helped with using KiCad for PCB editing and personalising silkscreen designs.
2. **Kyek's Assembly Guide** — Provided essential instruction on soldering TRRS connectors, microcontrollers, and switches to the board.

## What is the Ferris Keyboard?

The Ferris is a minimalistic keyboard that contains only 34 keys for ease-of-use and comfort. By reducing hand movement across the keyboard, users can improve typing efficiency. However, the limited key count necessitates using layers to access standard keyboard functions like control, shift, caps-lock, tab, and escape.

## Ordering Parts

Ordering the parts was relatively straightforward. The QMK documentation made PCB and component ordering much easier to navigate. However, I made an initial error ordering microcontrollers that lacked USB functionality, requiring a reorder to enable firmware flashing and proper operation.

## Creating the Ferris Keyboard

Using KiCad for PCB editing, I was able to personalise the silkscreen design before sending it off for manufacturing. The assembly guide from Kyek covered the soldering process in detail — TRRS connectors, microcontrollers, and switches all need to be carefully soldered to the board.

## My Keyboard

After getting everything soldered and the firmware flashed, the result is a compact, split keyboard that has completely changed how I type. The learning curve for the layer system is steep but very worth it.
