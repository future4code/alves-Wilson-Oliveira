import { getAllUsersOrdination } from './endpoints/getAllUsersOrdination';

import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";

app.get("/recipes", getAllRecipes)

app.get("/users/:type",getAllUsersOrdination)
