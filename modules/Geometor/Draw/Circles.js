export function set(id) {

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

export function draw(id, radiusId) {

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

export function orient(id, direction) {

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

function getCenter(element) {

  var cx = parseInt(element.getBBox().x) + parseInt(element.getBBox().width / 2);
  var cy = parseInt(element.getBBox().y) + parseInt(element.getBBox().height / 2);
  cx += 1;
  cy += 1;
  return cx + ' ' + cy;

}
