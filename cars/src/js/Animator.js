import PubSub from "pubsub-js";

// PubSub.publish('goToSlide', {from:1, to:2});
PubSub.subscribe('goToSlide', function (msg,data) {
    console.log(msg,data);
});
