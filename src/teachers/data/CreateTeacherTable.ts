import {connection} from "../../index"

export async function createTeacherTable():Promise<void>{//sempre retorna promise pq é assincrona e se não tem return usa <void>

    try{
    await connection.raw(`
        CREATE TABLE teacher (
            id INT PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(50) UNIQUE NOT NULL,
            birthdate DATE NOT NULL,
            mission_id int
        );
    `)

        console.log("Sucesso!")
    }catch (error){
        console.log(error)
    }

}
createTeacherTable()