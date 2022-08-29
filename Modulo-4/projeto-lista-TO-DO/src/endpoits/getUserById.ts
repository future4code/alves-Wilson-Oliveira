import { Request, Response } from "express";
import selectUserById from "../data/selectUserByID";

export default async function getUserById(req: Request, res: Response) {
    try {
        const user = await selectUserById(req.params.id)

        if (!user) {
            res
                .status(404)
                .send({ message: "Usuario não encontrado" })
        }

        res
        .status(202)
        .send({
            id:user.id,
            nickname:user.nickname
        })

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}