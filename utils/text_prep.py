import os
import random

path = "../assets/text-armyofuganda-orig.txt"

with open(path, 'r') as f:
    lines = [line.strip() for line in f.readlines()]

random.shuffle(lines)

with open("../assets/text-armyofuganda.txt", "w") as f:
    for line in lines:
        f.write(f'\t"{line}",\n')