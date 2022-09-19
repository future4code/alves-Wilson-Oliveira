import { BaseDatabase } from './BasedataBase';
export default class FollowersData extends BaseDatabase {

    public async createFollow (idFollower:string,idFollowed:string){
        await this.getConnection()
        .insert({
            id_follower:idFollower,
            id_followed:idFollowed
        })
        .into("cookenu_followers")
    }

    public async deleteFollow (idFollower:string,idFollowed:string){
        await this.getConnection()
        .delete()
        .from("cookenu_followers")
        .where({id_follower:idFollower})
        .andWhere({id_followed:idFollowed})
    }


}