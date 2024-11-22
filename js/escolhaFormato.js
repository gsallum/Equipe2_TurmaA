document.addEventListener('DOMContentLoaded', function() {
    botaos = document.querySelectorAll('button')

    for (botao of botaos) {

        botao.addEventListener('click', function(event){
            t = event.currentTarget
            formato = t.querySelector('img').getAttribute('src').slice(4, -5)
            localStorage.setItem('formato', formato)
        })
        }
})