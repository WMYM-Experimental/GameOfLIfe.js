const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const RESOLUTION = 15; //cell size
const COLS = canvas.width / RESOLUTION;
const ROWS = canvas.height / RESOLUTION;

function createGrid() {
  const grid = new Array(COLS).fill(null).map(() => new Array(ROWS).fill(0));
  return grid;
}

function drawGrid(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.stroke();
    }
  }
}

const mainGrid = createGrid();
drawGrid(mainGrid);
