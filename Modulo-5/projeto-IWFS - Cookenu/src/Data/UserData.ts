import { User } from '../model/User';
import { BaseDatabase } from './BasedataBase';

export class UserData extends BaseDatabase {



    public async getUserByEmail(email: string): Promise<User> {
        try {

            const [result] = await this.getConnection()
                .select("*")
                .from("cookenu_users")
                .where({ email })
            return User.toUserModel(result)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}