const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();

// Scene 1
const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

// Text Animation
const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0})

// Scene 2
let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

// Video Player
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
})

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    console.log(scrollPos, delay)

    video.currentTime = scrollPos;
}, 33.3)