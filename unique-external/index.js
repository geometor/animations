var TL = new TimelineMax();;

const BPM = 240;
const BEAT = 60/BPM;

main();

function main() {

  console.log("main start");

  document.addEventListener("keydown", keyPressCheck, false);
  // TL.eventCallback("onUpdate", updateSlider);

  TL.add(setLines("#g0101a_2"));
  TL.add(setLines("#g0101a_1"));
  TL.add(hideElements("#g0101a_2"));
  TL.add(hideElements("#g0101a_1"));

  TL.add(zoomToElement(["#r", "#s"], 100), 0);

  TL.add(baseSequence(), 3);

  TL.addLabel("root3")
  TL.add(root3grid());
  showGolden("g01");
  TL.add(fadeRoot3(), "+=" + BEAT);

  TL.addLabel("root5");
  TL.add(root5grid());
  showGolden("g01-b");
  TL.add(fadeRoot5(), "+=" + BEAT);

  TL.addLabel("root2");
  TL.add(root2grid());
  showGolden("g01-c");
  TL.add(fadeRoot2(), "+=" + BEAT);

  TL.addLabel("squares");
  TL.add(squares());
  showGolden("g01-d");
  TL.add(fadeSquares(), "+=" + BEAT);

  TL.addLabel("squares3");
  TL.add(squares3(),);
  showGolden("g01-e");
  TL.add(fadeSquares3(), "+=" + BEAT);

  TL.addLabel("hexagon");
  TL.add(hexagon());
  showGolden("g01-f");
  TL.add(fadeHexagon(), "+=" + BEAT);

  TL.addLabel("circumTriangle");
  TL.add(circumTriangle());
  showGolden("g01-g");
  TL.add(fadeCircumTriangle(), "+=" + BEAT);

  TL.add(g01(), "+=" + BEAT * 2);

  TL.addLabel("review1");
  TL.add(review1());

  // TL.addLabel("review2");
  // TL.add(review2());

  // TL.addLabel("review3");
  // TL.add(review3());

  TL.timeScale(1);
  var duration = TL.duration();

  console.log("duration: " + duration)

  TL.add(metronome(duration), 0);

  // TL.pause("g01");
  TL.play("");

}

//template
function sequence() {

  var seqTL = new TimelineMax();

  seqTL.add(selectElements("#e"));

  seqTL.add(unSelectElements("#e"));

  return seqTL;

}

function showGolden(label) {

  TL.add(g01(), "+=" + BEAT);
  TL.addLabel(label);
  TL.add(g01remove(), "+=" + BEAT * 4);

}

function metronome(duration) {

  var seqTL = new TimelineMax({
    repeat: Math.floor(duration)
  });

  seqTL.call(tick, [], this, BEAT);

  return seqTL;

}

function review1seq(poly, circle, polyPoints) {

  var seqTL = new TimelineMax();

  seqTL.add(review1show(poly, circle, polyPoints));
  seqTL.add(review1hide(poly, circle), "+=" + BEAT * 4);

  return seqTL;

}

function review1show(poly, circle, polyPoints) {

  var seqTL = new TimelineMax();

  seqTL.add(constructPolygon(poly, polyPoints));

  // seqTL.add(unFadeElements(circle), "+=" + BEAT);
  // seqTL.add(selectElements(circle), "-=" + BEAT);
  //
  seqTL.add(unFadeElements(circle), "+=" + BEAT);
  seqTL.add(selectElements(circle), "+=" + BEAT);

  return seqTL;
}
function review1hide(poly, circle) {

  var seqTL = new TimelineMax();

  seqTL.add(hideElements(poly));
  seqTL.add(unSelectElements(circle), "+=" + BEAT);
  seqTL.add(fadeElements(circle), "+=" + BEAT);

  return seqTL;
}

