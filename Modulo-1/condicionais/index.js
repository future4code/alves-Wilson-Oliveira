/*
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo:
    
    ```jsx
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 
o teste verifica se o numero é impar ou par
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
ar
    
    c) Para que tipos de números a mensagem é "Não passou no teste"? 
mpar
    
2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    ```jsx
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", ", preco)
    ```
    
    a) Para que serve o código acima?
Para que o cliente após escolher uma fruta e verifique seu preço
    
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta maça é 2.25
    
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
Exibiria tanto o praco do objeto pera quanto o praco de default
3. Leia o código abaixo:
    
    ```jsx
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    ```
    
    a) O que a primeira linha está fazendo?
esta exibindo um prompt que retornara um numero
    
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Se fosse o número 10 exibiria "esse numero passou no teste", se fosse -10 exibiria undefined
    
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
im, pois o console.log esta pedindo para acessar uma variavel que só existe dentro da função
    */

// Exercicio 1
    /*
    const idadeParaDirigir=prompt("Qual é a sua idade?")>=18
    if (idadeParaDirigir){console.log("Você tem idade para dirigir")}
    else {console.log("Você não tem idade para digirir")}
    */
//Exercicio 2
    /*
    const turnoDoAluno=prompt("Digite seu turno: M para matutino, V para vespertino e N para noturno").toUpperCase()
    function turnoDoalunoF(turno){
       
        if(turno=="M"){console.log("Bom dia!")}
        else if(turno=="V"){console.log("Boa tarde!")}
        else if(turno=="N"){console.log("Boa noite!")} 
        else{console.log("Opção invalida")}
    
    }
    turnoDoalunoF(turnoDoAluno)

    */

//Exercicio 3
    /*

    const turnoDoUsuario=prompt("Digite seu turno: M para matutino, V para vespertino e N para noturno").toUpperCase()
    switch(turnoDoUsuario){
    case 'M':
        console.log("Bom dia!")
        break
        case 'V':
            console.log("Boa tarde!")
            break
            case 'N':
                console.log("Boa noite!")
                break
                default:
                    (console.log("Opção invalida"))
                    break
    }
    */

 //Exercicio 4:
    /*

    const filmeCinema={
        generoDoFilme : prompt("Qual o genero do filme que você quer assistir?").toLowerCase()=="fantasia",
        precoDoIngresso : prompt("Qual o preço do ingresso?")<=15

    }
    if(filmeCinema.generoDoFilme&&filmeCinema.precoDoIngresso){
        console.log("Bom filme!")} else{console.log("Escolha outro filme :(")}

       */

//Desafio 1
/*
const filmeCinema={
    generoDoFilme : prompt("Qual o genero do filme que você quer assistir?").toLowerCase()=="fantasia",
    precoDoIngresso : prompt("Qual o preço do ingresso?")<=15

}
if(filmeCinema.generoDoFilme&&filmeCinema.precoDoIngresso){
    const lanchinho =prompt("Qual lanchinho você ira comprar?").toLowerCase()
    
    console.log(`Bom filme e aproveite seu/sua  ${lanchinho}!`)} else{console.log("Escolha outro filme :(")}

    */

//Desafio 2

