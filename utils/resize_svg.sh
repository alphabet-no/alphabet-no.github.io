#!/bin/bash

# Directory containing the SVG files
DIRECTORY=$1

# Check if directory is provided
if [ -z "$DIRECTORY" ]; then
  echo "Usage: $0 path_to_directory"
  exit 1
fi

# Check if rsvg-convert is installed
if ! command -v rsvg-convert &> /dev/null; then
  echo "rsvg-convert is not installed. Please install it using 'sudo apt-get install librsvg2-bin'."
  exit 1
fi

# Create output directory
OUTPUT_DIR="${DIRECTORY}/resized"
mkdir -p "$OUTPUT_DIR"

# Iterate over each SVG file in the directory
for svg in "$DIRECTORY"/*.svg; do
  if [ -f "$svg" ]; then
    # Get the base name of the file
    BASENAME=$(basename "$svg")
    # Resize the SVG to 500x500 pixels
    rsvg-convert -w 500 -h 500 "$svg" -o "$OUTPUT_DIR/$BASENAME"
    if [ $? -eq 0 ]; then
      echo "Resized $BASENAME to 500x500 pixels."
    else
      echo "Failed to resize $BASENAME."
    fi
  fi
done

echo "All SVG files have been processed and saved to $OUTPUT_DIR."
