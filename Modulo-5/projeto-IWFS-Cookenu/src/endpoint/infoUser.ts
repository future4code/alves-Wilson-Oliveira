import { TokenError } from './../Error/TokenError';
import { UserData } from './../Data/UserData';
import { Request, Response } from "express";
import LoginError from "../Error/LoginError";
import Authenticator from "../services/Authenticator";
import { User } from '../model/User';

export default async function infoUser(
    req:Request,
    res:Response
    ){
        try {
            const token = req.headers.authorization

            if(!token){
                throw new LoginError()
            }

            const authenticator = new Authenticator()

            const payLoad = authenticator.verifyToken(token)

            const userData = new UserData()
            
            const getUserById = await userData.getUserById(payLoad.id)

            if (!getUserById) {
                throw new TokenError()
            }

            const user = User.toUserModel(getUserById)
            
            res.status(200).send({
                id:user.getId(),
                email:user.getEmail()
            })

        }  catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }


    }