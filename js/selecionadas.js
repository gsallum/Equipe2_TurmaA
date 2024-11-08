document.addEventListener('DOMContentLoaded', function() {

// Obtém a lista como string do localStorage
let listaStr = localStorage.getItem('listaMistura');

// Divide a string em um array de números inteiros
let lista = listaStr.split(',').map(Number);

let agrupados = [];

// Agrupa a cada três valores
for (let i = 0; i < lista.length; i += 3) {
    const grupo = lista.slice(i, i + 3);
    agrupados.push(grupo); // Insere o grupo como uma sublista
}

// Salva 'agrupados' no localStorage como uma string JSON
localStorage.setItem('agrupados', JSON.stringify(agrupados));

botao = document.querySelector('.botaolixo')

// Exibe os grupos e cria elementos <p> com a cor de fundo
agrupados.forEach(item => {
    let novop = document.createElement('p');
    novop.style.backgroundColor = `rgb(${item[0]}, ${item[1]}, ${item[2]})`;
    document.querySelector('figure').appendChild(novop);

    novobotao = botao.cloneNode(true)
    novop.appendChild(novobotao)

});

listabotoes = document.querySelectorAll('button')

listabotoes.forEach(botao => {
    botao.addEventListener('click', function(event) {
        const t = event.currentTarget;
        const pai = t.closest('p');

        if (pai) {
            pai.remove()
        }
        });
    })
})