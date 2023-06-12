const filterButtons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.item');
const item2s = document.querySelectorAll('.item2');
const pizzaItems = document.querySelectorAll('[data-type="pizza"]');
const pizzaItem2s = document.querySelectorAll('.item2[data-type="pizza"]');
pizzaItems.forEach(item => {
  item.classList.add('show');
});
pizzaItem2s.forEach(item2 => {
  item2.classList.add('show');
});
const pizzaBtn = document.querySelector('[data-filter="pizza"]');
pizzaBtn.classList.add('active');

function centerItems(filteredItems) {
  items.forEach(item => {
    if (filteredItems.includes(item)) {
      item.style.position = 'static';
      item.style.pointerEvents = 'auto';
    } else {
      item.style.position = 'absolute';
      item.style.pointerEvents = 'none';
    }
  });
}
function centerItem2s(filteredItem2s) {
  item2s.forEach(item2 => {
    if (filteredItem2s.includes(item2)) {
      item2.style.position = 'static';
      item2.style.pointerEvents = 'auto';
    } else {
      item2.style.position = 'absolute';
      item2.style.pointerEvents = 'none';
    }
  });
}

function adjustLineWidth() {
  const heading = document.querySelector('#heading');
  const headingWidth = heading.offsetWidth;
  const lineWidth = (headingWidth - heading.textContent.length * 10) / 2;
  heading.style.setProperty('--line-width', `${lineWidth}px`);
}

function adjustSubheadingLineWidth() {
  const subheading = document.querySelector('.subheading');
  const subheadingWidth = subheading.offsetWidth;
  const lineWidth = (subheadingWidth - subheading.textContent.length * 30) / 2;
  subheading.style.setProperty('--subheading-line-width', `${lineWidth}px`);
}

function updateSubheading(filterText) {
  const subheading = document.querySelector('#heading');
  subheading.textContent = filterText.charAt(0).toUpperCase() + filterText.slice(1);
  adjustLineWidth();
}


centerItems(Array.from(pizzaItems));
centerItem2s(Array.from(pizzaItem2s));
adjustLineWidth();
adjustSubheadingLineWidth();

window.addEventListener('resize', adjustSubheadingLineWidth);

function updateFilterButtonImage() {
  filterButtons.forEach(btn => {
    const img = btn.querySelector('img');
    if (btn.classList.contains('active')) {
      img.src = img.dataset.activeImage;
    } else {
      img.src = img.dataset.defaultImage;
    }
  });
}
document.querySelector('.inbakade').style.display = 'none';
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');

    const filterValue = btn.dataset.filter;
    const filteredItems = [];
    const filteredItem2s = []; // New line: array for filtered item2s

  items.forEach(item => {
    if (filterValue === 'all' || item.dataset.type.includes(filterValue)) {
      item.classList.remove('hide', 'not-in-flow');  // remove 'hide' and 'not-in-flow' first
      setTimeout(() => {
        item.classList.add('show');  // add 'show' after a delay
      }, 100); // delay of 100ms
      filteredItems.push(item);
    } else {
      item.classList.remove('show'); // remove 'show' first
      setTimeout(() => {
        item.classList.add('hide', 'not-in-flow');  // add 'hide' and 'not-in-flow' after a delay
      }, 100); // delay of 100ms
    }
  });

  item2s.forEach(item2 => {
    if (filterValue === 'all' || item2.dataset.type.includes(filterValue)) {
      item2.classList.remove('hide', 'not-in-flow');  // remove 'hide' and 'not-in-flow' first
      setTimeout(() => {
        item2.classList.add('show');  // add 'show' after a delay
      }, 100); // delay of 100ms
      filteredItem2s.push(item2);
    } else {
      item2.classList.remove('show');  // remove 'show' first
      setTimeout(() => {
        item2.classList.add('hide', 'not-in-flow');  // add 'hide' and 'not-in-flow' after a delay
      }, 100); // delay of 100ms
    }
  });

    const inbakade = document.querySelector('.inbakade');
    const item2sInInbakade = Array.from(inbakade.getElementsByClassName('item2'));
    const visibleItem2sInInbakade = item2sInInbakade.some(item2 => !item2.classList.contains('none'));
    if (visibleItem2sInInbakade) {
      inbakade.style.display = 'flex'; // or whatever display value you want when it's visible
      // add 'show' class to all .item2 elements
      setTimeout(() => { 
        item2sInInbakade.forEach(item2 => item2.classList.add('show')); 
      }, 100); // delay of 100ms
    } else {
      inbakade.style.display = 'none'; 
    }
    

    centerItems(filteredItems);
    centerItem2s(filteredItem2s); // New line: center item2s
    updateSubheading(btn.textContent);
    updateFilterButtonImage();
    updateHeaderVisibility();
    updateInbakadHeaderVisibility();
    updateSnacksHeaderVisibility();
    updateHotVisibility();

  });
});
window.addEventListener('load', function () {
  adjustHeadingLineWidth();
});

updateFilterButtonImage();

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
});

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

function adjustHeadingLineWidth() {
  const heading = document.querySelector('.heading');
  const headingWidth = heading.offsetWidth;
  const lineWidth = (headingWidth - heading.textContent.length * 20) / 2;
  heading.style.setProperty('--line-width', `${lineWidth}px`);
}

