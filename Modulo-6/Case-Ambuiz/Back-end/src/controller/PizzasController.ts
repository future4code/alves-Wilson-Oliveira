import { ICreatePizzaInputDTO, IRecordPizzaIngredientInputDTO } from './../models/Pizzas';

import { Request, Response } from "express";
import { PizzasBusiness } from "../business/PizzasBusiness";

export class PizzasController {
    constructor(
        private pizzasBusiness: PizzasBusiness
    ) { }

    public createPizzaController = async (req: Request, res: Response) => {
        try {
            const input: ICreatePizzaInputDTO = {
                name:req.body.name,
                price:req.body.price,
            }
            

            const response = await this.pizzasBusiness.createPizzaBusiness(input)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public createIngredientController = async (req: Request, res: Response) => {
        try {
            const input = {
                name:req.body.name
            }

            const response = await this.pizzasBusiness.createIngredientBusiness(input)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public recordPizzaIngredientController = async (req: Request, res: Response) => {
        try {
            const input: IRecordPizzaIngredientInputDTO = {
                name:req.body.name,
                ingredients:req.body.ingredients
            }
            const response = await this.pizzasBusiness.recordPizzaIngredientBusiness(input)

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