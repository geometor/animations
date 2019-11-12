export function set(id, position) {

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

export function highlight(id) {

  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "+=highlight",
    }
  );

  return seqTL;
}

export function unhighlight(id) {

  var seqTL = new TimelineMax();

  seqTL.set(
    id,
    {
      className: "-=highlight",
    }
  );

  return seqTL;
}
