import app from "./app";
import createTask from "./endpoits/createTask";
import createUser from "./endpoits/createUser";
import editUser from "./endpoits/editUser";
import getAllUser from "./endpoits/getAllUser";
import getTaskById from "./endpoits/getTaskById";
import getTasksByAuthorId from "./endpoits/getTasksByAuthorId";
import getUserById from "./endpoits/getUserById";


app.post("/user", createUser)

app.put("/user/edit/:id",editUser)

app.post ("/task", createTask)

app.get("/users/all", getAllUser)

app.get("/tasks", getTasksByAuthorId)

app.get("/user/:id", getUserById ) 

app.get("/task/:id",getTaskById)
