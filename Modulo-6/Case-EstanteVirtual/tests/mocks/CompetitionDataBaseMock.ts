import { Result, IResultDB } from './../../src/models/Result';
import { Competition, ICompetitionDB } from './../../src/models/Competition';
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class CompetitionDataBase extends BaseDatabase {
    public static TABLE_COMPETITION = "Estante_Virtual_Competition"
    public static TABLE_RESULT = "Estante_Virtual_Result"


    public toUserDBModel = (competition: Competition) => {
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

    public createCompeticaoDataBase = async (competicao: Competition): Promise<void> => { }

    public createResult = async (result: Result): Promise<void> => {}

    public findByCompeticao = async (competition: string): Promise<ICompetitionDB | undefined> => {
        const data:ICompetitionDB[] =[{
            competition: "Dardos",
            limit_date: new Date("2022-12-18")
        },{
            competition: "100m classificatoria 1",
            limit_date: new Date("2022-10-18")
        }]
        switch(competition){
            case "Dardos":
                return data[0]
                case "100m classificatoria 1":
                    return data[1]
        }
    }

    public allCompeticoesDataBase = async (): Promise<ICompetitionDB[]> => {
        const data:ICompetitionDB[] =[{
            competition: "Dardos",
            limit_date: new Date("2022-12-18")
        },{
            competition: "100m classificatoria 1",
            limit_date: new Date("2022-10-18")
        }]
        return data
    }

    public resultsByCompetitionDataBase = async (competition: string): Promise<IResultDB[]> => {
        switch(competition){
            case "Dardos":
        const data : IResultDB[] = [{
            id:"id-mock",
            name:"name-mock",
            competition:"competition-mock",
            value: 22,
            unity: "m"
        },{
            id:"id-mock2",
            name:"name-mock2",
            competition:"competition-mock2",
            value: 22,
            unity: "m"
        }]
        return data;
        default : 
        return []
        }

        
    }



    
    }

