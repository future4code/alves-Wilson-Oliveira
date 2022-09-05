import { Request, Response } from "express";
import productById from "../data/productById";
import purchaseRecord from "../data/purchaseRecord";
import userById from "../data/userById";

export default async function postPurchaseRecord(
    req:Request,
    res:Response
){
    try {
        
        const {userId, productId, quantity}= req.body

        if(!userId||!productId||!quantity){

            res.status(400).send('O campo userId, productId ou quantity está vazio')
        }

        const user =  await userById(userId)

        if(!user){

            res.status(400).send('userId inexistente')
        }

        const product =  await productById(productId)

        if(!product){

            res.status(400).send('productId inexistente')
        }

        if(isNaN(quantity)){
            res
            .status(400)
            .send('O campo qunatity precisa ser do tipo Number')
        }
        
        const id :string = Date.now() + Math.random().toString()
        
        const totalPrice= product.price * quantity
        

        await purchaseRecord(id, userId, productId, quantity, totalPrice)

        res.status(200).send({
            message:"Compra registrada com sucesso",
            id:id,
            totalPrice:totalPrice
        })

        


    } catch (error:any) {

        res
        .status(500)
        .send({
            message:error.message || error.sqlMessage
        })
        
        
    }
}