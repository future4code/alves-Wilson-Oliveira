import { USERS_ROLE } from './../types';
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export interface PayLoad {
    id:string,
    role:USERS_ROLE
}

class Authenticator {

    generateToken(id: PayLoad) {

        const token = jwt.sign(
            {
                id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            }
        );

        return token
    }

    verifyToken(token: string) {

        const payLoad:PayLoad = jwt.verify(token, process.env.JWT_KEY as string) as any

        return payLoad
    }
}

export default Authenticator