
const right_slide = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

// const box_slide = 
// [
//   'img/01.jpg',
//   'img/02.jpg',
//   'img/03.jpg',
//   'img/04.jpg',
//   'img/05.jpg'
// ];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


//const box_slide = document.getElementsByClassName('blox-slide');
//const right_slide = document.getElementsByClassName('right-slide-inner');
//console.log(box_slide);
//console.log(right_slide);

let box_slide = [...right_slide];
console.log(box_slide);



let counter = 0;
//console.log(counter);
//console.log(box_slide [counter]);
//console.log(right_slide [counter]);

const up_chevron = document.querySelector('.up-chevron');
const down_chevron = document.querySelector('.down-chevron');
//console.log(up_chevron);
//console.log(down_chevron);

up_chevron.addEventListener('click', function(){
  counter ++;
  if (counter > 5) {
    counter = right_slide.length = 0;
  }
  console.log(counter);
});

down_chevron.addEventListener('click', function(){
  counter --;
  if (counter < 0) {
    counter = right_slide.length = 5;
  }
  console.log(counter);
});
