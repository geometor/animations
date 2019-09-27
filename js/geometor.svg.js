const OFFSET = 100;
const BEAT = 1;

function hideAllElements() {

  var seqTL = new TimelineMax();

  seqTL.set(".line,.point,.circle,.polygon,.segment,.sector", {
    autoAlpha: 0,
  }, "0");

  return seqTL;
}

function setPoint(id, position) {

  var seqTL = new TimelineMax();

  seqTL.fromTo(
    id,
    BEAT, {
      autoAlpha: 0,
      scale: 50,
      r: 10,
      transformOrigin: "50% 50%",
    }, {
      autoAlpha: 1,
      scale: 1,
      r: 5,
      ease: Expo.easeIn,
    },
    position
  );

  return seqTL;
}

function highlightPoint(id) {

  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "+=highlight",
    }
  );

  return seqTL;
}

function unHighlightPoint(id) {

  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "-=highlight",
    }
  );

  return seqTL;
}

function drawLine(id, position) {
  var element = document.querySelector(id + " path")
  var len = Math.floor( element.getTotalLength() );

  var seqTL = new TimelineMax();

  seqTL.fromTo(
    element,
    0, {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
    }, position
  ).fromTo(
    element,
    BEAT, {
      strokeDasharray: len + OFFSET,
      strokeDashoffset: len + OFFSET,
    }, {
      strokeDashoffset: 0,
      ease: Expo.easeIn,
    }
  );

  return seqTL;
}

function eraseLine(id) {
  var element = document.querySelector(id + " path")
  var len = Math.floor( element.getTotalLength() );

  var seqTL = new TimelineMax();

  seqTL.to(
    element,
    BEAT, {
      scale: 1,
      strokeDasharray: len + OFFSET,
      strokeDashoffset: len + OFFSET,
      ease: Expo.easeIn,

    }
  )

  return seqTL;
}

function eraseLineReverse(id) {
  var element = document.querySelector(id + " path")
  var len = Math.floor( element.getTotalLength() );

  var seqTL = new TimelineMax();

  seqTL.to(
    element,
    BEAT, {
      scale: 1,
      strokeDasharray: len + OFFSET,
      strokeDashoffset: -len - OFFSET,
      ease: Expo.easeIn,

    }
  )

  return seqTL;
}

function drawLineReverse(id) {
  var element = document.querySelector(id + " path")
  var len = element.getTotalLength();

  var seqTL = new TimelineMax();

  seqTL.fromTo(
    element,
    BEAT, {
      autoAlpha: 1,
      strokeDasharray: len + OFFSET,
      strokeDashoffset: -len - OFFSET,
      transformOrigin: "50% 50%",
    }, {
      autoAlpha: 1,
      strokeDashoffset: 0,
      transformOrigin: "50% 50%",
      ease: Expo.easeIn,

    }
  );

  return seqTL;
}

function drawLineCenter(id) {
  var element = document.querySelector(id + " path")
  var len = element.getTotalLength();

  var seqTL = new TimelineMax();

  seqTL.fromTo(
    id,
    BEAT, {
      autoAlpha: 1,
      strokeDasharray: 1,
      strokeDashoffset: len / 2,
      transformOrigin: "50% 50%",
    }, {
      autoAlpha: 1,
      strokeDasharray: len,
      strokeDashoffset: 0,
      transformOrigin: "50% 50%",
    }
  );
  return seqTL;
}

function setLines(id) {

  var seqTL = new TimelineMax();

  seqTL.fromTo(
    id,
    0, {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
    }
  );

  return seqTL;
}

function setCircle(id) {

  var seqTL = new TimelineMax();

  seqTL.fromTo(
    id,
    0, {
      autoAlpha: 1,
      scale: 0,
      fillOpacity: 1,
      transformOrigin: "50% 50%",
    }, {
      autoAlpha: 1,
      scale: 1,
      fillOpacity: 0,
      transformOrigin: "50% 50%",
    }
  );
}

