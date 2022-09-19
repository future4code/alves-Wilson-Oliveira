import { PasswordError } from './../Error/PasswordError';
import { HashMagener } from './../services/HashMagener';
import { UserData } from './../Data/UserData';
import { MissingField } from './../Error/MissingField';
import { Request, Response } from "express";
import GenerateId from '../services/generateId';
import EmailExists from '../Error/EmailExists';
import { User } from '../model/User';
import Authenticator from '../services/Authenticator';

export default async function singup (
    req:Request,
    res:Response
    ){
        try {
            const {name,email}  = req.body 
            const password = req.body.password as string

            if(!name||!email||!password){
                throw new MissingField()
            }

            if ( password.length < 6 ){
                throw new PasswordError()
            }
            
            const generateId= new GenerateId()
            
            const id = generateId.creatID()
            
            const hashMagener =new HashMagener()

            const hash = await hashMagener.hash(password)

            const userData = new UserData()

            const verifyUser= await userData.getUserByEmail(email)


            if(verifyUser){
                throw new EmailExists()
            }

            const user = new User(id,name,email,hash)
            
            userData.creatUser(user)
            
            const authenticator = new Authenticator()
            
            const token = authenticator.generateToken(id)
            
            console.log(token)
            
            res.status(200).send({
                message:"sucesso",
                token:token
        })
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }

} 