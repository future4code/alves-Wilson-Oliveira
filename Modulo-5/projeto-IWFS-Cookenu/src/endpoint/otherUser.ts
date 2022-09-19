import { UserData } from '../Data/UserData';
import { Request, Response } from "express";
import LoginError from "../Error/LoginError";
import Authenticator from "../services/Authenticator";
import { TokenError } from '../Error/TokenError';
import { User } from '../model/User';

export default async function otherUser(
    req:Request,
    res:Response
    ){
        try {
            const token = req.headers.authorization

            const otherId = req.params.id

            if(!token){
                throw new LoginError()
            }

            const authenticator = new Authenticator()

            const payLoad = authenticator.verifyToken(token)

            const userData = new UserData()
            
            const user = await userData.getUserById(payLoad.id)

            if (!user) {
                throw new TokenError()
            }

            const otherUser = await userData.getUserById(otherId)

            const newUser = new User(otherUser.id,otherUser.name,otherUser.email,otherUser.password)
            
            res.status(200).send({
                id:newUser.getId(),
                name:newUser.getName(),
                email:newUser.getEmail()
            })
        }catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }