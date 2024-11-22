document.addEventListener('DOMContentLoaded', function() {
    

    img_src = 'img/' + localStorage.getItem('cor') + '_' + localStorage.getItem('formato') + '.jpeg'
    console.log(img_src)
    img = document.querySelector('.imgVisu')
    img.src = img_src

})