var tl ;

// $( document ).ready(function() {
//
// });

console.log( "ready!" );
main();
// tl.stop();
tl.timeScale(2);
tl.play();

// tl.tweenFromTo( fromThisLabel, toThisLabel );

function main() {

  tl = new TimelineMax({
    repeat: -1,
    yoyo: true,
    repeatDelay: 5
  });

  // hideAllElements();

  baseSequence();
}


function baseSequence() {

  zoomToElement(["#b", "#c"], 50);

  // tl.addPause("blank");

  //build sequence
  setPoint("#A");
  setPoint("#B");

  // // tl.addPause("unit points");
  //
  // setLine("#a");
  drawLine("#a");
  //
  // // tl.addPause("baseline");
  //
  drawLine("#q1");
  // // tl.addPause("unit");

  sweepRadius("#b", "#q1"); //vesica piseces
  unStrokeLine("#q1");
  setPoint("#C");

  drawLineReverse("#q1");
  sweepRadius("#c", "#q1");
  // // tl.addPause("vesica");
  unStrokeLine("#q1");

  setPoint("#D");
  setPoint(["#E", "#F"]);

  drawLine("#d");

  setPoint("#G");

  drawLine("#q3");

  // var removeSet = [
  //   "#c04an",
  //   "#y3n",
  //   "#i04ae",
  //   "#i04aw",
  //   "#i02ae",
  //   "#i02aw",
  //   "#i02be",
  //   "#i02bw",
  //   "#p015n",
  //   "#p015s",
  // ];
  // fadeElements(removeSet);
  // fadeElements(".Segment.s002");

  // end first set
}