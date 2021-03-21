//selectors
let header = document.querySelector('.hamburger-menu');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function(){
    let windowposition = window.scrollY > 0;
    header.classList.toggle('active', window.scrollY > 0)
})

hamburgerMenu.addEventListener('click',function(){
    header.classList.toggle('menu-open');
})