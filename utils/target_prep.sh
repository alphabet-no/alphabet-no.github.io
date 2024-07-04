#!/bin/bash
# This script should be used to format images for a fresh labeling run.
# This will remove any existing txt files in this folder.

folder_path="../assets/logo"

# Navigate to the folder containing the images
cd "$folder_path" || exit

# Initialize counter
count=1

# Loop through each image file in the folder
for file in *.{png,PNG,svg,SVG}; do
    # Check if the file is a regular file
    if [ -f "$file" ]; then
        mv "$file" "$count.svg"
        # Increment counter
        ((count++))
    fi
done

