import * as Draw from "./_index.js"

export function set(id) {
  var seqTL = new TimelineMax();

  seqTL.fromTo(
    id,
    Draw.BEAT * 2, {
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