const perguntas={
    nome:prompt("Insira seu nome completo:"),
    tipoDeJogo:prompt("Escolha o tipo de jogo: IN para internacional ou DO para nacional").toUpperCase(),
    etapaDoJogo:prompt("Escolha a etapa do jogo: SF para semifinal, DT para decisão do terceiro lugar, FI para final ").toUpperCase(),
    categoriaDoJogo:prompt("Escolha a categoria desejada: 1, 2, 3 ou 4"),
    quantidadeDeingressos:prompt("Insira a quantidade de ingressos"),
    valorDoingresso:undefined,
    moeda:undefined
}
if (perguntas.tipoDeJogo=="IN"){
    if (perguntas.etapaDoJogo=="SF"){
       if( perguntas.categoriaDoJogo==4){perguntas.valorDoingresso=220/4.1}
       else if(perguntas.categoriaDoJogo==3){perguntas.valorDoingresso=550/4.1}
       else if (perguntas.categoriaDoJogo==2){perguntas.valorDoingresso=880/4.1}
       else if (perguntas.categoriaDoJogo==1){perguntas.valorDoingresso=1320/4.1}
       
    }
    else if (perguntas.etapaDoJogo=="DT"){
        if( perguntas.categoriaDoJogo==4){perguntas.valorDoingresso= 170/4.1}
        else if(perguntas.categoriaDoJogo==3){perguntas.valorDoingresso=330/4.1}
        else if (perguntas.categoriaDoJogo==2){perguntas.valorDoingresso=440/4.1}
        else if (perguntas.categoriaDoJogo==1){perguntas.valorDoingresso=660/4.1}
        
    } 
    else if(perguntas.etapaDoJogo=="FI") {
        if( perguntas.categoriaDoJogo==4){perguntas.valorDoingresso=330/4.1}
        else if(perguntas.categoriaDoJogo==3){perguntas.valorDoingresso=880/4.1}
        else if (perguntas.categoriaDoJogo==2){perguntas.valorDoingresso=1320/4.1}
        else if (perguntas.categoriaDoJogo==1){perguntas.valorDoingresso=1980/4.1}
        
    }
    
} 
        else if (perguntas.tipoDeJogo =="DO"){
       if (perguntas.etapaDoJogo=="SF"){
        if( perguntas.categoriaDoJogo==4){perguntas.valorDoingresso=220}
        else if(perguntas.categoriaDoJogo==3){perguntas.valorDoingresso=550}
        else if (perguntas.categoriaDoJogo==2){perguntas.valorDoingresso=880}
        else if (perguntas.categoriaDoJogo==1){perguntas.valorDoingresso=1320}
        
       }
       else if (perguntas.etapaDoJogo=="DT"){
        if( perguntas.categoriaDoJogo==4){(perguntas.valorDoingresso=170)}
        else if(perguntas.categoriaDoJogo==3){perguntas.valorDoingresso=330}
        else if (perguntas.categoriaDoJogo==2){perguntas.valorDoingresso=440}
        else if (perguntas.categoriaDoJogo==1){perguntas.valorDoingresso=660}
        
    }
     else if(perguntas.etapaDoJogo=="FI") {
        if( perguntas.categoriaDoJogo==4){perguntas.valorDoingresso=330}
        else if(perguntas.categoriaDoJogo==3){perguntas.valorDoingresso=880}
        else if (perguntas.categoriaDoJogo==2){perguntas.valorDoingresso=1320}
        else if (perguntas.categoriaDoJogo==1){perguntas.valorDoingresso=1980}
    
     }
}

if (perguntas.tipoDeJogo=="IN"){perguntas.moeda="$"} else{perguntas.moeda="R$"}
if (perguntas.tipoDeJogo=="IN"){perguntas.tipoDeJogo="Interncaional"}
else if (perguntas.tipoDeJogo=="DO"){perguntas.tipoDeJogo="Nacional"}
if(perguntas.etapaDoJogo=="FI"){
    perguntas.etapaDoJogo="Final"} else if(perguntas.etapaDoJogo=="SF"){
        perguntas.etapaDoJogo= "Semifinal"} else if(perguntas.etapaDoJogo=="DT"){
            perguntas.etapaDoJogo = "Disputa do terceiro lugar "}


console.log("Dados da compra:")
console.log(`Nome: ${perguntas.nome}
Tipo de de jogo: ${perguntas.tipoDeJogo}
Etapa do jogo:   ${perguntas.etapaDoJogo}
Categoria:  ${perguntas.categoriaDoJogo}
Quantidade de Ingressos:  ${perguntas.quantidadeDeingressos} 
---Valores--- 
Valor do ingresso: ${perguntas.moeda} ${perguntas.valorDoingresso}
Valor total: ${perguntas.moeda} ${(perguntas.valorDoingresso)*perguntas.quantidadeDeingressos}

`)









