let box = document.querySelector('.box')
let woman = document.querySelector('.woman')

let questions = document.querySelectorAll('.question')


let width = window.innerWidth

if(width <= 700){
    box.style.display = 'none'
    woman.src = './images/illustration-woman-online-mobile.svg'
}
else {
    woman.src = './images/illustration-woman-online-desktop.svg'
}


questions.forEach(question =>{
    question.addEventListener('click', ()=>{
        question.parentElement.classList.toggle('parentClicked')
        
    })
})