// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const area1=(+prompt("digite a altura"))*(+prompt("digite a largura"))
  console.log (area1)

}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const idade1=(+prompt("insira o ano atual")-(+prompt("insira seu ano de nacimento")))
  console.log(idade1)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const altura2=(altura*altura)
  return peso/altura2

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
const pergunta1=(prompt("insira seu nome"))
const pergunta2= (prompt("insira dua idade"))
const pergunta3= (prompt("insira seu eimail"))
const informações1=`Meu nome é ${pergunta1}, tenho ${pergunta2} anos, e o meu email é ${pergunta3}.`
 console.log(informações1)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavotiras= [(prompt("Qual é a sua cor favorita?")),(prompt("Qual é a sua segunda cor favorita?")),(prompt("Qual é a sua terceira cor favorita?"))]
  console.log(coresFavotiras)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string=(string.toUpperCase())
  return (string)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 return custo / valorIngresso
  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  string1=string1.length
  string2=string2.length
  return string1===string2
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 return array[array.length-1]
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const array0=array[0]
  const array1= array[0]=array[array.length-1]
  const array12=array[array.length-1]=array0

  return array

  
 




  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase()===string2.toUpperCase()

  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual=+prompt("Qual o ano atual?")
const anoDeNascimento= +prompt("Qual o ano do seu nascimento?")
const anoDoRG=+prompt("Qual ano foi expedido seu rg?")
const idadeDoUsuario=(anoAtual-anoDeNascimento)
const idadeDoRG=(anoAtual-anoDoRG)
const renovação=(idadeDoUsuario>=50)
const maiorDe50=(idadeDoRG>=15)
const menorDe50=(idadeDoRG>=10)
if (renovação) {console.log(maiorDe50)} else {console.log(menorDe50)}

}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}