function setPolygon(id) {
  var seqTL = new TimelineMax();

  seqTL.fromTo(
    id,
    BEAT * 2, {
      autoAlpha: 0,
      scale: 0,
      transformOrigin: "50% 50%",
    }, {
      autoAlpha: 1,
      scale: 1,
      ease: Expo.easeIn,
    }
  );
  return seqTL;
}

function getCenter(element) {

  var cx = parseInt(element.getBBox().x) + parseInt(element.getBBox().width / 2);
  var cy = parseInt(element.getBBox().y) + parseInt(element.getBBox().height / 2);
  cx += 1;
  cy += 1;
  return cx + ' ' + cy;

}

function drawCircle(id, radiusId) {

  var element = document.querySelector(id + " path");
  var len = Math.floor( element.getTotalLength() );

  var center = getCenter(element)

  var seqTL = new TimelineMax();

  seqTL.to(
    element,
    0, {
      autoAlpha: 1,
    }
  ).fromTo(
    element,
    BEAT, {
      strokeDasharray: len ,
      strokeDashoffset: len ,

    }, {
      strokeDashoffset: len/2,
      ease: Expo.easeIn,

    }
  ).to(
    element,
    BEAT, {
      // strokeDasharray: len ,
      strokeDashoffset: 0,
      ease: Expo.easeIn,

    }
  );

  if (radiusId) {
    var radius = document.querySelector(radiusId + " path");
    var radiusLen = radius.getTotalLength();

      // drawLine(radiusId);
      seqTL.to(radiusId,
        BEAT , {
          rotation: "+=180",
          svgOrigin: center,
          ease: Expo.easeIn,

      }, "-=" + BEAT * 2 )
      .to(radiusId,
        BEAT , {
          rotation: "+=180",
          svgOrigin: center,
          ease: Expo.easeIn,

      }, "-=" + BEAT   );
  }



  return seqTL;

}


function orientCircle(id, direction) {

  var element = document.querySelector(id + " path" );

  var center = getCenter(element) ;

  var seqTL = new TimelineMax();

  seqTL.set(
    element,
    {
      rotation: direction,
      svgOrigin: center,
    }
  );

  return seqTL;

}

function hideElements(id) {
  var seqTL = new TimelineMax();

  seqTL.to(
    id,
    0, {
      autoAlpha: 0,

    }
  );

  return seqTL;
}

function fadeElementsOld(id) {
  var seqTL = new TimelineMax();

  seqTL.staggerTo(
    id,
    BEAT, {
      opacity: .2,
      fillOpacity: 0,
    }, .1
  );

  return seqTL;
}
function fadeElements(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "+=fade",
    }
  );

  seqTL.to(
    id,
    BEAT * 2,
    {

    }
  );

  return seqTL;
}

function unFadeElements(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "-=fade",
    }
  );

  return seqTL;
}

function clearElements(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      clearProps: "all",
    }
  );

  return seqTL;
}

function selectElements(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "+=select",
    }
  );

  return seqTL;
}

function unSelectElements(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "-=select",
    }
  );

  return seqTL;
}

function setGolden(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "+=golden",
    }
  );

  return seqTL;
}

function unSetGolden(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "-=golden",
    }
  );

  return seqTL;
}

