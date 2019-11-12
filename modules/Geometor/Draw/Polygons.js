function set(id) {
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
