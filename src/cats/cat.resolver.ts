import { NotFoundException } from '@nestjs/common';
import {Args, Mutation, Query, ResolveField, Resolver, Subscription} from '@nestjs/graphql';
import {Cat} from "./models/cat.model";
import { Field, Int, ObjectType, } from '@nestjs/graphql';
import { CatsService } from './cats.service';

@Resolver(of => Cat)
export class CatsResolver {
    constructor(
        private catsService: CatsService,

    ) {}

    @Query(returns => Cat)
    async cat(@Args('name', { nullable: true  }) name?: string) {
        return this.catsService.findName(name)
    }

    // @ResolveField()
    // async posts(@Parent() author: Author) {
    //     const { id } = author;
    //     return this.postsService.findAll({ authorId: id });
    // }
}