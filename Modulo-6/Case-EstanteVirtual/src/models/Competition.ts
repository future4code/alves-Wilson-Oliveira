
export interface ICompetitionDB {
    competition: string,
    limit_date: Date,
}

export class Competition {
    constructor(
        private competition: string,
        private limitDate: Date,
        private result: []|string = "em andamento"

    ) {}

    public getCompetition= () => {
        return this.competition
    }

    public getLimitDate= () => {
        return this.limitDate
    }

    public getResult= () => {
        return this.result
    }

    public setResult= (newResult:[]) => {
        this.result = newResult
    }

}

export interface ICreateCompetitionInputDTO {
    token:string
    competition:string,
    limitDate:string
}

export interface ICreateCompetitionOutputDTO {
    message: string,
}


export interface IAllCompetitionOutput {
    "competições": Competition[]
}

