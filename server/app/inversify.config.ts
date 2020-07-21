import { Container } from 'inversify';
import { Application } from './app';
import { AnswerController } from './controllers/answer.controller';
import { ChoiceController } from './controllers/choice.controller';
import { DatabaseController } from './controllers/database.controller';
import { QuestionController } from './controllers/question.controller';
import { QuizController } from './controllers/quiz.controller';
import { RoomController } from './controllers/room.controller';
import { Server } from './server';
import { DatabaseService } from './services/database.service';
import Types from './types';

export const containerBootstrapper: () => Promise<Container> = async () => {
    const container: Container = new Container();

    container.bind(Types.Server).to(Server);
    container.bind(Types.Application).to(Application);
    container.bind(Types.DatabaseService).to(DatabaseService);
    container.bind(Types.DatabaseController).to(DatabaseController);
    container.bind(Types.RoomController).to(RoomController);
    container.bind(Types.ChoiceController).to(ChoiceController);
    container.bind(Types.AnswerController).to(AnswerController);
    container.bind(Types.QuestionController).to(QuestionController);
    container.bind(Types.QuizController).to(QuizController);

    return container;
};
