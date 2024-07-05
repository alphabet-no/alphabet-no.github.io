import os
import random

path = "../assets/final-text.txt"

with open(path, 'r') as f:
    lines = [line.strip() for line in f.readlines()]

random.shuffle(lines)

with open("../assets/final-text-formatted.txt", "w") as f:
    for line in lines:
        f.write(f'\t"{line}",\n')