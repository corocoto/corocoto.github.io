import PubSub from "pubsub-js";
export default class Paginator {
    constructor(){
        this.scrollEvents();
        this.clickEvents();
        this.activeSlide=1;
    }
    scrollEvents(){
        window.onwheel=function() {
            PubSub.publish('goToSlide', {from: 1, to: 2});
            console.log('test');
        }
    }
    clickEvents(){

    }
}
