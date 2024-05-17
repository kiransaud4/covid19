window.addEventListener('scroll', function(){
    var  a=window.scrollY
    if(a>100){
        document.querySelector('nav').classList.add('sticky')
    }
    else{
        document.querySelector('nav').classList.remove('sticky')

    }
})