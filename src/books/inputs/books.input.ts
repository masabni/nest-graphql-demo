import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class BookInput {
    @Field()
    readonly title: string;
    @Field()
    readonly type: string;
    @Field()
    readonly author: string;
    @Field(() => Int)
    readonly publish_year: number;
}
