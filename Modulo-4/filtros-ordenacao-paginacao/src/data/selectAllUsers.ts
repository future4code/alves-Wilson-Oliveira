

import connection from "./connection"

export default async function selectAllUsers(name:string, type:string, ordination:string, colunn:string, size:number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE name LIKE '%${name}%' AND type = '${type}'
       ORDER BY ${colunn} ${ordination}
       LIMIT 5 OffSET ${size} ;
    `)
 
    return result[0]
 }
 