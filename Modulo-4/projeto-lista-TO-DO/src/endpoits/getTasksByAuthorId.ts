import moment from 'moment';
import { Request, Response } from "express";
import searchTaskByAuthor from "../data/searchTaskByAuthor";

export default async function getTasksByAuthorId(req: Request, res: Response) {
    try {
        const id = req.query.id as string

        const result = await searchTaskByAuthor(id)

        result.map((item: any) => item.deadline = moment(item.deadline, "YYYY-MM-DD").format("DD/MM/YYYY"))

        if (!id) {
            res
                .status(400)
                .send({
                    message: "É nacessario passar o authorId por query",
                })
        }

        res.status(200).send(
            result
        )
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
}