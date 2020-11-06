import { connection } from '../..'
import { Teacher } from '../../types'

export const getTeacherByEmailDB = async (
    email:string
    ): Promise<Teacher[]> => {
    try {
        return await connection('TEACHER')
        .where('email', email)
    } catch (error) {
        return []
    }
}
