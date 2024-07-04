#!/bin/bash

# Directory containing the PNG files
DIRECTORY=$1

# Check if directory is provided
if [ -z "$DIRECTORY" ]; then
  echo "Usage: $0 path_to_directory"
  exit 1
fi

# Check if ImageMagick is installed
if ! command -v mogrify &> /dev/null; then
  echo "ImageMagick is not installed. Please install it using 'sudo apt-get install imagemagick'."
  exit 1
fi

# Create output directory
OUTPUT_DIR="${DIRECTORY}/resized"
mkdir -p "$OUTPUT_DIR"

# Iterate over each PNG file in the directory
for png in "$DIRECTORY"/*.png; do
  if [ -f "$png" ]; then
    # Get the base name of the file
    BASENAME=$(basename "$png")
    # Resize the PNG to 500x500 pixels and save it to the output directory
    mogrify -path "$OUTPUT_DIR" -resize 500x500 "$png"
    if [ $? -eq 0 ]; then
      echo "Resized $BASENAME to 500x500 pixels."
    else
      echo "Failed to resize $BASENAME."
    fi
  fi
done

echo "All PNG files have been processed and resized to 500x500 pixels in $OUTPUT_DIR."