function review1() {

  var seqTL = new TimelineMax();

  // root3
  seqTL.add(review1seq("#t3", "#e", ["#E", "#I", "#K"]));

  // root5
  seqTL.add(review1seq(["#q2", "#q4"], "#c_1", ["#S", "#T", "#U", "#V"]));

  //root2
  seqTL.add(review1seq(["#q5"], "#d_2", ["#A_1", "#W", "#D_1", "#Z"]));

  // squares
  seqTL.add(review1seq(["#q6", "#q7"], "#c_2", ["#F_1", "#E_1", "#B", "#E", "#C_1", "#G_1", "#A", "#E"]));

  // squares3
  seqTL.add(review1seq(["#q8"], "#c_3", ["#J_1", "#K_1", "#L_1", "#I_1"]));

  // hexagon
  seqTL.add(review1seq(["#poly1"], "#r_3", ["#M_1", "#N_1", "#H", "#O_1"]));

  // circumTriangle
  seqTL.add(review1seq(["#t4"], "#d_4", ["#C_2", "#L", "#D_2"]));

  return seqTL;

}

function review2() {

    var seqTL = new TimelineMax();

    //show all
    seqTL.add(selectElements("#e"), "+=" + BEAT * 2);
    seqTL.add(selectElements("#c_1"), "+=" + BEAT * 2);
    seqTL.add(selectElements("#d_2"), "+=" + BEAT * 2);
    seqTL.add(selectElements("#c_2"), "+=" + BEAT * 2);
    seqTL.add(selectElements("#d_4"), "+=" + BEAT * 2);
    seqTL.add(selectElements("#r_3"), "+=" + BEAT * 2);

    //remove all
    seqTL.add(unSelectElements("#r_3"));
    seqTL.add(unSelectElements("#d_4"));
    seqTL.add(unSelectElements("#c_2"));
    seqTL.add(unSelectElements("#d_2"));
    seqTL.add(unSelectElements("#c_1"));
    seqTL.add(unSelectElements("#e"));

    return seqTL;

}

function review3() {

  var seqTL = new TimelineMax();

  // root 3
  seqTL.add(selectElements("#e"), "+=2");

  seqTL.add(zoomToElement(["#e"], 50));
  seqTL.add(setPolygon("#t3"));

  // root 5
  seqTL.add(selectElements("#c_1"), "+=4");

  seqTL.add(unSelectElements("#e"));
  seqTL.add(hideElements("#t3"));
  seqTL.add(zoomToElement(["#c_1"], 50));

  seqTL.add(setPolygon("#q2"));
  seqTL.add(setPolygon("#q4"));

  // root 2
  seqTL.add(selectElements("#d_2"), "+=4");

  seqTL.add(unSelectElements("#c_1"));
  seqTL.add(hideElements("#q2"));
  seqTL.add(hideElements("#q4"));
  seqTL.add(zoomToElement(["#d_2"], 50));
  seqTL.add(setPolygon("#q5"));

  // squares
  seqTL.add(selectElements("#c_2"), "+=4");
  seqTL.add(zoomToElement(["#c_2"], 50));
  seqTL.add(setPolygon("#q6"));
  seqTL.add(setPolygon("#q7"));

  seqTL.add(unSelectElements("#d_2"));
  seqTL.add(hideElements("#q5"));

  //hexagon
  seqTL.add(selectElements("#r_3"), "+=4");
  seqTL.add(zoomToElement(["#r_3"], 50))
  seqTL.add(setPolygon("#poly1"));

  seqTL.add(unSelectElements("#c_2"));
  seqTL.add(hideElements("#q6"));
  seqTL.add(hideElements("#q7"));

  // circumtriangle
  seqTL.add(selectElements("#d_4"), "+=4");
  seqTL.add(zoomToElement(["#d_4"], 50));
  seqTL.add(setPolygon("#t4"));

  seqTL.add(unSelectElements("#r_3"));
  seqTL.add(hideElements("#poly1"));


  return seqTL;

}



