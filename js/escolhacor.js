document.addEventListener('DOMContentLoaded', function() {
    botaos = document.querySelectorAll('button')

    for (botao of botaos){

    botao.addEventListener('click', function(event){
        t = event.currentTarget
        cor = t.querySelector('img').getAttribute('src')
        localStorage.setItem('img da cor', cor)
    })
    }
})