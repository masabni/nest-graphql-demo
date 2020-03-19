import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {Author} from "../../authors/dto/author.dto";

@ObjectType()
export class Book {
    @Field(() => ID)
    id: string;
    @Field()
    readonly title: string;
    @Field()
    readonly type: string;
    @Field(type => Author)
    readonly author: Author;
    @Field(() => Int)
    readonly publish_year: number;
}
