const movieRepository = require("../repositories/movieRepository");

exports.uploadGender = (movieData, file) => {
  if (!file) {
    throw new Error("No file is selected.");
  }

  return movieRepository.createMovie({
    title: movieData.title,
    gender: file.path, // Simpan path file sebagai gender
    year: movieData.year,
  });
};
