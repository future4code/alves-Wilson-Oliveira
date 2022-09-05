import connection from "../connection";

export default async function productById(
    id:string
){

    const [result]= await connection.raw(
        `SELECT * 
        FROM labecommerce_products
        WHERE id='${id}'`
    )

    return result[0]
}