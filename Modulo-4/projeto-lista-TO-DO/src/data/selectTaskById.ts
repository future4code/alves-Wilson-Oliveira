import connection from "../connection";

export default async function selectTaskById(id: string): Promise<any> {
    const [result] = await connection.raw(
        `SELECT task.*,user.nickname 
        FROM to_do_list_tasks as task
        JOIN to_do_list_user as user
        ON author_id = user.id
        WHERE task.id = '${id}'`)

        
    return result[0]

}