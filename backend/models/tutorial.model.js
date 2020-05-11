const mongoose = require('mongoose');

let TutorialSchema = new mongoose.Schema({
  tutorial_title: {
    type: String
  },
  tutorial_steps: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Step'
  }]
});

module.exports = mongoose.model('Tutorial', TutorialSchema);