#!/bin/sh
D=$(date +"%Y%m%d-%T")

node node_modules/timecut/cli.js "$1/$1.svg.html" \
  --viewport=1920,1280 \
  --fps=16 \
  --duration=354 \
  --start-delay=0 \
  --frame-cache timecut \
  --pix-fmt=yuv420p \
  --output="$1/video/$1.$D.mp4"
