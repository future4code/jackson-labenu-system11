import {Request, Response} from "express";


export const createTeacher = async (req: Request, res: Response): Promise<void>=> {
    try {

        const { id, name, email, birthdate, mission_id } = req.body;
        
    } catch (error) {
        console.log(error)
        res.send(error.message)
     }
  } ;