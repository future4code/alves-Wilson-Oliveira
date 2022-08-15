// - Exercício 1

//     Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”).
//  A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato: 

//     ```tsx
//     "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 
//     ```

//     - **Entradas/Saídas**

const apresentacao = (nome: string, dataNascimento: string): void => {

    console.log(`Olá me chamo ${nome}, nasci no dia ${dataNascimento.slice(0, 2)} do mês de ${dataNascimento.slice(3, 5)} do ano de ${dataNascimento.slice(-4)}`)
}


// - Exercício 2

//     Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

const tipoVariavel = (varialvel: any): void => {
    console.log(typeof (varialvel))
}

// - Exercício 3

//     Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes.
// Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme.
//  Os gêneros da plataforma se limitam aqueles encontrados no seguinte `ENUM` de gêneros:

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

const filmes = (nome: string, ano: number, genero: GENERO, pontuacao?: number): void => {
    if (pontuacao) {
        console.log(`nome: ${nome}, anoLancamento: ${ano}, genero: ${genero}, pontuacao: ${pontuacao} `)
    } else { console.log(`nome: ${nome}, anoLancamento: ${ano}, genero: ${genero}`) }
}


// - Exercício 4

//     O seguinte `array` traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:

enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

const arrayTrabalho: pessoasColaboradoras[] = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
]



type pessoasColaboradoras = {
    nome: string
    salário: number
    presencial: boolean
    setor: SETORES
}

const marketingPresencial = (pessoas: pessoasColaboradoras[]): void => {
    pessoas.filter((setor: pessoasColaboradoras) => {
        if (setor.setor === SETORES.MARKETING && setor.presencial === true) {
            console.log(setor)
        }
    })
}


// - Exercício 5

//     Considerando o `array` de usuários abaixo, 
// crie uma função que receba este `array` como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

const arrayUsuarios: { name: string, email: string, role: string }[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

const adminEmail = (usuarios: { name: string, email: string, role: string }[]): void => {
    usuarios.filter((item: { name: string, email: string, role: string }): boolean => {
        return item.role === "admin"
    }).map((item: { name: string, email: string, role: string }) => {
        console.log(item.email)
    })
}

// - Exercício 6
    
//     Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa,
//      você precisa entender como eles guardam as contas dos clientes. Basicamente,
//      eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente.

const clientesBank:{cliente:string,saldoTotal:number, debitos:number[]}[]=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [1,2] }
]

