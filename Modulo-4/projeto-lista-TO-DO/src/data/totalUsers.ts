import connection from "../connection";

export default async function totalUsers () {
    const [result] = await connection.raw(
        `SELECT id , nickname 
        FROM to_do_list_user`)
        return result
        
}