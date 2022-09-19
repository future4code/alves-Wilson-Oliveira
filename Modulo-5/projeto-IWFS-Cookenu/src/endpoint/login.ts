import { User } from './../model/User';
import { UserData } from './../Data/UserData';
import { Request, Response } from "express";
import { MissingField } from "../Error/MissingField";
import { PasswordError } from "../Error/PasswordError";
import { HashMagener } from "../services/HashMagener";
import Authenticator from '../services/Authenticator';
import FailLogin from '../Error/FailLogin';
import EmailExists from '../Error/EmailExists';

export default async function login (
    req:Request,
    res:Response
    ){
        try {
            const {email,password}= req.body

            if(!email||!password){
                throw new MissingField()
            }

            if ( (password as string).length < 6 ){
                throw new PasswordError()
            }

            const userData = new UserData()

            const user= await userData.getUserByEmail(email)

            if(!user){
                throw new EmailExists()
            }

            const newUser = new User(user.id,user.name, user.email, user.password )

            const authenticator = new Authenticator()
            
            const token = authenticator.generateToken(newUser.getId())

            const hashMagener =new HashMagener()

            const compare = await hashMagener.compare(password,newUser.getPassword())

            console.log(compare)

            if(compare){
                res.status(200).send({
                    message:"sucess",
                    token:token
                })
            }else{
                throw new FailLogin()
            }



        }
        catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }


    }