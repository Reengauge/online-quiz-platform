import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import { Question } from '../../../common/interfaces/question';
import { Quiz } from '../../../common/interfaces/quiz';
import { Room } from '../../../common/interfaces/room';
import Types from '../types';
import { QueryResult } from 'pg';

@injectable()
export class RoomController {
    constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) {}

    get router(): Router {
        const router: Router = Router();

        router.post('/', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .generateUniqueEventKey()
                .then((eventKey: string) => {
                    this.databaseService.createRoom(eventKey, req.body.name, req.body.presenterId)
                        .then((result: QueryResult) => {
                            const rooms: Room[] = result.rows.map((room: any) => ({
                                roomId: room.room_id,
                                eventKey: room.event_key,
                                name: room.room_name,
                                presenterId: room.presenter_id,
                                startTime: room.start_time,
                                endTime: room.end_time
                            }));
                            res.status(HttpStatus.CREATED).send(rooms[0]);
                        }).catch ((e: Error) => {
                            res.status(HttpStatus.BAD_REQUEST).send(e.message);
                        })
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        router.get('/:eventKey', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .getRoomByEventKey(req.params.eventKey)
                .then((result: QueryResult) => {
                    const rooms: Room[] = result.rows.map((room: any) => ({
                        roomId: room.room_id,
                        eventKey: room.event_key,
                        name: room.room_name,
                        presenterId: room.presenter_id,
                        startTime: room.start_time,
                        endTime: room.end_time
                    }));
                    res.status(HttpStatus.OK).send(rooms[0]);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        router.get('/:eventKey/quizzes', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .getAllQuizzesByEventKey(req.params.eventKey)
                .then((result: QueryResult) => {
                    const quizzes: Quiz[] = result.rows.map((quiz: any) => ({
                        quizId: quiz.quiz_id,
                        maxDuration: quiz.max_duration,
                        title: quiz.title,
                        roomId: quiz.room_id
                    }));
                    res.status(HttpStatus.OK).send(quizzes);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        router.post('/:roomId/quizzes', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .createQuiz(req.body.maxDuration, req.body.title, req.params.roomId)
                .then((result: QueryResult) => {
                   const quizzes: Quiz[] = result.rows.map((quiz: any) => ({
                       quizId: quiz.quiz_id,
                       maxDuration: quiz.max_duration,
                       title: quiz.title,
                       roomId: quiz.room_id
                   }));
                   res.status(HttpStatus.CREATED).send(quizzes[0]);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        router.get('/:eventKey/questions', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .getAllQuestionsByEventKey(req.params.eventKey)
                .then((result: QueryResult) => {
                    const questions: Question[] = result.rows.map((question: any) => ({
                        questionId: question.question_id,
                        questionLabel: question.question_label,
                        correctAnswer: question.correct_answer,
                        quizId: question.quiz_id
                    }));
                    res.status(HttpStatus.OK).send(questions);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        return router;
    }
}
