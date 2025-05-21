// MENU
let menuOpener = document.querySelector('.menu-opener');
let nav = document.querySelector('header nav');

menuOpener.addEventListener('click', function() {
    if(nav.classList.contains('opened')) {
        nav.classList.remove('opened');
        // Ação de abrir e fechar o menu icon
        menuOpener.querySelector('.close-icon').style.display = 'none';
        menuOpener.querySelector('.hamburger-icon').style.display = 'flex';

    } else {
        nav.classList.add('opened');
        // Ação de abrir e fechar o menu icon
        menuOpener.querySelector('.close-icon').style.display = 'flex';
        menuOpener.querySelector('.hamburger-icon').style.display = 'none';
    }
});