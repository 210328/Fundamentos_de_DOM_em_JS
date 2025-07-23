let abri_modal = document.getElementById("open-modal-btn")
let fechar_modal = document.getElementById("close-modal-btn")
let modal = document.getElementById("modal-overlay")

abri_modal.addEventListener('click', () => {
    modal.classList.remove('hidden')
})
fechar_modal.addEventListener('click', () => {
    modal.className = 'hidden'
})
modal.addEventListener('click', (event) =>{
    if(event.target === modal){
       modal.className = 'hidden'
    }
})
document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
         modal.className = 'hidden'
    }
})