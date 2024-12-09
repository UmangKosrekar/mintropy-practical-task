String.prototype.capitalizeWords = function () {
  return this.split(" ") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" "); // Join the words back into a string
};

module.exports = {};
