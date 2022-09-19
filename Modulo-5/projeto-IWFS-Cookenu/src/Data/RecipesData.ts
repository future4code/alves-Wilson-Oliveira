import { Recipe } from '../model/Recipe';
import { BaseDatabase } from './BasedataBase';
export default class RecipesData extends BaseDatabase {

    public async createRecipeData (recipe:Recipe){
        await this.getConnection()
        .insert({
            id:recipe.getId(),
            title:recipe.getTitle(),
            description:recipe.getDescription(),
            date:recipe.getData(),
            user_id:recipe.getUserId()
        })
        .into("cookenu_recipes")
    }

    public async getRecipeById(id: string): Promise<any> {
        try {

            const [result] = await this.getConnection()
                .select("*")
                .from("cookenu_recipes")
                .where({ id })
                
            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}