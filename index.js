let header = document.getElementsByTagName('header')[0];
let staff = document.getElementsByClassName('staff-profile');
let mockup = document.getElementById('aboutmockup');
let scrolling = true;
let carouselImages = document.getElementsByClassName('carousel-image');
let currentImg = 0;
const showHeader = 60;
const showMockup = 250;

const setUpDom = () => {
  for (let i = 0; i < staff.length; i++) {
    // add class for each staff on mouseover
    staff[i].addEventListener('mouseenter', () => {
      staff[i].classList.add('active');
    });
    // remove .active class on mouseleave
    staff[i].addEventListener('mouseleave', () => {
      staff[i].classList.remove('active');
    });
  }

  for (let i = 0; i < carouselImages.length; i++) {
    carouselImages[i].classList.add('hidden');
  }

  carouselImages[0].classList.remove('hidden');
};

const updateImg = () => {
  let img = carouselImages[currentImg];
  img.classList.add('hidden');
  currentImg = (currentImg + 1) % carouselImages.length;
  img = carouselImages[currentImg];
  img.classList.remove('hidden');
};
const scrollAnimation = () => {
  const sections = Array.from(document.getElementsByTagName('section'));
  const rects = sections.map(section => section.getBoundingClientRect());

  // set if header is visible
  if (window.scrollY > showHeader) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
  // set if client is visible
  if (window.scrollY > showMockup) {
    mockup.classList.add('active');
  } else {
    mockup.classList.remove('active');
  }

  for (let i = 0; i < rects.length; i++) {
    let section = sections[i];
    let rect = rects[i];

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
  scrolling = false;
};

setUpDom();
setInterval(updateImg, 3000);

window.addEventListener('scroll', () => {
  if (!scrolling) {
    // prevent layout thrashing
    window.requestAnimationFrame(scrollAnimation);
    scrolling = true;
  }
});

scrollAnimation();
