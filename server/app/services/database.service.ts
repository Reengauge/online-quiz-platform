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
        keepAlive: false,
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

    /* CONTENT */

    async getAllQuestionsByEventKey(eventKey: string): Promise<QueryResult> {
        return this.pool.query(`
        SELECT qn.question_id, qn.question_label, qn.correct_answer, qn.quiz_id
        FROM ${this.SCHEMA_NAME}.Question qn, ${this.SCHEMA_NAME}.Quiz qz, ${this.SCHEMA_NAME}.Room r
        WHERE r.event_key = '${eventKey}'
        AND r.room_id = qz.room_id
        AND qn.quiz_id = qz.quiz_id
        ORDER BY qn.question_id`);
    }

    async getAllChoicesByQuestion(questionId: string): Promise<QueryResult> {
        return this.pool.query(`
        SELECT * FROM ${this.SCHEMA_NAME}.Choice c
        WHERE c.question_id = '${questionId}';`);
    }

    async createAnswer(questionId: string, participantId: string, answerLabel: string) {
        return this.pool.query(`
        INSERT INTO ${this.SCHEMA_NAME}.AnswerEntry (question_id, participant_id, answer_label) 
        VALUES (${questionId},${participantId},'${answerLabel}');`);
    }
}
