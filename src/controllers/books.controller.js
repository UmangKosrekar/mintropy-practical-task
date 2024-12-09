const { errorCodes } = require("../constants/enum");
const { responseHandler, CustomError } = require("../helper");
const { BooksModel } = require("../model/books.model");

exports.addBook = async (req, res, next) => {
  try {
    const { isbn, title, author } = req.body;

    const duplicateIsbn = await BooksModel.countDocuments({ isbn });
    if (duplicateIsbn) {
      throw new CustomError(
        "ISBN already exists, please select different ISBN",
        errorCodes.BAD_REQUEST,
        400
      );
    }

    const createdBookData = await BooksModel.create({
      title: title.capitalizeWords(),
      author: author.capitalizeWords(),
      isbn
    });

    return responseHandler(res, 201, "Book Added!", {
      _id: createdBookData._id
    });
  } catch (error) {
    console.trace(error);
    next(error);
  }
};

exports.getBooks = async (req, res, next) => {
  try {
    const { search } = req.query;
    const condition = {};

    if (search) {
      condition["$or"] = [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } }
      ];
    }

    const booksList = await BooksModel.aggregate([{ $match: condition }]);

    return responseHandler(res, 200, undefined, booksList);
  } catch (error) {
    console.trace(error);
    next(error);
  }
};

exports.getSingleBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const booksList = await BooksModel.findOne({ isbn: id });

    return responseHandler(res, 200, undefined, booksList);
  } catch (error) {
    console.trace(error);
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;

    const booksList = await BooksModel.findOneAndUpdate(
      { isbn: id },
      {
        $set: {
          title: title.capitalizeWords(),
          author: author.capitalizeWords()
        }
      },
      { new: true }
    );

    if (!booksList) {
      throw new CustomError("Book not found", errorCodes.BAD_REQUEST, 400);
    }

    return responseHandler(res, 200, undefined, booksList);
  } catch (error) {
    console.trace(error);
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const bookDeleteData = await BooksModel.deleteOne({ isbn: id });

    if (!bookDeleteData.deletedCount) {
      throw new CustomError("Book not found", errorCodes.BAD_REQUEST, 400);
    }

    return responseHandler(res, 200, "Book deleted Successfully!");
  } catch (error) {
    console.trace(error);
    next(error);
  }
};
