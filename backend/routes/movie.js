const express = require('express');
const moviesDB = require('./movieDB');

const router = express.Router();
let movies = moviesDB.getAllMovies();

router.get('/movies', (req, res) => {
  res.json(movies);
});

router.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  const movie = movies.find(movie => movie.id === movieId);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

router.get('/movies/genre/:genre', (req, res) => {
  const { genre } = req.params;
  //const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  const filteredMovies = movies.filter(movie => movie.genre.includes(genre));
  if (filteredMovies.length > 0) {
    res.json(filteredMovies);
  } else {
    res.status(404).json({ message: 'No movies found for the specified genre' });
  }
});

router.post('/movies/:id/order', (req, res) => {
  const movieId = req.params.id;
  const { name, email, quantity } = req.body;

  const movie = movies.find(movie => movie.id === movieId);
  if (movie) {
    const order = { movieId, name, email, quantity };
    
    res.json({ message: 'Ticket ordered successfully', order });
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

module.exports = router;
