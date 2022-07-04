```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
const quantidade = arrayDeNumeros.filter((item)=>item==numeroEscolhido)
if(quantidade.length!==0){return `O número ${numeroEscolhido} aparece ${quantidade.length}x`}
else{return "Número não encontrado"}
}
ˋˋˋ 