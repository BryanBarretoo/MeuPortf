const botaoVerMais = document.getElementById("verMais");
const classEscondido = document.querySelectorAll('.escondido');


function cliqueVer() {
    classEscondido.forEach((elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('escondido');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    })
}

function maisHabilidades(elemento) {
    elemento.addEventListener('click', cliqueVer)
}

maisHabilidades(botaoVerMais);