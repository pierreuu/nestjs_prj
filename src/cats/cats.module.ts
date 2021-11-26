import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { GraphQLModule } from '@nestjs/graphql';
import {CatsResolver} from "./cat.resolver";
import { TypeOrmModule } from '@nestjs/typeorm';
import {CatEntity} from "./cat.entity";
@Module({
    imports: [
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
        TypeOrmModule.forFeature([CatEntity])

    ],
    controllers: [CatsController],
    providers: [CatsService, CatsResolver, CatEntity],
})
export class CatsModule {}