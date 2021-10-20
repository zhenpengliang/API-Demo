import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  readonly catsList = {
    cat1:{name:'cat1',age:1},
    cat2:{name:'cat2',age:2},
    cat3:{name:'cat3',age:3}
  }

  getCats(): object {
    return this.catsList;
  }

  getOneCat(key:string): object {
    return this.catsList[key];
  }
}
