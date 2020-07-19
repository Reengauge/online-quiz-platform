import { expect } from 'chai';
import * as supertest from 'supertest';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

/*tslint:disable:no-any */
describe('ChoiceController', () => {

    let databaseService: Stubbed<DatabaseService>;
    let app: Express.Application;
    const validDatabaseResponse = {
        rows: [
          {
            choice_id: 1,
            choice_label: '125 km/h',
            question_id: 1
          }
        ]
    };

    beforeEach(async () => {
        const [container, sandbox] = await testingContainer();
        container.rebind(Types.DatabaseService).toConstantValue({
            getAllChoicesByQuestion: sandbox.stub().resolves(validDatabaseResponse)
        });
        databaseService = container.get(Types.DatabaseService);
        app = container.get<Application>(Types.Application).app;
    });

    it('GET /api/choices/xxx should return a JSON array', async () => {
        databaseService = databaseService;
        return supertest(app)
            .get('/api/choices/1')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.be.a('array');
            });
    });

});
