// Crie uma aplicação Node que receba uma string representando uma tarefa.
//  O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas.
//  A lista de tarefas pode estar criada antes da execução do código.
//  Após adicionar o item à lista, exiba a lista atualizada.


if(process.argv[2]!==undefined){
console.log ("Tarefa adicionada com sucesso!")
const listaTarefas=["limpar a casa"]
listaTarefas.push(process.argv[2])
console.log(listaTarefas)
}else{console.log("Digite uma tarefa nova")}