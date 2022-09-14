import { Request, Response } from "express";
import createProduct from "../data/createProduct";

export default async function postCreateProduct(req:Request, res:Response){

    const {name,price,imageUrl} = req.body

    try {

        if(!name||!price||!imageUrl){
            res
            .status(400)
            .send('Os campos name, price e imageUrl são obrigatórias')
        }

        if(isNaN(price)){
            res
            .status(400)
            .send('O campo price precisa ser do tipo Number')
        }

        const id: string = Date.now() + Math.random().toString()

        await createProduct(id, name, price, imageUrl)

        res.status(201).send({
            message:"produto criado com sucesso",
            id: id
        })

    } catch (error:any) {
        res
        .status(500)
        .send({
            message: error.message|| error.sqlMessage
        })
    }

    
}