import { expect } from 'chai';
import * as supertest from 'supertest';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { HttpStatus } from '../http-status';
import Types from '../types';
import { DatabaseService } from '../services/database.service';

/*tslint:disable:no-any */
describe('AnswerController', () => {
    
    let databaseService: Stubbed<DatabaseService>;
    let app: Express.Application;
    const validAnswer = {
        participantId: '123',
        answerLabel: 'My answer'
    }

    beforeEach(async () => {
        const [container, sandbox] = await testingContainer();
        container.rebind(Types.DatabaseService).toConstantValue({
            createAnswer: sandbox.stub().resolves()
        });
        databaseService = container.get(Types.DatabaseService);
        app = container.get<Application>(Types.Application).app;
    });

    it('POST /api/answers/xxx should return a CREATED status', async () => {
        databaseService = databaseService;
        return supertest(app)
            .post('/api/answers/1')
            .send(validAnswer)
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.CREATED);
            });
    });

    
});
