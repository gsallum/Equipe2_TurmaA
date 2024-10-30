document.addEventListener('DOMContentLoaded', function() {
    flash = document.querySelector('.imgflash')
    imgflash = flash.getAttribute('src')

    paibotao = flash.closest()

    paibotao.addEventListener('click', function(){
        if (imgflash == "img/flash.jpeg"){
            flash.setAttribute('src', 'img/flashpreto.jpeg')
        }
    })

})