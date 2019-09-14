var TL = new TimelineMax();;

main();

function main() {


  document.addEventListener("keydown", keyPressCheck, false);
  // TL.eventCallback("onUpdate", updateSlider);

  TL.add( zoomToElement(["#r","#s"], 100) );

  TL.add( baseSequence() );
  // TL.addLabel("root3")
  TL.add( root3grid(), "+=2");
  // TL.addLabel("root3");
  TL.add( g01() );
  TL.addLabel("g01");
  TL.add( g01remove(), "+=2" );

  TL.add( fadeRoot3(), "+=2");

  // TL.addLabel("root5");
  TL.add( root5grid(), "+=2" );
  TL.add( g01() );
  TL.addLabel("g01-b");
  TL.add( g01remove(), "+=2" );

  TL.add( fadeRoot5(), "+=2");

  // TL.addLabel("root2");
  TL.add( root2grid(), "+=2" );
  TL.add( g01() );
  TL.addLabel("g01-c");
  TL.add( g01remove(), "+=2" );

  TL.add( fadeRoot2(), "+=2");

  // TL.addLabel("squares");
  TL.add( squares(), "+=2" );
  TL.add( g01() );
  TL.addLabel("g01-d");
  TL.add( g01remove(), "+=2" );

  TL.add( fadeSquares(), "+=2");

  // TL.addLabel("squares");
  TL.add( squares3(), "+=2" );
  TL.add( g01() );
  TL.addLabel("g01-e");
  TL.add( g01remove(), "+=2" );

  TL.add( fadeSquares3(), "+=2");


  TL.add( hexagon(), "+=2" );
  TL.add( g01() );
  TL.addLabel("g01-f");
  // TL.add( g01remove(), "+=2" );


  TL.delay(2);
  TL.timeScale(2);
  console.log("duration: " + TL.duration())
  TL.play("g01-d");

}

function root3grid() {

  var seqTL = new TimelineMax();

  seqTL.add( drawLine( "#f" ) );
  seqTL.add( setPoint("#I") );

  seqTL.add( drawLine( "#g" ) );
  seqTL.add( setPoint("#K") );

  seqTL.add( drawLine( "#h" ) );
  seqTL.add( setPoint("#M") );

  seqTL.add( drawLine( "#i" ) );
  seqTL.add( setPoint("#J") );

  seqTL.add( setPolygon("#t1") );
  seqTL.add( setPolygon("#t2") );


  seqTL.add( drawLine( "#j" ) );
  seqTL.add( drawLine( "#k" ) );

  seqTL.add( hideElements(["#t1", "#t2"]) );

  seqTL.add( setPolygon("#t3") );

  seqTL.add( drawLine( "#l" ) );
  seqTL.add( drawLine( "#h_2" ) );
  seqTL.add( setPoint("#H") );

  seqTL.add( drawLine( "#m" ) );

  seqTL.add( orientCircle("#e", "30") );
  seqTL.add( drawCircle("#e", "#m") );
  seqTL.add( orientCircle("#e", "0") );
  seqTL.add( eraseLine("#m") );

  // seqTL.add( zoomToElement("#e", 100) );

  seqTL.add( setPoint("#N") );
  seqTL.add( setPoint("#L") );

  seqTL.add( selectElements("#e") );


  return seqTL;

}


function fadeRoot3() {

  var seqTL = new TimelineMax();
  var set = [
    "#f",
    "#g",
    "#h",
    "#i",
    "#j",
    "#k",
    "#l",
    "#e",
    "#h_2",
  ];

  seqTL.add( unSelectElements( "#e" ) );
  seqTL.add( fadeElements( set ) );


  return seqTL;
}

function g01() {

  var seqTL = new TimelineMax();
  var set = [
    "#N",
    "#L",
    "#A",
    "#B",
    "#C",
    "#D",
  ];

  seqTL.add( highlightPoint( set ) );


  seqTL.add( drawLine( "#g0101c" ) );
  seqTL.add( drawLine( "#g0101b_2" ) );
  seqTL.add( drawLine( "#g0101b_1" ), "-=1"  );
  seqTL.add( drawLine( "#g0101a_2" ) );
  seqTL.add( drawLine( "#g0101a_1" ), "-=1"   );

  return seqTL;
}

