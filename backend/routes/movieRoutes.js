const express = require('express');
const router = express.Router();

// Movie data stored as JSON
const movies = require('../data/movies.json');

router.get('/', (req, res) => {
  const { genres } = req.query;
  if (genres) {
    const filteredMovies = movies.filter(movie =>
      movie.genre.some(genre => genre.toLowerCase() === genres.toLowerCase())
    );
    if (filteredMovies.length === 0) {
      return res.status(404).json({ error: 'No movies found with the specified genre' });
    }
    return res.json(filteredMovies);
  }
  res.json(movies);
});

router.get('/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find(movie => movie.id === movieId);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }
  res.json(movie);
});

module.exports = router;