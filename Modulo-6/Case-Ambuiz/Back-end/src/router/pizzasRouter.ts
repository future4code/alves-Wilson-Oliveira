import { Router } from 'express'
import { PizzasBusiness } from '../business/PizzasBusiness'
import { PizzasController } from '../controller/PizzasController'
import { PizzasDatabase } from '../database/PizzaDataBase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const pizzasRouter = Router()

const pizzasController = new PizzasController(
    new PizzasBusiness(
        new PizzasDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

pizzasRouter.post("/create", pizzasController.createPizzaController)
pizzasRouter.post("/ingredient", pizzasController.createIngredientController)
pizzasRouter.post("/recordpizza", pizzasController.recordPizzaIngredientController)


