let texto = document.getElementById("texto");
let contador_caracteres = document.getElementById("contador");


texto.addEventListener("input", function() {
   let textoValor = texto.value;
   let quantidadeCaracteres = textoValor.length;
   contador_caracteres.textContent = quantidadeCaracteres;
   
})