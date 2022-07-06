/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//Nosso jogo:
/*

const boasVindas = console.log("Boas vindas ao jogo de Blackjack!")


let desejaContinuar = confirm("Deseja iniciar o jogo? ")
if (desejaContinuar == false) { console.log("O jogo acabou!!") }
while (desejaContinuar === true) {
   if (desejaContinuar == true) {
      let cartaUsuario = { c1: comprarCarta(), c2: comprarCarta() }
      let cartaComputador = { c1: comprarCarta(), c2: comprarCarta() }
      let somaUsuario = cartaUsuario.c1.valor + cartaUsuario.c2.valor
      let somaComputador = cartaComputador.c1.valor + cartaComputador.c2.valor
      console.log("Usuário - cartas: ", cartaUsuario.c1.texto,",", cartaUsuario.c2.texto, "Pontuação = ", somaUsuario)
      console.log("Computador - cartas: ", cartaComputador.c1.texto,",", cartaComputador.c2.texto, " Pontuação = ", somaComputador)
      
      if (somaUsuario > somaComputador) {
         console.log("O usuário ganhou!!")
      } else if (somaUsuario == somaComputador) {
         console.log("Empate!")
      } else {
         console.log("O computador ganhou!")
      }
      console.log("")
      desejaContinuar = confirm("Deseja jogar novamente? ")
   } if (desejaContinuar === false) { console.log("O jogo acabou!") }
}
  
*/
