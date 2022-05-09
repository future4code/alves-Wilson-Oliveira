/*Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
    ```jsx
    let a = 10
    let b = 10
    
    console.log(b)
    
    b = 5
    console.log(a, b)
    ```
    vai ser impreso 10 , 5
2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
    ```jsx
    let a = 10
    let b = 20
    c = a
    b = c
    a = b
    
    console.log(a, b, c)
    ```
    vai ser impreso 10,10,10
    
3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.
    
    ```jsx
    let horasDeTrabalhoDiaria = prompt("Quantas horas você trabalha por dia?")
    let salarioDiario = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${salarioDiario/horasDeTrabalhoDiaria} por hora`)
    ```
    
    */


 //Exercicio 1

let nome 
let idade 
console.log(typeof idade, typeof nome)
// tipo de váriavel undefined e foi expresso porque a váriavel se encontra indefinida no momento.
nome = prompt ("qual é seu nome?") 
idade = prompt ("qual é sua idade?")
console.log(typeof idade, typeof nome)
//as duas váriaveis retornaram string pois os valores são caractéres.
console.log ("Olá", nome, "você tem", idade ,"anos")


//Exercicio 2

let resposta1
let resposta2
let resposta3
const pergunta1 = "Você sabe nadar?"
const pergunta2 = "Estuda?"
const pergunta3 = "Pratica esportes?"
resposta1 = prompt ("Você sabe nadar?")
resposta2 = prompt("Estuda?")
resposta3 = prompt ("pratica esportes?")
console.log (pergunta1, resposta1, (","), pergunta2, resposta2, (","), pergunta3, resposta3, ("."))

//Exercicio 3

let a = 10
let b = 25
let c = a
a = b
b = c 
console.log ("a é igual", a,"e b é igual", b)


