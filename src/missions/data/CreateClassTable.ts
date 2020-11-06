import { connection } from '../../index';
import { transformDate } from "../../helpers";

export default  async function insertClass(
    id: string,
    name:string,
    start_date:string,
    end_date:string,
    module: number
):Promise<void>{

    await connection.insert(
        {
            
            id,
            name,
            start_date:transformDate(start_date),
            end_date:transformDate(end_date),
            module
        }
    ).into("MISSION")
}