import os
import random

path = "../assets/text.txt"

with open(path, 'r') as f:
    lines = [line.strip() for line in f.readlines()]

total_lines = []
for line in lines:
    total_lines += line.split('.')

for i, line in enumerate(total_lines):
    total_lines[i] = line.replace('"', "'")
    if line == '':
        total_lines.pop(i)
    elif "snail" in line:
        total_lines.pop(i)
    elif "$FAST" in line:
        total_lines.pop(i)
    elif 'kaspa' in line:
        total_lines.pop(i)
    elif 'Kaspa' in line:
        total_lines.pop(i)
    elif "coin" in line:
        total_lines.pop(i)
    elif "milady" in line:
        total_lines.pop(i)
    elif "remilia" in line:
        total_lines.pop(i)
    elif "bitcoin" in line:
        total_lines.pop(i)
    elif "$" in line:
        total_lines.pop(i)
    
random.shuffle(total_lines)

with open("../assets/text.js", "w") as f:
    for line in total_lines:
        f.write(f'\t"{line}",\n')