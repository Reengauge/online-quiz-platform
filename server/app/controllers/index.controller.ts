import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import { HttpStatus } from '../http-status';
import { IndexService } from '../services/index.service';
import Types from '../types';

@injectable()
export class IndexController {
    router: Router;

    constructor(@inject(Types.IndexService) private indexService: IndexService) {
        this.configureRouter();
    }

    private configureRouter(): void {
        this.router = Router();

        this.router.get('/', async (req: Request, res: Response, next: NextFunction) => {
            this.indexService.helloWorld()
            .then((message: string) => {
                res.json(message);
            })
            .catch((error: Error) => {
                res.status(HttpStatus.NOT_FOUND).send(error.message);
            });
        });
    }
}
