const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// require db connection
require('./models');

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
const routes = require('./routes/index');

app.use(express.static('client/build'));
app.use(routes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});