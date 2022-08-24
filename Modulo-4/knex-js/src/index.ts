import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.get("/actors", async(req:Request,res:Response):Promise<void>=>{
    try {
        const pegaAtor= async(id:string):Promise<any>=>{ 
            const [result] = await connection.raw(
            `SELECT * FROM Actor where id = ${id} `
        )
        return result
    }

    const genero = async(gender:string):Promise<any> => {
        const [result1] = await connection.raw(
            `SELECT COUNT (*) FROM Actor where gender = "${gender}"`
        )
        return result1
    }

    // const atualizaSalario =async (id:string,salary:number) : Promise<any> => {
    //     await connection ("Actor")
    //     .update({
    //         salary:salary
    // }).where ({
    //     id:id
    // })
        
    // }

    // const deletarAtor =async (id:string):Promise<any> => {
    //     await connection ("Actor")
    //     .delete().where({
    //         id:id
    //     })
    // }
    // await deletarAtor("005")

    const salarioMedia =async (gender:string):Promise<any> => {
        const [media] = await connection ("Actor")
        .avg("salary").where({gender:gender})
        return media
    }
    
        res.status(200).send(await salarioMedia("male"))
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
})

app.get("/actors/:id", async(req:Request,res:Response):Promise<void>=>{
    try {
        
    const id=req.params.id;
        const ator= await pegaAtor(id)
        res.status(200).send(ator)
        } catch (error:any) {
        res.status(500).send(error.message)
        
    }
})

    const pegaAtor= async(id:string):Promise<any>=>{ 
        const [result] = await connection.raw(
        `SELECT * FROM Actor where id = ${id} `
    )
    return result
        }