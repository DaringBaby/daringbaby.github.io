let current_slide = 0;
let max_slide = 1;

const arrowup = document.querySelector('#arrow-up');
const arrowdown = document.querySelector('#arrow-down')

arrowup.addEventListener('click', () => {
  current_slide -= 1;
  if (current_slide < 0) {
    current_slide = max_slide;
  }
  updateSlide();
});

arrowdown.addEventListener('click', () => {
  current_slide += 1;
  if (current_slide > max_slide) {
    current_slide = 0;
  }
  updateSlide();
});

function updateSlide() {
  let image = document.getElementById('slide-img');
  switch (current_slide) {
    case 0:
      image.src = 'img/projects/lithos.png';
      break;
    case 1:
      image.src = 'img/projects/astralhunter.png'
      break;
  }
}
