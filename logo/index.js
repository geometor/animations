var TL = new TimelineMax();;

main();

function main() {


  document.addEventListener("keydown", keyPressCheck, false);
  // TL.eventCallback("onUpdate", updateSlider);

  // TL.add(zoomToElement(["#e"], 100), 0);

  TL.add(baseSequence(), 3);

  TL.addLabel("root3")
  TL.add(root3grid());
  showGolden("g01");
  // TL.add(fadeRoot3(), "+=" + BEAT);

  TL.timeScale(2);
  var duration = TL.duration();

  console.log("duration: " + duration)

  // TL.add(metronome(duration), 0);

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


function metronome(duration) {

  var seqTL = new TimelineMax({
    repeat: Math.floor(duration)
  });

  seqTL.call(tick, [], this, BEAT);

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
  seqTL.add(constructCircle("#b", "#sAB", ["#A", "#B"], "0", false));

  // circle c
  seqTL.add(constructCircle("#c", "#sBA", ["#A", "#B"], "180", false), "-=" + (BEAT * 4));

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

  // var set = [
  //   "#g0101b`",
  //   "#g0101a_1",
  //   "#g0101a_2",
  // ];
  //
  // seqTL.add(setGolden(set))

  seqTL.add(drawLine("#g0101b"), "b");
  seqTL.add(drawLine("#g0102b"), "b");
  seqTL.add(drawLine("#g0103b"), "b");

  seqTL.add(drawLine("#g0101a_2"), "a");
  seqTL.add(drawLine("#g0101a_1"), "a");
  seqTL.add(drawLine("#g0102a_2"), "a");
  seqTL.add(drawLine("#g0102a_1"), "a");
  seqTL.add(drawLine("#g0103a_2"), "a");
  seqTL.add(drawLine("#g0103a_1"), "a");

  return seqTL;
}
