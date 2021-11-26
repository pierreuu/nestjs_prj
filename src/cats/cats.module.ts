import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { GraphQLModule } from '@nestjs/graphql';
import {CatsResolver} from "./cat.resolver";

@Module({
    imports: [
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
    ],
    controllers: [CatsController],
    providers: [CatsService, CatsResolver],
})
export class CatsModule {}