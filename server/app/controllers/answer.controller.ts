import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

@injectable()
export class AnswerController {
    constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) {}

    get router(): Router {
        const router: Router = Router();

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
