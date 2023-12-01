var a=document.querySelector('.dark')
var moon=document.querySelector('#moon')
var sun=document.querySelector('#sun')


var toggle=false;

a.addEventListener('click',()=>{
    if(toggle==false){
        document.body.classList.add('darkTheme')
        moon.style.display='none'
        sun.style.display='flex'
        toggle=true
    }
    else{
        document.body.classList.remove('darkTheme')
        moon.style.display='flex'
        sun.style.display='none'
        toggle=false
    }
})