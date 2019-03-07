const images = document.images,
    imagesCount = images.length;
let imagesLoadedCount=0,
    perc = document.getElementById('percent'),
    preloader = document.getElementById('preloader');

function preload(){
    for (let i=0; i<imagesCount; i++){
        let imgClone = new Image();
        imgClone.onload = imgLoaded;
        imgClone.onerror = imgLoaded;
        imgClone.src = images[i].src;
    }
};

function imgLoaded() {
    perc.innerHTML=`${((100/imagesCount)*(++imagesLoadedCount))<<0}%`;
    if (imagesLoadedCount>=imagesCount){
        setTimeout(()=>{
            if (!preloader.classList.contains('done')){
                preloader.classList.add('done');
            }
        },1000);
    }
}

export default preload();
