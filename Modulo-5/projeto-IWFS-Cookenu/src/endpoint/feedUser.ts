import { Request, Response } from "express";
import { UserData } from "../Data/UserData";
import LoginError from "../Error/LoginError";
import Authenticator from "../services/Authenticator";

export default async function feedUser(
    req: Request,
    res: Response
) {

    try {
        const token = req.headers.authorization

        if (!token) {
            throw new LoginError()
        }

        const authenticator = new Authenticator()

        const payLoad = authenticator.verifyToken(token)

        const userData = new UserData()

        const result = await userData.feedData(payLoad.id)

        res.status(200).send(result)

    }  catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}