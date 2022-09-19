import { TokenError } from './../Error/TokenError';
import { UserData } from './../Data/UserData';
import { Request, Response } from "express"
import LoginError from "../Error/LoginError"
import Authenticator from "../services/Authenticator"
import RecipesData from '../Data/RecipesData';
import { Recipe } from '../model/Recipe';

export default async function infoRecipe(
    req:Request,
    res:Response
    ){
        try {
            const token = req.headers.authorization

            const recipeId = req.params.id

            if(!token){
                throw new LoginError()
            }

            const authenticator = new Authenticator()

            const payLoad = authenticator.verifyToken(token)

            const userData = new UserData()
            
            const user = await userData.getUserById(payLoad.id)

            if (!user) {
                throw new TokenError()
            }

            const recipeData = new RecipesData()

            const getRecipeById = await recipeData.getRecipeById(recipeId)

            const recipe = Recipe.toRecipeModel(getRecipeById)

            res.status (200).send({
                id:recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                data:recipe.getData()
            })
            
 

        }  catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }


    }