function root3grid() {

  var seqTL = new TimelineMax();

  seqTL.add(constructLine("#f", ["#A", "#E"]));
  seqTL.add(constructLine("#g", ["#B", "#E"]));

  seqTL.add(constructPolygon("#t1", ["#A", "#B", "#E"]));

  seqTL.add(constructLine("#h", ["#A", "#F"]));
  seqTL.add(constructLine("#i", ["#B", "#F"]));

  seqTL.add(constructPolygon("#t2", ["#A", "#B", "#F"]));

  seqTL.add(constructLine("#j", ["#M", "#J"]));
  seqTL.add(constructLine("#k", ["#I", "#K"]));

  seqTL.add(hideElements(["#t1", "#t2"]));

  seqTL.add(constructPolygon("#t3", ["#E", "#I", "#K"]));

  seqTL.add(constructLine("#h_2", ["#B", "#I"]));
  seqTL.add(constructLine("#l", ["#A", "#K"]));

  seqTL.add(constructCircle("#e", "#m", ["#H", "#K"], "30", true));
  seqTL.add(selectElements("#e"), "+=" + BEAT);

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

  seqTL.add(hideElements("#t3"));
  seqTL.add(unSelectElements("#e"));
  seqTL.add(fadeElements(set));

  return seqTL;
}

function g01() {

  var seqTL = new TimelineMax();
  // var set = [
  //   "#N",
  //   "#L",
  //   "#A",
  //   "#B",
  //   "#C",
  //   "#D",
  // ];

  var set = [
    "#A",
    "#B",
    "#N",
    "#L",
  ];

  seqTL.add(setPoint(set));
  seqTL.add(highlightPoint(set));
  seqTL.add(setGolden(set))

  var set = [
    "#g0101c",
    "#g0101b_1",
    "#g0101b_2",
    // "#g0101a_1",
    // "#g0101a_2",
  ];

  seqTL.add(setGolden(set))

  seqTL.add(drawLine("#g0101c"));
  seqTL.add(drawLine("#g0101b_2"));
  seqTL.add(drawLine("#g0101b_1"), "-=1");
  // seqTL.add(drawLine("#g0101a_2"));
  // seqTL.add(drawLine("#g0101a_1"), "-=1");

  return seqTL;
}

function g01remove() {

  var seqTL = new TimelineMax();
  var set = [
    "#N",
    "#L",
    "#A",
    "#B",
    // "#C",
    // "#D",
  ];

  seqTL.add(unSetGolden(set))
  seqTL.add(unHighlightPoint(set));

  var set = [
    "#g0101c",
    "#g0101b_1",
    "#g0101b_2",
    // "#g0101a_1",
    // "#g0101a_2",
  ];

  seqTL.add(unSetGolden(set))

  // seqTL.add(eraseLine("#g0101a_2"));
  // seqTL.add(eraseLine("#g0101a_1"), "-=1");

  seqTL.add(eraseLine("#g0101b_2"));
  seqTL.add(eraseLine("#g0101b_1"), "-=" + BEAT);

  seqTL.add(eraseLine("#g0101c"));

  return seqTL;
}

function root5grid() {

  var seqTL = new TimelineMax();

  seqTL.add(constructCircle("#p", "#n_1", ["#B", "#C"], "180", true));

  seqTL.add(constructCircle("#r", "#n_1", ["#B", "#C"], "0"));

  seqTL.add(constructCircle("#q", "#p_1", ["#A", "#D"], "0", true));

  seqTL.add(constructCircle("#s", "#p_1", ["#A", "#D"], "180"));

  seqTL.add(constructLine("#n", ["#O", "#P"]));

  seqTL.add(constructLine("#t", ["#R", "#Q"]));

  seqTL.add(constructLine("#g_1", ["#S", "#U"]));

  seqTL.add(constructLine("#h_1", ["#T", "#V"]));

  seqTL.add(constructPolygon("#q2", ["#A", "#B", "#S", "#U"]));
  seqTL.add(constructPolygon("#q4", ["#A", "#B", "#T", "#V"]), "-=" + BEAT * 3);

  seqTL.add(constructLine("#l_1", ["#S", "#V"]));
  seqTL.add(constructLine("#j_1", ["#T", "#U"]));

  seqTL.add(constructCircle("#c_1", "#m_1", ["#G", "#U"], "-62.5", true));
  seqTL.add(selectElements("#c_1"));

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

  seqTL.add(hideElements(["#q2", "#q4"]));

  seqTL.add(unSelectElements("#c_1"));

  seqTL.add(fadeElements(set));

  return seqTL;

}


