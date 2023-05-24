const express = require('express');
const router = express.Router();

let movies = [
  { 
    id: 1, 
    title: 'Guardians Of The Galaxy Vol. 3', 
    description: 'test', 
    genre: ['Action', 'Family'] 
  },
  { 
    id: 2, 
    title: 'Spider-Man Across The Spider Verse', 
    description: 'test', 
    genre: ['Action', 'Family'] 
  },
  { 
    id: 3, 
    title: 'Fast X', 
    description: 'test', 
    genre: ['Action', 'Thriller']
  },
  { 
    id: 4, 
    title: 'Evil Dead Rise', 
    description: 'test', genre: ['Thriller', 'Horror']
  },
  { 
    id: 5, 
    title: 'The Little Mermaid', 
    description: 'test', 
    genre: ['Family', 'Musical', 'Drama']
  },
  { 
    id: 6, 
    title: 'The Ghost Station', 
    description: 'test',  
    genre: ['Horror', 'Thriller']
  },
  { 
    id: 7, 
    title: 'Hello Ghost', 
    description: 'test', 
    genre: ['Horror', 'Comedy']
  },
  { 
    id: 8, 
    title: 'Kajiman Iblis Terkejam Penagih Janji', 
    description: 'test', 
    genre: ['Horror', 'Thriller']
  },
  { 
    id: 9, 
    title: 'SEWUDINO', 
    description: 'test', 
    genre: ['Horror', 'Thriller']
  },
  { 
    id: 10, 
    title: 'Hati Suhita', 
    description: 'test', 
    genre: ['Drama', 'Romance']
  },
  { 
    id: 11, 
    title: 'Jin Khodam', 
    description: 'test', 
    genre: ['Horror', 'Thriller']
  }
];

router.get('/movies', (req, res) => {
  res.json(movies);
});

router.get('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
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
  const movieId = parseInt(req.params.id);
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