function g01remove() {

  var seqTL = new TimelineMax();
  var set = [
    "#N",
    "#L",
    "#A",
    "#B",
    "#C",
    "#D",
  ];

  seqTL.add( eraseLine( "#g0101a_2" ) );
  seqTL.add( eraseLine( "#g0101a_1" ), "-=1"   );

  seqTL.add( eraseLine( "#g0101b_2" ) );
  seqTL.add( eraseLine( "#g0101b_1" ), "-=1"  );

  seqTL.add( eraseLine( "#g0101c" ) );

  seqTL.add( unHighlightPoint( set ) );
  seqTL.add( hideElements( "#t3" ) );


  return seqTL;
}

function root5grid() {

  var seqTL = new TimelineMax();

  //vesica piseces
  // seqTL.add( zoomToElement(["#r","#s"], 100) );

  seqTL.add( drawLine( "#n_1" ) );
  seqTL.add( orientCircle("#p", "180") );
  seqTL.add( drawCircle("#p", "#n_1") );
  seqTL.add( orientCircle("#p", "0") );

  seqTL.add( eraseLine("#n_1") );

  seqTL.add( drawLineReverse("#n_1") );
  seqTL.add( drawCircle("#r", "#n_1") );
  seqTL.add( eraseLine("#n_1") );

  seqTL.add( setPoint("#O") );
  seqTL.add( setPoint("#P") );

  // seqTL.add( highlightPoint("#O") );
  // seqTL.add( highlightPoint("#P") );

  seqTL.add( drawLine( "#n" ) );

  seqTL.add( setPoint("#S") );
  seqTL.add( setPoint("#T") );

  seqTL.add( highlightPoint("#S") );
  seqTL.add( highlightPoint("#T") );

  seqTL.add( drawLine( "#p_1" ) );
  // seqTL.add( orientCircle("#q", "180") );
  seqTL.add( drawCircle("#q", "#p_1") );
  seqTL.add( eraseLine("#p_1") );

  seqTL.add( drawLineReverse("#p_1") );
  seqTL.add( orientCircle("#s", "180") );
  seqTL.add( drawCircle("#s", "#p_1") );
  seqTL.add( orientCircle("#s", "0") );
  seqTL.add( eraseLine("#p_1") );

  seqTL.add( setPoint("#R") );
  seqTL.add( setPoint("#Q") );

  seqTL.add( drawLine( "#t" ) );

  seqTL.add( setPoint("#U") );
  seqTL.add( setPoint("#V") );

  seqTL.add( highlightPoint("#U") );
  seqTL.add( highlightPoint("#V") );

  seqTL.add( drawLine( "#g_1" ) );
  seqTL.add( drawLine( "#h_1" ) );

  seqTL.add( setPolygon( "#q2" ) );
  seqTL.add( setPolygon( "#q4" ) );

  seqTL.add( drawLine( "#j_1" ) );
  seqTL.add( drawLine( "#l_1" ) );


  seqTL.add( drawLine( "#m_1" ) );
  seqTL.add( orientCircle("#c_1", "-62.5") );
  seqTL.add( drawCircle("#c_1", "#m_1") );
  seqTL.add( orientCircle("#c_1", "62.5") );
  seqTL.add( eraseLine("#m_1") );

  seqTL.add( selectElements("#c_1") );


  seqTL.add( unHighlightPoint("#S") );
  seqTL.add( unHighlightPoint("#T") );
  seqTL.add( unHighlightPoint("#U") );
  seqTL.add( unHighlightPoint("#V") );


  return seqTL;

}

