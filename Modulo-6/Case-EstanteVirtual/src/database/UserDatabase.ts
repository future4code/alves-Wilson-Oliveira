import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Estante_Virtual_Users"

    public findByEmail = async (email: string):Promise<IUserDB|undefined> => {
        const usersDB: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })
        return usersDB[0]
    }

    public createUser = async (user: User): Promise<void> => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
        }
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    

}