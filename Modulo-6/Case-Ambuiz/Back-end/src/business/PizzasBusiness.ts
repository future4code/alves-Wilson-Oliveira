import { ConflictError } from '../errors/ConflictError';
import { ParamsError } from '../errors/ParamsError';
import { AuthorizationError } from '../errors/AuthorizationError';
import { PizzasDatabase } from "../database/PizzaDataBase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { USER_ROLES } from '../models/User';
import moment from 'moment';
import { NotFoundError } from '../errors/NotFoundError';

export class PizzasBusiness {
    constructor(
        private showDatabase: PizzasDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public createShowBusiness = async (input:any) => {
        
        const response = {
            message: "Show cadastrado com sucesso",
            
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