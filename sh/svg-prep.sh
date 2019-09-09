#!/usr/bin/env bash

if [ $1 ]
then

   DIR=$(dirname "${1}")
   FILE=$(basename "${1}")

   echo "Directory: $DIR"
   echo "File: $FILE"

   cd $DIR
   pwd

  sed \
    -e '15a <style>' \
    -e '15r ../../css/construction.css' \
    -e '15a </style>' \
    -e '1,2d' \
    -e '/^$/d' \
    -e 's/<!--.*-->//' \
    -e '/width=".*cm"/d' \
    -e '/height=".*cm"/d' \
    -e '/<clipPath/,/<\/clipPath>/d' \
    -e 's/\s*clip-path="url(.*)"//' \
    -e 's/stroke-linejoin="round"\s*//' \
    -e 's/stroke-opacity="1.0000"\s*//' \
    -e 's/stroke-linecap="butt"\s*//' \
    -e 's/stroke-linecap="round"\s*//' \
    -e 's/layer0/base/' \
    -e 's/layer7/graphics/' \
    -e 's/layer8/sections/' \
    -e 's/layer9/points/' \
    -e 's/ fill-opacity="1.0000" font-style="normal" font-family="Helvetica" font-weight="normal" stroke="none" fill="#.*" font-size=".*" x="0" y="0"//' \
    -e '
      # remove font glyphs
      /<defs>/ , /<\/defs>/  d
      ' \
    $FILE > ../svg/$FILE

#fill-opacity="1.0000" font-style="normal" font-family="Helvetica" font-weight="normal" stroke="none" fill="#cc9900" font-size="12.000" x="0" y="0"

  # points *******************************************************************
  sed  -i \
    -e 's/fill="none" stroke="#000000"/class="point top"/' \
    ../svg/$FILE
  sed  -i \
    -e 's/fill-opacity="1.0000" fill-rule="nonzero" stroke="none" fill="#ffffff"/class="point bottom"/' \
    ../svg/$FILE
  sed  -i \
    -e '# create one group around each point set
      /<\/g>.*/ {
        N
        N
        N
    	  s/<\/g>.*\n<g>\n<g class="point top">/<\/g>\n<g class="point top">/
    	}' \
    ../svg/$FILE
  sed  -i \
    -e '# create id for points
      /<g>.*/ {
        N
        N
        N
        N
    	  s/<g>.*\n<g class="point bottom">\n\(\s*<path.*>\n\)<title>Point \(.*\)<\/title>/<g id="pt-\2">\n<g class="point bottom">\n\1<title>Point \2<\/title>/
    	}' \
    ../svg/$FILE



  # segments *******************************************************************
  sed  -i \
    -e 'replace embedded styles with class segment
      s/stroke-width=".*" fill="none" stroke-opacity=".*" stroke="#\(.*\)"/class="segment s-\1"/' \
      ../svg/$FILE
  sed  -i \
    -e '# create one group around segment and text
      /<\/g>.*/ {
        N
        N
        N
    	  s/<\/g>.*\n<g>\n<g transform=\(.*\)>/<\/g>\n<g transform=\1>/
    	}
      ' \
      ../svg/$FILE
  sed  -i \
    -e '# create id for segments
      /<g>.*/ {
        N
        N
        N
        N
    	  s/<g>.*\n\(<g.*>\n\)\(\s*<path.*>\n\)<title>Segment \(.*\)<\/title>/<g id="sg-\3">\n\1\2<title>Segment \3<\/title>/
    	}
      ' \
      ../svg/$FILE
  sed  -i \
    -e '# create section scale a, b, a+b etc
      /<g class="segment\(.*\)">.*/ {
        N
        N
        N
        N
        N
        N
        N
    	  s/<g class="segment\(.*\)">.*\n\(\s*<path.*>\n\)\(<title.*>\n\)\(<desc.*>\n\)<\/g>.*\n\(<g.*\n\)<text>\(.*\)<\/text>/<g class="segment\1 \6">\n\2\3\4<\/g>\n\5<text>\6<\/text>/
    	}
      ' \
      ../svg/$FILE



  # lines ************************************************

  sed -i \
    -e '# replace embedded styles with class line
      s/stroke-dasharray="1.0000,3.0000" fill="none" stroke="#\(.*\)"/class="line s-\1"/' \
      ../svg/$FILE
  sed  -i \
    -e '# create id for lines
      /<g>.*/ {
        N
        N
        N
        N
        s/<g>.*\n\s*<g class="line\(.*\)">.*\n\(\s*<path.*>\n\)<title>Line \(.*\)<\/title>/<g id="i-\3">\n<g class="line\1">\n\2<title>Line \3<\/title>/
      }
      ' \
      ../svg/$FILE

  # circles
  sed  -i \
    -e '# replace embedded styles with class circle
      s/stroke-dasharray="5.0000,4.0000" fill="none" stroke="#\(.*\)"/class="circle s-\1"/' \
      ../svg/$FILE
  sed  -i \
    -e '# create id for circles
      /<g>.*/ {
        N
        N
        N
        N
        s/<g>.*\n\s*<g class="circle\(.*\)">.*\n\(\s*<path.*>\n\)<title>Circle \(.*\)<\/title>/<g id="c-\3">\n<g class="circle\1">\n\2<title>Circle \3<\/title>/
      }
      ' \
      ../svg/$FILE

  sed  -i \
    -e '# replace embedded styles with class polygon
      s/fill-opacity=".*" fill-rule="evenodd" stroke="none" fill="#\(.*\)"/class="polygon s-\1"/' \
      ../svg/$FILE
  sed  -i \
    -e '# create id for polygons
      /<g>.*/ {
        N
        N
        N
        N
        s/<g>.*\n\s*<g class="polygon\(.*\)">.*\n\(\s*<path.*>\n\)<title>\(.*\) \(.*\)<\/title>/<g id="y-\4">\n<g class="polygon\1">\n\2<title>\3 \4<\/title>/
      }
      ' \
      ../svg/$FILE

  echo "Process Complete"
else
  echo "filename is required"
  echo "./svg-prep.sh filename"
fi
