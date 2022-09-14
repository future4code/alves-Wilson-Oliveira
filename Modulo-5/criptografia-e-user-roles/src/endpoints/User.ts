import { PayLoad } from './../services/Authenticator';
import { USERS_ROLE } from './../types';
import { HashManeger } from './../services/hashMagener';

import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/IncorrectPassword";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

class UserEndpoint {

    public async createUser(req: Request, res: Response) {
        try {
            const { name, nickname, email, password,role } = req.body

            if (!name || !nickname || !email || !password) {
                throw new MissingFields()
            }

            const userDataBase = new UserDatabase()

            const emailAlreadyExist = await userDataBase.getUserByEmail(email)

            // undefined , null , 0 , true
            if (!emailAlreadyExist) {
                throw new EmailExist()
            }

            const id = new GenerateId().createId();

            const hashManeger = new HashManeger()

            const hash= await hashManeger.hash(password)

            

            const user = new User(id, name, nickname, email, hash,USERS_ROLE.NORMAL)

            await userDataBase.createUser(user)

            const payLoad :PayLoad ={
                id:id,
                role:role
            }

            const token = new Authenticator().generateToken(payLoad)

            res.status(201).send({ message: "Usuario cadastrado com sucesso", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public async login(req: Request, res: Response) {
        try {

            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }

            const userData = new UserDatabase()

            // const senhaCorreta = await userData.getUserByPassword(senha)
            const userDB = await userData.getUserByEmail(email)

            if (!userDB) {
                throw new InvalidCredencial();
            }

            if(userDB.password!==password){
                throw new InvalidCredencial()

            }
            const payLoad :PayLoad ={
                id:userDB.id,
                role:userDB.role
            }

            const token = new Authenticator().generateToken(payLoad)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async editUser(req: Request, res: Response) {
        try {
            
            const token = req.headers.authorization!
            const { nickname } = req.body

            const id = new Authenticator().verifyToken(token)

            const userData = new UserDatabase()

            // await userData.edit(id,nickname)

            res.status(200).send("Atualizado com sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }


    async getUsers(req: Request, res: Response) {
        try {
            // const token = req.headers.authorization as string
            const token = req.headers.authorization!

            const id = new Authenticator().verifyToken(token)

            if (!id) {
                throw new InvalidCredencial();
            }


            const authenticator= new Authenticator()

            const payLoad= authenticator.verifyToken(token)

            if(payLoad.role !== USERS_ROLE.ADMIN){

                throw new InvalidCredencial()
            }

            const userData = new UserDatabase()

            const userDB = await userData.getUser()



            res.status(200).send(userDB)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint



