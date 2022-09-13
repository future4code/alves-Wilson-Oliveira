import { Request, Response } from "express";
import { UsuarioDados } from "../data/UserDatabase";
import GerarId from "../services/gerarId";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password  } = req.body
      const userDB = new UsuarioDados()
      const teste =password as string
      console.log(password.length)

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos  'password' e 'email'")
      }
      if(email.indexOf("@")===-1){
         res.status(400).send("email invalido")
      }

      if(password.length <6){
         res.status(400).send("a senha precisa ter ao menos 6 caracteres")
      }
      const id = new GerarId()
      
      const user = await userDB.create({id:id.criarID(),email,password})


    




      res.status(201).send({ user })

   } catch (error: any) {
      res.status(500).send(error.message||error.sqlmessage)

   }
}