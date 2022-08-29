import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser (req:Request,res:Response) {
    try {
        const {name,email,nickname}=req.body

        if (
            !name||
            !email||
            !nickname
            ) {

            res
            .status(400)
            .send({message:"Preencha os campos obrigatórios name, nickname e email"})

        }

        const id :string = Date.now() + Math.random().toString()
        await insertUser(
            id,
            name,
            nickname,
            email
        )

        res
        .status(200)
        .send({message:"Usuário criado com sucesso."})

    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
        
    }
    
}