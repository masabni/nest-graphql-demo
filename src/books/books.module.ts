import {forwardRef, Module} from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/books.schema';
import { BooksService } from './books.service';
import {AuthorsModule} from "../authors/authors.module";

@Module({
    imports: [forwardRef(() => AuthorsModule), MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
    providers: [BooksResolver, BooksService],
    exports: [BooksService]
})
export class BooksModule {}
