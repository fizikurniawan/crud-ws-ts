import { HttpException } from '../exceptions/HttpException';
import { DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT } from '../config';
// import postgres from 'postgres';
const { Pool, Client } = require('pg');


const conntStr = {
    host: DB_HOST,
    port: 5432,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASS,
};

// const client = new Pool({ ...conntStr });
const client = new Client({ ...conntStr });
client.connect();
class dbService {
    public query = async (qry?: string, value?: any): Promise<void> => {
        try {
            const res = value ? await client.query(qry, value) : await client.query(qry);
            return res;
        } catch (error: any) {
            throw new HttpException(404, error);
        }
    };
}

export default dbService;
