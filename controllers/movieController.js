const movieService = require("../services/movieService");

exports.uploadGender = async (req, res) => {
  try {
    const movie = await movieService.uploadGender(req.body, req.file);
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
