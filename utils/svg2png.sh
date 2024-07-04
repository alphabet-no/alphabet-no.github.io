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
OUTPUT_DIR="${DIRECTORY}/pngs"
mkdir -p "$OUTPUT_DIR"

# Iterate over each SVG file in the directory
for svg in "$DIRECTORY"/*.svg; do
  if [ -f "$svg" ]; then
    # Get the base name of the file without extension
    BASENAME=$(basename "$svg" .svg)
    # Convert the SVG to PNG format
    rsvg-convert -o "$OUTPUT_DIR/$BASENAME.png" "$svg"
    if [ $? -eq 0 ]; then
      echo "Converted $BASENAME.svg to $BASENAME.png."
    else
      echo "Failed to convert $BASENAME.svg."
    fi
  fi
done

echo "All SVG files have been processed and converted to PNG format in $OUTPUT_DIR."
