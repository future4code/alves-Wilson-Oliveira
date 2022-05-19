/*.
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    ```jsx
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    ```
    R: ) codigo abaixo esta criando um laço que vai terminar quando a condição for atendinda.
    R:10
    
2. Leia o código abaixo:
    
    ```jsx
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
            console.log(numero)
        }
    }
    ```
    
    a) O que vai ser impresso no console?
    R:Todos os numeros maiores que 18
    
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

    R:Sim, só precisariamos escrever o array.length como condição.
    
3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
R: acredito que linha estara igual a 3




*/


//Exercicio 1
/*
const numeroDeBichos=+prompt("Quantos bichos de estimação você possue?")
if (numeroDeBichos==0){console.log("Que pena você pode adotar um bichinho")}
let i =0
let arrayDosBichos=[]
while(numeroDeBichos>i){
    let nomeDosBichos =prompt ("Digite o nome do seu bichinho");++i; arrayDosBichos.push(nomeDosBichos)
}
for (let bichos of arrayDosBichos)
console.log(bichos)
*/

//Exercicio 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

/*
let letraA =(array) =>{
    for(let  array1 of array)
    console.log(array1)
    
}
letraA(arrayOriginal)



let letraB=(array)=>{
    for (let array2 of array)
    console.log(array2/10)
}
letraB(arrayOriginal)
*/
/*
let letraC=(array)=> {
    for (let array3 of array)
    if (array3%2==0){
        console.log(array3)
    }
}

letraC(arrayOriginal)
*/
/*
let letraD=(array)=> {

    for (let i = 0; i < array.length; i++) {
        let array4=array[i]

    console.log(`O elemento do índex ${i} é ${array4}`)
    }
}
letraD(arrayOriginal)
*/
/*
let letraE=(array)=> {
    let maior = -Infinity
    let menor = Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
        else if  (array[i]< menor) {
            menor= array[i]
        }
    }
    return console.log(`O maior número é ${maior} e o menor é ${menor}`)
}
letraE(arrayOriginal)
*/

// Desafio:
/*
const numeroUsuario = Number(prompt("Escolha um numero e seu amigo tentará adivinhar"))
console.log("Vamos jogar!!!")
let indice = 0;
let numeroUsuario2= Number("")


while (numeroUsuario !== numeroUsuario2) {
    
    indice = indice + 1;
  numeroUsuario2= Number(prompt("Adivinhe o numero"))
    if (numeroUsuario == numeroUsuario2) {
        console.log(`O número chutado foi: ${numeroUsuario2}
     Acertou!!
        O número de tentativas foi: ${indice} `)
    }
    else if (numeroUsuario < numeroUsuario2) {
        console.log(
            `O número chutado foi: ${numeroUsuario2}
Errrrrrrrou, menor`)
    } else if (numeroUsuario > numeroUsuario2) {
        console.log(`O número chutado foi: ${numeroUsuario2}
Errrrrrrrou, é maior`)

    }
}
*/

/*

const numeroUsuario = Math.floor(Math.random()*100)
console.log("Vamos jogar!!!")
let indice = 0;
let numeroUsuario2= Number("")


while (numeroUsuario != numeroUsuario2) {
    
    indice = indice + 1;
  numeroUsuario2= Number(prompt("Adivinhe o numero"))
    if (numeroUsuario == numeroUsuario2) {
        console.log(`O número chutado foi: ${numeroUsuario2}
     Acertou!!
        O número de tentativas foi: ${indice} `)
    }
    else if (numeroUsuario < numeroUsuario2) {
        console.log(
            `O número chutado foi: ${numeroUsuario2}
Errrrrrrrou, menor`)
    } else if (numeroUsuario > numeroUsuario2) {
        console.log(`O número chutado foi: ${numeroUsuario2}
Errrrrrrrou, é maior`)

    }
}
(Math.floor(Math.random()*10))

*/

// Eu acredito que foi bem fácil comparado a dificuldade de fazer o codigo em sim!