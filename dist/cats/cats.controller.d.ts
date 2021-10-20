import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catService;
    constructor(catService: CatsService);
    cats(): object;
    oneCat(name: any): object;
}
