import { connection } from '../../'
import { Student } from '../../types'

export const getStudentByEmailDB = async (
    email:string
    ): Promise<Student[]> => {
    try {
        return await connection('STUDENTS')
        .where('email', email)
    } catch (error) {
        return []
    }
}
