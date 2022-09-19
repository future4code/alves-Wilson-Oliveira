import app from "./app";
import createRecipe from "./endpoint/createRecipe";
import feedUser from "./endpoint/feedUser";
import followUser from "./endpoint/followUser";
import infoRecipe from "./endpoint/infoRecipe";
import infoUser from "./endpoint/infoUser";
import login from "./endpoint/login";
import otherUser from "./endpoint/otherUser";
import singup from "./endpoint/singup";
import unfollow from "./endpoint/unfollow";


app.post("/user/create", singup)

app.post("/user/login", login)

app.get("/user/info", infoUser)

app.post("/recipe", createRecipe)

app.get("/recipe/:id",infoRecipe)

app.post("/user/follow", followUser)

app.post("/user/unfollow",unfollow)

app.get('/user/feed', feedUser)

app.get('/user/:id', otherUser)
