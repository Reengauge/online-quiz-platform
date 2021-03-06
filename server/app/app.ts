import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import { inject, injectable } from 'inversify';
import * as logger from 'morgan';
import { AnswerController } from './controllers/answer.controller';
import { ChoiceController } from './controllers/choice.controller';
import { DatabaseController } from './controllers/database.controller';
import { QuestionController } from './controllers/question.controller';
import { QuizController } from './controllers/quiz.controller';
import { RoomController } from './controllers/room.controller';
import Types from './types';

@injectable()
export class Application {
    private readonly internalError: number = 500;
    app: express.Application;

    constructor(
        @inject(Types.DatabaseController) private databaseController: DatabaseController,
        @inject(Types.RoomController) private roomController: RoomController,
        @inject(Types.ChoiceController) private choiceController: ChoiceController,
        @inject(Types.AnswerController) private answerController: AnswerController,
        @inject(Types.QuestionController) private questionController: QuestionController,
        @inject(Types.QuizController) private quizController: QuizController,
    ) {
        this.app = express();

        this.config();

        this.bindRoutes();
    }

    private config(): void {
        // Middlewares configuration
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(cors());
    }

    bindRoutes(): void {
        this.app.use('/api/db', this.databaseController.router);
        this.app.use('/api/rooms', this.roomController.router);
        this.app.use('/api/choices', this.choiceController.router);
        this.app.use('/api/answers', this.answerController.router);
        this.app.use('/api/questions', this.questionController.router);
        this.app.use('/api/quizzes', this.quizController.router);
        this.errorHandling();
    }

    private errorHandling(): void {
        // When previous handlers have not served a request: path wasn't found
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            const err: Error = new Error('Not Found');
            next(err);
        });

        // development error handler
        // will print stacktrace
        if (this.app.get('env') === 'development') {
            // tslint:disable-next-line:no-any
            this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
                res.status(err.status || this.internalError);
                res.send({
                    message: err.message,
                    error: err,
                });
            });
        }

        // production error handler
        // no stacktraces leaked to user (in production env only)
        // tslint:disable-next-line:no-any
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(err.status || this.internalError);
            res.send({
                message: err.message,
                error: {},
            });
        });
    }
}
