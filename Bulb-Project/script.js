// DOM

// Element selection
// var ele = document.querySelector('#box')
// console.log(ele)

// HTML Manipulation
// ele.innerHTML = '<h1>Hello world!</h1><h1>Hello</h1><h1>Hi</h1>'
// ele.textContent = '<h1>Hello world!</h1>'

// CSS Manipulation
// ele.style.backgroundColor = '#fff'
// ele.style.color = 'red'


// ele.addEventListener('click', function () {
//   ele.style.backgroundColor = 'cyan'
// })
// 



// getElementById and getElementByClassName
// const idwalah1 = document.getElementById('heading2')
// console.log(idwalah1)
// const classwalah1 = document.getElementsByClassName('heading1')
// console.log(classwalah1)

// Bulb Project
var bulb=document.querySelector('.box1')
var btn=document.querySelector('.box2')

var on = false;
btn.addEventListener('click',function(){
    if(on==false){
        bulb.style.backgroundColor='yellow'
        on=true
    }
    else{
            bulb.style.backgroundColor='black'
            on=false
        }
})
