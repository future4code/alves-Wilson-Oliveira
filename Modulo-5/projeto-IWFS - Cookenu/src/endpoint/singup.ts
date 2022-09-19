import { HashMagener } from './../services/HashMagener';
import { UserData } from './../Data/UserData';
import { MissingField } from './../Error/MissingField';
import e, { Request, Response } from "express";
import GenerateId from '../services/generateID';
import EmailExists from '../Error/EmailExists';

export default async function singup (
    req:Request,
    res:Response
    ){
        try {
            const {name,email,password} = req.body

            if(!name||!email||!password){
                throw new MissingField()
            }

            const userData = new UserData()

            const verifyUser= await userData.getUserByEmail(email)

            if(verifyUser){
                throw new EmailExists()
            }

            const generateId= new GenerateId()

            const id = generateId.creatID()

            const hashMagener =new HashMagener()

            const hash = hashMagener.hash(password)

            


            
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }

} 