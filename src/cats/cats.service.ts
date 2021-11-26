import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import {CatModule} from "./models/cat.model";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findName(name: string): CatModule {
        let cat = this.cats.filter(e => e.name==name ) [0];
        let catm = new CatModule();
        catm.id = "12";
        catm.name = cat.name;
        catm.age = cat.age;
        return catm;
    }
}