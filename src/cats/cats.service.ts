import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import {CatModule} from "./models/cat.model";
import {CatEntity} from "./cat.entity";
import {getRepository, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(CatEntity)
        public catsRepository: Repository<CatEntity>,
    ) {}
    // private readonly catsRepository = getRepository(CatEntity);


    // private readonly cats: Cat[] = [];

    create(cat: Cat) {
       // this.cats.push(cat);
        let catEntity = new CatEntity();
        catEntity.id=12;
        catEntity.name = cat.name;
        catEntity.age = cat.age;

        this.catsRepository.save(catEntity);
    }

    // findAll(): Cat[] {
    //     return this.cats;
    // }

    async findName(name: string): Promise<CatModule> {
        // let cat = this.cats.filter(e => e.name==name ) [0];
        let cat =await this.catsRepository.createQueryBuilder()
            .where(" name = :name ", {name: name})
            .getOne();
        let catm = new CatModule();
        catm.id = "12";
        catm.name = cat.name;
        catm.age = cat.age;
        return catm;

    }
}