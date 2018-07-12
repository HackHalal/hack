// let header = document.getElementsByTagName('header')[0];

// let scrolling = true;

// const showHeader = 60;
// const showMockup = 250;

// const scrollAnimation = () => {
//   const sections = Array.from(document.getElementsByTagName('section'));
//   const rects = sections.map(section => section.getBoundingClientRect());

//   console.log(window.scrollY, window.innerHeight);
//   // set if header is visible
//   if (window.scrollY > 300) {
//     console.log('pop now');
//   }

//   if (window.scrollY > showHeader) {
//     header.classList.add('active');
//   } else {
//     header.classList.remove('active');
//   }
//   // set if client is visible
//   if (window.scrollY > showMockup) {
//     mockup.classList.add('active');
//   } else {
//     mockup.classList.remove('active');
//   }

//   for (let i = 0; i < rects.length; i++) {
//     let section = sections[i];
//     let rect = rects[i];

//     if (rect.top < window.innerHeight && rect.bottom > 0) {
//       section.classList.add('active');
//     } else {
//       section.classList.remove('active');
//     }
//   }
//   scrolling = false;
// };

// window.addEventListener('scroll', () => {
//   if (!scrolling) {
//     // prevent layout thrashing
//     window.requestAnimationFrame(scrollAnimation);
//     scrolling = true;
//   }
// });

// scrollAnimation();
