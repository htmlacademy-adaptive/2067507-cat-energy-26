let navMain = document.querySelector('.main-header__nav');
let navToggle = document.querySelector('.main-header__nav-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed')
    navMain.classList.add('main-nav--opened')

  } else {
    navMain.classList.add('main-nav--closed')
    navMain.classList.remove('main-nav--opened')
  }
})
