
// var tlMenu = new TimelineMax();
//
// //move menu on screen
// tlMenu.from("#menu", 1.5, {autoAlpha: 0, left: -300});
// tlMenu.pause();


/* --- Control playback methods --- */

// $("#play").click(function() {
//     tl.play();
// });
//
// $("#reverse").click(function() {
//     tl.reverse();
// });
//
// $("#resume").click(function() {
//     tl.resume();
// });
//
// $("#pos1").click(function() {
//     tl.play("pos1");
// });
//
// $("#pos2").click(function() {
//     tl.play("pos2");
// });
//
// $("#pos3").click(function() {
//     tl.play("pos3");
// });
//
// $("#restart").click(function() {
//     tl.restart();
// });


// set up slider
//when the timeline updates, call the updateSlider function

// $("#slider").slider({
//     range: false,
//     min: 0,
//     max: 100,
//     step: .1,
//     slide: function(event, ui) {
//         tl.pause();
//         //adjust the timeline's progress() based on slider value
//         tl.progress(ui.value / 100);
//     }
// });
//
// function updateSlider() {
//     $("#slider").slider("value", tl.progress() * 100);
// }


//// key mapping


function keyPressCheck(e) {
  console.log("Key: " + e.which);
    switch (e.which) {
        case 13: //enter
            toggleAnimation();
            break;
        case 32: //space
            //togle play
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
          TL.seek( TL.getLabelBefore() );
          break;
        case 39: //right arrow
          TL.seek( TL.getLabelAfter() );
          break;

    }
}

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
