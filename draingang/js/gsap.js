const hero = document.querySelector('.s1');
const slider = document.querySelector('.header_logo');
const headline = document.querySelector('.header_main-title');
const slide = document.querySelector('header_main-slide');
const project = document.querySelector('.header_main-see');

const tl = new TimelineMax();

tl.fromTo(hero, 0.3, {height: "50%"}, {height: "100%", ease: Power2.easeInOut})
.fromTo(hero, 0.4, {width: '100%'}, {width: '100%', ease: Power2.easeInOut})
.fromTo(project, 0.4, {opacity: 0, x: 30}, {x: 0, opacity: 1})
.fromTo(slider, 0.4, {x: -1500}, {x: 0, ease: Power2.easeInOut})
.fromTo(headline, 0.4, {opacity: 0, x: 30}, {opacity: 1, x: 0})



