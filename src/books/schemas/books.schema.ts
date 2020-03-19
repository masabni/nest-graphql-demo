import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: String,
    type: String,
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Author'
    },
    publish_year: Number,
});
