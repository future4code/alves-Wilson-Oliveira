import express, { Express,Request,Response } from "express";
import cors from "cors";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
});

enum TYPE {
    ADMIN="ADMIN",
    NORMAL="NORMAL"
}

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: TYPE.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: TYPE.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: TYPE.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: TYPE.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: TYPE.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: TYPE.ADMIN,
        age: 60
    }
]


app.get("/users",(req,res) => {
    const auth=req.query.type as string
    const name=req.query.name as string
    try{

if(auth||name){
    if(auth.toUpperCase()===TYPE.ADMIN){
    const admins=users.filter((item)=>item.type===TYPE.ADMIN)
    res.send(admins)
}else if(auth.toUpperCase()===TYPE.NORMAL){
        const normais=users.filter((item)=>item.type===TYPE.NORMAL)
    res.send(normais)
    }else{
    res.send("tipo invalido")
}
const user = users.filter((item)=>item.name.toLowerCase()===name.toLowerCase())
if(!user){
            res.send("usuario não encontrado")
        }else{
        res.send(user)
        }

}else{
    res.send(users)
}

}catch(error:any){
    res.send()
    console.log(name)
}})





app.put("/criar", (req, res) => {  
    const {id,email,name,type,age}=req.body 
    users.push({name,id,email,type,age})      
    res.send(users)
})

// a. Mude o método do endpoint para `PUT`. O que mudou?
// R: nada, a requisição funcionou do mesmo modo

// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// R: Não, pois o metodo put por boa pratica deve apenas editar itens







// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.
// *a. Qual método HTTP você deve utilizar para isso?*
// R: metodo get

// *b. Como você indicaria a **entidade** que está sendo manipulada?*
// R./users


