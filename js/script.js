//variables and constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const RESOLUTION = 5; //cell size
const COLS = canvas.width / RESOLUTION;
const ROWS = canvas.height / RESOLUTION;

function getRandomInt(min, max) {
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);

  return randomInt;
}

//setup
function createGrid() {
  const grid = new Array(COLS)
    .fill(null)
    .map(() => new Array(ROWS).fill(null).map(() => getRandomInt(0, 1)));

  return grid;
}

function drawGrid(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);

      ctx.fillStyle = cell ? "#444" : "#eee"; //if is alive is black if is not cell is white

      ctx.fill();
    }
  }
}

//rules
function life(grid) {
  const nextGen = grid.map((array) => [...array]); // 'loop' each array remmeber mainGrid is a matrix (an array of arrays)

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let numNeighbours = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //3 by 3 grid
          if (i === 0 && j === 0) {
            continue; //for not detectting itself
          }

          //handle 'cell collition with canvas border'
          const xCell = col + i;
          const yCell = row + j;

          //if cell is not in a collition with canvas border work
          if (xCell >= 0 && yCell >= 0 && xCell < COLS && yCell < ROWS) {
            const neighbour = grid[col + i][row + j];
            numNeighbours += neighbour;
          }
        }
      }

      //rules
      if (cell === 1 && numNeighbours < 2) {
        nextGen[col][row] = 0;
      } else if (cell === 1 && numNeighbours > 3) {
        nextGen[col][row] = 0;
      } else if (cell === 0 && numNeighbours === 3) {
        nextGen[col][row] = 1;
      }
    }
  }
  return nextGen;
}

function animate() {
  mainGrid = life(mainGrid); //
  drawGrid(mainGrid);
  requestAnimationFrame(animate);
}

//listener

//run
let mainGrid = createGrid();
animate();
