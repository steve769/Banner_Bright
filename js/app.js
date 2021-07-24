window.addEventListener('DOMContentLoaded', () => {
  // Vars for animation
  const social = document.querySelector('.social');
  const logo = document.querySelector('nav h4');
  const navLinkContainer = document.querySelector('nav ul');
  const bannerText = document.querySelector('.banner-text');
  const close = document.querySelector('.close');

  //Adding animation on the elements with animate CSS classes
  social.classList.add('animate__animated', 'animate__slideInUp');
  social.style.setProperty('--animate-duration', '4s');

  logo.classList.add('animate__animated', 'animate__fadeInDown');
  logo.style.setProperty('--animate-duration', '4s');

  navLinkContainer.classList.add('animate__animated', 'animate__fadeInDown');
  navLinkContainer.style.setProperty('--animate-duration', '4s');

  bannerText.classList.add('animate__animated', 'animate__fadeInDown');
  bannerText.style.setProperty('--animate-duration', '4s');

  //Mobile Menu Reveal
  const compass = document.querySelector('.compass');
  compass.addEventListener('click', () => {
    navLinkContainer.style.right = '0';
  });
  //Close Button for Mobile Menu
  close.addEventListener('click', () => {
    navLinkContainer.style.right = '-270px';
  });
  //Blur to close Mobile Menu
  compass.addEventListener('blur', () => {
    navLinkContainer.style.right = '-270px';
  });
});
