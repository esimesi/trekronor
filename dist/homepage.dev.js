"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var toggleMenu = document.querySelector('#toggle-menu');
  var logo = document.querySelector('.logo');
  var navigation = document.querySelector('.navigation');
  var menuHeader = document.querySelector('.menu-header');
  document.addEventListener('click', function (event) {
    if (toggleMenu.checked && !logo.contains(event.target) && !navigation.contains(event.target) && !menuHeader.contains(event.target)) {
      toggleMenu.checked = false;
    }
  });
  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.querySelector('.main-nav');
  var header = document.querySelector('.header');

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

  var toggleMenuCheckbox = document.querySelector('#toggle-menu');
  toggleMenuCheckbox.addEventListener('click', function (event) {
    event.stopPropagation();
  });
  document.body.addEventListener('click', function () {
    toggleMenuCheckbox.checked = false;
  });
  var toggleMenuHeaderCheckbox = document.querySelector('#toggle-menu-header');
  toggleMenuHeaderCheckbox.addEventListener('click', function (event) {
    event.stopPropagation();
  });
  document.body.addEventListener('click', function () {
    toggleMenuHeaderCheckbox.checked = false;
  }); // Add smooth scroll effect

  var scrollThreshold = 50;
  var infoSection = document.getElementById('info-section');
  var isScrolling = false;
  window.addEventListener('scroll', function () {
    if (!isScrolling && window.scrollY + scrollThreshold >= infoSection.offsetTop) {
      isScrolling = true;
      smoothScrollTo(infoSection);
    }
  });

  function smoothScrollTo(targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
});