const clientesNegativos = (clientes:{cliente:string,saldoTotal:number, debitos:number[]}[])=>{
clientes.filter((item:{cliente:string,saldoTotal:number, debitos:number[]})=>{
        if(item.saldoTotal<item.debitos?.reduce((soma,i)=>{return soma+i})){
          console.log( item)
        }
        })
    }

    // - Exercício 7
    
    // Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de organização de estoque da empresa.
    //  A pessoa desenvolvedora anterior a você chegou a criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:



    const produtos :tipoProduto[] =[
        { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
        { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
        { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
        { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
        { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
        { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
        { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
    ]

    type tipoProduto = {
        nome: string,
        quantidade:number,
        valorUnitario:number|string
    }

    const ajustaPreco = (produtos:tipoProduto[]): void => {
        produtos.map((preco:tipoProduto)=>{
        const precoNumber=preco.valorUnitario as number
        const valorAjustado: string= precoNumber.toFixed(2).replace('.', ',')
        console.log( "R$ "+valorAjustado)
        })
    }



//  - Exercício 8
    
//     Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). 
// A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
    
//     - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//     - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
//     - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.


const renovarCarteira = (nascimentoData:string ,emissãoData:string)=>{ 
    const mudaData = (data:string )=>{
        const dia = data.slice(0,2)
        const mes = data.slice(3,5)
        const ano = data.slice(-4)
        return `${ano}/${mes}/${dia}`
    }
 const nascimentoFormatado=mudaData(nascimentoData)
 const emissãoFormatada = mudaData (emissãoData)
 const msPorano = 365* 24 * 60 * 60 * 1000
const idadeUsuario = (new Date().getTime() - new Date(nascimentoFormatado).getTime())/msPorano
const emissãoUsuario= (new Date() .getTime() - new Date(emissãoFormatada).getTime())/msPorano
if (idadeUsuario <=20 && emissãoUsuario>=5){console.log(true)}else
if (idadeUsuario >=50 && emissãoUsuario>=15){console.log(true)}else
if (idadeUsuario >20 && idadeUsuario<50 && emissãoUsuario>=10){console.log(true)}else{console.log(false)}


}



// - Exercício 9
    
//     Uma operação matemática bastante utilizada em probabilidade e estatística é o **fatorial**, representado por um **!** (ponto de exclamação). Ele consiste em realizar a multiplicação de todos os números (a partir de 1) até aquele colocado na operação. Veja os exemplos abaixo:
    
//     - `3! = 3*2*1 = 6`
//     - `4! = 4*3*2*1 = 24`
//     - `5! = 5*4*3*2*1 = 120`
//     - `6! = 6*5*4*3*2*1 = 720`
    
//     Isso vale para todos os números inteiros não negativos (também chamados de "números naturais"). Dois valores para se tomar cuidado são:  `1! = 1` e `0! = 1` (uma exceção da regra!).
    
//     Uma aplicação interessante do fatorial é o cálculo de anagramas de uma palavra. Anagrama é uma outra palavra (não precisa existir em português) com as mesmas letras da anterior em ordem diferentes. Por exemplo, anagramas da palavra `mesa` são: `ames`, `maes`, `meas`, `emsa`, `smea` e muitos outros.
    
//     A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da quantidade de letras. Para `mesa`, a quantidade é `4! = 24`
    
//     Considerando tudo o que foi mencionado, escreva uma função que receba uma `palavra` (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

const anagrama = (palavra:string ) =>{
    const numeroLetras=palavra.length
    let numeroAnagrama =1
    for(let i =0; i<Number(numeroLetras);++i){
        numeroAnagrama=numeroAnagrama*(i+1)
    }
    console.log(numeroAnagrama)
}

// - Exercício 10
//     - **Definição do problema**
        
//         O CPF consiste de 11 dígitos cuja configuração respeita o formato XXX.XXX.XXX-XX.
//          Para a construção de um número de CPF as seguintes regras são aplicadas.

const verificadorCPF = (cpf:string) =>{

    const somenteNumerosPrimeiro = [
        Number(cpf.slice(0,1))*10,
        Number(cpf.slice(1,2))*9,
        Number(cpf.slice(2,3))*8,
        Number(cpf.slice(4,5))*7,
        Number(cpf.slice(5,6))*6,
        Number(cpf.slice(6,7))*5,
        Number(cpf.slice(8,9))*4,
        Number(cpf.slice(9,10))*3,
        Number(cpf.slice(10,11))*2,
    ]
let primeiroVerificador= 11-(somenteNumerosPrimeiro.reduce((soma,i)=>{return soma+i})%11)
if(primeiroVerificador>=10){primeiroVerificador=0}
const primeiroComparador = Number(cpf.slice(12,13))
const somenteNumerosSegundo = [
    Number(cpf.slice(0,1))*11,
    Number(cpf.slice(1,2))*10,
    Number(cpf.slice(2,3))*9,
    Number(cpf.slice(4,5))*8,
    Number(cpf.slice(5,6))*7,
    Number(cpf.slice(6,7))*6,
    Number(cpf.slice(8,9))*5,
    Number(cpf.slice(9,10))*4,
    Number(cpf.slice(10,11))*3,
    Number(cpf.slice(12,13))*2
]
let segundoVerificador= 11-(somenteNumerosSegundo.reduce((soma,i)=>{return soma+i})%11)
if(segundoVerificador>=10){segundoVerificador=0}
const segundoComparador=Number(cpf.slice(13,14))
if(cpf.slice(0,3)===cpf.slice(4,7)&& cpf.slice(0,3)===cpf.slice(8,11)&&cpf.slice(4,7)===cpf.slice(8,11)){
    console.log(false)
}else{
if(primeiroComparador===primeiroVerificador&&segundoComparador===segundoVerificador){
    console.log(true)
}else{
    console.log(false)
}
}
}

;
// - Exercício 11
    
//     Escreva uma função para converter de números normais para algarismos romanos (`string`).
    
//     Os romanos eram bem inteligentes. Eles conquistaram a maior parte da Europa e a governaram por centenas de anos.
//      Inventaram estradas de concreto e até biquínis. Uma coisa que eles nunca descobriram foi o número zero.
//       Isso tornou a escrita e a datação de histórias extensas de suas façanhas um pouco mais desafiadoras, mas o sistema de números que eles criaram ainda está em uso hoje.

const converteRomano = (numero:number) => {
    let letrasRomanas = "";
    if (numero >= 1000) {
        const Milhar = Math.trunc((numero / 1000));
        numero=numero-(Milhar*1000)
        for (let i = 0; i < Milhar; i++) {
            letrasRomanas =letrasRomanas +"M,"
        }
    }
    if(numero >=900){
        letrasRomanas=letrasRomanas + "CM,"
        numero=numero-900
    }
    if(numero>=500){
        letrasRomanas=letrasRomanas + "D,"
        numero=numero-500
    }
    if(numero>=400){
        letrasRomanas=letrasRomanas + "CD,"
        numero=numero-400
    }
    if(numero>=100){
        for(let i =0 ; i <= numero/100;i++){
        letrasRomanas=letrasRomanas + "C,"
        numero=numero-100}
    }
    if(numero>=90){
        letrasRomanas=letrasRomanas + "XC,"
        numero=numero-90
    }
    if(numero>=50){
        letrasRomanas=letrasRomanas + "L,"
        numero=numero-50
    }
    if(numero>=40){
        letrasRomanas=letrasRomanas + "XL,"
        numero=numero-40
    }
    if(numero>=10){
        for(let i =0 ; i < numero/10;i++){
        letrasRomanas=letrasRomanas + "X,"
        numero=numero-10}
    }
    if(numero>=9){
        letrasRomanas=letrasRomanas + "IX,"
        numero=numero-9
    }
    if(numero>=5){
        letrasRomanas=letrasRomanas + "V,"
        numero=numero-5
    }
    if(numero>=4){
        letrasRomanas=letrasRomanas + "IV,"
        numero=numero-4
    }
    if(numero>=1&&numero<=3){
        for(let i =-1 ; i <= numero;i++){
        letrasRomanas=letrasRomanas + "I,"
        numero=numero-1
    }
    }
    console.log(letrasRomanas)
    console.log(numero)
};
