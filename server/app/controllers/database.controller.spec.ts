import { expect } from 'chai';
import * as supertest from 'supertest';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

/*tslint:disable:no-any */
describe('DatabaseController', () => {

    let databaseService: Stubbed<DatabaseService>;
    let app: Express.Application;
    const databaseResetConfirmation = 'Database was reset';
    const validDatabaseResponse = {
        rows: [
          {
            question_id: 1,
            question_label: 'What is your name?',
            correct_answer: 'John Doe',
            quiz_id: 1
          }
        ]
    };

    beforeEach(async () => {
        const [container, sandbox] = await testingContainer();
        container.rebind(Types.DatabaseService).toConstantValue({
            resetDatabase: sandbox.stub().resolves(),
            getAllFromTable: sandbox.stub().resolves(validDatabaseResponse)
        });
        databaseService = container.get(Types.DatabaseService);
        app = container.get<Application>(Types.Application).app;
    });

    it('GET /api/db/reset should return a confirmation message', async () => {
        databaseService = databaseService;
        return supertest(app)
            .get('/api/db/reset')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.text).to.equal(databaseResetConfirmation);
            });
    });

    it('GET /api/db/tables/:tableName should return a JSON array', async () => {
        databaseService = databaseService;
        return supertest(app)
            .get('/api/db/tables/xxxxxx')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.be.a('array');
            });
    });

});
