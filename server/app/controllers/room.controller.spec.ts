import { expect } from 'chai';
import * as supertest from 'supertest';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

/*tslint:disable:no-any */
describe('RoomController', () => {

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
    const validEventKey = 'w4dwa17q';
    const validRoomResponse = {
        rows: [
          {
            room_id: 1,
            event_key: validEventKey,
            room_name: 'Math class',
            presenter_id: 'd51ces46xwqq1',
            start_time: '2020-05-05',
            end_time: '2020-06-05'
          }
        ]
    };
    const validQuizResponse = {
        rows: [
          {
            quiz_id: 1,
            max_duration: 120,
            title: 'Dear John',
            room_id	: 'xxxxxxxx'
          }
        ]
    };

    beforeEach(async () => {
        const [container, sandbox] = await testingContainer();
        container.rebind(Types.DatabaseService).toConstantValue({
            getAllQuestionsByEventKey: sandbox.stub().resolves(validQuestionResponse),
            generateUniqueEventKey: sandbox.stub().resolves(validEventKey),
            createRoom: sandbox.stub().resolves(validRoomResponse),
            createQuiz: sandbox.stub().resolves(validQuizResponse),
            getRoomByEventKey: sandbox.stub().resolves(validRoomResponse),
            getAllQuizzesByEventKey: sandbox.stub().resolves(validQuizResponse)
        });
        databaseService = container.get(Types.DatabaseService);
        app = container.get<Application>(Types.Application).app;
    });

    it('POST /api/rooms should return a room', async () => {
        return supertest(app)
            .post('/api/rooms')
            .send({ name: 'Math class', presenterId: 'd51ces46xwqq1' })
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.CREATED);
                expect(response.body).to.have.property('roomId');
                expect(response.body).to.have.property('eventKey');
                expect(response.body).to.have.property('name');
                expect(response.body).to.have.property('presenterId');
                expect(response.body).to.have.property('startTime');
                expect(response.body).to.have.property('endTime');
            });
    });

    it('POST /api/rooms/:eventKey/quizzes should return a quiz', async () => {
        return supertest(app)
            .post('/api/rooms/xxxxxxxx/quizzes')
            .send({ maxDuration: 120, title: 'Dear John' })
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.CREATED);
                expect(response.body).to.have.property('quizId');
                expect(response.body).to.have.property('maxDuration');
                expect(response.body).to.have.property('title');
                expect(response.body).to.have.property('roomId');
            });
    });

    it('GET /api/rooms/:eventKey/questions should return a JSON array', async () => {
        databaseService = databaseService;
        return supertest(app)
            .get('/api/rooms/xxxxxxxx/questions')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.be.a('array');
            });
    });

    it('GET /api/rooms/:eventKey should return a room', async () => {
        databaseService = databaseService;
        return supertest(app)
            .get('/api/rooms/xxxxxxxx')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.have.property('roomId');
                expect(response.body).to.have.property('eventKey');
                expect(response.body).to.have.property('name');
                expect(response.body).to.have.property('presenterId');
                expect(response.body).to.have.property('startTime');
                expect(response.body).to.have.property('endTime');
            });
    });

    it('GET /api/rooms/:eventKey/quizzes should return a JSON array', async () => {
        databaseService = databaseService;
        return supertest(app)
            .get('/api/rooms/xxxxxxxx/quizzes')
            .then((response: any) => {
                expect(response.statusCode).to.equal(HttpStatus.OK);
                expect(response.body).to.be.a('array');
            });
    });

});
