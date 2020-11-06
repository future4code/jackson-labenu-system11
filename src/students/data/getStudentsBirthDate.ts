import { connection } from '../..'

export const getStudentsBirthDate = async (
    id: number
    ): Promise<any> => {

    try {
        const birthdate = await connection('STUDENT')
        .select('birthdate')
        .where('id', id)

        return birthdate[0].birthdate
    } catch (error) {
        throw new Error(error.sqlMessage);
    }
}
