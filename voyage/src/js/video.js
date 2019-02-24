window.onload=function () {
  const countOfSlides = document.querySelectorAll('.slide').length,
        currentNumber = document.querySelector('.current_number'),
        up_angle=document.querySelector('.fa-angle-up');
  //console.log(countOfSlides);
  //console.log(currentNumber);
  for_i_enabled_false(up_angle);
  currentNumber.innerText=`${currentNumber.innerText}/${countOfSlides}`;
};

function for_i_enabled_false(elem) {
  elem.style.color='#ccc';
  elem.style.cursor='default';
}


