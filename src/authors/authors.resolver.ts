import { Author } from './dto/author.dto';
import { AuthorsService } from './authors.service';
import {Resolver, Parent, Args, Query, Mutation, ResolveField} from "@nestjs/graphql";
import {AuthorInput} from "./inputs/author.input";
import {BooksService} from "../books/books.service";
import {Book} from "../books/dto/books.dto";

@Resolver(of => Author)
export class AuthorResolver {
  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
  ) {}

  @Mutation(returns => Author)
  async createAuthor(@Args('data') data: AuthorInput): Promise<Author> {
    return this.authorsService.create(data);
  }

  @Query(returns => Author)
  async author(@Args('id') id: string): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  @Query(returns => [Author])
  async authors(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @ResolveField()
  async books(@Parent() author: Author): Promise<Book[]> {
    const { id } = author;
    return this.booksService.findByAuthor(id);
  }
}
