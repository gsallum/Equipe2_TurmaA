document.addEventListener('DOMContentLoaded', function() {

    lista = localStorage.getItem('listaMistura')

    agrupados = []

    for (let i = 0; i < lista.length; i += 3) {
        const grupo = lista.slice(i, i + 3);
        agrupados.push([grupo])

    }
    console.log(agrupados)

    for (item of agrupados){
        novop = document.createElement('p')
        novop.style.backgroundColor = item
        document.querySelector('figure').appendChild(novop)

        
    }

})