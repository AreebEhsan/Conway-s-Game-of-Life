# Conway's Game of Life Simulator

This is a **JavaScript implementation** of Conway's Game of Life, a cellular automaton that simulates the life and death of cells on a grid based on specific rules. This project includes a **visual simulator** where users can control speed, toggle cells, and reset the simulation, with generation tracking for each update. 

## About Conway's Game of Life

Conway's Game of Life is a zero-player game developed by John Conway. It consists of a grid of cells that evolve based on simple rules:

- A live cell with fewer than two live neighbors dies (underpopulation).
- A live cell with two or three live neighbors lives on to the next generation.
- A live cell with more than three live neighbors dies (overpopulation).
- A dead cell with exactly three live neighbors becomes a live cell (reproduction).


## Features

- **Dynamic Simulation**: Cells evolve according to Conway’s rules of life and death.
- **Interactive Grid**: Click on the grid to toggle cell states (alive or dead).
- **Speed Control**: Adjust the speed of the simulation with a slider.
- **Generation Tracking**: Display the current generation count as the simulation progresses.
- **Responsive Design**: Hover effects and animations for an engaging experience.
  
## Technologies Used

- **HTML5**: Structure and canvas element.
- **CSS3**: Styling, animations, and hover effects.
- **JavaScript**: Game logic, grid drawing, and user interactivity.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/game-of-life.git

Rules:

	•	The Game of Life is played on a grid of cells, each of which can be in one of two states: alive or dead.
	•	The simulation progresses in discrete generations. Each generation’s state depends on the state of the previous generation, following these rules:
	1.	Any live cell with fewer than two live neighbors dies (underpopulation).
	2.	Any live cell with two or three live neighbors lives on to the next generation.
	3.	Any live cell with more than three live neighbors dies (overpopulation).
	4.	Any dead cell with exactly three live neighbors becomes a live cell (reproduction).


