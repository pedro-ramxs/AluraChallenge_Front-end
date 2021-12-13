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

    const inputCor = document.querySelector('input[type=color]');

    if (inputCor != null) {
        const editor = document.querySelector('.editor');
        editor.style.border = `32px solid ${inputCor.value}`;
        inputCor.addEventListener('change', () => {
            editor.style.border = `32px solid ${inputCor.value}`;
        });
    }
    else{
        const projetos = document.querySelectorAll('.editor');
        projetos.forEach( projeto => {
            projeto.style.border = "32px solid #6bd1ff";
        });
    }

    const linguagem = document.querySelector('#linguagem');
    const botaoHljs = document.querySelector('#btn-aplicaHljs');
    const editor = document.querySelector('.editor');

    if (botaoHljs != null){
        botaoHljs.addEventListener('click', () => {
            const codigo = editor.innerText;
            editor.innerHTML = `<code class=" hljs language-${linguagem.value}" contenteditable="true" aria-label="Editor de código" spellcheck="false"></code`;
            editor.querySelector('code').textContent = codigo;
            hljs.highlightElement(editor.querySelector('code'));
        });
    }
    else {
        const projetos = document.querySelectorAll('.editor');
        projetos.forEach( projeto => {
            hljs.highlightElement(projeto.querySelector('code'));
        });
    }  

})();