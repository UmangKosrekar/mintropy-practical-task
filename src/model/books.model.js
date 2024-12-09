const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      index: true
    }
  },
  { timestamps: true, timestamps: true }
);

const BooksModel = model("books", schema, "books");

module.exports = { BooksModel };
