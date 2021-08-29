const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const RESOLUTION = canvas.height * 0.1;
const COLS = canvas.width / RESOLUTION;
const ROWS = canvas.height / RESOLUTION;

function createGrid() {
  const mainGrid = new Array(COLS)
    .fill(null)
    .map(() => new Array(ROWS).fill(0));
  return mainGrid;
}

console.log(createGrid());
