// a) Responda como comentário no seu código:
//  como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//  R: usamos a prioridade process.argv

// b) Crie um programa que receba seu nome e sua idade.
//  Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
if(process.argv[2]&&process.argv[3]!==undefined){
console.log("\x1b[32m" ,"ola",  process.argv[2] , "\x1b[31m" ,"! Você tem : ", process.argv[3], "anos. Em sete anos você tera ",( Number(process.argv[3])+7) )
}else{
    console.log("\x1b[31m","preencha corretamente todos os parametros")
}