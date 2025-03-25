# import pygame
# import random

# # Initialize pygame
# pygame.init()

# # Constants
# WIDTH, HEIGHT = 1920, 1080
# WHITE = (255, 255, 255)
# RED = (255, 0, 0)
# BLUE = (0, 0, 255)
# PLAYER_SIZE = 50
# PROJECTILE_SIZE = 30
# SPEED = 5
# INITIAL_PROJECTILE_SPEED = 5  # Starting speed
# SPEED_INCREMENT = 1  # Increase speed by 5
# DIFFICULTY_INTERVAL = 10000  # Increase speed every 5 seconds (5000 ms)

# # Set up display
# screen = pygame.display.set_mode((WIDTH, HEIGHT))
# pygame.display.set_caption("Dodge the Projectiles!")

# # Load assets
# font = pygame.font.Font(None, 50)

# # Player setup
# player = pygame.Rect(WIDTH // 2, HEIGHT - 60, PLAYER_SIZE, PLAYER_SIZE)

# # Projectile list
# projectiles = []

# # Game variables
# running = True
# game_over = False
# projectile_speed = INITIAL_PROJECTILE_SPEED
# last_increase_time = pygame.time.get_ticks()  # Track time

# # Game loop
# clock = pygame.time.Clock()

# while running:
#     screen.fill(WHITE)

#     # Check for quit event
#     for event in pygame.event.get():
#         if event.type == pygame.QUIT:
#             running = False

#     keys = pygame.key.get_pressed()
#     if not game_over:
#         # Move player left or right
#         if keys[pygame.K_LEFT] and player.x > 0:
#             player.x -= SPEED
#         if keys[pygame.K_RIGHT] and player.x < WIDTH - PLAYER_SIZE:
#             player.x += SPEED

#         # Increase difficulty over time
#         current_time = pygame.time.get_ticks()
#         if current_time - last_increase_time >= DIFFICULTY_INTERVAL:
#             projectile_speed += SPEED_INCREMENT  # Increase projectile speed
#             last_increase_time = current_time  # Reset timer

#         # Spawn projectiles randomly
#         if random.randint(1, 30) == 1:
#             x_pos = random.randint(0, WIDTH - PROJECTILE_SIZE)
#             projectiles.append(pygame.Rect(x_pos, 0, PROJECTILE_SIZE, PROJECTILE_SIZE))

#         # Move projectiles
#         for projectile in projectiles:
#             projectile.y += projectile_speed
#             if projectile.colliderect(player):
#                 game_over = True

#         # Draw projectiles
#         for projectile in projectiles:
#             pygame.draw.rect(screen, RED, projectile)

#         # Remove projectiles that are off-screen
#         projectiles = [p for p in projectiles if p.y < HEIGHT]

#     # Draw player
#     pygame.draw.rect(screen, BLUE, player)

#     # Game over screen
#     if game_over:
#         text = font.render("Game Over!", True, RED)
#         screen.blit(text, (WIDTH // 2 - 100, HEIGHT // 2 - 25))

#     pygame.display.flip()
#     clock.tick(90)

# pygame.quit()