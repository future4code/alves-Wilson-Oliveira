import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";
import getAddressInfo from "./service/getAdressUser";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, cep, numero, complemento } = req.body

      if (!name || !nickname || !email || !cep) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'address' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const address = await getAddressInfo(cep)

      const newUser = { 
         cep:cep,
         logradouro:address.logradouro,
         numero: Number(numero),
         complemento: complemento || "",
         bairro:address.bairro,
         localidade:address.localidade,
         uf:address.uf
        }

      await connection('info_Users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}