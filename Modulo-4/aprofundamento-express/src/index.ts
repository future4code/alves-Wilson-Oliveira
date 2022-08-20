import { data } from './data';
import express ,{Response,Request} from 'express'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

let arrayAfazeres:{userId:number,id:number,title:string,completed:boolean}[]=[
     {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  }]

app.get("/concluidos", (req:Request, res:Response) => {  
    const concluidos=data.filter((item)=>item.completed==true)
    console.log(concluidos)
    res.send(concluidos)
})

app.post("/criar", (req:Request, res:Response) => {     
    const {userId,title,completed}=req.body 
    arrayAfazeres.push({
        userId:userId,
        id: Date.now(),
        title:title,
        completed:completed

    })    
    res.send(arrayAfazeres)
})

app.put("/trocarStatus", (req:Request, res:Response) => {    
const {completed,userId,id}=req.body

data.filter((item)=>item.userId===userId).filter((item)=>item.id===id).map((item)=>item.completed=completed)
    res.send(data)

})

app.delete("/delete", (req:Request, res:Response) => {    
    const {userId,id}=req.body
   const listaAtualizada =arrayAfazeres.filter((item)=>item.userId===userId).filter((item)=>item.id!==id)
   arrayAfazeres=listaAtualizada
    res.send(listaAtualizada)
})

app.get("/tarefas", (req:Request, res:Response) => {  
    const {userId}=req.body
    const tarfesTotais=data.filter((item)=>item.userId===userId).map((item)=>[`titulo : ${item.title}`,`status: ${item.completed}` ] )       
    res.send(tarfesTotais)
})

