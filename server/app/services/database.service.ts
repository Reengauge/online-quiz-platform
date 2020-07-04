import { injectable } from 'inversify';
import { Pool, QueryResult } from 'pg';
import 'reflect-metadata';
//import * as CONSTANTS from '../constants';
import { data } from '../queries/populate-data';
import { schema } from '../queries/schema';

@injectable()
export class DatabaseService {
    /*connectionConfig: ConnectionConfig = {
        user: CONSTANTS.DB_USER,
        database: CONSTANTS.DB_NAME,
        password: CONSTANTS.DB_PASSWORD,
        port: CONSTANTS.DB_PORT,
        host: CONSTANTS.DB_HOST,
        keepAlive: true,
    };

    private pool: Pool = new Pool(this.connectionConfig);
    private readonly SCHEMA_NAME: string = CONSTANTS.DB_SCHEMA_NAME;*/

    /*private pool: Pool = new Pool({
        user: 'sps-user',
        host: '127.0.0.1',
        database: 'quiz-db',
        password: '1cbo6jCNKBIzvawy1',
        port: 5432
    });*/

    private databaseConfig  = {
        connectionString: 'postgres://aomrjnfi:6QZRY7DMnHwNeyxBVNolP3AR2ksQSZHk@ruby.db.elephantsql.com:5432/aomrjnfi'
    };

    private pool = new Pool(this.databaseConfig);

    constructor() {
        this.pool.connect();
    }

    /* DATABASE DEBUG */

    async resetDatabase(): Promise<void> {
        console.log('Resetting database');
        console.log(this.pool.query(schema));
        await this.pool.query(schema);
        console.log('Reset complete');
        await this.pool.query(data);
        return;
    }

    async getAllFromTable(tableName: string): Promise<QueryResult> {
        //return this.pool.query(`SELECT * FROM ${this.SCHEMA_NAME}.${tableName};`);
        return this.pool.query(`SELECT * FROM QUIZ_DB.${tableName};`);
    }
}
