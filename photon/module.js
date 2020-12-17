import * as G from  "../modules/Geometor/_index.js"

var TL = gsap.timeline();;
const TICK = .25;

main();

function main() {

  showRing("#d07");
  showRing("#d06");
  showRing("#d05");
  showRing("#d04");
  showRing("#d03");
  showRing("#d02");
  showRing("#d01");

  hideRing("#d07");
  hideRing("#d06");
  hideRing("#d05");
  hideRing("#d04");
  hideRing("#d03");
  hideRing("#d02");
  hideRing("#d01");

  showRing("#d07");
  showRing("#d05");
  showRing("#d03");
  showRing("#d01");

  TL.play("");

}


function showRing(id, offset) {
  TL.fromTo(
    id,
    TICK , {
      autoAlpha: 0,
      fill: "#000",
    }, {
      autoAlpha: 1,
      fill: "#FFF",
      ease: Expo.easeIn,
    }
  );
}

function hideRing(id, offset) {
  TL.to(
    id,
    TICK , {
      autoAlpha: 0,
      fill: "#000",
      ease: Expo.easeIn,
    }
  );
}


