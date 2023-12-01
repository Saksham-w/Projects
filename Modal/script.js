let btn = document.querySelector('#openModal')

let modal = document.querySelector('.modal')

let closeBtn = document.querySelector('.close')

btn.addEventListener('click',() =>{
    modal.style.display = 'flex'
})

closeBtn.addEventListener('click', () =>{
    modal.style.display = 'none'
})

window.addEventListener('click',(event) =>{
    if(event.target==modal){
        modal.style.display='none'
    }
})
