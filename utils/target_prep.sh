#!/bin/bash
# This script should be used to format images for a fresh labeling run.
# This will remove any existing txt files in this folder.

folder_path="../assets/"

# Navigate to the folder containing the images
cd "$folder_path" || exit

# Remove any existing text files
rm *.txt

# Initialize counter
count=1

# Loop through each image file in the folder
for file in *.{webp,WEBP,jpg,JPG,jpeg,JPEG,png,PNG}; do
    # Check if the file is a regular file
    if [ -f "$file" ]; then
        # Convert the webp images to PNG if applicable
        if [[ "$file" == *.{webp,WEBP} ]]; then
            convert "$file" "${file%.*}.png"
            rm "$file"
        fi
        # Rename the image file to .png format with sequential numbering
        mv "$file" "people-$count.png"
        
        # Increment counter
        ((count++))
    fi
done

