import { Request, Response } from "express";
import allProducts from "../data/allProducts";

export default async function getAllProducts (
    req:Request,
    res: Response
){
    try {

        let {order, search}= req.query 

        if(!order){
            order= "asc"
        }

        if(!search){
            search=""
        }
        
        const result= await allProducts(order as string, search as string)

        if(!result){
            res
            .status(400)
            .send("Nenhum produto cadastrado")
        }


        res.status(200).send(result)

    } catch (error:any) {

        res
        .status(500)
        .send("Ocorreu um erro inexperado")
    }
}