import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UsuarioDados extends BaseDatabase {
    public create = async (newUser: user) => {
        await this.getConnection()
            ('usuarios')
            .insert(newUser)
            return 'usuario cadastrado'

    }
    public edit = async (id: string, columnsUpdate: { name: string, nickname: string }) => {
        await this.getConnection()('to_do_list_users')
            .update(columnsUpdate)
            .where({ id })
    }
    public getByEmail = async (email: string):Promise<any> => {
        const [result] = await this.getConnection()
        .select('*')
        .from('usuarios')
        .where({email})
            
        return result
    }


public getByid = async (id: string):Promise<any> => {
    const [result] = await this.getConnection()
    .select('*')
    .from('usuarios')
    .where({id})
        
    return result
}

}