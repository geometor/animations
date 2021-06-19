#!/bin/sh
D=$(date +"%Y%m%d-%T")
FPS=24
DURATION=8

node node_modules/timecut/cli.js "http://constructions.local/$1" \
  --viewport=1920,1080 \
  --fps=$FPS\
  --duration=$DURATION \
  --start-delay=0 \
  --frame-cache timecut \
  --pix-fmt=yuv420p \
  --output="$1/video/$1.$D.mp4" \
  --transparent-background
  # --keep-frames \
