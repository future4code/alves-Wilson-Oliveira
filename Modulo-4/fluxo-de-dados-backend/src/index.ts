
import express, { Request, Response } from "express"
import cors from "cors"
import { produtos } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/test", (req, res) => {          
    res.send("test")
})


app.post("/adicionar", (req:Request, res:Response) => { 
    const name:string=req.body.name 
    const price:number=req.body.price 
    const id=Date.now().toString()
    try{
        if(!name||!price){
            res.statusCode=404
           throw new Error("Name ou price vazios");
        }
        if(typeof(price)!==typeof(1)){
            res.statusCode=404
           throw new Error("preço não é um numero");
        }
        if(typeof(name)!==typeof("a")){
            res.statusCode=404
           throw new Error("preço não é uma string");
        }
        if(price<=0){
            res.statusCode=404
           throw new Error("preço é menor ou igual a 0");
        }
        
    produtos.push({id:id,name:name,price:price})

    res.send(produtos)
    }catch(error:any){
         res.status(res.statusCode||500).send({message:error.message||"Erro do servidor"})
        }
})


app.get("/produtos", (req, res) => {  
    const busca=req.query.busca
    
    if(busca){
       const produtoBusca= produtos.filter((item)=>item.name===busca)
       res.send(produtoBusca)
    }else{

    res.send(produtos)
}
})

app.put("/editar", (req, res) => {  
const {id,price,name}=req.body
try{
    if(!price){
        res.statusCode=404
        throw new Error(" price vazio");
    }
    if(typeof(price)!==typeof(1)){
        res.statusCode=404
        throw new Error ("price não é um number")
    }
    if(price<=0){
        res.statusCode=404
       throw new Error("price é menor ou igual a 0");
    }
    if(!id){
        res.statusCode=404
        throw new Error("id vazio")
    }
    if(produtos.filter((item)=>item.id===id).length<=0){
        res.statusCode=404
        throw new Error ("produto nao encontrado")
    }
    

}catch(error:any){
    res.status(res.statusCode||500).send({message:error.message}||"algo inesperado aconteceu")
}

produtos.filter((item)=>item.id===id).map((item)=>item.price=price)
produtos.filter((item)=>item.id===id).map((item)=>item.name=name)
    res.send(produtos)
})

app.delete("/delete", (req, res) => {  
    const {id}=req.body
    try{
        if(!id){
            res.statusCode=400
            throw new Error("id vazio")
        }
        if(produtos.filter((item)=>item.id===id).length<=0){
            res.statusCode=400
            throw new Error("produto não encontrado")
        }

    }catch(error:any){
        res.status(res.statusCode||500).send({message:error.message})
    }

    
    const novalista = produtos.filter((item)=>item.id!==id)
    res.send(novalista)
})