document.addEventListener('DOMContentLoaded', function() {
    flash = document.querySelector('.imgflash')

    flash.addEventListener('click', function(){
        if (flash.getAttribute('src') == "img/flash.jpeg"){
            flash.setAttribute('src', 'img/flashpreto.jpeg')
        }
        else {
            flash.setAttribute('src', 'img/flash.jpeg')
        }
    })

const video = document.getElementById('videoElement');
const canvas = document.getElementById('canvas');
const captureColorButton = document.getElementById('captureColorButton');
const coresRGB = []; // Armazena as cores capturadas

// Inicializar a câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Erro ao acessar a câmera:", error);
    });

// Função para capturar a cor central do vídeo
function capturarCorCentral() {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Captura o pixel central
    const centerX = Math.floor(canvas.width / 2);
    const centerY = Math.floor(canvas.height / 2);
    const pixel = context.getImageData(centerX, centerY, 1, 1).data;
    const corCentral = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

    // Exibe a cor capturada e salva na lista
    coresRGB.push([pixel[0], pixel[1], pixel[2]]);
    console.log(`Cor capturada: ${corCentral}`);
}

// Evento do botão para capturar a cor
captureColorButton.addEventListener('click', capturarCorCentral);


})