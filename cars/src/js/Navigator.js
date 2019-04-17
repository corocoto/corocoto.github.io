import PubSub from "pubsub-js";

PubSub.subscribe('goToSlide', function (msg,data) {
    console.log(msg,data);
    let dots = document.querySelectorAll('.pagination a');
    dots[data.from].classList.remove('is_active');
    dots[data.to].classList.add('is_active');
});
