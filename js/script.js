const slideAll = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];
// console.log(slideAll);

const slider = document.querySelector('.slider');
const sliderBig = document.querySelector('.out-box-slide');
const sliderR = document.querySelector('.right-slide');


// const box_slide = document.getElementsByClassName('box-slide');
// const right_slide = document.getElementsByClassName('right-slide-inner');
// const slideAll = [...new Set(box_slide,right_slide) ];

// const slideAll = [...box_slide, ...right_slide];

let counter = 0;
//console.log(box_slide[counter]);
//console.log(right_slide[counter]);

for (i = 0; i < slideAll.length ; i++) {

  const item1 = document.createElement('div');
  const item2 = document.createElement('div');
  //console.log(item1);
  //console.log(item2);
  item1.className = 'item1';
  item2.className = 'item2';

  if (i === 0){
    item1.classList.add('active');
    item2.classList.add('active');
  } else  {
    item1.classList.remove('active');
    item2.classList.remove('active');
  }

  
  sliderBig.append(item1);
  sliderR.append(item2);
  console.log(sliderBig);
  console.log(sliderR);
  
  item1.innerHTML = `<img src="${slideAll[i]}" alt="">`;
  item2.innerHTML = `<img src="${slideAll[i]}" alt="">`;
}

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
