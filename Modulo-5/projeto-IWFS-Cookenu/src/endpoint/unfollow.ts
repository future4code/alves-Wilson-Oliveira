import { UserData } from '../Data/UserData';
import { MissingField } from '../Error/MissingField';
import { Request, Response } from "express"
import LoginError from '../Error/LoginError';
import Authenticator from '../services/Authenticator';
import FollowersData from '../Data/FollowersData';

export default async function unfollow(
    req: Request,
    res: Response
) {
    try {
        const userFollow = req.body.userToFollowId

        if (!userFollow) {
            throw new MissingField()
        }
        

        const token = req.headers.authorization

        if (!token) {
            throw new LoginError()
        }

        const authenticator = new Authenticator()

        const payLoad = authenticator.verifyToken(token)

        const userData = new UserData()

        const follower = await userData.getUserById(payLoad.id)

        const followed = await userData.getUserById(userFollow)
        
        if (!followed) {
            throw new MissingField()
        }

        const followersData = new FollowersData()

        await followersData.deleteFollow(follower.id,followed.id)

        res.status(200).send("Usuário deixado de segir")

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}