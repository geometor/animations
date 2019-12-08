#!/bin/sh
D=$(date +"%Y%m%d-%T")

node node_modules/timecut/cli.js "$1/index.html" \
  --viewport=1920,1080 \
  --fps=16\
  --duration=18 \
  --start-delay=0 \
  --frame-cache timecut \
  --pix-fmt=yuv420p \
  --output="$1/video/$1.$D.mp4"

  # --keep-frames \
