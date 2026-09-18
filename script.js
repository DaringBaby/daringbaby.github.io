let current_slide = 0;
let max_slide = 4;

const arrowup = document.querySelector('#arrow-up');
const arrowdown = document.querySelector('#arrow-down');

const projects_menu = document.querySelector('#projects-menu');
const aboutme_menu = document.querySelector('#aboutme-menu');

const projects_section = document.getElementById('projects');
const aboutme_section = document.getElementById('aboutme');

const slides = [
  document.getElementById('lithos'),
  document.getElementById('astralhunter'),
  document.getElementById('daringengine'),
  document.getElementById('ill-fate'),
  document.getElementById('villageofunity')
]



arrowup.addEventListener('click', () => {
  slides[current_slide].classList.remove('active');
  current_slide -= 1;
  if (current_slide < 0) {
    current_slide = max_slide;
  }
  slides[current_slide].classList.add('active');
  updateSlide();
});

arrowdown.addEventListener('click', () => {
  slides[current_slide].classList.remove('active');
  current_slide += 1;
  if (current_slide > max_slide) {
    current_slide = 0;
  }
  slides[current_slide].classList.add('active');
  updateSlide();
});


projects_menu.addEventListener('click', (e) => {
  e.preventDefault();
  slides[current_slide].classList.remove('active');
  current_slide = 0;
  slides[current_slide].classList.add('active');
  updateSlide();
  changeView(0);
});

aboutme_menu.addEventListener('click', (e) => {
  e.preventDefault();
  changeView(1);
});

function changeView(view) {
  switch (view) {
    case 0:
      projects_menu.classList.add('menu-active');
      aboutme_menu.classList.remove('menu-active');
      projects_section.classList.add('active');
      aboutme_section.classList.remove('active');
      break;
    case 1:
      projects_menu.classList.remove('menu-active');
      aboutme_menu.classList.add('menu-active');
      projects_section.classList.remove('active');
      aboutme_section.classList.add('active');
      break;
  }
}

function updateSlide() {
  let image = document.getElementById('slide-img');
  switch (current_slide) {
    case 0:
      image.src = 'img/projects/lithos.png';
      break;
    case 1:
      image.src = 'img/projects/astralhunter.png';
      break;
    case 2:
      image.src = 'img/projects/daringengine.png';
      break;
    case 3:
      image.src = 'img/projects/ill-fate.png';
      break;
    case 4:
      image.src = 'img/projects/villageofunity.png';
      break;
  }
}
