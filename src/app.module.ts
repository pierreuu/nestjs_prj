import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
// import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CatEntity} from "./cats/cat.entity";
@Module({
  imports: [ CatsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'graph.c9cxgsioerjn.ap-southeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'pixiu&135',
      database: 'watcher',
      entities: [CatEntity],
      synchronize: true,
      autoLoadEntities: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
