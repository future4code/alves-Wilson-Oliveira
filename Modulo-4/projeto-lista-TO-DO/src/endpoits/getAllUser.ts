import { Request, Response } from 'express';
import totalUsers from '../data/totalUsers';

export default async function getAllUser (
    req:Request,
    res:Response
) {
    try {

        const result = await totalUsers()
        

        if(!result){
            
            res
            .status(400)
            .send ({
                message:"algo inexperado acomteceu"
            })
            
        }

        if(result.length <= 0){
            res
            .status(400)
            .send({
                message:"Nenhum usuário cadastrado",
            })
        }
        
        res
        .status(200)
        .send({
            users:result
        })

    } catch (error:any) {
        res.status(400).send ({
            message:error.message
        })
    }
}