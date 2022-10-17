export interface IPizzaDB {
name:string,
price:number
}

export interface IIngredientDB {
name:string
}

export interface ICreatePizzaInputDTO{
    name:string
    
}

export interface ICreatePizzaOutputDTO{

}

export interface IGetALLPizzasInputDTO{

}
export interface IGetPizzasOutputDTO{

}

export interface IPayingredientCreateDTO{

}

export interface ICreateingredientOutputDTO{
}

export interface IPayingredientInputDTO{

}

export interface IDeleteingredientInputDTO{

}
export interface IDeleteingredientOutputDTO{

}



export class Pizza {
    constructor(

    ) {}

    public getId = () => {
        return this
    }

    public getBand = () => {
        return this
    }



    public getingredients = () => {
        return this
    }

    public setId = (newId: string) => {
        this
    }


    }

