import { BaseError } from './../../src/errors/BaseError';
import { IFindResultInputDTO, Result } from './../../src/models/Result';
import { AuthenticatorMock } from '../mocks/AuthenticatorMock';
import { CompetitionDataBaseMock } from '../mocks/CompetitionDataBaseMock';
import { IdGeneratorMock } from '../mocks/IdGeneratorMock';
import { CompetitionBusiness } from '../../src/business/CompeticaoBusiness';

describe("Testando o método resultByCompetition da CompetitionBusiness", () => {
    const competitionBusiness = new CompetitionBusiness(
        new CompetitionDataBaseMock(),
        new IdGeneratorMock(),
    new AuthenticatorMock()
    )

    test("Deve retornar o resultado de uma competição em ordem do classificação",async ()=> {
        const input : IFindResultInputDTO ={
            competition:"Dardo"
        }

        const response =  await competitionBusiness.resultsByCompetitionBusiness(input)

        expect(response.status).toBe("Em andamento")
        expect(response.classificação[0]).toBeInstanceOf(Result)

    })

    test("Erro quando a competição não existe", async () => {
        expect.assertions(2)

        try {
            const input : IFindResultInputDTO ={
                competition:"Darty"
            }

            await competitionBusiness.resultsByCompetitionBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Competição não cadastrada")
        }
    }
    })
})

    
