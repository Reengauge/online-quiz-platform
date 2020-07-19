import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { QueryResult } from 'pg';
import { Question } from '../../../common/interfaces/question';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

@injectable()
export class QuestionController {
    constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) {}

    get router(): Router {
        const router: Router = Router();

        router.post('/', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .createQuestionAndChoices(req.body.questionLabel, req.body.correctAnswer, req.body.quizId, req.body.choiceLabels)
                .then((result: QueryResult) => {
                    const questions: Question[] = result.rows.map((question: any) => ({
                        questionId: question.question_id,
                        correctAnswer: question.correct_answer,
                        questionLabel: question.question_label,
                        quizId: question.quiz_id
                    }));
                    res.status(HttpStatus.CREATED).send(questions[0]);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        router.put('/:questionId', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .updateQuestion(req.params.questionId, req.body.questionLabel, req.body.correctAnswer)
                .then((result: QueryResult) => {
                    const questions: Question[] = result.rows.map((question: any) => ({
                        questionId: question.question_id,
                        correctAnswer: question.correct_answer,
                        questionLabel: question.question_label,
                        quizId: question.quiz_id
                    }));
                    res.status(HttpStatus.OK).send(questions[0]);
                })
                .catch((e: Error) => {
                    res.status(HttpStatus.BAD_REQUEST).send(e.message);
                });
        });

        return router;
    }
}
