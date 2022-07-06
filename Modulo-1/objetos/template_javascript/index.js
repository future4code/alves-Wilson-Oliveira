/*
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1.  Leia o código abaixo

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) O que vai ser impresso no console?
R:Será impresso no console na primeira linha Matheus Nachtergaele,
 na segunda linha Virginia Cavendishe na terceira linha Globo", horario: "14h"

2. Leia o código abaixo
    
    ```jsx
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```
    
    a) O que vai ser impresso no console?
    R:sera impreso no console o nome do cão:juca,idade: 3, raca: "SRD, o nome do gato:juba,idade: 3, raca: "SRD e o nome da tartarugacão:jubo,idade: 3, raca: "SRD
    
    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
    faz um espelhamento do objeto
    
3. Leia o código abaixo
    
    ```jsx
   
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    
    ```
    
    a) O que vai ser impresso no console?
    R: sera impresso na primeira linha o valor da chave backender, na segunda retornara como vazio .
    
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    R:Sim  a chave altura não existe nesse objeto, por isso restorna undefined 
    */

    // Exercicios de escrita:

    // Exercicio: 1-a

    /*
    const nomeApelido={
        nome: "wilson",
        apelido:["will"," wilsinho"," wilzeira"]
    }
    function nomeApelidoFuncao (nomeF, apelidoF){
        console.log(`Eu sou ${nomeF}, mas pode me chamar de ${apelidoF}`)
    }

        
nomeApelidoFuncao(nomeApelido.nome,nomeApelido.apelido) 
// Exercicio 1-b=
const nomeApelido2= {...nomeApelido,
apelido:[" wilsão"," snow"," lord"]
}
nomeApelidoFuncao(nomeApelido2.nome,nomeApelido2.apelido)

*/

// Exercicio 2
/*
const objeto1={
    nome:"wilson",
    idade:29,
    profissao:"estudante"
}
const objeto2={
    nome:"luiz",
    idade:27,
    profissao:"atendente"
}
function arrayobj(nome,idade,profissao){
    const arrayObjetos = [nome,nome.length,idade,profissao,profissao.length]
    return console.log(arrayObjetos)
}

arrayobj(objeto1.nome,objeto1.idade,objeto1.profissao)
arrayobj(objeto2.nome,objeto2.idade,objeto2.profissao)


*/
    


 
 

    