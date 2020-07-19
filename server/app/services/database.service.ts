import { injectable } from 'inversify';
import { ConnectionConfig, Pool, QueryResult } from 'pg';
import 'reflect-metadata';
import { v4 as uuidv4 } from 'uuid';
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
    public Pool = require('pg').Pool;

    private readonly SCHEMA_NAME: string = CONSTANTS.DB_SCHEMA_NAME;

    constructor() {
        this.pool.connect().then((r: any) => console.log('connected'));
    }

    /* DATABASE DEBUG */

    async resetDatabase(): Promise<void> {
        await this.pool.query(schema);
        await this.pool.query(data);
        return;
    }

    async getAllFromTable(tableName: string): Promise<QueryResult> {
        const query = `SELECT * FROM ${this.SCHEMA_NAME}.${tableName}`;
        return this.pool.query(query);
    }

    /* CONTENT */

    async getAllQuestionsByEventKey(eventKey: string): Promise<QueryResult> {
        const query = `SELECT qn.question_id, qn.question_label, qn.correct_answer, qn.quiz_id
        FROM ${this.SCHEMA_NAME}.Question qn, ${this.SCHEMA_NAME}.Quiz qz, ${this.SCHEMA_NAME}.Room r
        WHERE r.event_key = $1
        AND r.room_id = qz.room_id
        AND qn.quiz_id = qz.quiz_id
        ORDER BY qn.question_id`;
        const values = [eventKey];
        console.log("i'm here");
        return this.pool.query(query, values);
    }

    async getAllChoicesByQuestion(questionId: string): Promise<QueryResult> {
        const query = `SELECT * FROM ${this.SCHEMA_NAME}.Choice c WHERE c.question_id = $1;`;
        const values = [questionId];
        return this.pool.query(query, values);
    }

    async createAnswer(questionId: string, participantId: string, answerLabel: string): Promise<QueryResult> {
        // Parameterized queries prevent SQL injections and sanitize input such as single quotes inside strings
        const query = `INSERT INTO ${this.SCHEMA_NAME}.AnswerEntry (question_id, participant_id, answer_label) VALUES ($1,$2,$3);`;
        const values = [questionId, participantId, answerLabel];
        return this.pool.query(query, values);
    }

    async generateUniqueEventKey(): Promise<string> {
        let eventKey;
        let existingKeys;
        do {
            // Generate a new random value on each call
            eventKey = uuidv4().slice(0, 8);

            // Verify that the value doesn't already exist in the database
            existingKeys = await this.pool.query(`
                SELECT event_key FROM ${this.SCHEMA_NAME}.Room
                WHERE event_key = '${eventKey}'`);
        } while (existingKeys.rowCount > 0);
        return eventKey;
    }

    async createRoom(eventKey: string, name: string, presenterId: string): Promise<QueryResult> {
        // Create the room in the database
        let query = `INSERT INTO ${this.SCHEMA_NAME}.Room (event_key, room_name, presenter_id) VALUES ($1,$2,$3);`;
        let values = [eventKey, name, presenterId];
        await this.pool.query(query, values);

        // Retreive the room from the database
        query = `SELECT * FROM ${this.SCHEMA_NAME}.Room WHERE event_key = $1`;
        values = [eventKey];
        return this.pool.query(query, values);
    }

    async createQuiz(maxDuration: number, title: string, roomId: string): Promise<QueryResult> {
        // Create the quiz in the database
        let query = `INSERT INTO ${this.SCHEMA_NAME}.Quiz (max_duration, title, room_id) VALUES ($1,$2,$3);`;
        let values = [maxDuration.toString(), title, roomId];
        await this.pool.query(query, values);

        // Retreive the quiz from the database
        query = `SELECT * FROM ${this.SCHEMA_NAME}.Quiz
            WHERE room_id = $1
            ORDER BY quiz_id DESC
            LIMIT 1`;
        values = [roomId];
        return this.pool.query(query, values);
    }

    async createQuestionAndChoices(
        questionLabel: string,
        correctAnswer: string | undefined,
        quizId: number,
        choiceLabels: string[] | undefined,
    ): Promise<QueryResult> {
        const question = await this.createQuestion(questionLabel, correctAnswer, quizId);
        if (choiceLabels !== undefined) {
            const questionId = question.rows[0]['question_id'];
            await this.createChoices(questionId, choiceLabels);
        }
        return question;
    }

    async createQuestion(questionLabel: string, correctAnswer: string | undefined, quizId: number): Promise<QueryResult> {
        // Create the question in the database
        if (correctAnswer !== undefined) {
            const query = `INSERT INTO ${this.SCHEMA_NAME}.Question (question_label, correct_answer, quiz_id) VALUES ($1,$2,$3);`;
            const values = [questionLabel, correctAnswer, quizId.toString()];
            await this.pool.query(query, values);
        } else {
            const query = `INSERT INTO ${this.SCHEMA_NAME}.Question (question_label, quiz_id) VALUES ($1,$2);`;
            const values = [questionLabel, quizId.toString()];
            await this.pool.query(query, values);
        }

        // Retrieve the question from the database
        const query = `SELECT * FROM ${this.SCHEMA_NAME}.Question
                WHERE quiz_id = $1
                ORDER BY question_id DESC
                LIMIT 1`;
        const values = [quizId.toString()];
        return this.pool.query(query, values);
    }

    async createChoices(questionId: string, choiceLabels: string[]): Promise<void> {
        const query = `INSERT INTO ${this.SCHEMA_NAME}.Choice (choice_label, question_id) VALUES ($1,$2);`;
        for (const choiceLabel of choiceLabels) {
            const values = [choiceLabel, questionId];
            await this.pool.query(query, values);
        }
    }

    async getAllAnswersByQuiz(quizId: string): Promise<QueryResult> {
        const query = `SELECT a.answer_label, a.question_id, a.participant_id
            FROM ${this.SCHEMA_NAME}.AnswerEntry a, ${this.SCHEMA_NAME}.Question q
            WHERE q.quiz_id = $1
            AND q.question_id = a.question_id `;
        const values = [quizId];
        return this.pool.query(query, values);
    }

    async getRoomByEventKey(eventKey: string): Promise<QueryResult> {
        const query = `SELECT * FROM ${this.SCHEMA_NAME}.Room
            WHERE event_key = $1`;
        const values = [eventKey];
        return this.pool.query(query, values);
    }

    async getAllQuizzesByEventKey(eventKey: string): Promise<QueryResult> {
        const query = `SELECT q.quiz_id, q.max_duration, q.title, q.room_id, *
            FROM ${this.SCHEMA_NAME}.Quiz q, ${this.SCHEMA_NAME}.Room r
            WHERE r.event_key = $1
            AND r.room_id = q.room_id`;
        const values = [eventKey];
        return this.pool.query(query, values);
    }

    // const query = `SELECT * FROM ${this.SCHEMA_NAME}.Choice c WHERE c.question_id = $1;`;
    // const values = [questionId];
}
