---
title: "Conway's game of life."
date: "2024-11-14"
lastModified: "2024-11-14"
description: "This is Conway's game of life written in Javascript."
---



## What is Conways game of life?
Conways game of life or just 'life' is a cellular automaton that is a zero player game / simulation. The simulation consists of a grid containing "cells" - these cells can be in one of two states: 'alive' or 'dead', these cells are then subjected to 3 rules that define the whole game: 

<ul class="rules">
<li>Any 'alive' cell with less than two neighbours dies. </li>
<li>Any 'alive' cell with two or three neighbours lives on to the next generation.</li>
<li>Any 'alive' cell with more than three live neighbours dies.</li>
<li>Any 'dead' cell with exactly three live neighbours becomes an 'alive' cell.</li>
</ul>


## Simulaton of Conway's game of life
Below should be a simulation of Conway's game of life:

<script>
  import GameOfLife from "../../lib/components/projects/Conways_game_of_life/GameOfLife.svelte"

  import P5 from 'p5-svelte';
  let width = 55;
  let height = 55;

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
    };

    p5.draw = () => {
      p5.ellipse(p5.width / 2, p5.height / 2, width, height);
    };
  };
</script>

<label>
  Width
  <input type="range" bind:value={width} min="100" max="1000" step="0.01" />
  {width}
</label>

<label>
  Height
  <input type="range" bind:value={height} min="100" max="1000" step="0.01" />
  {height}
</label>

<P5 {sketch} />


<style>
  .rules {
    font-size: 14pt;
  }

</style>