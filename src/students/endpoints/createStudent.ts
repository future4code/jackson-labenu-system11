import { Request, Response } from 'express'
import { createStudentDB } from '../data/createStudentDB';
import { getStudentByEmailDB } from '../data/getStudentByEmailDB';
import { Student } from '../../types'

export const createStudent = async (req: Request, res: Response) => {
    const studentData: Student = {
        id: undefined,
        name: String(req.body.name),
        email: String(req.body.email),
        birthdate: String(req.body.birthdate),
        mission_id: Number(req.body.mission_id)
    }
    try {
        if(!studentData.name || !studentData.email || !studentData.birthdate || !studentData.mission_id){
            res.statusCode = 400
            throw new Error("É necessário fornecer nome, e-mail e data de nascimento do estudante e o ID da turma da qual fará parte!");
        }

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

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
