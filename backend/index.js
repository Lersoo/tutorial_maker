const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:12345/tutorials', { useUnifiedTopology: true, useNewUrlParser: true });

// routes
app.use(require('./routes'));

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

// tutorialRoutes.route('/').get(function (req, res) {
//   Tutorial.find(function (err, tutorials) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(tutorials);
//     }
//   });
// })

// tutorialRoutes.route('/:id').get(function (req, res) {
//   let id = req.params.id;
//   Tutorial.findById(id, function (err, tutorial) {
//     res.json(tutorial);
//   });
// })

// tutorialRoutes.route('/new').post(function (req, res) {
//   let tutorial = new Tutorial(req.body);
//   tutorial.save()
//     .then(tutorial => {
//       res.status(200).json({ 'tutorial': 'tutorial added successfully' });
//     })
//     .catch(err => {
//       res.status(400).send('adding new tutorial failed');
//     });
// });

// let Step = require('./step.model');

// stepRoutes.route('/new').post(function (req, res) {
//   let tutorial = Tutorial.findById(req.params.tutorial_id);
//   let step = new Step(req.body);
//   step.tutorial = tutorial;
//   step.save()
//     .then(step => {
//       res.status(200).json({ 'step': 'step added successfully' });
//     })
//     .catch(err => {
//       res.status(400).send('adding new step failed');
//     });
// })
// app.use('/tutorials', tutorialRoutes)
// app.use('/tutorials/:tutorial_id/steps', stepRoutes)
