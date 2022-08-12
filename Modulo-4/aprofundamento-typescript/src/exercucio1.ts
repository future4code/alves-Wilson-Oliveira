// - **Exercício 1**
    
//     O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
//     a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
const minhaVariavel:string=""
// R:a variavael da erro
    
//     b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
    const meuNumero :string|number="2"
//     c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
enum cores {
AZUL="Azul",
VERDE="Verde",
AMARELO="Amarelo"

}
const novoObjeto:pessoa={corFavorita:cores.AZUL,idade:21,nome:"wil"}
type pessoa={nome:string,idade:number,corFavorita:string}
    
//     `nome`, que é uma string;
    
//     `idade`, que é um número;
    
//     `corFavorita`, que é uma string.
    
//     Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
    
//     d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.


// - **Exercício 2**
    
//     Observe a função a seguir, escrita em JavaScript:
    
  
    // function obterEstatisticas(numeros:number[]):{maior:number,menor:number,media:number} {
    
    //     const numerosOrdenados:number[] = numeros.sort((a:number, b:number) => a - b
    //     )
    
    //     let soma :number = 0
    
    //     for (let num of numeros) {
    //         soma += num
    //     }
    
    //     const estatisticas:{maior:number,menor:number,media:number} = {
    //         maior: numerosOrdenados[numeros.length - 1],
    //         menor: numerosOrdenados[0],
    //         media: soma / numeros.length
    //     }
    
    //     return estatisticas
    // }
  
    console.log()
    type amostraDeDados={
numeros:number[],
obterEstatisticas: (numeros:number[])=> {maior:number,menor:number,media:number}
    }

     const amostraDeIdades :amostraDeDados = {
    
        		numeros: [21, 18, 65, 44, 15, 18],
        
                obterEstatisticas: (numeros:number[]) =>  { 
    
                    const numerosOrdenados:number[] = numeros.sort((a:number, b:number) => a - b
                    )
                
                    let soma :number = 0
                
                    for (let num of numeros) {
                        soma += num
                    }
                
                    const estatisticas:{maior:number,menor:number,media:number} = {
                        maior: numerosOrdenados[numeros.length - 1],
                        menor: numerosOrdenados[0],
                        media: soma / numeros.length
                    }
                
                    return estatisticas
                }
        }
    
    // a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
    
    // b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
    
    // c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**.
    // // ```jsx
    // // const amostraDeIdades = {
    
    // // 		numeros: [21, 18, 65, 44, 15, 18],
    
    // // 		obterEstatisticas: (numeros) => {...}
    // // }
    // // ```
    
    // - Dica
        
    //     Ao posicionar o cursor sobre o nome da variável ou função, a IDE normalmente exibe a tipagem que está sendo implicitamente atribuída a ela.