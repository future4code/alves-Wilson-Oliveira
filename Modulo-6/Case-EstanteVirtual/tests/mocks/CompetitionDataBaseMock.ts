import { Result, IResultDB } from './../../src/models/Result';
import { Competition, ICompetitionDB } from './../../src/models/Competition';
import { BaseDatabase } from "../../src/database/BaseDatabase"
import moment from 'moment';

export class CompetitionDataBaseMock extends BaseDatabase {
    public static TABLE_COMPETITION = "Estante_Virtual_Competition"
    public static TABLE_RESULT = "Estante_Virtual_Result"


    public toCompetitionDBModel = (competition: Competition) => {
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

    public createResultDataBase = async (result: Result): Promise<void> => {}

    public findByCompeticaoDataBase = async (competition: string): Promise<ICompetitionDB | undefined> => {
        const data:ICompetitionDB[] =[{
            competition: "Dardo",
            limit_date: new Date("2022-12-18")
        },{
            competition: "100m classificatoria 1",
            limit_date: new Date("2022-10-18")
        },{
            competition: "Corrida",
            limit_date: new Date("2022-05-18")
        }]
        switch(competition){
            case "Dardo":
                return data[0]
                case "100m classificatoria 1":
                    return data[1]
                    case "Corrida":
                return data[2]
        }
    }

    public allCompeticoesDataBase = async (): Promise<ICompetitionDB[]> => {
        const data:ICompetitionDB[] =[{
            competition: "Dardo",
            limit_date: new Date(moment("2022-12-18", "YYYY/MM/DD").format("YYYY/MM/DD"))
        },{
            competition: "100m classificatoria 1",
            limit_date: new Date(moment("2022-12-10", "YYYY/MM/DD").format("YYYY/MM/DD"))
        }]
        return data
    }

    public resultsByCompetitionDataBase = async (competition: string): Promise<IResultDB[]> => {
        switch(competition){
            case "Dardo":
        const data : IResultDB[] = [{
            id:"id-mock",
            name:"name-mock",
            competition:"competition-mock",
            value: 20,
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

    public resultsByIdDataBase = async (id: string): Promise<IResultDB|undefined> => {

        switch(id){
            case "id-mock":
        const data : IResultDB[]=[{
            id:"id-mock",
            name:"name-mock",
            competition:"competition-mock",
            value: 20,
            unity: "m"
        }]
        return data[0];
        default : 
        return 
        }



    }

    public deleteResultDataBase = async (id:string) : Promise<void> => {}

    
    }

