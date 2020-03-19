import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthorInput {
    @Field()
    readonly name: string;
    @Field()
    readonly email: string;
    @Field()
    readonly phone: string;
}
