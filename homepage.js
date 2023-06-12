document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.querySelector('#toggle-menu');
  const logo = document.querySelector('.logo');
  const navigation = document.querySelector('.navigation');
  const menuHeader = document.querySelector('.menu-header');

  document.addEventListener('click', function (event) {
    if (toggleMenu.checked && !logo.contains(event.target) && !navigation.contains(event.target) && !menuHeader.contains(event.target)) {
      toggleMenu.checked = false;
    }
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const header = document.querySelector('.header');
  if (menuToggle && mainNav && header && toggleMenu) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
      header.classList.toggle('header-expanded');
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 992) {
        if (toggleMenu.checked) {
          header.style.padding = "10px 20px";
        }
      } else {
        header.style.padding = "10px 20px";
      }
    });
  }

  const toggleMenuCheckbox = document.querySelector('#toggle-menu');
  toggleMenuCheckbox.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.body.addEventListener('click', () => {
    toggleMenuCheckbox.checked = false;
  });

  const toggleMenuHeaderCheckbox = document.querySelector('#toggle-menu-header');
  toggleMenuHeaderCheckbox.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.body.addEventListener('click', () => {
    toggleMenuHeaderCheckbox.checked = false;
  });

  // Add smooth scroll effect
  const scrollThreshold = 50;
  const infoSection = document.getElementById('info-section');
  let isScrolling = false;

  window.addEventListener('scroll', function() {
    if (!isScrolling && window.scrollY + scrollThreshold >= infoSection.offsetTop) {
      isScrolling = true;
      smoothScrollTo(infoSection);
    }
  });

  function smoothScrollTo(targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});
