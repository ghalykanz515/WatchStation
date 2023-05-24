const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/movie');

const app = express();

app.use(bodyParser.json());

app.use('/', userRoutes);
app.use('/', itemRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
