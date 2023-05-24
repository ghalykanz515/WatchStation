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

const getAllMovies = () => {
    return movies;
};
  
module.exports = {
    getAllMovies
};