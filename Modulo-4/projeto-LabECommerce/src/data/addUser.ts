import connection from "../connection";

export default  async function addUser (
    id:string,
    name:string,
    email:string,
    password:string
) : Promise<void> {
    await connection('labecommerce_users')
    .insert({
        id,
        name,
        email,
        password
    })
}