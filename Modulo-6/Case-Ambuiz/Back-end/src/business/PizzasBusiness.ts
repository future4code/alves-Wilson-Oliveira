import { ICreatePizzaOutputDTO, ICreatePizzaInputDTO, ICreateingredientInputDTO, ICreateingredientOutputDTO, IRecordPizzaIngredientInputDTO, IRecordPizzaIngredientOutputDTO } from './../models/Pizzas';
import { ConflictError } from '../errors/ConflictError';
import { ParamsError } from '../errors/ParamsError';
import { PizzasDatabase } from "../database/PizzaDataBase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { NotFoundError } from '../errors/NotFoundError';

export class PizzasBusiness {
    constructor(
        private pizzasDatabase: PizzasDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public createPizzaBusiness = async (input:ICreatePizzaInputDTO) => {
        const {name, price} = input


        if(!name || !price){
            throw new ParamsError("Parametros invalidos")
        }

        if (typeof (name) !== "string"){
            throw new ParamsError("Parametro 'name' deve ser uma string")
        }

        if(typeof (price)!== "number" || price < 0 ){
            throw new ParamsError("Parametro 'price' invalido")
        }


        const findPizzasByName = await this.pizzasDatabase.findPizzasByName(name)

        if(findPizzasByName){
            throw new ConflictError("Pizza ja registrada")
        }


        
        await this.pizzasDatabase.createPizzasData(input)
        
        const response:ICreatePizzaOutputDTO = {
            message: "Pizza cadastrado com sucesso",
        }


        return response
    }

    public createIngredientBusiness = async (input:ICreateingredientInputDTO) => {
        const {name} = input

        if(!name ){
            throw new ParamsError("Parametro invalido")
        }

        if (typeof (name) !== "string"){
            throw new ParamsError("Parametro 'name' deve ser uma string")
        }


        const findPizzasByName = await this.pizzasDatabase.findIngredientByName(name)

        if(findPizzasByName){
            throw new ConflictError("Ingrediente já registrado")
        }

        await this.pizzasDatabase.createIngredientsData(input)
        
        const response:ICreateingredientOutputDTO = {
            message: "Ingrediente cadastrado com sucesso",
        }

        return response
    }

    public recordPizzaIngredientBusiness = async (input:IRecordPizzaIngredientInputDTO) => {
        const {name, ingredients}= input


    if(ingredients.length <= 0){
        throw new ParamsError("Parametro 'ingredients' invalido")
    }

    if(typeof(ingredients)!== "object"){
        throw new ParamsError("Parametro 'ingredients' deve ser um array de strings")
    }

        if(!name ){
            throw new ParamsError("Parametro invalido")
        }

        if (typeof (name) !== "string"){
            throw new ParamsError("Parametro 'name' deve ser uma string")
        }

        const findIngredientByName = await this.pizzasDatabase.findPizzasByName(name)

        if(!findIngredientByName){
            throw new ConflictError("Pizza não registrada")
        }
    

for (let ingredient of ingredients){
     const findIngredient=await this.pizzasDatabase.findIngredientByName(ingredient)
     if(!findIngredient){
        throw new NotFoundError("ingredientes não registrados")
     }
}

    
    ingredients.map(async(item)=>{
        const pizza_ingredient={
            name:name,
            ingredient:item
        }
        await this.pizzasDatabase.recordPizzaIngredients(pizza_ingredient)
    })


    const response:IRecordPizzaIngredientOutputDTO = {
        message: `Ingredientes da pizza ${name} registrados com sucesso` 
    }

    return response

}

    // public allShowsBusiness = async (input: IGetALLShowsInputDTO) => {

    //     const token = input.token

    //     if (!token) {
    //         throw new ParamsError()
    //     }


    //     const payload = this.authenticator.getTokenPayload(token)

    //     if (!payload) {
    //         throw new AuthenticationError()
    //     }


    //     const showsDB = await this.showDatabase.getAllShowsData()

    //     const shows: any = showsDB.map(show => {
    //         return new Show(
    //             show.id,
    //             show.band,
    //             show.starts_at
    //         )
    //     })

    //     for (let show of shows) {
    //         const showId = show.getId()
    //         const ticket = await this.showDatabase.ticketByIdData(showId)
    //         const quantityTicket = show.getTickets() - ticket
    //         show.setTickets(quantityTicket)
    //     }

    //     const response: IGetShowsOutputDTO = {
    //         shows
    //     }

    //     return response
    // }

    // public payTicketBusisness = async (input: IPayTicketInputDTO) => {

    //     const { showId, token } = input

    //     if (!showId) {
    //         throw new ParamsError()
    //     }

    //     const payload = this.authenticator.getTokenPayload(token)

    //     if (!payload) {
    //         throw new AuthenticationError()
    //     }

    //     if (typeof showId !== "string") {
    //         throw new ParamsError("band precisa ser uma string")
    //     }

    //     const showDB: IShowDB | undefined = await this.showDatabase.findShowByIdData(showId)

    //     if (!showDB) {
    //         throw new NotFoundError("show não encontrado")
    //     }

    //     const show = new Show(
    //         showDB.id,
    //         showDB.band,
    //         showDB.starts_at
    //     )

    //     const sameTicket = await this.showDatabase.verifyTicketData(payload.id, showId)

    //     if (sameTicket) {
    //         throw new ConflictError("Você já comprou ingresso para este show")
    //     }

    //     const tickets = await this.showDatabase.ticketByIdData(showId)

    //     show.setTickets(show.getTickets() - tickets)


    //     if (show.getTickets() <= 0) {
    //         throw new ConflictError("ingressos esgotados")
    //     }

    //     const id = this.idGenerator.generate()

    //     const ticket: ITicketDB = {
    //         id,
    //         show_id: showId,
    //         user_id: payload.id
    //     }

    //     await this.showDatabase.payTicketData(ticket)

    //     const response: ICreateTicketOutputDTO = {
    //         message: "Ingresso reservado com sucesso",
    //         id: id
    //     }

    //     return response
    // }

    // public deleteTicketBusiness = async (input: IDeleteTicketInputDTO) => {

    //     const { showId, token } = input


    //     if (!showId) {
    //         throw new ParamsError()
    //     }

    //     const payload = this.authenticator.getTokenPayload(token)

    //     if (!payload) {
    //         throw new AuthenticationError()
    //     }

    //     if (typeof showId !== "string") {
    //         throw new ParamsError("band precisa ser uma string")
    //     }

    //     const showDB: IShowDB | undefined = await this.showDatabase.findShowByIdData(showId)

    //     if (!showDB) {
    //         throw new NotFoundError("show não encontrado")
    //     }


    //     const sameTicket = await this.showDatabase.verifyTicketData(payload.id, showId)

    //     if (!sameTicket) {
    //         throw new ConflictError("nenhum ingresso encontrado")
    //     }

    //     await this.showDatabase.deleteTicketData(sameTicket.id)

    //     const response: IDeleteTicketOutputDTO = {
    //         message: "reserva cancelada"
    //     }

    //     return response


    // }


}