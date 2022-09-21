import { IUserDB } from './../models/User';
import { User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public ToUserDBModel = (user:User) => {
        const userDB : IUserDB = {
            id:user.getId(),
            name: user.getName(),
            email:user.getEmail(),
            password:user.getPassword(),
            role:user.getRole()
        }
        return userDB
    }

    public async creatUser (user:User){

        const userDB = this.ToUserDBModel(user)
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .insert(
            userDB
        )
}

public async getUserByEmail(email: string): Promise<IUserDB> {
 

        const result:IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select("*")
            .where({ email })
            
        return result[0]
}

public async allUsers(): Promise<IUserDB []> {

    const result : IUserDB [] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select("*")
        
    return result
}

public async deleteUsers(id:string): Promise<any> {
    
    await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .delete()
        .where({id})
        
    return "Usuario deletado"
}



}
