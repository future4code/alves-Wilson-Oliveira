/*Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo
    
    ```jsx
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
   
    ```

    
    a) O que vai ser impresso no console?
     Resposta: o console vai imprimira 10 50
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    Resposta : a função ocorreria, porém não existe o argumento.

2. Leia o código abaixo
    
    ```jsx
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```
    
    a. Explique o que essa função faz e qual é sua utilidade.
    Resposta: essa função trasnforma todos os caracteres em minusculas e determina se "cenoura" existe na variavel textoDoUsuario 
    
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura` 
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra`
         
         resposta:I-true
         resposta:II-True
         resposta: III-false



*/


/*- **Exercícios de escrita de código**
    1. Escreva as funções explicadas abaixo:
        
        a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
        
        ```
        "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
        ```
        
        Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.*/
/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`).
 Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
*/


/*

function informacao () {
    const frase =" Eu sou wilson, tenho 29 anos, moro em Santos e sou estudante"
    console.log(frase)
 }
 informacao()

 

 function informacaoUsuario(nome,idade,cidade,profissao){
     const info = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
     console.log(info)

}
informacaoUsuario("wilson", "29","santos", "estudante")

informacaoUsuario(prompt("digite seu nome"), prompt("digite sua idade"), prompt("digite sua cidade"),prompt("digite sua profissão"))
*/

//exercicio 2


/*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

*/


function matematica (numero1,numero2){
  return ( numero1+numero2) 
   
}

console.log(matematica(4,8))


//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.


function matematica2 (numero1, numero2){
    return ( numero1 >= numero2) 
     
  }
  
  console.log(matematica2(8,4))

  //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

  function matematica3 (numero1){
    return ( numero1 % 2 ==0) 
     
  }
  
  console.log(matematica3(3))

  //d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

 function texto (mensagem){
   
   const mensagenCaps= mensagem.toUpperCase()
   const mensagenNumero=mensagem.length

   return (mensagenNumero+"   "+mensagenCaps)

   
 }

 console.log(texto("oii tudo bem?"))
  
 /*3 Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
 Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
Por fim, mostre no console o resultado das operações:*/



const num1= +prompt("insira um numero")
const num2 = +prompt ("insira um nomero")


const soma= (psoma1,psoma2)=> {
  return (psoma1+psoma2)
}

const sub = (psub1,psub2)=> {
  return (psub1-psub2)
}

const mult = (pmult1,pmult2) => {
  return (pmult1*pmult2)
}

const div = (pdiv1,pdiv2) => {
  return (pdiv1/pdiv2)
}

console.log(soma(num1,num2),sub(num1,num2),mult(num1,num2),div(num1,num2))



