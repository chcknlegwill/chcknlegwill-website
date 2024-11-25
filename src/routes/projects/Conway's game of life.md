---
title: "Conway's game of life."
date: "2024-11-14"
lastModified: "2024-11-25"
description: "This is Conway's game of life written in Javascript."
---

## p5.js
I would like to start this post by giving thanks to the <a href="https://p5js.org" target="_blank">p5.js</a> library for making this possible as well as the <a href="https://p5-svelte.netlify.app/" target="_blank"> p5-svelte </a> API for making p5.js work with svelte to be very simple with the least hastle I've has with any other 3d / graphics in Javascript.

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
<p>(clicking anywhere resets the canvas)</p>

<script lang="ts">
  /*
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
    };

    p5.draw = () => {
      p5.ellipse(p5.width / 2, p5.height / 2, width, height);
    };
  };
  //^ this is testing to make sure p5.js works with svelte
  */

  //start of the game of life
  //I did try to import it through a different .svelete file but
  //that had lots of import issues so I just implemented it in here.
    import P5 from 'p5-svelte';
    let p5Instance;

    const sketch = (p5) => {
        // Grid dimensions
        const cols = 50;
        const rows = 50;
        let grid;

        // Initialize the grid
        function initGrid() {
            grid = new Array(cols).fill(null).map(() => 
                new Array(rows).fill(null).map(() => 
                    p5.random(1) < 0.3 ? 1 : 0
                )
            );
        }

        // Count live neighbors for a cell
        function countNeighbors(grid, x, y) {
            let sum = 0;
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    let col = (x + i + cols) % cols;
                    let row = (y + j + rows) % rows;
                    sum += grid[col][row];
                }
            }
            // Subtract the cell itself
            sum -= grid[x][y];
            return sum;
        }

        // Compute next generation
        function nextGeneration(grid) {
            let next = grid.map(arr => [...arr]);
            
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    let state = grid[x][y];
                    let neighbors = countNeighbors(grid, x, y);

                    // Conway's Game of Life rules
                    if (state === 0 && neighbors === 3) {
                        next[x][y] = 1;  // Dead cell becomes alive
                    } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                        next[x][y] = 0;  // Live cell dies
                    } else {
                        next[x][y] = state;  // Stays the same
                    }
                }
            }
            return next;
        }

        p5.setup = () => {
            const canvasWidth = 400;
            const canvasHeight = 400;
            p5.createCanvas(canvasWidth, canvasHeight);
            
            // Initialize grid
            initGrid();
            
            // Slow down the frame rate for visibility
            p5.frameRate(10);
        };

        p5.draw = () => {
            p5.background(220);
            
            // Calculate cell size
            const cellWidth = p5.width / cols;
            const cellHeight = p5.height / rows;

            // Draw grid
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    let x_pos = x * cellWidth;
                    let y_pos = y * cellHeight;

                    // Color live and dead cells differently
                    if (grid[x][y] === 1) {
                        p5.fill(0);  // Black for live cells
                    } else {
                        p5.fill(255);  // White for dead cells
                    }
                    
                    p5.rect(x_pos, y_pos, cellWidth, cellHeight);
                }
            }

            // Compute next generation
            grid = nextGeneration(grid);
        };

        // Optional: Reset simulation on mouse press
        p5.mousePressed = () => {
            initGrid();
        };
    };
</script>

<div class="game-of-life-container">
  <gameoflife>
    <P5 {sketch} bind:p5Instance />
  </gameoflife>
</div>

<style>
  .game-of-life-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding-bottom: 10px;
    padding-top: 20px;
    margin-top: 20px;
    border: solid 2px black;
}
  

  .rules {
    font-size: 14pt;
  }

</style>