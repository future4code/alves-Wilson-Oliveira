import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"
import { typesUser } from "../types"


export const getAllUsersOrdination = async(req: Request,res: Response): Promise<void> =>{
    try {
        let query = req.query.name as string
        let typeUser = req.params.type as string
        let ordination= req.query.orden as string
        let colunn = req.query.colunn as string
        let page = Number(req.query.page as string)
       
        if(!page||isNaN(page)||page<=0){
         page=1
       }

       if(!ordination||ordination?.toLowerCase()!=="desc"){
         ordination = "asc"
       }
       
       if(!colunn||colunn.toLowerCase()!=="name"&&colunn.toLowerCase()!=="id"&&colunn.toLowerCase()!=="type"){
         colunn = "email"
       }


       const size = 5 * (page -1)


       

       const users = await selectAllUsers(query,typeUser,ordination,colunn,size)



 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }