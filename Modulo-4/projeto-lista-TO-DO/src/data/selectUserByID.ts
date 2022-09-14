import connection from "../connection";

export default async function selectUserById(id:string){
    const [result]=  await connection (`to_do_list_user`)
    .select(`*`) 
    .where({
        id:id
    })
    return result 
    
}