//can take multiple items
function zoomToElement(id, margin, scale) {

  var elements = document.querySelectorAll(id);
  var topX, topY, bottomX, bottomY;
  var start = true;

  if (elements) {
    for (i = 0; i < elements.length; ++i) {
      // for (i in elements) {
      // console.log("for: " + i + " : " + elements[i]);
      if (start) {
        start = false;

        // topX = parseInt(i.getBBox().x);
        topX = parseInt(elements[i].getBBox().x);
        topY = parseInt(elements[i].getBBox().y);
        bottomX = topX + parseInt(elements[i].getBBox().width);
        bottomY = topY + parseInt(elements[i].getBBox().height);
      } else {
        if (elements[i]) {
          var x = parseInt(elements[i].getBBox().x);
          var y = parseInt(elements[i].getBBox().y);
          var wd = parseInt(elements[i].getBBox().width);
          var ht = parseInt(elements[i].getBBox().height);

          // console.log("element: " + i + " x: " + x + " y: " + y + " w: " + wd + " h: " + ht);
          if (x < topX) {
            topX = x;
          }
          if (y < topY) {
            topY = y;
          }
          if (x + wd > bottomX) {
            bottomX = x + wd;
          }
          if (y + ht > bottomY) {
            bottomY = y + ht;
          }
        }
      }
      // console.log("bounds: " + i + " : " + topX + " " + topY + " " + bottomX + " " + bottomY);
    }
  }

  // console.log(topX);
  // console.log(topY);
  // console.log(bottomX);
  // console.log(bottomY);

  var viewBox = (topX - margin) + ' ' + (topY - margin) + ' ' + (bottomX - topX + (2 * margin)) + ' ' + (bottomY - topY + (2 * margin));
  // console.log(viewBox);

  //scale lines and points with viewbox
  var seqTL = new TimelineMax();

  seqTL.to("svg",
    BEAT, {
      attr: {
        viewBox: viewBox,
        ease: Expo.easeIn,

      }
    })
    ;

  return seqTL;

}

function dumpComputedStyles(id) {
  var styleList = [
    "visibility",
    "opacity",
    "stroke",
    "strokeWidth",
    "fill",
    "fillOpacity"
  ]

  var element = $(id).get(0);

  var out = "";
  var elementStyle = element.style;
  var computedStyle = window.getComputedStyle(element, null);

  for (prop in styleList) {
    var propValue = computedStyle.getPropertyValue(styleList[prop]);
    // out += "  " + styleList[prop] + " = '" + propValue + "'\n";
    out += "  " + styleList[prop] + " = '" + getStyle(element, styleList[prop]) + "'\n";
  }

  // console.log("fill: " + document.defaultView.getComputedStyle(element, null).getPropertyValue("fill"));


  console.log(id + ": " + out)

  console.log("stroke: " + element.style.stroke)

  var len = 0; //cs.length;


  // console.log(style+" : "+ cs.getPropertyValue(style));
  //
  // for (var i=0;i<len;i++) {
  //
  //   var style = cs[i];
  //   console.log(style+" : "+cs.getPropertyValue(style));
  // }
  //
}

function getStyle(oElm, strCssRule) {
  var strValue = "";
  if (document.defaultView && document.defaultView.getComputedStyle) {
    strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
  } else if (oElm.currentStyle) {
    strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
      return p1.toUpperCase();
    });
    strValue = oElm.currentStyle[strCssRule];
  }
  return strValue;
}


function constructLine(line, points) {
  var seqTL = new TimelineMax();

  seqTL.add(setPoint(points));
  seqTL.add(highlightPoint(points));

  seqTL.add(drawLine(line));

  seqTL.add(unHighlightPoint(points));

  return seqTL;
}

function constructPolygon(polygon, points) {
  var seqTL = new TimelineMax();


  seqTL.add(setPolygon(polygon), 0);

  seqTL.add(setPoint(points), 0);
  seqTL.add(highlightPoint(points), 2);

  seqTL.add(unHighlightPoint(points), 3);

  return seqTL;
}

function constructCircle(circle, radius, points, orient = "0", reverse=false) {
  var seqTL = new TimelineMax();

  seqTL.add(setPoint(points));
  seqTL.add(highlightPoint(points));
  if (radius) {
    if (reverse) {
      seqTL.add(drawLine(radius), "-=1");
    }else{
      seqTL.add(drawLineReverse(radius), "-=1");
    }
  }

  seqTL.add(orientCircle(circle, orient));
  seqTL.add(drawCircle(circle, radius));
  seqTL.add(orientCircle(circle, "0"));
  // seqTL.add(eraseLine(radius));

  if (radius) {
    if (reverse) {
      seqTL.add(eraseLine(radius));
    }else{
      seqTL.add(eraseLineReverse(radius));
    }
  }

  seqTL.add(unHighlightPoint(points));

  return seqTL;
}
