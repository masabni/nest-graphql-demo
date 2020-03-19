import { AuthorsService } from './authors.service';
import { AuthorSchema } from './schemas/authors.schema';
import { AuthorResolver } from './authors.resolver';
import {forwardRef, Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from "../books/books.module";


@Module({
    imports: [forwardRef(() => BooksModule), MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }])],
    providers: [AuthorResolver, AuthorsService],
    exports: [AuthorsService]
})
export class AuthorsModule {}
