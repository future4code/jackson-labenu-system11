import express, { Express } from "express";
import knex from 'knex'
//import cors from "cors";
import { AddressInfo } from "net";
import dotenv from 'dotenv'
import { createStudent } from "./students/endpoints/createStudent";
import createClass from "./missions/endpoints/CreateClass";

const app: Express = express();

//transformando a resposta do servidor
app.use(express.json());
//app.use(cors())

app.post('/student', createStudent),
app.post('/mission', createClass)

dotenv.config()

//Config do knex
export const connection = knex({
    client: "mysql",
    connection: {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        port:3306
        }
    })

    //configuração do servidor
    const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });