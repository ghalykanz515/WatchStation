const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/tickets', ticketRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
