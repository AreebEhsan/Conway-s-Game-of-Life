const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const generationDisplay = document.getElementById("generationDisplay");

const rows = 60;
const cols = 80;
const cellSize = 10;
let cells = Array.from({ length: rows }, () => Array(cols).fill(0));
let running = false;
let speed = 200;  // Default speed in milliseconds
let generation = 0;

const colorBg = "#0A0A0A";
const colorAlive = "#61dafb";
const colorDie = "#AAAAAA";

// Initialize the grid and draw cells
function drawGrid() {
  ctx.fillStyle = colorBg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      ctx.fillStyle = cells[row][col] ? colorAlive : colorBg;
      ctx.fillRect(col * cellSize, row * cellSize, cellSize - 1, cellSize - 1);
    }
  }
}

// Update cells based on Game of Life rules
function updateCells() {
  const newCells = cells.map(arr => [...arr]);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const aliveNeighbors = countAliveNeighbors(row, col);
      if (cells[row][col] === 1) {
        newCells[row][col] = aliveNeighbors < 2 || aliveNeighbors > 3 ? 0 : 1;
      } else {
        newCells[row][col] = aliveNeighbors === 3 ? 1 : 0;
      }
    }
  }
  cells = newCells;
  generation++;  // Increment generation count
  generationDisplay.textContent = `Generation: ${generation}`;  // Update display
  drawGrid();
}

// Count alive neighbors for a cell
function countAliveNeighbors(row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const newRow = row + i;
      const newCol = col + j;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        count += cells[newRow][newCol];
      }
    }
  }
  return count;
}

// Toggle game state (start/stop)
function toggleRunning() {
  running = !running;
  if (running) runGame();
}

// Game loop for continuous updating
function runGame() {
  if (running) {
    updateCells();
    setTimeout(runGame, speed);
  }
}

// Reset game state
function resetGame() {
  cells = Array.from({ length: rows }, () => Array(cols).fill(0));
  generation = 0;  // Reset generation count
  generationDisplay.textContent = `Generation: ${generation}`;  // Update display
  drawGrid();
}

// Update speed from slider (inverted to make right side faster)
function updateSpeed(value) {
  speed = 1000 - Number(value);  // Higher slider value means faster speed
}

// Toggle cell state on click
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / cellSize);
  const y = Math.floor((e.clientY - rect.top) / cellSize);
  cells[y][x] = cells[y][x] ? 0 : 1;
  drawGrid();
});

// Preview cell hover
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / cellSize);
  const y = Math.floor((e.clientY - rect.top) / cellSize);

  drawGrid();
  ctx.fillStyle = "#21a1f1";
  ctx.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
});

// Initial drawing of the grid
drawGrid();
