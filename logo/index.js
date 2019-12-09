var TL = new TimelineMax();;

const BPM = 240;
const BEAT = 60/BPM;

main();

function main() {

  document.addEventListener("keydown", keyPressCheck, false);

  TL.add(baseSequence());

  TL.addLabel("root3")
  TL.add(root3grid(), "root3");
  showGolden("g01");
  TL.add(hideConstruction(), "+=" + (BEAT * 4) );

  // TL.timeScale(4);

  var duration = TL.duration();
  console.log("duration: " + duration)

  TL.add(metronome(duration), 0);

  // TL.pause("g01");
  TL.play("");

}

function metronome(duration) {

  var seqTL = new TimelineMax({
    repeat: Math.floor(duration / BEAT)
  });

  seqTL.call(tick, [], this, BEAT);

  return seqTL;

}

function baseSequence() {

  var seqTL = new TimelineMax();

  // point A
  seqTL.add(setPoint("#A"), "init");
  seqTL.add(setPoint("#B"), "init");

  // line a
  seqTL.add(constructLine("#a", ["#A", "#B"]));

  // circle b
  seqTL.add(constructCircle("#b", "#sAB", ["#A", "#B"], "0", false), "vesica");

  // circle c
  seqTL.add(constructCircle("#c", "#sBA", ["#A", "#B"], "180", false), "vesica");

  var set = [ "#b", "#c", ];

  seqTL.add(fadeElements(set, 0));

  return seqTL;

}


function root3grid() {

  var seqTL = new TimelineMax();

  //first triangle
  seqTL.add(constructLine("#f", ["#A", "#E"]), "lines");
  seqTL.add(constructLine("#g", ["#B", "#E"]), "lines");

  //second triangle
  seqTL.add(constructLine("#h", ["#A", "#F"], true), "lines");
  seqTL.add(constructLine("#i", ["#B", "#F"], true), "lines");

  seqTL.add(constructLine("#k", ["#I", "#K"]), "triangle");

  seqTL.add(constructPolygon("#t3", ["#E", "#I", "#K"]), "triangle");

  // line d
  seqTL.add(constructLine("#m_1", ["#E", "#F"]), "medians");
  seqTL.add(constructLine("#m_2", ["#B", "#I"], true), "medians");
  seqTL.add(constructLine("#m_3", ["#A", "#K"]), "medians");

  seqTL.add(constructCircle("#e", "#m", ["#H", "#E"], "-90", true));
  seqTL.add(selectElements("#e"), "+=" + BEAT);

  var set = [ "#m_1", "#m_2", "#m_3"];

  seqTL.add(fadeElements(set, 0));

  return seqTL;

}

function hideConstruction() {

  var seqTL = new TimelineMax();
  var set = [
    "#a",
    "#b",
    "#c",
    "#f",
    "#g",
    "#h",
    "#i",
    "#k",
    "#l",
    "#m_1",
    "#m_2",
    "#m_3",
    "#H",
  ];

  seqTL.add(hideElements(set));

  return seqTL;
}


function showGolden(label) {

  TL.add(g01(), "+=" + BEAT);
  TL.addLabel(label);
  // TL.add(g01remove(), "+=" + BEAT * 4);

}

function g01() {

  var seqTL = new TimelineMax();

  var set = [
    "#A",
    "#B",
    "#F",
  ];

  seqTL.add(setPoint(set));
  seqTL.add(highlightPoint(set));
  seqTL.add(setGolden(set))

  // var set = [
  //   "#g0101b`",
  //   "#g0101a_1",
  //   "#g0101a_2",
  // ];
  //
  // seqTL.add(setGolden(set))

  seqTL.add(drawLineCenter("#g0101b"), "b");
  seqTL.add(drawLineCenter("#g0102b"), "b");
  seqTL.add(drawLineCenter("#g0103b"), "b");

  var set = [
    "#L",
    "#N",
    "#O",
    "#P",
    "#Q",
    "#R",
  ];

  seqTL.add(setPoint(set));
  seqTL.add(highlightPoint(set));
  seqTL.add(setGolden(set))

  seqTL.add(drawLine("#g0101a_2"), "a");
  seqTL.add(drawLine("#g0101a_1"), "a");
  seqTL.add(drawLine("#g0102a_2"), "a");
  seqTL.add(drawLine("#g0102a_1"), "a");
  seqTL.add(drawLine("#g0103a_2"), "a");
  seqTL.add(drawLine("#g0103a_1"), "a");

  return seqTL;
}
