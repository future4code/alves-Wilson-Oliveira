import { AuthenticatorMock } from '../mocks/AuthenticatorMock';
import { CompetitionDataBaseMock } from '../mocks/CompetitionDataBaseMock';
import { IdGeneratorMock } from '../mocks/IdGeneratorMock';
import { CompetitionBusiness } from '../../src/business/CompeticaoBusiness';


describe("Testando o método AllCompetitionBusiness da CompetitionBusiness", () => {
    const competitionBusiness = new CompetitionBusiness(
        new CompetitionDataBaseMock(),
        new IdGeneratorMock(),
    new AuthenticatorMock()
    )
    test("Deve retornar um array com todas as competições cadastradas", async () => {
        
        const response = await competitionBusiness.allCompetitionBusiness()


        expect(response.length).toBe(2)
        expect(response[0].competicao).toBe("Dardo")
        expect(response[0].enceramento).toBe("18/12/2022")
        
    })
})