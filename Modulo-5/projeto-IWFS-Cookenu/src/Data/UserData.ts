import { User } from '../model/User';
import { BaseDatabase } from './BasedataBase';

export class UserData extends BaseDatabase {



    public async getUserByEmail(email: string): Promise<any> {
        try {

            const [result] = await this.getConnection()
                .select("*")
                .from("cookenu_users")
                .where({ email })
                
            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async creatUser (user:User){
        try {
        await this.getConnection()
        .insert({
            id:user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password: user.getPassword(),
        })
        .into("cookenu_users")
        
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
    }

    public async getUserById(id: string): Promise<any> {
        try {

            const [result] = await this.getConnection()
                .select("*")
                .from("cookenu_users")
                .where({ id })
                
            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async feedData(id:string): Promise<any> {
        try {

            const result = await this.getConnection()
                .select("cookenu_recipes.*", "cookenu_users.name")
                .from("cookenu_followers")
                .innerJoin("cookenu_users","cookenu_followers.id_followed","cookenu_users.id" )
                .innerJoin("cookenu_recipes","cookenu_followers.id_followed","cookenu_recipes.user_id" )
                .where({ "cookenu_followers.id_follower": id })
                
            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }







}