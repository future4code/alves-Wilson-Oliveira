import app from "./app"
import createUser from './endpoints/createUser'
import loginUser from "./endpoints/loginUser"
import profileUser from "./endpoints/profileUser"



app.post('/user', createUser)
app.post('/user/login', loginUser)
app.get('/user/profile', profileUser)
