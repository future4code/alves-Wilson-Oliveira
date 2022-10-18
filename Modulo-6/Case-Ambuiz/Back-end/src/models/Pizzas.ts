

export interface IPizzaDB {
name:string,
price:number
}

export interface IIngredientDB {
name:string
}

export interface ICreatePizzaInputDTO{
    name:string
    price:number
}

export interface ICreatePizzaOutputDTO{
message:string
}

export interface IRecordPizzaIngredientInputDTO{
    name:string
    ingredients:  string[]
}

export interface IRecordPizzaIngredientOutputDTO{
    message: string
}

export interface IGetALLPizzasInputDTO{

}
export interface IGetPizzasOutputDTO{

}


export interface ICreateingredientOutputDTO{
    message:string
}

export interface ICreateingredientInputDTO{
    name:string
}

export interface IPayingredientInputDTO{

}

export interface IDeleteingredientInputDTO{

}
export interface IDeleteingredientOutputDTO{

}



export class Pizza {
    constructor(
        private name :string,
        private price:string,
        private ingredients: string[]

    ) {}

    public getName= () => {
        return this.name
    }

    public getPrice = () => {
        return this.price
    }



    public getingredients = () => {
        return this.ingredients
    }

    public setId = (newId: string) => {
        this
    }


    }

