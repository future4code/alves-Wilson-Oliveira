import { ICreateCompetitionInputDTO } from '../../src/models/Competition';
import { AuthenticatorMock } from '../mocks/AuthenticatorMock';
import { CompetitionDataBaseMock } from '../mocks/CompetitionDataBaseMock';
import { IdGeneratorMock } from '../mocks/IdGeneratorMock';
import { CompetitionBusiness } from '../../src/business/CompeticaoBusiness';
import { BaseError } from '../../src/errors/BaseError';


describe("Testando o método createCompetition da CompetitionBusiness", () => {
    const competitionBusiness = new CompetitionBusiness(
        new CompetitionDataBaseMock(),
        new IdGeneratorMock(),
    new AuthenticatorMock()
    )

    test("deve ser possivel criar uma nova competição", async () => {
        const input:ICreateCompetitionInputDTO = {
            token:"token-mock",
            competition:"Dardos",
            limitDate: "2022-08-02"
        }
      
        const response = await competitionBusiness.createCompetitionBusiness(input)

        expect(response.message).toBe("Competição cadastrada com sucesso!")

    })

    test("Erro quando usuario não estiver logado", async () => {
        expect.assertions(2)

        try {
            const input:ICreateCompetitionInputDTO = {
                token:"token33",
                competition:"Dardos",
                limitDate: "2022-08-02"
            }
            
            

            await competitionBusiness.createCompetitionBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    test("Erro quando competition tiver menos que 3 caracteres ", async () => {
        expect.assertions(2)

        try {
            const input:ICreateCompetitionInputDTO = {
                token:"token-mock",
                competition:"rt",
                limitDate: "2022-08-02"
            }
            
            

            await competitionBusiness.createCompetitionBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Paramentro 'competicao' inferior a 3 caracteres")
            }
        }
    })

    test("Erro quando limitDate tiver um formato inregular", async () => {
        expect.assertions(2)

        try {
            const input:ICreateCompetitionInputDTO = {
                token:"token-mock",
                competition:"Dardos",
                limitDate: "2rt43d"
            }
            
            

            await competitionBusiness.createCompetitionBusiness(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Paramentro 'data' com formato inregular")
            }
        }
    })
})