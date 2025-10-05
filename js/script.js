// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll sections - highlight navbar links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    let sectionTop = section.offsetTop - 100;
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', scrollY > 100);

  // Close menu on scroll (mobile fix)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ScrollReveal
ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: true
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js
let typed = new Typed('.home-content span', {
  strings: ['Full Stack Developer', 'Video Editor', 'Music Creator'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
