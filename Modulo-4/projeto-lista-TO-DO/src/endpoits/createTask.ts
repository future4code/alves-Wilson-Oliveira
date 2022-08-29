import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTaks";

export default async function createTask (req:Request,res:Response) {
    const {title,description,deadline,authorId} = req.body
    try {
        
        if(
            !title || !description || !deadline || !authorId
            ){
                res.status(400).send({
                    message:'Todos os campos precisam ser preenchidos'
                })
                
            }

    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
        
    }
    
    const dateDiff : number = moment(deadline, 'DD/MM/YYYY').unix() - moment().unix()
    
    if (dateDiff <=0 ){
        res.status(400).send({
            message:'Deadline deve ser uma data futura'
        })
        
    }

    const id :string = Date.now() + Math.random().toString()

    await insertTask(
        id,
        title,
        description,
        moment(deadline,'DD/MM/YYYY').format('YYYY-MM-DD'),
        authorId
    )

    res.status(200).send({message:"Tarefa criada com sucesso", id : id  })

    
    
}