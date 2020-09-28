import * as G from  "../modules/Geometor/_index.js"

var TL = new TimelineMax();;

main();

function main() {

  // var saveButton = document.querySelector(".save");
  // saveButton.addEventListener("click", downloadSVG, false);
  document.querySelector("#save").onclick = downloadSVG;


  G.Console.set(TL)

  // TL.add(baseSequence(), "base");

  // TL.add(root3grid(), "root3");
  // showGolden("g01");
  // TL.add(hideConstruction(), "+=" + (G.Draw.BEAT * 4) );

  // TL.timeScale(2);

  // TL.add(G.Console.Metronome.set(TL), 0);

  // TL.pause("g01");
  TL.play("");

}


function downloadSVG() {

  var svg = document.querySelector("svg");

  G.Save.saveSvg(svg, "logo")

}



function baseSequence() {

  var seqTL = new TimelineMax();

  // point A
  seqTL.add(G.Draw.Points.set("#A"), "init");
  seqTL.add(G.Draw.Points.set("#B"), "init");

  // line a
  seqTL.add(G.Draw.constructLine("#a", ["#A", "#B"]));

  // circle b abd c
  seqTL.add(G.Draw.constructCircle("#b", "#sAB", ["#A", "#B"], "0", false), "vesica");
  seqTL.add(G.Draw.constructCircle("#c", "#sBA", ["#A", "#B"], "180", false), "vesica");

  var set = [ "#b", "#c", ];

  seqTL.add(G.Draw.fade(set, 0));

  return seqTL;

}


function root3grid() {

  var seqTL = new TimelineMax();

  //first triangle
  seqTL.add(G.Draw.constructLine("#f", ["#A", "#E"]), "lines");
  seqTL.add(G.Draw.constructLine("#g", ["#B", "#E"]), "lines");

  //second triangle
  seqTL.add(G.Draw.constructLine("#h", ["#A", "#F"], true), "lines");
  seqTL.add(G.Draw.constructLine("#i", ["#B", "#F"], true), "lines");

  seqTL.add(G.Draw.constructLine("#k", ["#I", "#K"]), "triangle");

  seqTL.add(G.Draw.constructPolygon("#t3", ["#E", "#I", "#K"]), "triangle");

  // line d
  seqTL.add(G.Draw.constructLine("#m_1", ["#E", "#F"]), "medians");
  seqTL.add(G.Draw.constructLine("#m_2", ["#B", "#I"], true), "medians");
  seqTL.add(G.Draw.constructLine("#m_3", ["#A", "#K"]), "medians");

  seqTL.add(G.Draw.constructCircle("#e", "#m", ["#H", "#E"], "-90", true));
  seqTL.add(G.Draw.select("#e"), "+=" + G.Draw.BEAT);

  var set = [ "#m_1", "#m_2", "#m_3"];

  seqTL.add(G.Draw.fade(set, 0));

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

  seqTL.add(G.Draw.hide(set));

  return seqTL;
}


function showGolden(label) {

  TL.add(g01(), "+=" + G.Draw.BEAT);
  TL.addLabel(label);
  // TL.add(g01remove(), "+=" + G.Draw.BEAT * 4);

}

function g01() {

  var seqTL = new TimelineMax();

  var set = [
    "#A",
    "#B",
    "#F",
  ];

  seqTL.add(G.Draw.Points.set(set));
  seqTL.add(G.Draw.Points.highlight(set));
  seqTL.add(G.Draw.setGolden(set))

  seqTL.add(G.Draw.Lines.drawFromCenter("#g0101b"), "b");
  seqTL.add(G.Draw.Lines.drawFromCenter("#g0102b"), "b");
  seqTL.add(G.Draw.Lines.drawFromCenter("#g0103b"), "b");

  var set = [
    "#L",
    "#N",
    "#O",
    "#P",
    "#Q",
    "#R",
  ];

  seqTL.add(G.Draw.Points.set(set));
  seqTL.add(G.Draw.Points.highlight(set));
  seqTL.add(G.Draw.setGolden(set))

  seqTL.add(G.Draw.Lines.draw("#g0101a_2"), "a");
  seqTL.add(G.Draw.Lines.draw("#g0101a_1"), "a");
  seqTL.add(G.Draw.Lines.draw("#g0102a_2"), "a");
  seqTL.add(G.Draw.Lines.draw("#g0102a_1"), "a");
  seqTL.add(G.Draw.Lines.draw("#g0103a_2"), "a");
  seqTL.add(G.Draw.Lines.draw("#g0103a_1"), "a");

  return seqTL;
}
