import axios from "axios";
import { Request, Response } from "express";
import allUsers from "../data/allUsers";

export default async function getAllUsers(req:Request, res:Response){
    try {

        const result= await allUsers()

        const ids =  result.map((item)=>item.id)
        
        const purchases = ids.map((item)=> axios.get(`http://localhost:3003/users/${item}/purchases`))


        if(!result){
            res.status(400).send("nenhum usuario cadastrado")
        }

        res.status(200).send(result)

    } catch (error:any) {
        
    }
}