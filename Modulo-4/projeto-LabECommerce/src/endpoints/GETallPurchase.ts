import { Request, Response } from "express";

import allPurchase from "../data/allPurchase";

export default async function getAllPurchase (
    req:Request,
    res: Response
){
    try {

        const id = req.params.user_id
        
        const result= await allPurchase(id)

        if(!result){
            res
            .status(400)
            .send("Nenhuma compra cadastrada")
        }

        res
        .status(200)
        .send(result)

    } catch (error:any) {

        res
        .status(500)
        .send("Ocorreu um erro inexperado")
    }
}