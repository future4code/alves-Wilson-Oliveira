import { BaseError } from './../../src/errors/BaseError';
import { IDeleteResultInputDtO } from './../../src/models/Result';
import { AuthenticatorMock } from './../mocks/AuthenticatorMock';
import { IdGeneratorMock } from './../mocks/IdGeneratorMock';
import { CompetitionDataBaseMock } from './../mocks/CompetitionDataBaseMock';
import { CompetitionBusiness } from './../../src/business/CompeticaoBusiness';

describe("Testando o método deleteResultBusiness da CompetitionBusiness", ()=>{
    const competitionBusiness = new CompetitionBusiness(
        new CompetitionDataBaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve ser possivel criar uma novo resultado", async () => {
        const input: IDeleteResultInputDtO = {
            token: "token-mock",
            resultId: "id-mock"
        }

        const response = await competitionBusiness.deleteResultBusiness(input)

        expect(response.message).toBe("Resultado cancelado")

    })

    test("Erro quando usuario não estiver logado", async () => {
        expect.assertions(2)

        try {
            const input: IDeleteResultInputDtO = {
                token: "token",
                resultId: "id-mock"
            }
            
            

            await competitionBusiness.deleteResultBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    test("Erro quando o 'resultId' não estiver cadastrado", async () => {
        expect.assertions(2)

        try {
            const input: IDeleteResultInputDtO = {
                token: "token-mock",
                resultId: "id"
            }
            
            

            await competitionBusiness.deleteResultBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Nenhum resultado encontrado ")
            }
        }
    })


})