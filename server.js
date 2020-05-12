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
app.use(express.static('./client/build'));

const routes = require('./routes/index');
app.use(routes);

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "Your FrontEnd Website URL",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});