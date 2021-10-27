
const box_slide = document.getElementsByClassName('blox-slide');
const right_slide = document.getElementsByClassName('right-slide-inner');
//console.log(box_slide);
//console.log(right_slide);

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
    counter = right_slide.length --;
  }
  console.log(counter);
});