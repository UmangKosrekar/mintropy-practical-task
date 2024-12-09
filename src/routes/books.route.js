const { Router } = require("express");
const app = Router();
const {
  addBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook
} = require("../controllers/books.controller");
const { joiValidator } = require("../helper");
const { addBookValidation } = require("../validation/task.validation");

app.post("/", joiValidator(addBookValidation), addBook);
app.get("/", getBooks);
app.get("/:id", getSingleBook);
app.put("/:id", updateBook);
app.delete("/:id", deleteBook);

module.exports = app;
