import { UserDatabase } from './../UserDatabase';
import { competitionMigrations, resultMigrations, users } from './data';
import { CompetitionDataBase } from './../CompeticaoDataBase';
import { BaseDatabase } from "../BaseDatabase"

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
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        DROP TABLE IF EXISTS ${CompetitionDataBase.TABLE_RESULT};
        DROP TABLE IF EXISTS ${CompetitionDataBase.TABLE_COMPETITION};

        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${CompetitionDataBase.TABLE_COMPETITION}(
            competition VARCHAR (255)  PRIMARY KEY,
            limit_date DATE NOT NULL
        );
        
        
        CREATE TABLE IF NOT EXISTS ${CompetitionDataBase.TABLE_RESULT}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR (255) NOT NULL,
            value FLOAT4 NOT NULL,
            unity VARCHAR(255) NOT NULL,
            competition VARCHAR(255) NOT NULL,
            FOREIGN KEY (competition)REFERENCES ${CompetitionDataBase.TABLE_COMPETITION}(competition)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(CompetitionDataBase.TABLE_COMPETITION)
            .insert(competitionMigrations)

            await BaseDatabase
            .connection(CompetitionDataBase.TABLE_RESULT)
            .insert(resultMigrations)
    }
}

const migrations = new Migrations()
migrations.execute()