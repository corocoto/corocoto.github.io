window.onload=function () {
  const countOfSlides = document.querySelectorAll('.slide').length,
        currentNumber = document.querySelector('.current_number'),
        up_angle=document.querySelector('.fa-angle-up'),
        down_angle = document.querySelector('.fa-angle-down'),
        slides= document.querySelectorAll('.slide'),
        header = document.querySelector('header');
  let i=currentNumber.innerText;
  currentNumber.innerText=`${i}/${countOfSlides}`;

  down_angle.onclick=()=>{
    switchSlides(slides[0],slides[1], up_angle, down_angle);
    currentNumber.innerText=`${++i}/${countOfSlides}`;
  };
  up_angle.onclick=()=>{
    switchSlides(slides[1],slides[0], down_angle, up_angle);
    currentNumber.innerText=`${--i}/${countOfSlides}`;
  };
let scroll=0;
  // header.onwheel=function(e){
  //     scroll+=e.deltaY;
  //     if (scroll>=600 && scroll<=800){
  //       if (i<2){
  //         down_angle.onclick();
  //         document.querySelector('header>.container').style.position='static';
  //       }
  //       scroll=0;
  //     } else if (scroll<=-300){
  //       if (i>1) {
  //         up_angle.onclick();
  //         document.querySelector('header>.container').style.position='fixed';
  //       }
  //       scroll=0;
  //     }
  // }
  //   };
  window.onscroll=function () {
    //console.log(document.documentElement.scrollTop);
   if(document.documentElement.scrollTop>=300 && document.documentElement.scrollTop<=800){
     document.querySelector('header>.container').style.position='fixed';
     if (i<2) {
       down_angle.onclick();
     }
   }else if (document.documentElement.scrollTop<200) {
     document.querySelector('header>.container').style.position='fixed';
     if (i>1) {
       up_angle.onclick();
     }
   }
   else if (document.documentElement.scrollTop>800){
     document.querySelector('header>.container').style.position='static';
   }
  }
};




function switchSlides(firstSlide, secondSlide, firstAngle, secondAngle) {
  addRemoveClasses(firstSlide,secondSlide, 'active');
  addRemoveClasses(firstAngle, secondAngle, 'disable_angle')
}

function addRemoveClasses(firstElem, secondElem, nameOfClass) {
  firstElem.classList.toggle(nameOfClass);
  secondElem.classList.toggle(nameOfClass);
}

