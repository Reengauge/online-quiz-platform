import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import { Question } from '../../../common/interfaces/question';
import Types from '../types';
import { QueryResult } from 'pg';

@injectable()
export class RoomController {
    constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) {}

    get router(): Router {
        const router: Router = Router();

        router.get('/:eventKey/questions', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .getAllQuestionsByEventKey(req.params.eventKey)
                .then((result: QueryResult) => {
                    const questions: Question[] = result.rows.map((question: any) => ({
                        questionId: question.question_id,
                        questionLabel: question.question_label,
                        correctAnswer: question.correct_answer,
                        quizId: question.quiz_id,
                    }));
                    console.log(questions);
                    res.status(HttpStatus.OK).send(questions);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        return router;
    }
}
