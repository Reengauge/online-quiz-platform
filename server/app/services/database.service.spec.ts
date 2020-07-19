import { expect } from 'chai';
import { Pool } from 'pg';
import sinon = require('sinon');
import { testingContainer } from '../../test/test-utils';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

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
    };

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

    it('#createRoom should send a PostgreSQL query', async () => {
        await databaseService.createRoom('xxxxxxxx', 'My room', 'fes45f15s4');
        expect(spy.calledTwice);
    });

    it('#createQuiz should send a PostgreSQL query', async () => {
        await databaseService.createQuiz(120, 'My quiz', '1');
        expect(spy.calledTwice);
    });

    it('#createQuestionAndChoices should send a PostgreSQL query', async () => {
        await databaseService.createQuestionAndChoices('What is your name', 'John', 1, ['Doe']);
        expect(spy.called);
    });

    it('#createQuestion should send a PostgreSQL query', async () => {
        await databaseService.createQuestion('What is your name', 'John', 1);
        expect(spy.calledThrice);
    });

    it('#createChoices should send a PostgreSQL query', async () => {
        await databaseService.createChoices('1', ['John', 'Doe']);
        expect(spy.calledTwice);
    });

    it('#getAllAnswersByQuiz should send a PostgreSQL query', async () => {
        await databaseService.getAllAnswersByQuiz('1');
        expect(spy.calledOnce);
    });

    it('#getRoomByEventKey should send a PostgreSQL query', async () => {
        await databaseService.getRoomByEventKey('12345678');
        expect(spy.calledOnce);
    });

    it('#getAllQuizzesByEventKey should send a PostgreSQL query', async () => {
        await databaseService.getAllQuizzesByEventKey('12345678');
        expect(spy.calledOnce);
    });

    it('#updateQuiz should send a PostgreSQL query', async () => {
        await databaseService.updateQuiz('1', 1, 'test title');
        expect(spy.calledTwice);
    });

    it('#updateQuestion should send a PostgreSQL query', async () => {
        await databaseService.updateQuestion('1', 'test question', 'test answer');
        expect(spy.calledTwice);
    });

});
