#!/bin/sh
D=$(date +"%Y%m%d-%T")
FPS=24
DURATION=10

node node_modules/timecut/cli.js "$1/index.html" \
  --viewport=1920,1080 \
  --fps=$FPS\
  --duration=$DURATION \
  --start-delay=0 \
  --frame-cache timecut \
  --pix-fmt=yuv420p \
  --output="$1/video/$1.$D.mp4" \
  --transparent-background
  # --keep-frames \
