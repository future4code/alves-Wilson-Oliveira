import connection from "../connection";

export default async function createProduct (
    id:string,
    name:string,
    price:number,
    imageUrl:string

){
    await connection
    .insert({
        id,
        name,
        price,
        image_url: imageUrl
    }).into('labecommerce_products')
}