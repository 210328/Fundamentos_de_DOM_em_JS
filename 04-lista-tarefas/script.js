const entradaDados = document.getElementById('input-tarefa')
const botaoAdicionar = document.getElementById('botao-adicionar')
const listaTarefas = document.getElementById('lista-tarefas')

botaoAdicionar.addEventListener('click', function(){
    if (entradaDados.value.trim() === '') {
        alert('Por favor, insira uma tarefa.')
        return
    }
    let novaTarefa = document.createElement('li')
    novaTarefa.textContent = entradaDados.value
    novaTarefa.addEventListener('click', function() {
        novaTarefa.classList.toggle('completed')
    })
    listaTarefas.appendChild(novaTarefa)
    entradaDados.value = ''
    
})
