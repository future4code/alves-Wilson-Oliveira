/*
1.  Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]
    
    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })
    ```
    
    a) O que vai ser impresso no console?
    R: o console ira imprimir cada item do array, depois a possição desse item, depois o array inteiro para cada item
    
2. Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })
    
    console.log(novoArrayB)
    ```
    
    a) O que vai ser impresso no console?
    R: O console ira imprimir a variavel nome para cada item do array 
3. Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC)
    ```
    
    a) O que vai ser impresso no console?
    R:o console ira imprimir todos os item do array que nao possuo a variavel "chijo".

    */

// Exercicio 1:
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
//A:

const apenasNomes = pets.map((item) => {
    return item.nome
})
console.log(apenasNomes)
//B:

const apenasSalsichas = pets.filter((item) => {
    return item.raca === "Salsicha"
})
console.log(apenasSalsichas)

//C:

const apenasPoodles = pets.filter((item) => {
    return item.raca === "Poodle"
}).map((item) => {
    return ` Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(apenasPoodles)
*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//A:
/*
const nomeDosItens = produtos.map((item) => {
     return item.nome 
    })
console.log(nomeDosItens)
*/
//B:
/*
const nomePrecoItens = produtos.map((item) => {
     return"nome: " + item.nome + ", preço com desconto de 5%: " + (item.preco-item.preco*0.05) 
    })
console.log (nomePrecoItens)
*/
//C:
/*
const categoriaBebidas = produtos.filter ((item)=>{
    return item.categoria=="Bebidas"
})
console.log(categoriaBebidas)
*/
//D:
/*
const NomeYpe = produtos.filter ((item)=>{
    return item.nome.includes("Ypê")==true
})
console.log  (NomeYpe)
*/
//E:
/*
const NomeYpe = produtos.filter ((item)=>{
    return item.nome.includes("Ypê")==true
}).map((item)=>{
    return "compre " + item.nome + " por "+ item.preco
})
console.log(NomeYpe)
*/

//Desafio:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
/*
let pokemonsOrdenA = pokemons.map((item) => {
    return item.nome
}).sort((a,b)=>{if (a<b)return -1; if
     (a<b) 1; return 0})
console.log(pokemonsOrdenA)
*/
//Desafio 2:
/*
const tipoDePokemon = pokemons.map((item,) => {
    return item.tipo
})
const TipoPokemon = tipoDePokemon.filter((item, i) => {
    return tipoDePokemon.indexOf(item) === i
})
console.log(TipoPokemon)
*/

