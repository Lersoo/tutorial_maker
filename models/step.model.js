const mongoose = require('mongoose');

let StepSchema = new mongoose.Schema({
  step_description: {
    type: String,
    required: true
  },
  step_media: {
    type: String
  },
  tutorial: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutorial'
  }
}, { timestamps: true });

module.exports = mongoose.model('Step', StepSchema);