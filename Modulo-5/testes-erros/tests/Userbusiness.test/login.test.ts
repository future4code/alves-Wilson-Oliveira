import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock"
import { HashManagerMock } from ".././mocks/HashManagerMock"
import { IdGeneratorMock } from ".././mocks/IdGeneratorMock"
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock"

describe("Testando o método login da UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Um token é retornado quando o login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

    test("Erro quando 'password' possuir menos de 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "fulano@gmail.com",
                password: "123"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })

    test("Erro quando 'password' for incorreto", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "bananinha123"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Password incorreto")
            }
        }
    })

    test("Erro quando o parametro email não apresenta o formato correto", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "fulano",
                password: "123456"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Erro quando o email não é encontrado", async () => {
        expect.assertions(2)
    try {
        const input:ILoginInputDTO = {
            email: "usermock33@gmail.com",
            password: "123456"
        }
    
        await userBusiness.login(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("Email não cadastrado")
        }
    }
    })

    test("Erro com o password incompativel", async () => {
        expect.assertions(2)
    try {
        const input:ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha55"
        }
    
        await userBusiness.login(input)
    
    } catch (error) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Password incorreto")
        }
    }
    })
})
