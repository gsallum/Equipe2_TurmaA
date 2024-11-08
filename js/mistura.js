document.addEventListener('DOMContentLoaded', function() {
    // Recupera 'agrupados' do localStorage e converte de volta para um array
let agrupados = JSON.parse(localStorage.getItem('agrupados'));

// Inicializa variáveis para somar os valores de R, G e B
let totalR = 0, totalG = 0, totalB = 0;
let totalCores = agrupados.length;

// Soma os valores de cada cor
agrupados.forEach(cor => {
    totalR += cor[0];
    totalG += cor[1];
    totalB += cor[2];
});

// Calcula a média para cada componente de cor
let mediaR = Math.round(totalR / totalCores);
let mediaG = Math.round(totalG / totalCores);
let mediaB = Math.round(totalB / totalCores);

// Cor final da mistura
let corMistura = `rgb(${mediaR}, ${mediaG}, ${mediaB})`;


function after(){
    p = document.querySelector('figure p')
    p.style.backgroundColor = corMistura
    document.querySelector('figure').classList = ''
    document.querySelector('.container').classList = '.hidden'
}

setTimeout(after, 4000)



})