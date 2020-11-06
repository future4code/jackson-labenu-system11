import { Request, Response } from 'express'
import { getTeacherByEmailDB } from '../data/getTeacherByEmailDB';
import { Teacher } from '../../types'
import { createTeacherTable } from '../../teachers/data/CreateTeacherTable';

export const createTeacher = async (req: Request, res: Response) => {
    const teacherData: Teacher = {
        id: undefined,
        name: String(req.body.name),
        email: String(req.body.email),
        birthdate: String(req.body.birthdate),
        mission_id: Number(req.body.mission_id)
    }
    try {
        if(!teacherData.name || !teacherData.email || !teacherData.birthdate || !teacherData.mission_id){
            res.statusCode = 400
            throw new Error("É necessário fornecer nome, e-mail e data de nascimento do professor e o ID da turma da qual fará parte!");
        }

        const foundTeacher = await getTeacherByEmailDB(teacherData.email)

        if(foundTeacher.length) {
            res.statusCode = 406
            throw new Error("Este usuário já existe.");
        } else {
            await createTeacherTable()
            res.status(201).send({
                teacher: teacherData,
                message: "Usuário criado com sucesso!"
            })
        }

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
