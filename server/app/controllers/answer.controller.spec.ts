import { expect } from 'chai';
import * as supertest from 'supertest';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

/*tslint:disable:no-any */
describe('AnswerController', () => {

    let databaseService: Stubbed<DatabaseService>;
    let app: Express.Application;
    const validAnswer = {
        participantId: '123',
        answerLabel: 'My answer'
    };
    const validAnswerResponse = {
        rows: [
            {
                participant_id: '123',
                answer_label: 'My answer'
            }
          ]
    };

    beforeEach(async () => {
        const [container, sandbox] = await testingContainer();
        container.rebind(Types.DatabaseService).toConstantValue({
            createAnswer: sandbox.stub().resolves(),
            getAllAnswersByQuiz: sandbox.stub().resolves(validAnswerResponse)
        });
        databaseService = container.get(Types.DatabaseService);
        app = container.get<Application>(Types.Application).app;
    });

    it('GET /api/answers/:quizId should return a JSON array', async () => {
        databaseService = databaseService;
        return supertest(app)
            .get('/api/answers/1')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.be.a('array');
            });
    });

    it('POST /api/answers/:questionId should return a CREATED status', async () => {
        databaseService = databaseService;
        return supertest(app)
            .post('/api/answers/1')
            .send(validAnswer)
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.CREATED);
            });
    });

});
