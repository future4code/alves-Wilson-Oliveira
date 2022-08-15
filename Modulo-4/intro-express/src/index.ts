import { users } from './data';
import express ,{Response,Request} from 'express'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

const arrayUsers=[    {
    "id": 1,
    "nome": "Leanne Graham",
    "email": "Sincero@april.biz",
    "telefone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
  },
  {
    "id": 2,
    "nome": "Ervin Howell",
    "email": "Shanna@melissa.tv",
    "telefone": "010-692-6593 x09125",
    "site": "anastasia.net",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "telefone": "1-463-123-4447",
    "site": "ramiro.info",
  }]



  app.get("/users", (req:Request, res:Response) => {      
    console.log(arrayUsers)    
    res.send(arrayUsers)

})

type Body = {userId:number,id:number,title:string,body:string}[]
const novosUsers:Body = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }]
    //acredito que seja melhor crialo fora, para melhorar a organização

    app.post("/postar",(req:Request,res:Response)=>{
const confirma:Body =req.body
if(!confirma){
    return res.status(400)
}else{
        console.log(confirma)
        res.send("deu certo")
    }
    })

    app.get("/users/:id", (req:Request, res:Response) => {      
       const id=Number(req.params.id)
       const user=users.find((item)=>item.id===id)
       if(!user){return res.send("usuario não encontrado")}else{
       res.send(user)}
    })