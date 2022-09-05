import connection from "../connection";

export default async function userById(
    id:string,
){
    const [result] = await connection('labecommerce_users')
    .select('*')
    .where({
        id:id
    }) 

    return result
}