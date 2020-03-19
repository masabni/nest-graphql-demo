import { ObjectType, Field, ID } from '@nestjs/graphql';
import {Book} from "../../books/dto/books.dto";

@ObjectType()
export class Author {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field(type => [Book], { nullable: 'items' })
  books: Book[];

//   @Field({ nullable: true })
//   options?: JSON;

//   @Field()
//   creationDate: Date;
}
