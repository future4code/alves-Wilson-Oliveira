import { anoDeNascimento, caixaAlta, checarPar, formatoData, media, numeroLetras, numerosaleatorios, separarLetras, textoNumero, users } from "./exercicios"

describe("Testando a checkIfEven", () => {
        test("A entrada 10 deve retornar true", () => {
            const input = 10
            const output = checarPar(input)
    
            expect(output).toBe(true)
        })
    })

    describe("Testando caixa alta", () => {
        test("A entrada bananinha deve retornar BANANINHA", () => {
            const input = "bananinha"
            const output = caixaAlta(input)
    
            expect(output).toBe("BANANINHA")
        })
    })

    describe("Testando separador de letras", () => {
        test("A entrada banana deve retornar [b,a,n,a,n,a]", () => {
            const input = "banana"
            const output = separarLetras(input)
            expect(output).toEqual(["b","a","n","a","n","a"])
        })
    })

    describe("Testando numeros string", () => {
        test("A entrada '100' deve retornar 100", () => {
            const input = "100"
            const output = textoNumero(input)
            expect(output).toEqual(100)
        })
    })

    describe("Testando contar letras", () => {
        test("A entrada 'oii' deve retornar 3", () => {
            const input = "oii"
            const output = numeroLetras(input)
            expect(output).toBe(3)
        })
    })

    describe("Testando numero aleatorio", () => {
        test("Deve gerar um numero entra 1 e 10", () => {
            const output = numerosaleatorios()
            expect(output).toBeGreaterThanOrEqual(0)
            expect(output).toBeLessThanOrEqual(10)
        })
    })

    describe("ProcurandoUser", () => {
        test("o User astrodev deve estar presente na lista", () => {
            const user= {nome:"astrodev"}
            expect(users).toContainEqual(user)
        })
    })

        describe("media", () => {
            test("a media de [2,4,5] deve ser 4", () => {
                const input = [2,4,5]
                const output = Math.ceil(media(input))
                expect(output).toBe(4)
            })
        })

        describe("Idade em anos", () => {
            test("o ano 2000 deve retornar 22 anos", () => {
                const input = 2000
                const output = anoDeNascimento(input)
                expect(output).toBe(22)
            })
        })

        
        describe("Data formatada", () => {
            test("deve receber uma data no formato YYYY/MM/DD e devolver DD/MM/YYYY", () => {
                const input = '2022/09/26'
                const output = formatoData(input)
                expect(output).toBe('26/09/2022')
            })
        })






