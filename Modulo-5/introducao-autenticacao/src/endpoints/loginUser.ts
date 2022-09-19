import { UsuarioDados } from './../data/UserDatabase';
import { Request, Response } from "express"
import { gerarToken } from '../services/gerarToken';

export default async function loginUser(req:Request, res:Response){
try {
    const {email,password}=req.body

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


    const usuario = new UsuarioDados
    const response = await usuario.getByEmail(email)
    const token = new gerarToken


    res.status(200).send({token:token.geradortoken(response.id)})

    
} catch (error: any) {
    res.status(500).send(error.message||error.sqlmessage)
}


}