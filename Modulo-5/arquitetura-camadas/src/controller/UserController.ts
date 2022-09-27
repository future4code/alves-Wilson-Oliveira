import { Authenticator } from './../services/Authenticator';
import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express"

export class UserController {
    public singup = async (
        req:Request,
        res:Response
    ) => {
        try {
            const {name,email,password}= req.body

            const userBusiness = new UserBusiness()

            const response = await userBusiness.singup(name,email,password)

            res.status(201).send(response)

        }  catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }

    public login = async (
        req:Request,
        res:Response
    ) => {
        try {
            const {email,password}= req.body

            const userBusiness = new UserBusiness()

            const response = await userBusiness.login(email,password)

            res.status(201).send(response)

        }  catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }

    public allUser = async (
        req:Request,
        res:Response
    ) => {
        try {
            const token= req.headers.authorization as string

            const userBusiness = new UserBusiness()

            const response = await userBusiness.allUser(token)

            res.status(201).send(response)

        }  catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }

    public deleteUser = async (
        req:Request,
        res:Response
    ) => {
        try {
            const token= req.headers.authorization as string
            const id = req.params.id

            const userBusiness = new UserBusiness()

            const response = await userBusiness.delete(token,id)

            res.status(201).send(response)

        }  catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }

}