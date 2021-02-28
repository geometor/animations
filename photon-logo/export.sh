#!/usr/bin/env bash

if [[ $1 ]]; then
  
  convert $1 -gravity Center -crop 1920x1080+0+0 +repage export/$1.screen.png
  convert $1 -gravity Center -crop 1000x1000+0+0 +repage export/$1.square.png
  convert export/$1.square.png -define icon:auto-resize=64,48,32,16 export/favicon.ico

else
  echo "Specify file to convert"

fi
