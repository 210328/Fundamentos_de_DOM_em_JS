let dropdown =document.querySelectorAll('.accordion-header')

dropdown.forEach((item) => {
    item.addEventListener('click',()=>{
        dropdown.forEach((outroitem) => {
            if(outroitem !== item) {
            outroitem.nextElementSibling.classList.add('hidden')
        }
        })
        const content = item.nextElementSibling
        content.classList.toggle('hidden')
        })
    }
)
