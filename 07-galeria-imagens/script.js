let main_image = document.getElementById("main-image")
let imagens = document.querySelectorAll(".thumbnail")

imagens.forEach(imagem => {
    imagem.addEventListener('click',()=>{
       let novoCaminho = imagem.src
       main_image.src = novoCaminho
    })
    
});