function root2grid() {

  var seqTL = new TimelineMax();

  seqTL.add(constructLine("#q_1", ["#A", "#U"]));

  seqTL.add(constructLine("#r_1", ["#B", "#S"]));

  seqTL.add(constructPolygon("#q5", ["#A_1", "#W", "#D_1", "#Z"]));

  seqTL.add(constructCircle("#d_2", "#d_1", ["#B_1", "#Z"], "0", true ));
  seqTL.add(selectElements("#d_2") );

  return seqTL;

}

function fadeRoot2() {

  var seqTL = new TimelineMax();

  var set = [
    "#q_1",
    "#r_1",
    "#d_2",
  ];

  seqTL.add(hideElements("#q5"));

  seqTL.add(unSelectElements("#d_2"));
  seqTL.add(fadeElements(set));

  return seqTL;

}

function squares() {

  var seqTL = new TimelineMax();

  seqTL.add(unFadeElements(["#b", "#c", "#f", "#g", "#l", "#h_2"]));
  // seqTL.add(unFadeElements([]));
  // seqTL.add(unFadeElements(["#l", "#h_2"]));

  seqTL.add(constructLine("#i_2", ["#C", "#E"]), "+=" + BEAT);
  seqTL.add(constructLine("#j_2", ["#D", "#E"]));

  seqTL.add(constructPolygon("#q6", ["#F_1", "#E_1", "#B", "#E"]));
  seqTL.add(constructPolygon("#q7", ["#C_1", "#G_1", "#A", "#E"]), "-=" + BEAT * 3);

  seqTL.add(constructLine("#p_2", ["#E_1", "#E"]));
  seqTL.add(constructLine("#q_2", ["#G_1", "#E"]));

  seqTL.add(constructCircle("#c_2", "#r_2", ["#E", "#E_1"], "11", true));
  seqTL.add(fadeElements(["#b", "#c", "#f", "#g", "#p_2", "#q_2", "#i_2", "#j_2", "#l", "#h_2"]), "+=" + BEAT);
  seqTL.add(selectElements("#c_2") );

  // seqTL.set("", {"":""}, "+=" + BEAT);

  return seqTL;

}

function fadeSquares() {

  var seqTL = new TimelineMax();

  var set = [
    "#i_2",
    "#j_2",
    "#c_2",

  ];

  seqTL.add(hideElements(["#q6", "#q7"]));

  seqTL.add(unSelectElements("#c_2"));
  seqTL.add(fadeElements(set));

  return seqTL;

}

function squares3() {

  var seqTL = new TimelineMax();

  seqTL.add(constructLine("#s_2", ["#T", "#B"]));

  seqTL.add(constructLine("#t_2", ["#A", "#V"]));

  seqTL.add(constructLine("#m_3", ["#W", "#D"]));

  seqTL.add(constructLine("#n_3", ["#Z", "#C"]));

  seqTL.add(constructCircle("#c_3", "#h_3", ["#H_1", "#D"], "-17", true));

  seqTL.add(constructLine("#f_3", ["#J_1", "#K_1"]));

  seqTL.add(constructLine("#g_3", ["#L_1", "#I_1"]), "-=" + BEAT * 2);

  seqTL.add(constructLine("#p_3", ["#J_1", "#L_1"]));

  seqTL.add(constructLine("#q_3", ["#K_1", "#I_1"]), "-=" + BEAT * 2);

  seqTL.add(constructPolygon("#q8", ["#J_1", "#K_1", "#L_1", "#I_1"]));

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

  seqTL.add(hideElements("#q8"));

  seqTL.add(unSelectElements("#c_3"));
  seqTL.add(fadeElements(set));

  return seqTL;

}

