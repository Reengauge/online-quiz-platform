import { expect } from 'chai';
import * as supertest from 'supertest';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

/*tslint:disable:no-any */
describe('QuestionController', () => {

    let databaseService: Stubbed<DatabaseService>;
    let app: Express.Application;
    const validQuestionResponse = {
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
            createQuestionAndChoices: sandbox.stub().resolves(validQuestionResponse),
            updateQuestion: sandbox.stub().resolves(validQuestionResponse)
        });
        databaseService = container.get(Types.DatabaseService);
        app = container.get<Application>(Types.Application).app;
    });

    it('POST /api/questions should return a question', async () => {
        databaseService = databaseService;
        return supertest(app)
            .post('/api/questions')
            .send({ questionLabel: 'What is your name?', quizId: 1 })
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.CREATED);
                expect(response.body).to.have.property('questionId');
                expect(response.body).to.have.property('questionLabel');
                expect(response.body).to.have.property('correctAnswer');
                expect(response.body).to.have.property('quizId');
            });
    });

    it('PUT /api/questions/xxxxxx should return a question', async () => {
        databaseService = databaseService;
        return supertest(app)
            .put('/api/questions/1')
            .send({ questionLabel: 'What is your name?', correctAnswer: 'Josh' })
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.have.property('questionId');
                expect(response.body).to.have.property('questionLabel');
                expect(response.body).to.have.property('correctAnswer');
                expect(response.body).to.have.property('quizId');
            });
    });

<<<<<<< HEAD
=======
    
>>>>>>> eec90fba6c39a6e2b1e945e7580e6fc228b1ffa3
});
