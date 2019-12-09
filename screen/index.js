var TL = gsap.timeline();;

const thankYou = "THANK YOU";
const geometor = "GEOMETOR";
const youtube = "UCHw7y<br>qZJDQ0<br>A6WkAl<br>xGKLeg";
const message = "We stand atop<br>the shoulders of giants,<br>so we may one day<br>reach the stars";
const goForth = "Go Forth<br>&<br>Make Things!"
main();


function main() {

  // document.addEventListener("keydown", keyPressCheck, false);

  TL.add(baseSequence(goForth), 1);
  TL.add(baseSequence(""), "+=6");


  // TL.timeScale(.5);
  var duration = TL.duration();

  console.log("duration: " + duration)

  TL.play("");

}


function baseSequence(title) {

  var seqTL = gsap.timeline();

  var params = {}
  params.text = title;

  seqTL.to(
    ".screen > h1",
    1,
    params
  )

  return seqTL;

}
