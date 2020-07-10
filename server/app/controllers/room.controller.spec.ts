import { expect } from 'chai';
import * as supertest from 'supertest';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { HttpStatus } from '../http-status';
import Types from '../types';
import { DatabaseService } from '../services/database.service';

/*tslint:disable:no-any */
describe('RoomController', () => {
    
    let databaseService: Stubbed<DatabaseService>;
    let app: Express.Application;
    const validDatabaseResponse = {
        rows: [
          {
            question_id: 1,
            question_label: 'What is your name?',
            correct_answer: 'John Doe',
            quiz_id: 1
          }
        ]
    }

    beforeEach(async () => {
        const [container, sandbox] = await testingContainer();
        container.rebind(Types.DatabaseService).toConstantValue({
            getAllQuestionsByEventKey: sandbox.stub().resolves(validDatabaseResponse)
        });
        databaseService = container.get(Types.DatabaseService);
        app = container.get<Application>(Types.Application).app;
    });

    it('GET /api/rooms/:eventKey/questions should return a JSON array', async () => {
        databaseService = databaseService;
        return supertest(app)
            .get('/api/rooms/xxxxxx/questions')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.be.a('array');
            });
    });

    
});
