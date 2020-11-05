import express, { Express, Request, Response } from "express";
import knex from 'knex'
//import cors from "cors";
import { AddressInfo } from "net";
import dotenv from 'dotenv'

const app: Express = express();

//transformando a resposta do servidor
app.use(express.json());
//app.use(cors())

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