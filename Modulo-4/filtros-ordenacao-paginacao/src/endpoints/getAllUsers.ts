// import { Request, Response } from "express"
// import selectAllUsers from "../data/selectAllUsers"
// import { typesUser } from "../types"


// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
//         const query = req.query.name as string
//         const typeUser = req.params.type as string
//        const users = await selectAllUsers(query,typeUser)
 
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }
 
//        res.status(200).send(users)
       
//     } catch (error:any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }