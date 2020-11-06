import { Request, Response } from 'express'
import { createStudentDB } from '../data/createStudentDB';
import { getStudentByEmailDB } from '../data/getStudentByEmailDB';
import { Student } from '../../types'

export const createStudent = async (req: Request, res: Response) => {
    try {
        const studentData: Student = {
            id: undefined,
            name: req.body.name as string,
            email: req.body.email as string,
            birthdate: req.body.birthdate as string,
            mission_id: 0
        }
        console.log(studentData)

        if(!studentData.name ||  !studentData.email  || !studentData.birthdate){
            res.statusCode = 400
            throw new Error("É necessário fornecer nome, e-mail e data de nascimento do estudante!");
        } else {
            const foundStudents = await getStudentByEmailDB(studentData.email)
    
            if(foundStudents.length) {
                res.statusCode = 406
                throw new Error("Este usuário já existe.");
            } else {
                await createStudentDB(studentData)
                res.status(201).send({
                    student: studentData,
                    message: "Usuário criado com sucesso!"
                })
            }
        }
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
