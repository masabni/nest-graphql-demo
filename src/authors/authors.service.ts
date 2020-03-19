import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {AuthorInput} from "./inputs/author.input";
import {Author} from "./dto/author.dto";

@Injectable()
export class AuthorsService {
  constructor(@InjectModel('Author') private readonly authorModel: Model<Author>) {}

  async create(createAuthor: AuthorInput): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthor);
    return createdAuthor.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async findOneById(id: string): Promise<Author> {
    return this.authorModel.findById(id).exec();
  }
}
