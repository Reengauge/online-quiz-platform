import { expect } from 'chai';
//import * as supertest from 'supertest';
import { testingContainer } from '../../test/test-utils';
//import { Application } from '../app';
//import { HttpStatus } from '../http-status';
import Types from '../types';
import { DatabaseService } from '../services/database.service';
import sinon = require('sinon');
import { Pool } from 'pg';

/*tslint:disable:no-any */
describe('DatabaseService', () => {
    
    let databaseService: DatabaseService;
    let spy: sinon.SinonStub;
    const validQuestionArray = {
        rows: [
          {
            question_id: 1,
            question_label: 'What is your name?',
            correct_answer: 'John Doe',
            quiz_id: 1
          }
        ]
    }

    before(async () => {
        const [container] = await testingContainer();
        databaseService = container.get<DatabaseService>(Types.DatabaseService);
        spy = sinon.stub(Pool.prototype, 'query').resolves(validQuestionArray);
    });

    beforeEach(async () => {
        spy.reset();
    });

    it('#resetDatabase should send a PostgreSQL query', async () => {
        await databaseService.resetDatabase();
        expect(spy.calledOnce);
    });

    it('#getAllFromTable should send a PostgreSQL query', async () => {
        await databaseService.getAllFromTable('room');
        expect(spy.calledOnce);
    });

    it('#getAllQuestionsByEventKey should send a PostgreSQL query', async () => {
        await databaseService.getAllQuestionsByEventKey('1');
        expect(spy.calledOnce);
    });

    it('#getAllChoicesByQuestion should send a PostgreSQL query', async () => {
        await databaseService.getAllChoicesByQuestion('1');
        expect(spy.calledOnce);
    });

    it('#createAnswer should send a PostgreSQL query', async () => {
        await databaseService.createAnswer('1', '1', 'answer');
        expect(spy.calledOnce);
    });

    
});
