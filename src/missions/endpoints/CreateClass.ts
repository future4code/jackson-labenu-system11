import  {Request, Response} from'express'
import insertClass from '../data/CreateClassTable'

export default async function createClass (req:Request, res: Response
):Promise<void>{
    try {
        //validar entradas
         if(!req.body.name || !req.body.start_date 
            || !req.body.end_date  || !req.body.module)
            {
                res.status(400).send("Preencha todos os campos.")
                return
           }  
      
    //criando um id aleatório
    const id: string = Date.now() + Math.random().toString()
    
        //consultar o banco
        await insertClass (
            id,
            req.body.name,
            req.body.start_date,
            req.body.end_date,
            req.body.module
        )

        res.status(200).send("Turma criada com sucesso.")
       
        
    } catch (error) {
        res.status(400).send({message: error.mensage || error.sqlMessage})
    }
}
