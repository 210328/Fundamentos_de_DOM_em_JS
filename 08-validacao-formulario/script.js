let formulario = document.getElementById("meu-form")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    checkInputs()

})
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs(){
    const email = document.getElementById("email")
    let senha = document.getElementById("password")

    const emailTexto = email.value.trim()
    let senhaTexto = senha.value.trim()

    if (emailTexto === ""){
        setErrorFor(email, 'O email é obrigatorio')
    }
    else if(!isEmail(emailTexto)){
        setErrorFor(email, 'O endereço de email não esta certo')
    }
    else{
        setSuccessFor(email)
    }
    if (senhaTexto === ""){
        setErrorFor(senha, 'A senha é obrigatoria')
    }
    else if(senhaTexto == "000")){
        setErrorFor(senha, 'A senha não esta certa')
    }
    else{
        setSuccessFor(senha)
    }
}
function setErrorFor(input, mensagemAlterada){
    let elementoPai = input.parentElement
    let mensagem = elementoPai.querySelector("small")

    elementoPai.className='form-control error'
    
    mensagem.textContent = mensagemAlterada
}

function setSuccessFor(input){
    let elementoPai = input.parentElement
    elementoPai.className='form-control success'
}