import express, { Express, Request, response, Response } from "express"
import cors from "cors"
import { Account } from "./types"


const app: Express = express()

app.use(express.json())
app.use(cors())

const accounts: Account = [ {
   name: "will",
   CPF: "413.292.058-55",
   dateOfBirthString: "1992-12-17",
   balance: 200,
   statement: [    
   {
   value:50,
   description:"conta a pagar",
   date:new Date("2023/08/05")}]
}]

app.post("/users/create", (req: Request, res: Response) => {
   try {
      const { name, CPF, dateOfBirthAsString } = req.body

      const [day, month, year] = dateOfBirthAsString.split("/")

      const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

      const dateOfBirthString = `${year}-${month}-${day}`

      const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()

      const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

      if (ageInYears < 18) {
         res.statusCode = 406
         throw new Error("Idade deve ser maior que 18 anos")
      }

      const checkCpf = accounts.filter((item) => item.CPF === CPF)
      if (checkCpf.length > 0) {
         res.statusCode = 406
         throw new Error("CPF já cadastrado")
      }

      accounts.push({
         name,
         CPF,
         dateOfBirthString,
         balance: 0,
         statement: []
      })


      res.status(201).send("Conta criada com sucesso!")
   } catch (error: any) {
      console.log(error)
      res.send(error.message)
   }
})

app.post("/users/pagamento",(req:Request,res:Response)=>{
   const {dueDate,value,description,CPF,}=req.body
   const user = accounts.find((item)=>item.CPF===CPF)
   
   try{
      if (!user) {
         res.statusCode = 404
         throw new Error("Nenhuma conta encontrada")
      }

      accounts.filter((item)=>item.CPF===CPF)
      .map((item)=>item.statement.push({value:value,date:dueDate?new Date(dueDate) :new Date(Date.now()),description:description}))

      res.send("conta adicionada")

   }catch(error:any){
      res.send(error.message)
   }
})

app.get("/users/all", (req: Request, res: Response) => {
   try {

      if (!accounts.length) {
         res.statusCode = 404
         throw new Error("Nenhuma conta encontrada")
      }

      res.status(200).send(accounts)
   } catch (error: any) {
      res.send(error.message)
   }
})

app.get("/users/saldo", (req: Request, res: Response) => {
   const CPF = req.query.userCPF as string
   const user = accounts.find((item) => item.CPF == CPF)
   try {

      if (!user) {
         res.statusCode = 404
         throw new Error("Nenhuma conta encontrada")
      }

      res.statusCode=202
      res.send(`saldo : ${(user.balance).toString()}`)

   } catch (error: any) {

      res.send(error.message)
   }
})

app.put("/users/deposito",(req:Request,res:Response)=>{
   const {CPF,name,value} = req.body
   const user = accounts.find((item)=>(item.CPF===CPF&&item.name===name))

   try{
      if(!user){
         res.statusCode=404
         res.send("Nenhum usuario encontrado")
      }
      accounts.filter((item)=>(item.CPF===CPF&&item.name===name)).map((item)=>item.balance=(item.balance+value))
      accounts.filter((item)=>(item.CPF===CPF&&item.name===name))
      .map((item)=>item.statement.push({value:value,date:new Date(Date.now()),description:"Deposito em dinheiro"}))
      
      res.send("Valor depositado com sucesso!")



   }catch(error:any){
      res.send(error.message)
   }
})

app.put("/users/atualizar/:cpf",(req:Request,res:Response)=>{
   const CPF=req.params.cpf
   const userIndex = accounts.findIndex((item)=>item.CPF===CPF)

   try{ 
     if(userIndex<0){
         res.statusCode=404
         res.send("Nenhum usuario encontrado")
      }

      let newBalance = accounts[userIndex].balance

      accounts[userIndex].statement.forEach(balance => {
         if(balance.value < 0 )
          newBalance += balance.value
      }
      )

      accounts[userIndex].balance = newBalance
      accounts[userIndex].statement.map((item)=>{
         if (item.value<0){
            item.value=0
            item.description="pago"
         }})

      


 res.send(accounts)


   }catch(error:any){
      res.send(error.message)
   }
})

app.listen(3003, () => {
   console.log("Servidor rodando na porta 3003")

})

new Date(Date.now())>new Date("2022/08/22")