import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response) {
    try {
        const { name, email, nickname } = req.body
        const id = req.params.id as string
        if (
            name === "" ||
            nickname === "" ||
            email === ""
        ) {
            res.status(400).send({
                message: "nenhum dos campos podem estar em branco"
            })
        }

            if (
                !name &&
                !nickname &&
                !email 
            ) {
                res.status(400).send({
                    message: "escolha ao menos um campo para alterar"
                })
    
        }

        await updateUser(
            id,
            name,
            nickname,
            email)

            res.status(200).send("Usuário atualizado")

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}