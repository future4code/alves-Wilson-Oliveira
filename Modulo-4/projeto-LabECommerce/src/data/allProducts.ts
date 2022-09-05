import connection from "../connection";

export default async function allProducts(
    order:string,
    search:string
    ){

    const [result]= await connection.raw(
        `SELECT * FROM labecommerce_products
        WHERE name LIKE '%${search}%'
        ORDER BY name ${order} `
        
    )

    return result
}