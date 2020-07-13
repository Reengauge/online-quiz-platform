import { Container } from 'inversify';
import { Application } from './app';
import { DatabaseController } from './controllers/database.controller';
import { Server } from './server';
import { DatabaseService } from './services/database.service';
import Types from './types';
import { RoomController } from './controllers/room.controller';
import { ChoiceController } from './controllers/choice.controller';
import { AnswerController } from './controllers/answer.controller';

export const containerBootstrapper: () => Promise<Container> = async () => {
    const container: Container = new Container();

    container.bind(Types.Server).to(Server);
    container.bind(Types.Application).to(Application);

    container.bind(Types.DatabaseService).to(DatabaseService);
    container.bind(Types.DatabaseController).to(DatabaseController);

    container.bind(Types.RoomController).to(RoomController);

    container.bind(Types.ChoiceController).to(ChoiceController);

    container.bind(Types.AnswerController).to(AnswerController);

    return container;
};
