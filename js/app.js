var $hamburger = document.querySelector('.hamburger');
var $menu = document.querySelector('.menu-bar');

function toggleMenu() {
    $menu.classList.toggle('active-mobile');
}

$hamburger.addEventListener('click', toggleMenu);