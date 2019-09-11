const OFFSET = 20;

function hideAllElements() {

  // tl.set( $('.Line,.Point,.Circle,.Triangle,.Quadrilateral,.Segment,.Sector'), {
  //     autoAlpha: 0,
  // }, "0");
  tl.set(".line,.point,.circle,.polygon,.segment,.sector", {
    autoAlpha: 0,
  }, "0");


}

function setPoint(id, position) {


  tl.set(
    id,
    {
      className: "+=highlight",

    }
  ).fromTo(
    id,
    1, {
      autoAlpha: 0,
      scale: 10,
      transformOrigin: "50% 50%",
    }, {
      autoAlpha: 1,
      scale: 1,
      fillOpacity: 1
    },
    position
  ).set(
    id,
    {
      className: "-=highlight",

    }
  );
}

function setLine(id) {
  tl.fromTo(
    id,
    .5, {
      autoAlpha: 0,

    }, {
      autoAlpha: 1,

    }
  );
}

function drawLine(id) {
  var element = document.querySelector(id + " path")
  var len = element.getTotalLength();

  tl.to(
    element,
    0, {
      autoAlpha: 1,
    }
  ).fromTo(
    element,
    1, {
      strokeDasharray: len + OFFSET,
      strokeDashoffset: len + OFFSET,

    }, {
      strokeDashoffset: 0,
      ease: Power2.easeOut,
    }
  ).to(
    element,
    .5, {
      strokeOpacity: .5,
    }
  );
}

function unStrokeLine(id) {
  var element = document.querySelector(id + " path")
  var len = element.getTotalLength();

  tl.to(
    element,
    1, {
      scale: 1,
      strokeDasharray: len + OFFSET,
      strokeDashoffset: len + OFFSET,
      ease: Power2.easeOut,

    }
  ).to(
    element,
    0, {
      autoAlpha: 0,
    }
  ).to(
    element,
    .5, {
      strokeOpacity: .5,
    }
  );
}

function drawLineReverse(id) {
  var element = document.querySelector(id + " path")
  var len = element.getTotalLength();

  tl.fromTo(
    element,
    .5, {
      scale: 1,
      autoAlpha: 1,
      strokeDasharray: len + OFFSET,
      strokeDashoffset: -len - OFFSET,
      transformOrigin: "50% 50%",
    }, {
      scale: 1,
      autoAlpha: 1,
      strokeDashoffset: 0,
      transformOrigin: "50% 50%",
    }
  ).to(
    element,
    .5, {
      strokeOpacity: .5,
    }
  );
}

function drawLineCenter(id) {
  var len = document.querySelector(id).getTotalLength();

  tl.fromTo(
    id,
    .5, {
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
}

function setLines(id) {
  tl.staggerFrom(
    id,
    .5, {
      scale: 0,
      transformOrigin: "50% 50%",
    }, .2
  );
}

function setCircle(id) {
  tl.fromTo(
    id,
    .5, {
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
  tl.fromTo(
    id,
    .5, {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: "50% 50%",
    }, {
      autoAlpha: 1,
      scale: 1,
      fillOpacity: .2,
      transformOrigin: "50% 50%",
    }
  );
}

function sweepRadius(id, radiusId) {
  var element = document.querySelector(id + " path");
  var len = element.getTotalLength();

  var radius = document.querySelector(radiusId + " path");
  var radiusLen = radius.getTotalLength();

  var cx = parseInt(element.getBBox().x) + parseInt(element.getBBox().width / 2);
  var cy = parseInt(element.getBBox().y) + parseInt(element.getBBox().height / 2);
  var center = cx + ' ' + cy;

  var timeOffset;

  console.log("circle len: " + len);
  console.log("radius len: " + radiusLen);


  tl.to(
    element,
    0, {
      autoAlpha: 1,
    }
  ).fromTo(
    element,
    2, {
      strokeDasharray: len ,
      strokeDashoffset: len ,

    }, {
      strokeDashoffset: 0,

    }
  );

  // ease: Power2.easeOut,

  if (radiusId) {
      // drawLine(radiusId);
      tl.to(radiusId, 2, {
          rotation: "+=360",
          svgOrigin: center,

      }, "-=2" );
  }

  tl.to(
    element,
    .5, {
      strokeOpacity: .5,
    }
  );


  // if (radiusId) {
  //     unStrokeLine(radiusId);
  //     // unStrokeLine(radiusId);
  // }
  // tl.to(circleId, .5, {
  //   strokeWidth: .5
  // }, "-=1")
}

function hideElements(id) {
  tl.staggerTo(
    id,
    1, {
      autoAlpha: 0,

    }, .1
  );
}

function fadeElements(id) {
  tl.staggerTo(
    id,
    1, {
      opacity: .4,
      fillOpacity: 0,
    }, .1
  );
}

//can take multiple items
function zoomToElement(id, margin, scale) {

  var elements = document.querySelectorAll(id);
  var topX, topY, bottomX, bottomY;
  var start = true;
  //margin = 0;
  // console.log(elements);

  if (elements) {
    for (i = 0; i < elements.length; ++i) {
      // for (i in elements) {
      console.log("for: " + i + " : " + elements[i]);
      if (start) {
        start = false;

        // topX = parseInt(i.getBBox().x);
        topX = parseInt(elements[i].getBBox().x);
        topY = parseInt(elements[i].getBBox().y);
        bottomX = parseInt(elements[i].getBBox().width);
        bottomY = parseInt(elements[i].getBBox().height);
      } else {
        if (elements[i]) {
          var x = parseInt(elements[i].getBBox().x);
          var y = parseInt(elements[i].getBBox().y);
          var wd = parseInt(elements[i].getBBox().width);
          var ht = parseInt(elements[i].getBBox().height);

          console.log("element: " + i + " x: " + x + " y: " + y + " w: " + wd + " h: " + ht);
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
      console.log("bounds: " + i + " : " + topX + " " + topY + " " + bottomX + " " + bottomY);
    }
  }

  console.log(topX);
  console.log(topY);
  console.log(bottomX);
  console.log(bottomY);

  var viewBox = (topX - margin) + ' ' + (topY - margin) + ' ' + (bottomX - topX + (2 * margin)) + ' ' + (bottomY - topY + (2 * margin));
  console.log(viewBox);

  //scale lines and points with viewbox
  tl.to("#drawing", 1, {
      attr: {
        viewBox: viewBox
      }
    })
    .to(".Segment", 1, {
      // strokeWidth: 2
    }, "-=1")
    .to(".Point", 1, {
      attr: {
        r: 3
      }
    }, "-=1")
    .to(".Point.g", 1, {
      attr: {
        r: 3
      }
    }, "-=1");

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