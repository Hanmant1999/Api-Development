const mongoose = require ("mongoose");

const bookSchema = new mongoose.Schema(

{
        title: String,
        AUTHOR:String,
        year:Number,
        pages:Number,
        publisher: String,
        language: String
    }, 
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;