import { injectable } from 'inversify';
import { ConnectionConfig, Pool, QueryResult } from 'pg';
import 'reflect-metadata';
import * as CONSTANTS from '../constants';
import { data } from '../queries/populate-data';
import { schema } from '../queries/schema';

@injectable()
export class DatabaseService {

    connectionConfig: ConnectionConfig = {
        user: CONSTANTS.DB_USER,
        database: CONSTANTS.DB_NAME,
        password: CONSTANTS.DB_PASSWORD,
        port: CONSTANTS.DB_PORT,
        host: CONSTANTS.DB_HOST,
        keepAlive: true,
    };

    private pool: Pool = new Pool(this.connectionConfig);
    private readonly SCHEMA_NAME: string = CONSTANTS.DB_SCHEMA_NAME;

    constructor() {
        this.pool.connect();
    }

    /* DATABASE DEBUG */

    async resetDatabase(): Promise<void> {
        await this.pool.query(schema);
        await this.pool.query(data);
        return;
    }

    async getAllFromTable(tableName: string): Promise<QueryResult> {
        return this.pool.query(`SELECT * FROM ${this.SCHEMA_NAME}.${tableName};`);
    }
}
