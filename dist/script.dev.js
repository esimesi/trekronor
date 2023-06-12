"use strict";

var filterButtons = document.querySelectorAll('.filter-buttons button');
var items = document.querySelectorAll('.item');
var pizzaItems = document.querySelectorAll('[data-type="pizza"]');
pizzaItems.forEach(function (item) {
  item.classList.add('show');
});
var pizzaBtn = document.querySelector('[data-filter="pizza"]');
pizzaBtn.classList.add('active');

function centerItems(filteredItems) {
  items.forEach(function (item) {
    if (filteredItems.includes(item)) {
      item.style.position = 'static';
      item.style.pointerEvents = 'auto';
    } else {
      item.style.position = 'absolute';
      item.style.pointerEvents = 'none';
    }
  });
}

function adjustLineWidth() {
  var heading = document.querySelector('#heading');
  var headingWidth = heading.offsetWidth;
  var lineWidth = (headingWidth - heading.textContent.length * 8) / 2;
  heading.style.setProperty('--line-width', "".concat(lineWidth, "px"));
}

function adjustSubheadingLineWidth() {
  var subheading = document.querySelector('.subheading');
  var subheadingWidth = subheading.offsetWidth;
  var lineWidth = (subheadingWidth - subheading.textContent.length * 30) / 2;
  subheading.style.setProperty('--subheading-line-width', "".concat(lineWidth, "px"));
}

function updateSubheading(filterValue) {
  var subheading = document.querySelector('#heading');
  subheading.textContent = filterValue.charAt(0).toUpperCase() + filterValue.slice(1);
  adjustLineWidth();
}

centerItems(Array.from(pizzaItems));
adjustLineWidth();
adjustSubheadingLineWidth();
window.addEventListener('resize', adjustSubheadingLineWidth);

function updateFilterButtonImage() {
  filterButtons.forEach(function (btn) {
    var img = btn.querySelector('img');

    if (btn.classList.contains('active')) {
      img.src = img.dataset.activeImage;
    } else {
      img.src = img.dataset.defaultImage;
    }
  });
}

filterButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
    var filterValue = btn.dataset.filter;
    var filteredItems = [];
    items.forEach(function (item) {
      if (filterValue === 'all') {
        item.classList.add('show');
        item.classList.remove('hide', 'not-in-flow');
        filteredItems.push(item);
      } else if (item.dataset.type.includes(filterValue)) {
        item.classList.add('show');
        item.classList.remove('hide', 'not-in-flow');
        filteredItems.push(item);
      } else {
        item.classList.remove('show');
        item.classList.add('hide', 'not-in-flow');
      }
    });
    centerItems(filteredItems);
    updateSubheading(filterValue);
    updateFilterButtonImage();
    adjustHeadingLineWidth(); // Add this line here
  });
});
updateFilterButtonImage();
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
});
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
});

function adjustHeadingLineWidth() {
  var heading = document.querySelector('.heading');
  var headingWidth = heading.offsetWidth;
  var lineWidth = (headingWidth - heading.textContent.length * 25) / 2;
  heading.style.setProperty('--line-width', "".concat(lineWidth, "px"));
} // Call the new function


adjustHeadingLineWidth();
window.addEventListener('resize', function () {
  adjustHeadingLineWidth();
});