
import { Request, Response } from "express";
import { PizzasBusiness } from "../business/PizzasBusiness";

export class PizzasController {
    constructor(
        private pizzasBusiness: PizzasBusiness
    ) { }

    public CreateShowController = async (req: Request, res: Response) => {
        try {
            const input = {
                band: req.body.band,
                startsAt: req.body.startsAt,
                token: req.headers.authorization as string
            }


            const response = await this.pizzasBusiness.createShowBusiness(input)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    // public allShowsController = async (req: Request, res: Response) => {
    //     try {
    //         const input: IGetALLShowsInputDTO = {
    //             token: req.headers.authorization as string
    //         }

    //         const response = await this.showBusiness.allShowsBusiness(input)

    //         res.status(201).send(response)
    //     } catch (error: any) {
    //         res.status(400).send({ message: error.message })
    //     }
    // }

    // public payTicketController = async (req: Request, res: Response) => {
    //     try {
    //         const input: IPayTicketInputDTO = {
    //             showId: req.body.showId,
    //             token: req.headers.authorization as string
    //         }

    //         const response = await this.showBusiness.payTicketBusisness(input)

    //         res.status(201).send(response)
    //     } catch (error: any) {
    //         res.status(400).send({ message: error.message })
    //     }
    // }

    // public deleteTicketController = async (req: Request, res: Response) => {
    //     try {
    //         const input: IPayTicketInputDTO = {
    //             showId: req.body.showId,
    //             token: req.headers.authorization as string
    //         }

    //         const response = await this.showBusiness.deleteTicketBusiness(input)

    //         res.status(201).send(response)
    //     } catch (error: any) {
    //         res.status(400).send({ message: error.message })
    //     }
    // }
}