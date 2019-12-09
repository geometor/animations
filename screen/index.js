var TL = gsap.timeline();;

const title1 = "THANK YOU";
const youtube = "UCHw7yqZJDQ0A6WkAlxGKLeg";
const message = "We stand atop<br>the shoulders of giants,<br>so we may one day<br>reach the stars";

main();


function main() {

  // document.addEventListener("keydown", keyPressCheck, false);

  TL.add(baseSequence(message));


  TL.timeScale(.5);
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
    params,
    .5
  )

  return seqTL;

}
