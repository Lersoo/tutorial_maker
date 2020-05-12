const Step = require('../models/step.model');
const Tutorial = require('../models/tutorial.model');

module.exports = {
  index: async (req, res) => {
    const { tutorial_id } = req.params;
    const tutorial = await Tutorial.findById(tutorial_id);
    const steps = Step.find({ '_id': { $in: tutorial.tutorial_steps } },
      function (err, docs) {
        console.log(docs);
        return res.send(docs)
      }
    );
    return steps;
  },
  create: async (req, res) => {
    const { tutorial_id } = req.params;
    console.log(tutorial_id)
    const { step_description, step_media } = req.body;
    const step = await Step.create({
      step_description,
      step_media
    });

    await step.save();

    const tutorialById = await Tutorial.findById(tutorial_id);
    tutorialById.tutorial_steps.push(step);
    await tutorialById.save();

    return res.send(tutorialById);
  },

  show: async (req, res) => {
    const { tutorial_id, step_number } = req.params;
    const step = await Tutorial.findById(tutorial_id).populate('tutorial_steps')
    console.log(step.tutorial_steps);
    res.send(step.tutorial_steps[step_number - 1]);
  },

  update: async (req, res) => {
    const { tutorial_id, step_number } = req.params;
    const step = await Tutorial.findById(tutorial_id).populate('tutorial_steps')[step_number - 1];

    step.update(req.body);
    await step.save();

    return res.send(step);
  },
  delete: async (req, res) => {
    const { step_id } = req.params;
    const step = await Step.findById(step_id);
    step.delete();
    return res.send('Step successfully deleted!')
  }
}