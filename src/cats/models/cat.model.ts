import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
export class CatModule {
    @Field(type => ID)
    id: string;

    @Field({ nullable: true})
    name: string;

    @Field(type=>Int, { nullable: true})
    age: number;
    // @Field()
    // title: string;
    //
    // @Field({ nullable: true })
    // description?: string;
    //
    // @Field()
    // creationDate: Date;
    //
    // @Field(type => [String])
    // ingredients: string[];
}