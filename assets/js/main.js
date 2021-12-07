(() => {
    const botaoMenu = document.querySelector('#btn-menu');
    const menuLateral = document.querySelector('.menu');
    botaoMenu.addEventListener('click', () => {
        botaoMenu.classList.toggle('cabecalho__botao--menu--ativo');
        menuLateral.classList.toggle('menu--visivel');
    });

    const botaoPesquisa = document.querySelector('#btn-pesquisa');
    const inputPesquisa = document.querySelector('input[type=search]');
    botaoPesquisa.addEventListener('click', () => {
        inputPesquisa.classList.toggle('cabecalho__search--ativo');
    });
})();