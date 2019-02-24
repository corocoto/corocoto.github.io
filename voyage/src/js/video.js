window.onload=function () {
  const countOfSlides = document.querySelectorAll('.slide').length,
        currentNumber = document.querySelector('.current_number'),
        up_angle=document.querySelector('.fa-angle-up'),
        down_angle = document.querySelector('.fa-angle-down'),
        slides= document.querySelectorAll('.slide');

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
};



function switchSlides(firstSlide, secondSlide, firstAngle, secondAngle) {
  addRemoveClasses(firstSlide,secondSlide, 'active');
  addRemoveClasses(firstAngle, secondAngle, 'disable_angle')
}

function addRemoveClasses(firstElem, secondElem, nameOfClass) {
  firstElem.classList.toggle(nameOfClass);
  secondElem.classList.toggle(nameOfClass);
}
