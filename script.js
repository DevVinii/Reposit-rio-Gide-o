// Seleciona os elementos do DOM
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFecharMenu = document.querySelector('.btn-fechar-menu'); // Seleciona o botão de fechar

// Adiciona evento de clique para abrir o menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

// Adiciona evento de clique para fechar o menu (no botão 'X')
btnFecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Adiciona evento de clique para fechar o menu (clicando no overlay)
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Adiciona evento de clique para fechar o menu quando um item do menu é clicado
// Isso é importante para que o menu feche após a navegação
menu.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });
});