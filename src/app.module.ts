import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthorsModule} from './authors/authors.module';
import { BooksModule } from './books/books.module';

@Module({
    imports: [
        AuthorsModule,
        BooksModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
        }),
        MongooseModule.forRoot(
            'mongodb+srv://dbUser:dbUserPassword@cluster0-yep9e.mongodb.net/test?retryWrites=true&w=majority',
            {useNewUrlParser: true, useUnifiedTopology: true}
        )
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
