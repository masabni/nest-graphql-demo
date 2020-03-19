import {Resolver, Query, Mutation, Args, Parent, ResolveField} from "@nestjs/graphql";
import { BooksService } from './books.service';
import { Book } from './dto/books.dto';
import { BookInput } from './inputs/books.input';
import {AuthorsService} from "../authors/authors.service";
import {Author} from "../authors/dto/author.dto";

@Resolver(of => Book)
export class BooksResolver {
    constructor(
        private readonly booksService: BooksService,
        private readonly authorService: AuthorsService,
    ) {}

    @Query(returns => [Book])
    async books(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Query(returns => Book)
    async book(@Args('id') id: string): Promise<Book> {
        return this.booksService.findOneById(id);
    }

    @Mutation(returns => Book)
    async createBook(@Args('input') input: BookInput): Promise<Book> {
        return this.booksService.create(input);
    }

    @ResolveField()
    async author(@Parent() book: BookInput): Promise<Author> {
        const { author } = book;
        return this.authorService.findOneById(author);
    }
}