function updateHeaderVisibility() {
  // Determine the currently active category
  var activeCategory = document.querySelector('.filter-buttons button.active').dataset.filter;

  // Get the pizza header
  var pizzaHeaders = document.querySelectorAll('.pizza-header');

  // Show the pizza header if the active category is "pizza", hide it otherwise
  pizzaHeaders.forEach(pizzaHeader => {
    if (activeCategory === 'pizza') {
      pizzaHeader.style.display = 'block';
    } else {
      pizzaHeader.style.display = 'none';
    }
  });
}
updateHeaderVisibility();

function updateInbakadHeaderVisibility() {
  // Determine the currently active category
  var activeCategory = document.querySelector('.filter-buttons button.active').dataset.filter;

  // Get the pizza header
  var pizzaHeaders = document.querySelectorAll('.ostkant');
  

  // Show the pizza header if the active category is "pizza", hide it otherwise
  pizzaHeaders.forEach(pizzaHeader => {
    if (activeCategory === 'inbakad') {
      pizzaHeader.style.display = 'block';
    } else {
      pizzaHeader.style.display = 'none';
    }
  });
}

updateInbakadHeaderVisibility();

function updateSnacksHeaderVisibility() {
  // Determine the currently active category
  var activeCategory = document.querySelector('.filter-buttons button.active').dataset.filter;

  // Get the pizza header
  var pizzaHeaders = document.querySelectorAll('.snacksheader');
  

  // Show the pizza header if the active category is "pizza", hide it otherwise
  pizzaHeaders.forEach(pizzaHeader => {
    if (activeCategory === 'grillsnacks') {
      pizzaHeader.style.display = 'block';
    } else {
      pizzaHeader.style.display = 'none';
    }
  });
}

updateHotVisibility();

function updateHotVisibility() {
  // Determine the currently active category
  var activeCategory = document.querySelector('.filter-buttons button.active').dataset.filter;

  // Get the pizza header
  var pizzaHeaders = document.querySelectorAll('.hot-header');
  

  // Show the pizza header if the active category is "pizza", hide it otherwise
  pizzaHeaders.forEach(pizzaHeader => {
    if (activeCategory === 'vitizza') {
      pizzaHeader.style.display = 'block';
    } else {
      pizzaHeader.style.display = 'none';
    }
  });
}

updateHotVisibility();

// Define your descriptions
// Define your descriptions
const descriptions = {
  all: "TOMATSÅS, OST och oregano INGÅR",
  pizza: "TOMATSÅS, OST och oregano INGÅR",
  rullar:"INGÅR TOMAT, OST, SALLAD , GURKA, LÖK, DRESSING, FEFERONI",
  inbakad: "ingår tomatsås och ost ",
  veganvegetarian: "ingår tomatsås men ingen ost till vegan pizzor ",
  kebabgyrus: "TOMATSÅS, OST och oregano INGÅR till pizzor",
  vitizza:"TOMATSÅS, OST och oregano INGÅR",
  sallad: "OST, GURKA, TOMAT, ANANAS, DRESSING och NYBAKAT BRÖD INGÅR I ALLA SALLADER",
  Hamburgare:"BRÖD, SALLAD, LÖK, & DRESSING INGÅR I ALLA HAMBURGARE",
  barnmeny:"DRYCK INGÅR I ALLA BARNRÄTTER",
  dagenslunch:"SALLAD BUFFE KAFFE och DRICKA ingår",
  // Add more descriptions as needed
};

// Get the description element
const descriptionElement = document.querySelector('.description');

// Set the default description (assuming the default filter is 'all')
descriptionElement.textContent = descriptions.all;

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // ...existing code...

    // Get the filter value
    const filterValue = btn.dataset.filter;

    // Update the description based on the filter
    descriptionElement.textContent = descriptions[filterValue];
  });
});

window.addEventListener('resize', function () {
  adjustHeadingLineWidth();
  adjustSubheadingLineWidth();
});

const specialButton = document.querySelector('.order');
const inbakadFilterButton = document.querySelector('[data-filter="inbakad"]');

specialButton.addEventListener('click', (event) => {
  event.preventDefault();  // prevent the default action of the anchor tag
  inbakadFilterButton.click();

  setTimeout(() => {
    const menuElement = document.querySelector('#buttontag');
    const offset = window.innerHeight / 3;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = menuElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
         top: offsetPosition,
         behavior: 'smooth'
    });
  }, 500); // Delay of 500 milliseconds
});


const specialButtonForDagensLunch = document.querySelector('.dagenslunchbutton');
const dagensLunchFilterButton = document.querySelector('[data-filter="dagenslunch"]');

specialButtonForDagensLunch.addEventListener('click', (event) => {
  event.preventDefault();  // prevent the default action of the anchor tag
  dagensLunchFilterButton.click();

  setTimeout(() => {
    const menuElement = document.querySelector('#dagenstag');
    const offset = window.innerHeight / 1.3;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = menuElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
         top: offsetPosition,
         behavior: 'smooth'
    });
  }, 500); // Delay of 500 milliseconds
});
