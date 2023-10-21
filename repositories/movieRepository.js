const { Movie } = require("../models");

exports.createMovie = (movieData) => {
  return Movie.create(movieData);
};

// Other repository functions for CRUD operations
