const { Router } = require("express");
const app = Router();

app.use("/", require("./test.route"));
app.use("/books", require("./books.route"));

module.exports = app;
