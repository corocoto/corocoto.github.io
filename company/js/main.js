window.onload = function() {
        const loader = document.getElementById('page-preloader');
        setInterval(() => {
            if(loader.style.opacity==0){
                clearInterval();
                loader.classList.add('done');
            }
            else loader.style.opacity -= 0.02;
        }, 30);
};