function hexagon() {

  var seqTL = new TimelineMax();

  seqTL.add(constructCircle("#d_3", "", ["#M_1", "#H"], "30", true));

  seqTL.add(constructCircle("#s_3", "", ["#N_1", "#H"], "150", true));

  seqTL.add(constructCircle("#r_3", "#f_4", ["#P_1", "#N_1"], "30", true));

  seqTL.add(constructPolygon("#poly1", ["#M_1", "#N_1", "#H", "#O_1"]));

  seqTL.add(selectElements("#r_3"));

  return seqTL;

}

function fadeHexagon() {

  var seqTL = new TimelineMax();

  var set = [
    "#d_3",
    "#s_3",
    "#r_3",

  ];

  seqTL.add(hideElements("#poly1"));

  seqTL.add(unSelectElements("#r_3"));
  seqTL.add(fadeElements(set));

  return seqTL;

}

function circumTriangle() {

  var seqTL = new TimelineMax();

  seqTL.add(constructPolygon("#t1", ["#A", "#B", "#E"]));

  seqTL.add(constructLine("#m_4", ["#B", "#J"]));

  seqTL.add(constructLine("#n_4", ["#A", "#M"]));

  // seqTL.add(setPoint("#S_1"));

  seqTL.add(constructCircle("#c_4", "#p_4", ["#S_1", "#B"], "30", true));

  seqTL.add(constructCircle("#d_4", "#q_4", ["#S_1", "#M"], "-30", true), "circle");

  seqTL.add(setPoint("#E_2"), "circle");
  seqTL.add(setPoint("#B_2"), "circle");
1
  seqTL.add(constructPolygon("#t4", ["#C_2", "#L", "#D_2"]));

  return seqTL;

}

function fadeCircumTriangle() {

  var seqTL = new TimelineMax();

  var set = [
    "#c_4",
    "#d_4",
    "#m_4",
    "#n_4",

  ];

  seqTL.add(hideElements("#t1"));
  seqTL.add(hideElements("#t4"));

  seqTL.add(unSelectElements("#c_4"));
  seqTL.add(unSelectElements("#d_4"));
  seqTL.add(fadeElements(set));

  return seqTL;

}


function baseSequence() {

  var seqTL = new TimelineMax();

  // point A
  seqTL.add(setPoint("#A"));
  seqTL.add(setPoint("#B"));

  seqTL.add(highlightPoint(["#A", "#B"]), "+=" + BEAT);

  // line a
  seqTL.add(drawLine("#a"));

  // circle b
  seqTL.add(constructCircle("#b", "#q1", ["#A", "#B"], "0", true));

  // circle c
  seqTL.add(constructCircle("#c", "#q1", ["#A", "#B"], "180", false));

  // new points on baseline
  seqTL.add(setPoint(["#C", "#D"]));
  seqTL.add(highlightPoint(["#C", "#D"]));

  // new points on bisector
  seqTL.add(setPoint(["#E", "#F"]));
  seqTL.add(highlightPoint(["#E", "#F"]));
  seqTL.add(unHighlightPoint(["#C", "#D"]));

  // line d
  seqTL.add(drawLine("#d"));

  seqTL.add(unHighlightPoint(["#E", "#F"]));
  seqTL.add(setPoint("#G"));
  seqTL.add(highlightPoint("#G"));

  var set = [
    "#a",
    "#b",
    "#c",
    "#d",
  ];

  seqTL.add(fadeElements(set), "+=" + BEAT * 2);
  seqTL.add(unHighlightPoint("#G"), "-=" + BEAT * 2);

  return seqTL;

}
