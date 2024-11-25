<script>
  import { onMount } from 'svelte';

  export let p5Instance;

  let cellSize = 20;
  let columnCount;
  let rowCount;
  let currentCells = [];
  let nextCells = [];

  onMount(() => {
    // Set simulation framerate to 10 to avoid flickering
    p5Instance.frameRate(10);
    p5Instance.createCanvas(720, 400);

    // Calculate columns and rows
    columnCount = p5Instance.floor(p5Instance.width / cellSize);
    rowCount = p5Instance.floor(p5Instance.height / cellSize);

    // Set each column in current cells to an empty array
    for (let column = 0; column < columnCount; column++) {
      currentCells[column] = [];
    }

    // Repeat the same process for the next cells
    for (let column = 0; column < columnCount; column++) {
      nextCells[column] = [];
    }

    // Randomize the initial board
    randomizeBoard();

    // Start the game loop
    p5Instance.noLoop();
    p5Instance.describe(
      "Grid of squares that switch between white and black, demonstrating a simulation of John Conway's Game of Life. When clicked, the simulation resets."
    );
  });

  function draw() {
    generateGame();
    for (let column = 0; column < columnCount; column++) {
      for (let row = 0; row < rowCount; row++) {
        // Get cell value (0 or 1)
        let cell = currentCells[column][row];

        // Convert cell value to get black (0) for alive or white (255 (white) for dead
        p5Instance.fill((1 - cell) * 255);
        p5Instance.stroke(0);
        p5Instance.rect(column * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }

  // Reset board when mouse is pressed
  function mousePressed() {
    randomizeBoard();
    p5Instance.loop();
  }

  // Fill board randomly
  function randomizeBoard() {
    for (let column = 0; column < columnCount; column++) {
      for (let row = 0; row < rowCount; row++) {
        // Randomly select value of either 0 (dead) or 1 (alive)
        currentCells[column][row] = p5Instance.random([0, 1]);
      }
    }
  }

  // Create a new generation
  function generateGame() {
    // Game logic...
  }
</script>