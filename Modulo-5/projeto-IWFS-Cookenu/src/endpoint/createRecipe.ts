import { TokenError } from './../Error/TokenError';
import { UserData } from './../Data/UserData';
import { Request, Response } from "express";
import LoginError from "../Error/LoginError";
import { MissingField } from "../Error/MissingField";
import Authenticator from "../services/Authenticator";
import { Recipe } from '../model/Recipe';
import GenerateId from '../services/generateId';
import RecipesData from '../Data/RecipesData';

export default async function createRecipe(
    req: Request,
    res: Response
) {

    try {
        const { title, description } = req.body

        if (!title || !description) {
            throw new MissingField()
        }

        const token = req.headers.authorization

        if (!token) {
            throw new LoginError()
        }

        const authenticator = new Authenticator()

        const payLoad = authenticator.verifyToken(token)

        const generateId = new GenerateId()

        const id = generateId.creatID()

        const today = new Date();

        const yyyy = today.getFullYear();

        let mm = (today.getMonth() + 1).toString()

        let dd = today.getDate().toString();

        if(mm.length == 1){mm = "0"+ mm}

        if(dd.length == 1){dd = "0"+ dd}

        const formattedToday = yyyy + '-' + mm + '-' + dd;

        const userData = new UserData()

        const user = await userData.getUserById(payLoad.id)

        if (!user) {
            throw new TokenError()
        }

        const recipe = new Recipe(id, title, description, formattedToday, user.id)

        const recipesData = new RecipesData()

        await recipesData.createRecipeData(recipe)

        res.status(200).send({
            message: "Sucesso",
            id: id
        })

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}