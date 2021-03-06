
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

  if (e.ctrlKey) {

    console.log('Control Down');
    switch (e.which) {
    }

  } else {

    switch (e.which) {
        case 13: //enter
        case 32: //space
            toggleAnimation();
            break;
        case 77:
        case 109: //M
          toggleMenu();
          break;
        case 38, 48: //up arrow, 0
          TL.progress(0);
          break;
        case 75: //k - one beat back
          var ts = TL.time()-BEAT; 
          TL.seek( ts );
          console.log(ts);
          tick();
          break;
        case 74: //j - one beat forward
          // var ts = Math.floor(TL.time())+BEAT; 
          var ts = TL.time()+BEAT; 
          TL.seek( ts );
          console.log(ts);
          tick();
          break;
        case 37, 72: //left arrow, h - prev label
          var label = TL.getLabelBefore()
          console.log(label);
          TL.seek( label );
          tick();
          break;
        case 39, 76: //right arrow, l - next label
          var label = TL.getLabelAfter()
          console.log(label);
          TL.seek( label );
          tick();
          break;
    }
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

var beatsPerMeasure = 4;
var time = document.getElementById("time");
var beats = document.getElementById("beats");

function tick() {
  ticks = TL.time() / BEAT;
  measure = Math.floor(ticks/beatsPerMeasure);
  index = Math.floor(ticks % beatsPerMeasure);
  time.innerHTML = measure ;
  for (i = 0; i < beats.children.length; i++) {
    beats.children[i].classList.remove("select");
  }
  beats.children[index].classList.add("select")
}
