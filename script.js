const fadeIns = document.querySelectorAll('.fade-in');
fadeIns.forEach(fadeIn => {
  fadeIn.addEventListener('mouseenter', () => {
    fadeIn.style.opacity = 1;
  });
  fadeIn.addEventListener('mouseleave', () => {
    fadeIn.style.opacity = 0;
  });
});
