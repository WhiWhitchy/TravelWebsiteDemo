const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 180);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

