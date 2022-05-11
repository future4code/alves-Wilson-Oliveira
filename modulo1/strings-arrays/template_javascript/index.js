/*
1. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    ```jsx
    let array
    console.log('a. ', array)
    o console vai imprimir a.undefined
    
    array = null
    console.log('b. ', array)
    o cosole vai imprimir b. null
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
    o console vai imprimir c. 11

    let i = 0
    console.log('d. ', array[i])
    o console vai imprimir d. 3
    
    array[i+1] = 19
    console.log('e. ', array)
    o console vai imprimir 3,19,5,6,7,8,9,10,11,12,13
    
    const valor = array[i+6]
    console.log**('f. ', valor)**
    o console vai imprimir 8
    ```
    
2. Leia o código abaixo com atenção 
    
    ```jsx
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    ```
    
    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
    //O console imprimira (SUBI NUM ONIBUS EM MIRROCOS) 27
*/
    //Exercicio 1

    /*const nomeDoUsuario = prompt("digite seu nome de usuario").trim()
    const emailDoUsuario = prompt ("digite seu e-mail").trim()
    console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
*/
    //Exercicio 2
/*
    const comidasF =["strogonoff","batata","cenoura","bife","lazanha"]
    console.log (comidasF)

    console.log (`Minhas comidas favoritas são :`)
    console.log (comidasF[0])
    console.log (comidasF[1])
    console.log (comidasF[2])
    console.log (comidasF[3])
    console.log (comidasF[4])
    */

    //Exercicio 3
    /*
let listaDeTarefas = []
listaDeTarefas = [prompt("qual a primeira tarefa do dia?"),prompt("qual a segunda tarefa do dia"),prompt ("qual é a terceira tarefa do dia")]
console.log (listaDeTarefas)
listaDeTarefas.splice(prompt("qual das tres tarefaz voce já realizaou de 0 a 2?"),1)
console.log (listaDeTarefas)

*/