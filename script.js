let current_slide = 0;
let max_slide = 4;

const arrowup = document.querySelector('#arrow-up');
const arrowdown = document.querySelector('#arrow-down');

const projects_menu = document.querySelector('#projects-menu');
const aboutme_menu = document.querySelector('#aboutme-menu');
const daring_menu = document.querySelector('#daring-menu');
const contact_menu = document.querySelector('#contact-menu');

const projects_section = document.getElementById('projects');
const aboutme_section = document.getElementById('aboutme');
const daring_section = document.getElementById('daring');
const contact_section = document.getElementById('contact');

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

contact_menu.addEventListener('click', (e) => {
  e.preventDefault();
  changeView(3);
});

daring_menu.addEventListener('click', (e) => {
  e.preventDefault();
  changeView(2);
});

function changeView(view) {
  switch (view) {
    case 0:
      projects_menu.classList.add('menu-active');
      aboutme_menu.classList.remove('menu-active');
      daring_menu.classList.remove('menu-active');
      contact_menu.classList.remove('menu-active');
      projects_section.classList.add('active');
      aboutme_section.classList.remove('active');
      daring_section.classList.remove('active');
      contact_section.classList.remove('active');
      break;
    case 1:
      projects_menu.classList.remove('menu-active');
      aboutme_menu.classList.add('menu-active');
      daring_menu.classList.remove('menu-active');
      contact_menu.classList.remove('menu-active')
      projects_section.classList.remove('active');
      aboutme_section.classList.add('active');
      daring_section.classList.remove('active');
      contact_section.classList.remove('active');
      break;
    case 2:
      projects_menu.classList.remove('menu-active');
      aboutme_menu.classList.remove('menu-active');
      daring_menu.classList.add('menu-active');
      contact_menu.classList.remove('menu-active')
      projects_section.classList.remove('active');
      aboutme_section.classList.remove('active');
      daring_section.classList.add('active');
      contact_section.classList.remove('active');
      break;
    case 3:
      projects_menu.classList.remove('menu-active');
      aboutme_menu.classList.remove('menu-active');
      daring_menu.classList.remove('menu-active');
      contact_menu.classList.add('menu-active')
      projects_section.classList.remove('active');
      aboutme_section.classList.remove('active');
      daring_section.classList.remove('active');
      contact_section.classList.add('active');
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
