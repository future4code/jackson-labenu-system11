import { connection } from '../..'
import { transformDate } from '../../helpers';
import { Student } from '../../types';

export const createStudentDB = async (
    data: Student
    ): Promise<void> => {
    try {
        await connection('STUDENT')
        .insert({
            name: data.name,
            email: data.email,
            birthdate: transformDate(data.birthdate),
            mission_id: data.mission_id
        })
    } catch (error) {
        throw new Error(error.sqlMessage);  
    }
}
