import { Competition, ICompetitionDB } from "../models/Competition"
import { IResultDB, Result } from "../models/Result"
import { BaseDatabase } from "./BaseDatabase"

export class CompetitionDataBase extends BaseDatabase {
    public static TABLE_COMPETITION = "Estante_Virtual_Competition"
    public static TABLE_RESULT = "Estante_Virtual_Result"

    public toCompetitionDBModel = (competition: Competition): ICompetitionDB => {
        const competicaoDB: ICompetitionDB = {
            competition: competition.getCompetition(),
            limit_date: competition.getLimitDate()
        }
        return competicaoDB
    }

    public toResultDBModel = (result: Result): IResultDB => {
        const resultDB: IResultDB = {
            id: result.getId(),
            name: result.getName(),
            competition: result.getCompetition(),
            value: result.getValue(),
            unity: result.geUnity(),

        }
        return resultDB
    }

    public findByCompeticaoDataBase = async (competition: string): Promise<ICompetitionDB | undefined> => {
        const result: ICompetitionDB[] = await BaseDatabase
            .connection(CompetitionDataBase.TABLE_COMPETITION)
            .select()
            .where({ competition })

        return result[0]
    }

    public createCompeticaoDataBase = async (competicao: Competition): Promise<void> => {
        const CompeticaoDB = this.toCompetitionDBModel(competicao)
        await BaseDatabase
            .connection(CompetitionDataBase.TABLE_COMPETITION)
            .insert(CompeticaoDB)
    }

    public allCompeticoesDataBase = async (): Promise<ICompetitionDB[]> => {
        const competicoesDB: ICompetitionDB[] = await BaseDatabase
            .connection(CompetitionDataBase.TABLE_COMPETITION)
            .select()

        return competicoesDB

    }

    public createResultDataBase = async (result: Result): Promise<void> => {

        const newResult = this.toResultDBModel(result)

        await BaseDatabase
            .connection(CompetitionDataBase.TABLE_RESULT)
            .insert(newResult)

    }

    public resultsByCompetitionDataBase = async (competition: string): Promise<IResultDB[]> => {
        const resultDB: IResultDB[] = await BaseDatabase
            .connection(CompetitionDataBase.TABLE_RESULT)
            .select()
            .where({ competition: competition })
            .orderBy('value', 'DESC')
        return resultDB
    }

    public resultsByIdDataBase = async (id: string): Promise<IResultDB|undefined> => {
        const resultDB: IResultDB[] = await BaseDatabase
            .connection(CompetitionDataBase.TABLE_RESULT)
            .select()
            .where( {id} )
        return resultDB[0]
    }

    public deleteResultDataBase = async (id:string) : Promise<void> => {

        await BaseDatabase
            .connection(CompetitionDataBase.TABLE_RESULT)
            .delete()
            .where({id})

    }

}
