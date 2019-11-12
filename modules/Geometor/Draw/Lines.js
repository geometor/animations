import * as Draw from "./_index.js"

export function set(id) {

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

export function draw(id, position) {
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
    Draw.BEAT, {
      strokeDasharray: len + Draw.OFFSET,
      strokeDashoffset: len + Draw.OFFSET,
      // strokeDashoffset: "100%",
    }, {
      strokeDashoffset: 0,
      ease: Expo.easeIn,
    }
  );

  return seqTL;
}

export function drawReverse(id) {
  var element = document.querySelector(id + " path")
  var len = element.getTotalLength();

  var seqTL = new TimelineMax();

  seqTL.fromTo(
    element,
    Draw.BEAT, {
      autoAlpha: 1,
      strokeDasharray: len + Draw.OFFSET,
      strokeDashoffset: -len - Draw.OFFSET,
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

export function drawFromCenter(id) {

  var element = document.querySelector(id + " path")
  var len = Math.floor( element.getTotalLength() );

  var seqTL = new TimelineMax();

  seqTL.fromTo(
    element,
    0, {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
    }
  ).fromTo(
    element,
    Draw.BEAT, {
      strokeDasharray: "0 " + len,
      strokeDashoffset: -len/2,
      transformOrigin: "50% 50%",

    }, {
      strokeDasharray: len + " " + len,
      strokeDashoffset: 0,
      ease: Expo.easeIn,
      transformOrigin: "50% 50%",
    }
  );


  return seqTL;
}


export function erase(id) {
  var element = document.querySelector(id + " path")
  var len = Math.floor( element.getTotalLength() );

  var seqTL = new TimelineMax();

  seqTL.to(
    element,
    Draw.BEAT, {
      scale: 1,
      strokeDasharray: len + Draw.OFFSET,
      strokeDashoffset: len + Draw.OFFSET,
      ease: Expo.easeIn,

    }
  )

  return seqTL;
}

export function eraseReverse(id) {
  var element = document.querySelector(id + " path")
  var len = Math.floor( element.getTotalLength() );

  var seqTL = new TimelineMax();

  seqTL.to(
    element,
    Draw.BEAT, {
      scale: 1,
      strokeDasharray: len + Draw.OFFSET,
      strokeDashoffset: -len - Draw.OFFSET,
      ease: Expo.easeIn,

    }
  )

  return seqTL;
}
