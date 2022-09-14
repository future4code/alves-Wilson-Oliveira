import connection from "../connection";

export default async function insertUser (
    id:string,
    name:string,
    nickname:string,
    email:string
) {
    await connection.insert({
        name,
        id,
        nickname,
        email
    }).into (`to_do_list_user`)
}