function fadeRoot5() {
  var seqTL = new TimelineMax();

  var set = [
    "#p",
    "#q",
    "#r",
    "#s",
    "#n",
    "#t",
    "#g_1",
    "#h_1",
    "#l_1",
    "#j_1",
    "#c_1",
  ];

  seqTL.add( hideElements("#q2") );
  seqTL.add( hideElements("#q4") );

  seqTL.add( unSelectElements( "#c_1" ) );
  seqTL.add( fadeElements( set ) );


  return seqTL;

}


function root2grid() {

  var seqTL = new TimelineMax();

  seqTL.add( drawLine( "#q_1" ) );
  seqTL.add( setPoint("#W") );

  seqTL.add( drawLine( "#r_1" ) );
  seqTL.add( setPoint("#Z") );
  seqTL.add( setPoint("#A_1") );
  seqTL.add( setPoint("#B_1") );
  seqTL.add( setPoint("#C_1") );


  // seqTL.add( zoomToElement("#d_2", 100) );
  seqTL.add( drawLine( "#d_1" ) );

  // seqTL.add( orientCircle("#e", "30") );
  seqTL.add( drawCircle("#d_2", "#d_1") );
  seqTL.add( selectElements( "#d_2" ) );

  seqTL.add( eraseLine("#d_1") );

  seqTL.add( setPoint("#D_1") );

  seqTL.add( setPolygon("#q5") );


  return seqTL;

}

function fadeRoot2() {

  var seqTL = new TimelineMax();

  var set = [
    "#q_1",
    "#r_1",
    "#d_2",

  ];

  seqTL.add( hideElements("#q5") );

  seqTL.add( unSelectElements( "#d_2" ) );
  seqTL.add( fadeElements( set ) );

  return seqTL;

}

function squares() {

  var seqTL = new TimelineMax();


  seqTL.add( unFadeElements( ["#b", "#c"] ) );
  seqTL.add( unFadeElements( ["#f", "#g"] ) );
  seqTL.add( unFadeElements( ["#l", "#h_2"] ) );

  seqTL.add( setPoint("#E_1") );
  seqTL.add( setPoint("#G_1") );

  seqTL.add( drawLine( "#i_2" ) );
  seqTL.add( drawLine( "#j_2" ) );

  seqTL.add( setPoint("#C_1") );
  seqTL.add( setPoint("#F_1") );


  seqTL.add( setPolygon("#q6") );
  seqTL.add( setPolygon("#q7") );

  seqTL.add( drawLine( "#p_2" ) );
  seqTL.add( drawLine( "#q_2" ) );

  seqTL.add( drawLine( "#r_2" ) );

  seqTL.add( orientCircle("#c_2", "30") );
  seqTL.add( drawCircle("#c_2", "#r_2") );
  seqTL.add( orientCircle("#c_2", "0") );
  seqTL.add( selectElements("#c_2") );

  seqTL.add( eraseLine("#r_2") );

  seqTL.add( fadeElements( ["#b", "#c"] ) );
  seqTL.add( fadeElements( ["#f", "#g", "#p_2", "#q_2", "#i_2", "#j_2"] ) );
  seqTL.add( fadeElements( ["#l", "#h_2"] ) );


  // seqTL.add( unSelectElements( "#d_2" ) );
  // seqTL.add( fadeElements( set ) );

  return seqTL;

}

function fadeSquares() {

  var seqTL = new TimelineMax();

  var set = [
    "#i_2",
    "#j_2",
    "#c_2",

  ];

  seqTL.add( hideElements("#q6") );
  seqTL.add( hideElements("#q7") );

  seqTL.add( unSelectElements( "#c_2" ) );
  seqTL.add( fadeElements( set ) );

  return seqTL;

}

