import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { QueryResult } from 'pg';
import { Answer } from '../../../common/interfaces/answer';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

@injectable()
export class AnswerController {
    constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) {}

    get router(): Router {
        const router: Router = Router();

        router.get('/:quizId', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .getAllAnswersByQuiz(req.params.quizId)
                .then((result: QueryResult) => {
                    const answers: Answer[] = result.rows.map((answer: any) => ({
                        answerLabel: answer.answer_label,
                        questionId: answer.question_id,
                        participantId: answer.participant_id
                    }));
                    res.status(HttpStatus.OK).send(answers);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.NOT_FOUND).send(e.message);
                });
        });

        router.post('/:questionId', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .createAnswer(req.params.questionId, req.body.participantId, req.body.answerLabel)
                .then(() => {
                    res.status(HttpStatus.CREATED).send();
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        return router;
    }
}
