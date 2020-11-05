import {connection} from "../index"

export async function createTeacherTable(
    id: number, 
    name: string,
    email: string,
    birthdate: Date,
    mission_id: number
): Promise<void> {
    try {
        await connection.raw(`
            INSERT INTO pokemons (id, name, email, birthdate, mission_id) VALUES (
                ${id},
                "${name}",
                "${email}",
                "${birthdate}",
                 ${mission_id}
            );
        `)
        console.log("Sucesso!")
    } catch (error) {
        console.log(error)

    }
}

