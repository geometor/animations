var TL ;

main();

function main() {

  TL = new TimelineMax({
    repeat: -1,
    yoyo: true,
    repeatDelay: 5
  });

  TL.add( baseSequence() );
  TL.add( root3grid() );

  TL.timeScale(2);
  TL.play(0);

}

function root3grid() {

  var seqTL = new TimelineMax({
    repeat: 0,
  });

  seqTL.add( drawLine( "#f" ) );
  seqTL.add( drawLine( "#g" ) );
  seqTL.add( drawLine( "#h" ) );
  seqTL.add( drawLine( "#i" ) );

  return seqTL;

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

  seqTL.add( drawCircle("#b", "#q1") ); //vesica piseces
  seqTL.add( eraseLine("#q1") );
  seqTL.add( setPoint("#C") );

  seqTL.add( drawLineReverse("#q1") );
  seqTL.add( drawCircle("#c", "#q1") );
  seqTL.add( eraseLine("#q1") );

  seqTL.add( setPoint("#D") );
  seqTL.add( setPoint(["#E", "#F"]) );

  seqTL.add( drawLine("#d") );

  seqTL.add( setPoint("#G") );

  seqTL.add( drawLine("#q3") );
  seqTL.add( eraseLine("#q3") );


  var set = [
    "#a",
    "#b",
    "#c",
    "#d",
  ];
  seqTL.add( fadeElements( set ) );

  // seqTL.add( unFadeElements("#a"), "+=1" );
  // seqTL.add( selectElements("#a"), "+=2" );
  // seqTL.add( unSelectElements("#a"), "+=1" );
  // seqTL.add( fadeElements("#a"), "+=1" );
  //
  // seqTL.add( unFadeElements("#b"), "+=1" );
  // seqTL.add( selectElements("#b"), "+=2" );
  //
  // seqTL.add( unFadeElements("#c"), "+=1" );
  // seqTL.add( selectElements("#c"), "+=2" );
  // seqTL.add( unSelectElements("#b"), "+=1" );
  // seqTL.add( fadeElements("#b"), "+=1" );
  // seqTL.add( unSelectElements("#c"), "+=1" );
  // seqTL.add( fadeElements("#c"), "+=1" );
  //
  // seqTL.add( clearElements( set ), "+=2");

  return seqTL;

}
