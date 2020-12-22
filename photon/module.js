import * as G from  "../modules/Geometor/_index.js"

var TL = gsap.timeline();;
const TICK = .03125;

main();

function main() {

  setRings();

  pulseRings();
  pulseRings();
  pulseRings();
  final();

  TL.play("");

}


function final(){
  showRing("#d07");
  showRing("#d05");
  showRing("#d03");
  showRing("#d01");
}

function pulse_old() {
  showRing("#d07");
  showRing("#d06");
  hideRing("#d07", "-="+(TICK / 2));
  showRing("#d05");
  hideRing("#d06", "-="+(TICK / 2));
  showRing("#d04");
  hideRing("#d05", "-="+(TICK / 2));
  showRing("#d03");
  hideRing("#d04", "-="+(TICK / 2));
  showRing("#d02");
  hideRing("#d03", "-="+(TICK / 2));
  showRing("#d01");
  hideRing("#d02", "-="+(TICK / 2));
  hideRing("#d01");
}

function setRings(){
  setRing("#d07");
  setRing("#d06");
  setRing("#d05");
  setRing("#d04");
  setRing("#d03");
  setRing("#d02");
  setRing("#d01");
}
function setRing(id, offset) {
  var seqTL = gsap.timeline();
  seqTL.set(
    id,
    {
      autoAlpha: 0,
      fill: "#FFFFFF",
      // ease: Expo.easeOut,
    }
  );
  TL.add(seqTL, offset);
}

function pulseRings(){
  pulseRing("#d07");
  pulseRing("#d06", "-="+(TICK));
  pulseRing("#d05", "-="+(TICK));
  pulseRing("#d04", "-="+(TICK));
  pulseRing("#d03", "-="+(TICK));
  pulseRing("#d02", "-="+(TICK));
  pulseRing("#d01", "-="+(TICK));
}

function pulseRing(id, offset) {
  var seqTL = gsap.timeline();
  seqTL.to(
      id,
      TICK, {
        autoAlpha: 1,
        // fill: "#FFFFFF",
        // ease: Expo.easeIn,
      })
    .to(
      id,
      TICK *3, {
        autoAlpha: 1,
      });
  seqTL.to(
    id,
    TICK , {
      autoAlpha: 0,
      // fill: "#000",
      // ease: Expo.easeOut,
    }
  );
  TL.add(seqTL, offset);
}

function showRing(id, offset) {
  TL.to(
    id,
    TICK , {
      autoAlpha: 1,
      fill: "#FFF",
      // ease: Expo.easeIn,
    },
    offset
  );
}

function hideRing(id, offset) {
  TL.to(
    id,
    TICK , {
      autoAlpha: 0,
      // fill: "#000",
      // ease: Expo.easeOut,
    },
    offset
  );
}


