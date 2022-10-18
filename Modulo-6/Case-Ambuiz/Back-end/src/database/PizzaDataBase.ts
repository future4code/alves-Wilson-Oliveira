import { IIngredientDB, Pizza } from './../models/Pizzas';
import { IPizzaDB } from "../models/Pizzas"
import { BaseDatabase } from "./BaseDatabase"

export class PizzasDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Amb_Pizzas"
    public static TABLE_INGREDIENTS = "Amb_Ingredients"
    public static TABLE_PIZZAS_INGREDIENTS = "Amb_Pizzas_Ingredients"

    // public toPizzaDBModel = (pizza: Pizza): Pizza[] => {
    //     const PizzaDB: IPizzaDB = {
    //         id: post.getId(),
    //         content: post.getContent(),
    //         user_id: post.getUserId()
    //     }

    //     return postDB
    // }


    public createPizzasData = async (pizza: IPizzaDB):Promise<void> => {
        const pizzasDB = {
            name:pizza.name,
            price:pizza.price
        }
        await BaseDatabase.connection(PizzasDatabase.TABLE_PIZZAS)
            .insert(pizzasDB)
    }

    public createIngredientsData = async (ingredient: IIngredientDB):Promise<void> => {
        const ingredientDB:IIngredientDB = {
            name:ingredient.name
        }
        await BaseDatabase.connection(PizzasDatabase.TABLE_INGREDIENTS)
            .insert(ingredientDB)
    }

    public recordPizzaIngredients = async(pizzaIngrediente:any) => {
        const PizzaIngredientDB = {
            pizza_name:pizzaIngrediente.name,
            ingredient_name: pizzaIngrediente.ingredient
        }
        await BaseDatabase.connection(PizzasDatabase.TABLE_PIZZAS_INGREDIENTS)
            .insert(PizzaIngredientDB)
    }

    public findPizzasByName = async (name: string): Promise<IPizzaDB | undefined> => {
        const result: IPizzaDB[] | undefined = await BaseDatabase
            .connection(PizzasDatabase.TABLE_PIZZAS)
            .select()
            .where({
                name
            })
        return result[0] || undefined
    }

    public findIngredientByName = async (name: string): Promise<IIngredientDB|undefined> => {
        const result: IIngredientDB[] | undefined = await BaseDatabase
            .connection(PizzasDatabase.TABLE_INGREDIENTS)
            .select()
            .where({
                name
            })
        return result[0] || undefined
    }


    // public findPizzasByIdData = async (id: string): Promise<IPizzasDB | undefined> => {
    //     const result: IPizzasDB[] = await BaseDatabase.connection(PizzasDatabase.TABLE_PIZZAS)
    //         .select("*")
    //         .where({ id: id })
    //     return result[0]

    // }

    // public getAllPizzassData = async () => {
    //     const result: IPizzasDB[] = await BaseDatabase.connection(PizzasDatabase.TABLE_PIZZAS)
    //         .select("*")

    //     return result

    // }
}