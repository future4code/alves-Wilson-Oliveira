
import jwt from "jsonwebtoken"

export  class gerarToken {

    geradortoken (id:string) {
    return jwt.sign(
        {id:id},
        process.env.JWT_KEY!,{
        expiresIn:"1Y"})
        
    }

    verificadortoken(token:string ){
        const verifica= jwt.verify(token,process.env.JWT_KEY!)
        return verifica

    }

}