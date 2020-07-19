import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';
import { QueryResult } from 'pg';
import { Quiz } from '../../../common/interfaces/quiz';

@injectable()
export class QuizController {
    constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) {}

    get router(): Router {
        const router: Router = Router();

        router.put('/:quizId', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .updateQuiz(req.params.quizId, req.body.maxDuration, req.body.title)
                .then((result: QueryResult) => {
                    const quizzes: Quiz[] = result.rows.map((quiz: any) => ({
                        quizId: quiz.quiz_id,
                        maxDuration: quiz.max_duration,
                        title: quiz.title,
                        roomId: quiz.room_id
                    }));
                    res.status(HttpStatus.OK).send(quizzes[0]);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        return router;
    }
}
