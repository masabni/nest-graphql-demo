import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    // options: JSON
});
