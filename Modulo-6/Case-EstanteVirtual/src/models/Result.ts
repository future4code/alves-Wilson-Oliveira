export interface IResultDB {
    id:string,
    name: string,
    competition:string,
    value:number,
    unity:string
}


export class Result {
    constructor(
        private id : string,
        private name: string,
        private competition : string,
        private value : number,
        private unity: string
    ){}

    public getId = () =>{
        return this.id
    }
    public getName = () =>{
        return this.name
    }
    public getCompetition = () =>{
        return this.competition
    }
    public getValue = () =>{
        return this.value
    }
    public geUnity = () =>{
        return this.unity
    }
}

export interface ICreateResultInputDTO {
    token:string,
    name: string,
    competition:string,
    value:number|number[],
    unity:string
}

export interface ICreateResultOutputDTO {
    message: string
}

export interface IFindResultInputDTO{
    competition: string
}

export interface IFindResultOutputDTO{
    status:string,
    "classificação":Result[]
}

export interface IDeleteResultInputDtO {
    token:string
    resultId:string
}

export interface IDeleteResultOutputDTO {
    message:string
}

