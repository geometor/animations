import * as G from  "../modules/Geometor/_index.js"

var TL = gsap.timeline();;
// const TICK = .03125;
const TICK = .1;

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
      fill: "#000000",
    }
  );
  TL.add(seqTL, offset);
}

function pulseRings(){
  var offset = "-="+(TICK * 3);
  pulseRing("#d07");
  pulseRing("#d06", offset);
  pulseRing("#d05", offset);
  pulseRing("#d04", offset);
  pulseRing("#d03", offset);
  pulseRing("#d02", offset);
  pulseRing("#d01", offset);
}

function pulseRing(id, offset) {
  var seqTL = gsap.timeline();
  seqTL.to(
    id,
    TICK *3, {
      fill: "#FFFFFF",
    });
  seqTL.to(
    id,
    TICK *3, {
      fill: "#000",
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
    },
    offset
  );
}

function hideRing(id, offset) {
  TL.to(
    id,
    TICK , {
      autoAlpha: 0,
      // ease: Expo.easeOut,
    },
    offset
  );
}


