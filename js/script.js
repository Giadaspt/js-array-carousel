
const box_slide = document.getElementsByClassName('box-slide');
const right_slide = document.getElementsByClassName('right-slide-inner');
const slideAll = [...new Set(box_slide,right_slide) ];
console.log(slideAll);

let counter = 0;
//console.log(box_slide[counter]);
//console.log(right_slide[counter]);


const up_chevron = document.querySelector('.up-chevron');
const down_chevron = document.querySelector('.down-chevron');

up_chevron.addEventListener('click', function(){
  slideAll[counter].classList.remove('active');
  counter++;
  if (counter > 4) {
    counter = 0;
  }
  slideAll[counter].classList.add('active');
  console.log(slideAll[counter]);
});

down_chevron.addEventListener('click', function(){
  slideAll[counter].classList.remove('active');
  counter--;
  if (counter < 0) {
    counter = slideAll.length -1;
  }
  slideAll[counter].classList.add('active');
  console.log(slideAll[counter]);
});


// for (i = 0; i < box_slide.length; i++) {
//   console.log(box_slide[i]);

//   const element = document.createElement('div');
//   element.className = 'element';

//   if (i == counter) {
//     element.classList.add('active');
//   }
 
//   element.innerHTML = `
//   <img src=${box_slide[i]}" alt=">
//   `;
  
//   wrappper.append(element);
// }