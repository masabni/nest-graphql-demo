import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './dto/books.dto';
import { BookInput } from './inputs/books.input';
import {Author} from "../authors/dto/author.dto";

@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

    async create(createBookDto: BookInput): Promise<Book> {
        const createdBook = new this.bookModel(createBookDto);
        return createdBook.save();
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    async findOneById(id: string): Promise<Book> {
        return this.bookModel.findById(id).exec();
    }

    async findByAuthor(id: string): Promise<Book[]> {
        return this.bookModel.find({author: id}).exec();
    }
}
