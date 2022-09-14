import connection from "../connection";

export default async function purchaseRecord(
    id:string,
    userId:string,
    productId:string,
    quantity:number,
    totalPrice:number
){
    await connection.insert ({
        id,
        user_id:userId,
        product_id:productId,
        quantity,
        total_price:totalPrice

    }).into('labecommerce_purchases')
}