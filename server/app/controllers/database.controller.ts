import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { QueryResult } from 'pg';
import { HttpStatus } from '../http-status';
import { DatabaseService } from '../services/database.service';
import Types from '../types';

@injectable()
export class DatabaseController {
    constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) {}

    get router(): Router {
        const router: Router = Router();

        router.get('/reset', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .resetDatabase()
                .then(() => {
                    res.status(HttpStatus.OK).send('Database was reset');
                })
                .catch((e: Error) => {
                    console.error(e.stack);
                });
        });

        router.get('/tables/:tableName', (req: Request, res: Response, next: NextFunction) => {
            this.databaseService
                .getAllFromTable(req.params.tableName)
                .then((result: QueryResult) => {
                    res.json(result.rows);
                })
                .catch((e: Error) => {
                    console.error(e.stack);
                });
        });

        return router;
    }
}
