var bulb=document.querySelectorAll('.box')
var btn=document.querySelector('.btn')

bulb.forEach(function(a){
    a.addEventListener('click', function(){
      a.style.opacity='0'
    })
})

btn.addEventListener('click', function(){
    bulb.forEach(function(a){
        a.style.opacity='1'
    })
})