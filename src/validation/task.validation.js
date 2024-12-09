const joi = require("joi");

exports.addBookValidation = joi
  .object({
    title: joi.string().required(),
    author: joi.string().required(),
    isbn: joi
      .string()
      .required()
      .pattern(/^\d{10}$/)
  })
  .required();
