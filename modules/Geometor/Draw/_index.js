import * as Points from "./Points.js"
export {Points}
import * as Lines from "./Lines.js"
export {Lines}
import * as Circles from "./Circles.js"
export {Circles}
import * as Polygons from "./Polygons.js"
export {Polygons}

export const OFFSET = 100;
export const BEAT = 1;

export function constructLine(line, points, reverse = false) {
  var seqTL = new TimelineMax();

  seqTL.add(Points.set(points));
  seqTL.add(Points.highlight(points));

  if (reverse) {
    seqTL.add(Lines.drawReverse(line));
  }else {
    seqTL.add(Lines.draw(line));
  }

  seqTL.add(Points.unhighlight(points));

  return seqTL;
}

export function constructPolygon(polygon, points) {
  var seqTL = new TimelineMax();


  seqTL.add(Polygons.set(polygon), 0);

  seqTL.add(Points.set(points), 0);
  seqTL.add(Points.highlight(points), 2);

  seqTL.add(Points.unhighlight(points), 3);

  return seqTL;
}

export function constructCircle(circle, radius, points, orient = "0", reverse=false) {
  var seqTL = new TimelineMax();

  seqTL.add(Points.set(points));
  seqTL.add(Points.highlight(points));
  if (radius) {
    if (reverse) {
      seqTL.add(Lines.drawReverse(radius), "-=1");
    }else{
      seqTL.add(Lines.draw(radius), "-=1");
    }
  }

  seqTL.add(Circles.orient(circle, orient));
  seqTL.add(Circles.draw(circle, radius));
  seqTL.add(Circles.orient(circle, "0"));
  // seqTL.add(eraseLine(radius));

  if (radius) {
    if (reverse) {
      seqTL.add(Lines.eraseReverse(radius));
    }else{
      seqTL.add(Lines.erase(radius));
    }
  }

  seqTL.add(Points.unhighlight(points));

  return seqTL;
}


export function hide(id) {
  var seqTL = new TimelineMax();

  seqTL.to(
    id,
    0, {
      autoAlpha: 0,

    }
  );

  return seqTL;
}

export function fade(id, holdbeats = 2) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "+=fade",
    }
  );

  seqTL.to(
    id,
    BEAT * holdbeats,
    {

    }
  );

  return seqTL;
}

export function unfade(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "-=fade",
    }
  );

  return seqTL;
}

export function clear(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      clearProps: "all",
    }
  );

  return seqTL;
}

export function select(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "+=select",
    }
  );

  return seqTL;
}

export function unselect(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "-=select",
    }
  );

  return seqTL;
}

export function setGolden(id) {
  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "+=golden",
    }
  );

  return seqTL;
}

export function unSetGolden(id) {
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
export function zoomToElement(id, margin, scale) {

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
