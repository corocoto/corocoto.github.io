import PubSub from "pubsub-js";
import {TimelineMax} from "gsap";
// PubSub.publish('goToSlide', {from:1, to:2});
PubSub.subscribe('goToSlide', function (msg,data) {
    console.log(msg,data);
    let sections = document.querySelectorAll('.section');
    let currentSlide = sections[data.from];
    let newSlide = sections[data.to];
    // sections[data.from].classList.remove('is_active');
    // sections[data.to].classList.add('is_active');
    let tl=new TimelineMax();
    tl.to(currentSlide,1,{y:'-100%',opacity: 0})
      .fromTo(newSlide,1,{y:'100%'},{y:'0%', opacity: 1},0);
});
