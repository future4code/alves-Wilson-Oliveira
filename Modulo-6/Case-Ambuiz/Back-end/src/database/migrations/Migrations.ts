import { BaseDatabase } from "../BaseDatabase"
import { PizzasDatabase } from "../PizzaDataBase"
import { ingredients, pizzas, pizza_ingredients } from "./data"


class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS Amb_Pizzas_Ingredients;
        DROP TABLE IF EXISTS ${PizzasDatabase.TABLE_PIZZAS};
        DROP TABLE IF EXISTS Amb_Ingredients;
        
        CREATE TABLE IF NOT EXISTS ${PizzasDatabase.TABLE_PIZZAS} (
            name VARCHAR (255)  PRIMARY KEY,
            price  decimal (19,4) NOT NULL
            );
            CREATE TABLE IF NOT EXISTS Amb_Ingredients (
                name VARCHAR (255)  PRIMARY KEY
                );
                CREATE TABLE IF NOT EXISTS Amb_Pizzas_Ingredients (
                    pizza_name VARCHAR (255),
                    ingredient_name VARCHAR(255),
                    FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas(name),
                    FOREIGN KEY (ingredient_name) REFERENCES Amb_Ingredients(name)
                    )
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(PizzasDatabase.TABLE_PIZZAS)
            .insert(pizzas)

        await BaseDatabase
            .connection(PizzasDatabase.TABLE_INGREDIENTS)
            .insert(ingredients)

        await BaseDatabase
            .connection(PizzasDatabase.TABLE_PIZZAS_INGREDIENTS)
            .insert(pizza_ingredients)
    }
}

const migrations = new Migrations()
migrations.execute()