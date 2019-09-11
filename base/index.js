var TL ;

main();

function main() {

  TL = new TimelineMax({
    repeat: -1,
    yoyo: true,
    repeatDelay: 2
  });

  TL.add( baseSequence() );

  TL.timeScale(2);
  TL.play();

}


function baseSequence() {

  var seqTL = new TimelineMax({
    repeat: 0,
  });

  // zoomToElement(["#b", "#c"], 50);

  // tl.addPause("blank");

  //build sequence
  seqTL.add( setPoint("#A") );
  seqTL.add( setPoint("#B") );

  seqTL.add( drawLine("#a") );

  // // tl.addPause("baseline");

  seqTL.add( drawLine("#q1") );

  seqTL.add( sweepRadius("#b", "#q1") ); //vesica piseces
  seqTL.add( eraseLine("#q1") );
  seqTL.add( setPoint("#C") );

  seqTL.add( drawLineReverse("#q1") );
  seqTL.add( sweepRadius("#c", "#q1") );
  seqTL.add( eraseLine("#q1") );

  seqTL.add( setPoint("#D") );
  seqTL.add( setPoint(["#E", "#F"]) );

  seqTL.add( drawLine("#d") );

  seqTL.add( setPoint("#G") );

  seqTL.add( drawLine("#q3") );


  var removeSet = [
    "#a",
    "#b",
    "#c",
  ];
  // fadeElements(removeSet);

  return seqTL;

}
