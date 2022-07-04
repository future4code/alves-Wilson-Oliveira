/*Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    ```jsx
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2
    
    let resultado = bool1 && bool2
    console.log("a. ", resultado)
    R: a. false
    
    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 
    R: b. false
    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)
    R: c. true
    console.log("d. ", typeof resultado)
    ```R: bolean
    
2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
    ```jsx
    let primeiroNumero = prompt(Digite um numero!)
    let segundoNumero = prompt(Digite outro numero!)
    
    const soma = primeiroNumero + segundoNumero
    
    console.log(soma)
    ```
    O coonsole imprimira os dois valores sem soma-los pois os considera como string, deve-se fazer a conversão para number

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso 
*/

// let primeiroNumero = prompt ("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const primeiroNumero2 = Number(primeiroNumero)
// const segundoNumero2 = Number (segundoNumero)
// const soma = primeiroNumero2 + segundoNumero2 

// console.log(soma)

//exercicio 1
let idade = prompt ("qual é a sua idade")
let idadeDoAmigo = prompt("qual a idade do seu amigo")
const idadeN = Number(idade)
const idadeDoAmigoN = Number(idadeDoAmigo)
const comparaçao = idadeN > idadeDoAmigoN
console.log  ("Sua idade é maior do que a do seu  amigo?", comparaçao)
const diferencaDeIdades = idadeN - idadeDoAmigoN 
console.log (diferencaDeIdades)

// Exercicio 2

const numeroPar = prompt ("Por favor insira um numero par")
const numeroParN = Number (numeroPar)
const Divisão = numeroParN % 2
console.log(Divisão)

//Exercicio 3
let idadeDosUsuario = prompt("quantos anos você tem?")
let idadeDosUsuarioN = Number (idadeDosUsuario)
let idadeDosUsuarioMeses = idadeDosUsuarioN * 12
let idadeDosUsuarioDias = idadeDosUsuarioN * 365
let idadeDosUsuarioHoras = idadeDosUsuarioDias * 24
console.log ("Você tem", idadeDosUsuarioMeses, "meses de idade" )
console.log ("Você tem ", idadeDosUsuarioDias, "dias de idade")
console.log ("Você tem ", idadeDosUsuarioHoras, " horas de idade")


// Exercicio 4

let numero1 = prompt("insira um numero")
let numero2 = prompt ("insira mais um numero")
let numero1N = Number(numero1)
let numero2N = Number (numero2)
const afirmacao1 = numero1N > numero2N
console.log ("O primeiro numero é maior que segundo?", afirmacao1)
const afirmacao2 = numero1N === numero2N
console.log  ("O primeiro numero é igual ao segundo?" ,afirmacao2)
const afirmacao3 = numero1N % numero2N === 0
console.log  ("O primeiro numero é divisível pelo segundo?",afirmacao3)
const afirmacao4 = numero2N % numero1N ===0
console.log  ("O segundo numero é divisível pelo primeiro?",afirmacao4)





