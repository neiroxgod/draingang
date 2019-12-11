
window.addEventListener('load', initAnimation);
new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});

const background = document.querySelector('.section_first');
const headers = document.querySelectorAll('.left-block');
const picture = document.querySelectorAll('.image');
const drain = document.querySelectorAll('.nav-bar h2');
const lefter = document.querySelectorAll('.lefter');
const righter = document.querySelectorAll('.righter');
const akie = document.querySelector('#akie');
const rain = document.querySelector('#rain');
const soda = document.querySelector('.soda');
const distortion = document.querySelector('#distortion');
const bladee = document.querySelector('.slide-two_image h2');


const tl = new TimelineMax();

function initAnimation(){
    tl.fromTo(headers, 0.7, {opacity: 0, x: -1500}, {opacity: 1, x: 0})
    .fromTo(drain, 0.8, {y: -150}, {y: 0, ease:Power2.easeInOut})
    .fromTo(lefter, 0.8, {x: -500}, {x: 0, ease:Power2.easeInOut})
    .fromTo(righter, 0.8, {x: -500}, {x: 0, ease:Power2.easeInOut})
    .fromTo(akie, 0.8, {fontSize: "550px"}, {fontSize: "122px", ease: Power2.easeInOut})
    .fromTo(picture, 0.5, {y: -2000}, {y: 0, ease: Power2.easeInOut})
}

akie.addEventListener('mouseenter', () => {
    akie.innerHTML = "GOD";
});
akie.addEventListener('mouseleave', () => {
    akie.innerHTML = "AKIE";
});

rain.addEventListener('mouseenter', () => {
    rain.innerHTML = "COLD";
});
rain.addEventListener('mouseleave', () => {
    rain.innerHTML = "RAIN";
});
soda.addEventListener('mouseenter', () => {
    soda.innerHTML = "LIAR";
    tl.fromTo(soda, 0.4, {fontSize: "82px"}, {fontSize: "150px", ease: Power2.easeInOut})
});
soda.addEventListener('mouseleave', () => {
    soda.innerHTML = "SODAWATER";
    tl.fromTo(soda, 0.4, {fontSize: "150px"}, {fontSize: "82px", ease: Power2.easeInOut})
    setTimeout(() =>{
        tl.clear();
    }, 1000)
});



new hoverEffect ({
    parent: document.querySelector('.image'),
    intensity: 0.3,
    image1: '6ec22b8da05a1f25f7041832fc8e6dbc.jpg',
    image2: 'seabass-creatives-U3m4_cKbUfc-unsplash.jpg',
    displacementImage: 'heightMap.png'
})

new hoverEffect({
    parent: document.querySelector('.slide-two_image'),
    intensity: 0.3,
    image1: '33cb889b6450272804cb3a68ec967c8e.jpg',
    image2: 'Bladee-001.jpg',
    displacementImage: 'heightMap.png'
})

new hoverEffect({
    parent: document.querySelector('.slide-three_image'),
    intensity: 0.3,
    image1: 'OP18021_AM_AH-_Folio-YungLean_3381_05_RGB.jpg',
    image2: 'bsHbzdJSsdk.jpg',
    displacementImage: 'heightMap.png'
});

document.querySelector('.slide-two_image').addEventListener('mouseover', (e) => {
    tl.fromTo(bladee, 1, {x: "0%"}, {x: "20%", ease: Power2.easeInOut})
});
document.querySelector('.slide-two_image').addEventListener('mouseleave', (e) => {
    tl.fromTo(bladee, 1, {x: "20%"}, {x: "0%", ease: Power2.easeInOut})
});
