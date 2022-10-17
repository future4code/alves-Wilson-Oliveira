
export interface ICompetitionDB {
    competition: string,
    limit_date: Date,
}

export class Competition {
    constructor(
        private competition: string,
        private limitDate: Date,

    ) { }

    public getCompetition = () => {
        return this.competition
    }

    public getLimitDate = () => {
        return this.limitDate
    }



}

export interface ICreateCompetitionInputDTO {
    token: string
    competition: string,
    limitDate: string
}

export interface ICreateCompetitionOutputDTO {
    message: string,
}


export interface IAllCompetitionOutput {
    competicao: string
    enceramento: string
}





