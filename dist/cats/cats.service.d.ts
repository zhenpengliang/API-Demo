export declare class CatsService {
    readonly catsList: {
        cat1: {
            name: string;
            age: number;
        };
        cat2: {
            name: string;
            age: number;
        };
        cat3: {
            name: string;
            age: number;
        };
    };
    getCats(): object;
    getOneCat(key: string): object;
}
