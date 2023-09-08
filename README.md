# Game-of-Life

This is a Python implementation of Conway’s Game of Life, a cellular automaton devised by John Conway in 1970. The simulation is built using the Pygame library, allowing for a visual representation of the cellular automaton rules.

Rules:

	•	The Game of Life is played on a grid of cells, each of which can be in one of two states: alive or dead.
	•	The simulation progresses in discrete generations. Each generation’s state depends on the state of the previous generation, following these rules:
	1.	Any live cell with fewer than two live neighbors dies (underpopulation).
	2.	Any live cell with two or three live neighbors lives on to the next generation.
	3.	Any live cell with more than three live neighbors dies (overpopulation).
	4.	Any dead cell with exactly three live neighbors becomes a live cell (reproduction).


