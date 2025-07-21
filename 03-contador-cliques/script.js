let contClick =0
let contator = document.getElementById("contador")
botao = document.getElementById("botao-clicar")
botao.addEventListener("click",function(){
    contClick++
    contador.textContent = contClick

}
)
