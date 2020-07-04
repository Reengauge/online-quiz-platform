import { Container } from 'inversify';
import { Application } from './app';
import { DatabaseController } from './controllers/database.controller';
import { IndexController } from './controllers/index.controller';
import { Server } from './server';
import { DatabaseService } from './services/database.service';
import { IndexService } from './services/index.service';
import Types from './types';

export const containerBootstrapper: () => Promise<Container> = async () => {
    const container: Container = new Container();

    container.bind(Types.Server).to(Server);
    container.bind(Types.Application).to(Application);

    container.bind(Types.IndexService).to(IndexService);
    container.bind(Types.IndexController).to(IndexController);

    container.bind(Types.DatabaseService).to(DatabaseService);
    container.bind(Types.DatabaseController).to(DatabaseController);

    return container;
};
