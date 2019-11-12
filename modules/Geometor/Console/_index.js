export * as Metronome from "./metronome.js"
export * as Controls from "./play_controls.js"



// var tlMenu = new TimelineMax();
//
// //move menu on screen
// tlMenu.from("#menu", 1.5, {autoAlpha: 0, left: -300});
// tlMenu.pause();

//// key mapping



function toggleMenu() {
  console.log( tlMenu.progress() );
  if (tlMenu.progress()){
    tlMenu.reverse();
  }else{
    tlMenu.play();
  }
}

function toggleAnimation() {
  TL.paused(!TL.paused());
}



export function keyPressCheck(e) {
  console.log("Key: " + e.which);

  if (e.ctrlKey) {

    console.log('Control Down');
    switch (e.which) {
        case 37: //left arrow
          TL.seek( Math.floor(TL.time())-1 );
          tick();
          break;
        case 39: //right arrow
          TL.seek( Math.floor(TL.time())+1 );
          tick();
          break;
    }

  } else {

    switch (e.which) {
        case 13: //enter
            toggleAnimation();
            break;
        case 32: //space
            toggleAnimation();
            break;
        case 77:
        case 109: //M
          toggleMenu();
          break;
        case 38: //up arrow
          TL.progress(0);
          break;
        case 37: //left arrow
          var label = TL.getLabelBefore()
          console.log(label);
          TL.seek( label );
          tick();
          break;
        case 39: //right arrow
          var label = TL.getLabelAfter()
          console.log(label);
          TL.seek( label );
          tick();
          break;
    }
  }

}
