import { ICreateResultInputDTO } from './../../src/models/Result';
import { AuthenticatorMock } from '../mocks/AuthenticatorMock';
import { CompetitionDataBaseMock } from '../mocks/CompetitionDataBaseMock';
import { IdGeneratorMock } from '../mocks/IdGeneratorMock';
import { CompetitionBusiness } from '../../src/business/CompeticaoBusiness';
import { BaseError } from '../../src/errors/BaseError';

describe("Testando o método createResultBusiness da CompetitionBusiness", () => {
    const competitionBusiness = new CompetitionBusiness(
        new CompetitionDataBaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve ser possivel criar uma novo resultado", async () => {
        const input: ICreateResultInputDTO = {
            token: "token-mock",
            name: "João Carlos",
            competition: "Dardo",
            value: [34,3,4],
            unity: "m"
        }

        const response = await competitionBusiness.createResultBusiness(input)

        expect(response.message).toBe("Resultado cadastrado com sucesso")

    })

    test("Erro quando usuario não estiver logado", async () => {
        expect.assertions(2)

        try {
            const input: ICreateResultInputDTO = {
                token: "token",
                name: "João Carlos",
                competition: "Dardos",
                value: [34,3,4],
                unity: "m"
            }
            
            

            await competitionBusiness.createResultBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    test("Erro quando competition não existir ", async () => {
        expect.assertions(2)

        try {
            const input: ICreateResultInputDTO = {
                token: "token-mock",
                name: "João Carlos",
                competition: "Remo",
                value: 2,
                unity: "m"
            }
            
            

            await competitionBusiness.createResultBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Competição não cadastrada")
            }
        }
    })

    test("Erro quando 'name' tiver menos de 3 caractéres ", async () => {
        expect.assertions(2)

        try {
            const input: ICreateResultInputDTO = {
                token: "token-mock",
                name: "Jo",
                competition: "Dardo final",
                value: [34,3,4],
                unity: "m"
            }
            
            

            await competitionBusiness.createResultBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Paramentro 'name' deve conter no mínimo 3 caracteres e estar no formato string")
            }
        }
    })

    test("Erro quando a competição for 'Dardo' e value' não estiver no formato correto", async () => {
        expect.assertions(2)

        try {
            const input: ICreateResultInputDTO = {
                token: "token-mock",
                name: "João",
                competition: "Dardo",
                value: 3,
                unity: "m"
            }
            
            

            await competitionBusiness.createResultBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe(" A competição 'Dardo' precisa ter 3 valores numericos em um array")
            }
        }
    })

    test("Erro quando a competição não for 'Dardos' e value' não estiver no formato correto", async () => {
        expect.assertions(2)

        try {
            const input: ICreateResultInputDTO = {
                token: "token-mock",
                name: "João",
                competition: "100m classificatoria 1",
                value: [3,3,8],
                unity: "m"
            }
            
            

            await competitionBusiness.createResultBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parametro 'value' deve serdo tipo number")
        }
    }
    })

    test("Erro quando a  competição já estiver encerrada", async () => {
        expect.assertions(2)

        try {
            const input: ICreateResultInputDTO = {
                token: "token-mock",
                name: "João",
                competition: "Corrida",
                value: 20,
                unity: "m"
            }
            
            

            await competitionBusiness.createResultBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Competição encerrada")
        }
    }
    })





})