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

//Desafio:
const inciarJogo=confirm("Bem vindo ao jogo de Blackjack"+"\n"+"Deseja iniciar uma nova rodada?")

let cartasUsuario=[comprarCarta(),comprarCarta()]
let cartasComputador=[comprarCarta(),comprarCarta()]
let cartasAA=cartasUsuario[0].valor==11&&cartasUsuario[1].valor==11||cartasComputador[0].valor==11&&cartasComputador[1].valor==11
let indice=0
let novasCartasUs=[]
let novasCartasUsTexto=[]
let novasCartasCP=[]
if(inciarJogo==true){
   while(cartasAA==true){
      cartasUsuario=[comprarCarta(),comprarCarta()],cartasComputador=[comprarCarta(),comprarCarta()]
   }
   
   let maisCartas=confirm(`Suas cartas são : ${cartasUsuario[0].texto}${cartasUsuario[1].texto} . A carta revelada do computador é : ${cartasComputador[0].texto}\n Deseja comprar mais uma carta?`)
   
  
   if(maisCartas==true){
      while(maisCartas==true){novasCartasUs.push (comprarCarta().texto);
      
         maisCartas=confirm(`Suas cartas são : ${cartasUsuario[0].texto}${cartasUsuario[1].texto}${novasCartasUs}. A carta revelada do computador é : ${cartasComputador[0].texto}\n Deseja comprar mais uma carta?`)

}
}
}
