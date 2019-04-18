import PubSub from "pubsub-js";
import {TimelineMax} from "gsap";

PubSub.subscribe('goToSlide', function (msg,data) {
    console.log(msg,data);
    let sections = document.querySelectorAll('.section');
    let currentSlide = sections[data.from];
    let newSlide = sections[data.to];
    let elements=currentSlide.querySelectorAll('.data-stagger');
    let newElements=newSlide.querySelectorAll('.data-stagger');

    let tl=new TimelineMax();
    tl
        .staggerFromTo(elements,0.3, {y:0, opacity: 1}, {y:-20, opacity:0},0.1)
        .to(currentSlide,1,{y:'-100%',opacity: 0})
        .fromTo(newSlide,1,{y:'100%'},{y:'0%', opacity: 1},0.3)
        .staggerFromTo(newElements,0.3,{y:20, opacity:0},{y:0,opacity:1},0.1,"-=0.4");
});
