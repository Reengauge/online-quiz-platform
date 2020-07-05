import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import { Choice } from '../../../common/interfaces/choice';
import Types from '../types';
import { QueryResult } from 'pg';

@injectable()
export class ChoiceController {
    constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) {}

    get router(): Router {
        const router: Router = Router();

        router.get('/:questionId', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .getAllChoicesByQuestion(req.params.questionId)
                .then((result: QueryResult) => {
                    const choices: Choice[] = result.rows.map((choice: any) => ({
                        choiceId: choice.choice_id,
                        choiceLabel: choice.choice_label,
                        questionId: choice.question_id
                    }));
                    res.status(HttpStatus.OK).send(choices);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        return router;
    }
}
