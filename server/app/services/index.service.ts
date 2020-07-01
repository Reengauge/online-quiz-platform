import { injectable } from 'inversify';

@injectable()
export class IndexService {

    async helloWorld(): Promise<string> {
        // This is where you'd call database.find()...
        return 'Hello world from database';
    }
}
