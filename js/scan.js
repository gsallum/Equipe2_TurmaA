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

})