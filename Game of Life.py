import time
import pygame
import numpy as np

# Defining colors
color_bg = (10, 10, 10)
color_grid = (40, 40, 40)
color_die_next = (170, 170, 170)
color_alive_next = (255,255, 255)

# Defining the logic on the basis of the rules of Conway's Game of Life
def update(screen, cells, size, with_progress=False):
    # Creating an empty grid
    updated_cells = np.zeros((cells.shape[0], cells.shape[1]))

    # Looping through the cells in the grid
    for row, col in np.ndindex(cells.shape):
        # Calculating the number of alive neighbors
        alive = np.sum(cells[row - 1:row + 2, col - 1:col + 2]) - cells[row, col]
        color = color_bg if cells[row, col] == 0 else color_alive_next


        # Checking the state and deciding the state of neighbor cells
        if cells[row, col] == 1:
            if alive < 2 or alive > 3:
                if with_progress:
                    color = color_die_next

            elif 2 <= alive <= 3:
                updated_cells[row, col] = 1
                if with_progress:
                    color = color_alive_next

        else:
            if alive == 3:
                updated_cells[row, col] = 1
                if with_progress:
                    color = color_alive_next


      # Draw the rectangle to represent the cell
        pygame.draw.rect(screen, color, (col * size, row * size, size - 1, size - 1))

    return updated_cells

def main():
    pygame.init()
    pygame.display.set_caption("Conway's Game of Life")
    screen = pygame.display.set_mode((800,600))

    cells  = np.zeros((60,80))
    screen.fill(color_grid)

    # Initialize the grid
    update(screen, cells, 10)

    pygame.display.flip()
    pygame.display.update()

    running = False

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    running =  not running
                    update(screen, cells, 10)
                    pygame.display.update()
                elif event.key == pygame.K_r:  # Reset the game
                    cells = np.zeros((60, 80))
                    screen.fill(color_grid)
                    update(screen, cells, 10)
                    pygame.display.update()

            if pygame.mouse.get_pressed()[0]:
                pos = pygame.mouse.get_pos()
                cells[pos[1] // 10 , pos[0] // 10] = 1
                update(screen, cells, 10)
                pygame.display.update()
                
        screen.fill(color_grid)

        if running:
            cells = update(screen, cells, 10, with_progress = True)
            pygame.display.update()

       # Control speed of the simulation
        time.sleep(0.001)



if __name__ == '__main__':
    main()

