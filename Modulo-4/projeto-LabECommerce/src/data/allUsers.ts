import connection from "../connection";

export default async function allUsers() {

    const result = await connection('labecommerce_users')
    .select('*') 

    return result
} 