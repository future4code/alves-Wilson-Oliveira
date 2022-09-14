import User from "../model/User";
import { Iuser } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public async createUser(user: User) {

        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            nickname: user.getNickName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }).into("to_do_list_users")
    }

    public async edit(id: string, nickname: string) {
        await this.getConnection().update({ nickname }).into("to_do_list_users").where({ id })
    }

    public async getUserByEmail(email: string):Promise<Iuser | undefined> {
        const [result] = await this.getConnection()
            .select("*")
            .from("to_do_list_users")
            .where({ email })

        return result
    }

    public async getUserByPassword(senha: string) {
        const result = await this.getConnection()
            .select("*")
            .from("to_do_list_users")
            .where({ password: senha })

        return result
    }

    public async getUser() {
        const result = await this.getConnection()
            .select("*")
            .from("to_do_list_users")
            

        return result
    }

}
