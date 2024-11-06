document.addEventListener('DOMContentLoaded', function() {
    function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
    
        if (max === min) {
            h = s = 0; // Cor acromática
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h *= 60;
        }
        return [Math.round(h), s, l];
    }
    
    function hslToRgb(h, s, l) {
        let r, g, b;
    
        if (s === 0) {
            r = g = b = l; // Cor acromática
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
    
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h / 360 + 1/3);
            g = hue2rgb(p, q, h / 360);
            b = hue2rgb(p, q, h / 360 - 1/3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    
    function gerarMonocromatico(baseColor, numeroDeCores = 6) {
        const [h, s, l] = rgbToHsl(baseColor[0], baseColor[1], baseColor[2]);
        const monocromatico = [];
        const intervaloLuz = 10; // Define o intervalo de luminosidade para as variações
    
        // Gera cores monocromáticas ajustando apenas o Lightness
        for (let i = 1; i <= numeroDeCores; i++) {
            let novaLuminosidade = Math.min(100, l + intervaloLuz * i);  // Limita a 100%
            monocromatico.push(hslToRgb(h, s, novaLuminosidade / 100));
        }
    
        return monocromatico;
    }

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
    let corBase = [mediaR, mediaG, mediaB]
    // Gera as seis cores análogas

    let coresAnalogas = gerarMonocromatico(corBase);
    
    // Exibe cada cor análoga
    coresAnalogas.forEach((cor, index) => {
        let novop = document.createElement('p');
        novop.style.backgroundColor = `rgb(${cor[0]}, ${cor[1]}, ${cor[2]})`;
        document.querySelector('figure').appendChild(novop);
    });
    
})