function squares3() {

  var seqTL = new TimelineMax();

  seqTL.add( drawLine( "#s_2" ) );
  seqTL.add( drawLine( "#t_2" ) );

  seqTL.add( setPoint("#H_1") );

  seqTL.add( drawLine( "#m_3" ) );
  seqTL.add( drawLine( "#n_3" ) );


  seqTL.add( drawLine( "#h_3" ) );

  // seqTL.add( orientCircle("#c_3", "30") );
  seqTL.add( drawCircle("#c_3", "#h_3") );
  // seqTL.add( orientCircle("#c_3", "0") );
  seqTL.add( selectElements("#c_3") );

  seqTL.add( eraseLine("#h_3") );

  seqTL.add( setPoint("#I_1") );
  seqTL.add( setPoint("#J_1") );
  seqTL.add( setPoint("#K_1") );
  seqTL.add( setPoint("#L_1") );

  seqTL.add( drawLine( "#f_3" ) );
  seqTL.add( drawLine( "#g_3" ) );
  seqTL.add( drawLine( "#p_3" ) );
  seqTL.add( drawLine( "#q_3" ) );

  seqTL.add( setPolygon("#q8") );


  return seqTL;

}

function fadeSquares3() {

  var seqTL = new TimelineMax();

  var set = [
    "#s_2",
    "#t_2",
    "#m_3",
    "#n_3",
    "#c_3",
    "#f_3",
    "#g_3",
    "#p_3",
    "#q_3",

  ];

  seqTL.add( hideElements("#q8") );

  seqTL.add( unSelectElements( "#c_3" ) );
  seqTL.add( fadeElements( set ) );

  return seqTL;

}

function hexagon() {

  var seqTL = new TimelineMax();

  seqTL.add( setPoint("#M_1") );
  seqTL.add( setPoint("#N_1") );
  //
  //
  seqTL.add( drawCircle("#d_3" ) );
  seqTL.add( drawCircle("#s_3" ) );
  //
  //
  seqTL.add( drawLine( "#f_4" ) );

  // seqTL.add( orientCircle("#c_3", "30") );
  seqTL.add( drawCircle("#r_3", "#f_4") );
  // seqTL.add( orientCircle("#c_3", "0") );
  seqTL.add( selectElements("#r_3") );

  seqTL.add( eraseLine("#f_4") );
  //

  seqTL.add( setPolygon("#poly1") );


  return seqTL;

}



function baseSequence() {

  var seqTL = new TimelineMax();

  // seqTL.add( zoomToElement(["#b","#c"], 100) );

  //build sequence
  seqTL.add( setPoint("#A") );
  seqTL.add( highlightPoint("#A") );

  seqTL.add( setPoint("#B") );
  seqTL.add( highlightPoint("#B") );

  seqTL.add( drawLine("#a") );

  // // tl.addPause("baseline");

  seqTL.add( drawLine("#q1") );

  seqTL.add( drawCircle("#b", "#q1") ); //vesica piseces
  seqTL.add( eraseLine("#q1") );
  seqTL.add( setPoint("#C") );
  seqTL.add( highlightPoint("#C") );


  seqTL.add( drawLineReverse("#q1") );
  seqTL.add( orientCircle("#c", "180") );
  seqTL.add( drawCircle("#c", "#q1") );
  seqTL.add( orientCircle("#c", "0") );
  seqTL.add( eraseLine("#q1") );

  seqTL.add( unHighlightPoint("#C") );
  seqTL.add( setPoint("#D") );
  seqTL.add( highlightPoint("#D") );

  seqTL.add( unHighlightPoint(["#D", "#A", "#B"]), "+=.5");
  seqTL.add( setPoint(["#E", "#F"]) );
  seqTL.add( highlightPoint(["#E", "#F"]) );

  seqTL.add( drawLine("#d") );

  seqTL.add( unHighlightPoint(["#E", "#F"]), "+=.5" );
  seqTL.add( setPoint("#G") );
  seqTL.add( highlightPoint("#G") );

  // seqTL.add( drawLine("#q3") );
  // seqTL.add( eraseLine("#q3") );


  var set = [
    "#a",
    "#b",
    "#c",
    "#d",
  ];

  seqTL.add( fadeElements( set ) );
  seqTL.add( unHighlightPoint("#G"), "+=2" );

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
