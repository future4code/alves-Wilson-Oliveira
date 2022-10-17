import { Pizza } from './../models/Pizzas';
import { IPizzaDB } from "../models/Pizzas"
import { BaseDatabase } from "./BaseDatabase"

export class PizzasDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Amb_Pizzas"


    public createPizzasData = async (Pizza: Pizza) => {
        const PizzasDB = {

        }
        await BaseDatabase.connection(PizzasDatabase.TABLE_PIZZAS)
            .insert(PizzasDB)
    }

    // public findPizzasByDateData = async (startsAt: Date): Promise<IPizzasDB | undefined> => {
    //     const result: IPizzasDB[] | undefined = await BaseDatabase
    //         .connection(PizzasDatabase.TABLE_PIZZAS)
    //         .select()
    //         .where({
    //             starts_at: startsAt
    //         })
    //     return result[0] || undefined

    // }
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