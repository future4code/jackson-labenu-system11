import { Request, Response } from 'express'
import { getAge } from '../../helpers';
import { getStudentsBirthDate } from '../data/getStudentsBirthDate';

export const getStudentAgeById = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    try {
        if(!id){
            res.statusCode = 400
            throw new Error("Missing params for search.");
        } else {
            const studentBirthDate = await getStudentsBirthDate(id)
            res.status(200).send({
                age: getAge(studentBirthDate)
            })
        }
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
