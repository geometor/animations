import * as Draw from "../Draw/_index.js"

var BPM = 4;
var time = document.getElementById("time");
var beats = document.getElementById("beats");
var TL

export function set(timeline) {
  TL = timeline
  var duration = TL.duration();
  console.log("duration: " + duration)

  var seqTL = new TimelineMax({
    repeat: Math.floor(duration)
  });

  seqTL.call(tick, [], this, Draw.BEAT);

  return seqTL;

}


export function tick() {
  var ticks = TL.time() * Draw.BEAT;
  var measure = Math.floor(ticks/BPM);
  var index = Math.floor(ticks % BPM);
  time.innerHTML = measure ;
  for (var i = 0; i < beats.children.length; i++) {
    beats.children[i].classList.remove("select");
  }
  beats.children[index].classList.add("select")
}
