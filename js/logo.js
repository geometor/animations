var tl = new TimelineMax();

// //create a synth and connect it to the master output (your speakers)
// var synth = new Tone.Synth().toMaster()
//
// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease('C4', '1n')

tl.set( $('.logo'), {
    autoAlpha: 0,
}, "0");

// tl.addPause("wait");

animateLogo();

// tl.addPause("logoEnd");

// hideElements(".logo");

tl.staggerTo(
    ".logo",
    1, {
        autoAlpha: 0,
        fillOpacity: 0,
    }, .1
);

tl.delay(1).timeScale(1).play();

// tl.play();
// tl.tweenFromTo( fromThisLabel, toThisLabel );

function animateLogo() {


    drawLine(".logo.G");
    drawLine(".logo.E");
    drawLine(".logo.O");
    drawLine(".logo.M");
    drawLine(".logo.E2");
    drawLine(".logo.T");
    drawLine(".logo.O2");
    drawLine(".logo.R");


}
