// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => { return a - b })

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((item) => {
        return item % 2 == 0
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const array7 = array.filter((item) => {
        return item % 2 == 0
    })
    return array7.map((item) => {
        return (item ** 2)
    })

}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return array.reduce((a, b) => {
        return Math.max(a, b)
    }, -Infinity);

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menor
    let maior
    let maiorDivide
    if (num1 > num2) {
        maior = num1, menor = num2
    } else {
        maior = num2, menor = num1
    }
    if (maior % menor == 0) {
        maiorDivide = true
    } else {
        maiorDivide = false
    };
    let diferenca1 = Number(maior - menor)
    const objeto = { maiorNumero: maior, maiorDivisivelPorMenor: maiorDivide, diferenca: diferenca1 }
    return objeto
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let i = 0
    let array = []
    while (i < n) { array.push(i * 2); ++i };
    return array
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB == ladoC && ladoA == ladoC) {
        return "Equilátero"
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let segundoMaior
    let segundoMenor
    let arrayDeSegundos


    ordem = array.sort((a, b) => {
        return a - b
    })
    segundoMaior = ordem[ordem.length - 2]
    segundoMenor = ordem[1]
    arrayDeSegundos = [segundoMaior, segundoMenor]
    return arrayDeSegundos
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoaAnonima = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return pessoaAnonima
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const altura = pessoas.filter(item => item.altura >= 1.5);
    const idade = altura.filter(item => item.idade > 14 && item.idade < 60);
    return idade

}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter(item => item.idade <= 14 || item.idade >= 60 || item.altura < 1.5);
    return pessoasNaoAutorizadas

}



// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let resultado = contas.map((tudo) => {
        let soma = tudo.compras.reduce((antes, depois) => antes + depois, 0)
        let saldo = tudo.saldoTotal

        return {
            ...tudo, saldoTotal: saldo - soma, compras: []
        }
    })
    return resultado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const consultasAlf = consultas.sort(function (a, b) { return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0) });
    return consultasAlf

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {


}