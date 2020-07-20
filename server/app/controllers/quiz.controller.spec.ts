import { expect } from 'chai';
import * as supertest from 'supertest';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

/*tslint:disable:no-any */
describe('QuizController', () => {

    let databaseService: Stubbed<DatabaseService>;
    let app: Express.Application;
    const validDatabaseResponse = {
        rows: [
          {
            quiz_id: 1,
            title: 'My dear quiz',
            max_duration: 125,
            room_id: 1
          }
        ]
    };

    beforeEach(async () => {
        const [container, sandbox] = await testingContainer();
        container.rebind(Types.DatabaseService).toConstantValue({
            updateQuiz: sandbox.stub().resolves(validDatabaseResponse)
        });
        databaseService = container.get(Types.DatabaseService);
        app = container.get<Application>(Types.Application).app;
    });

    it('PUT /api/quizzes/:quizId should return a quiz', async () => {
        databaseService = databaseService;
        return supertest(app)
            .put('/api/quizzes/1')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.have.property('quizId');
                expect(response.body).to.have.property('maxDuration');
                expect(response.body).to.have.property('title');
                expect(response.body).to.have.property('roomId');
            });
    });

});
