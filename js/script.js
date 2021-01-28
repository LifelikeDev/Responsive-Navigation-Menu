const navBar = document.querySelector('.nav-bar');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {

    navBar.classList.toggle('mobile-nav');
    navList.classList.toggle('mobile-list');

    navItem.forEach(navItem => {
      navItem.classList.toggle('mobile-navItem');  
    })
});
