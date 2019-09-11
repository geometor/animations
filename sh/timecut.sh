#!/bin/sh

node node_modules/timecut/cli.js "$1/index.html" \
  --viewport=1920,1280 \
  --fps=30 \
  --duration=60 \
  --start-delay=0 \
  --frame-cache timecut \
  --pix-fmt=yuv420p \
  --output="$1/video/$1.mp4"
