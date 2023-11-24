import { createPool } from "mysql2/promise";
import "dotenv/config";



const hostID =process.env.HOSTID;
const  userN = process.env.USUARIO;
const userP = process.env.PASSWORD;

export const pool =  createPool({
    host: hostID,
    user : userN,
    password:userP,
    port : 3306,
});