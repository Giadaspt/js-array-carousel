
const right_slide = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

//const box_slide = document.getElementsByClassName('box-slide');
//const right_slide = document.getElementsByClassName('right-slide-inner');
//console.log(box_slide);
//console.log(right_slide);
let box_slide = [...right_slide];
console.log(box_slide);

let wrappper = document.querySelector('.wrapper');

let counter = 0;
//console.log(counter);
//console.log(box_slide [counter]);
//console.log(right_slide [counter]);

const up_chevron = document.querySelector('.up-chevron');
const down_chevron = document.querySelector('.down-chevron');
//console.log(up_chevron);
//console.log(down_chevron);

up_chevron.addEventListener('click', function(){
  counter++;
  if (counter > 4) {
    counter = 0;
  }
  console.log(counter);
});

down_chevron.addEventListener('click', function(){
  counter--;
  if (counter < 0) {
    counter = right_slide.length -1;
  }
  console.log(counter);
});


for (i = 0; i < box_slide.length; i++) {
  console.log(box_slide[i]);

  const element = document.createElement('div');
  element.className = 'element';

  if (i == counter) {
    element.classList.add('active');
  }
 
  element.innerHTML = `
  <img src=${box_slide[i]}" alt="">
  `;
  
  wrappper.append(element);
}