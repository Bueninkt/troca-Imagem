"use strict";

const botaoTrocarImagem = document.getElementById('trocar-imagem');

function trocaImagem() {
    const imagem = document.getElementById('imagem').value.toLowerCase();

    if (imagem === 'naruto') {
        // Certifique-se de fornecer o caminho correto da imagem
        document.documentElement.style.setProperty('--background-image', 'url("https://wallpapers.com/images/hd/1920-x-1080-naruto-hvccopacmmxpeslv.jpg")');
    } 
}

botaoTrocarImagem.addEventListener('click', trocaImagem);
