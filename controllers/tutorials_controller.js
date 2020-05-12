const Tutorial = require('../models/tutorial.model')

module.exports = {
  all: async (req, res) => {
    const tutorials = await Tutorial.find()
    return res.send(tutorials)
  },

  create: async (req, res) => {
    console.log(req)
    const { tutorial_title } = req.body;
    const tutorial = await Tutorial.create({
      tutorial_title
    })

    return res.send(tutorial)
  },

  findById: async (req, res) => {
    const { tutorial_id } = req.params;
    const tutorial = await Tutorial.findById(tutorial_id);
    return res.send(tutorial);
  },
  delete: async (req, res) => {
    const { tutorial_id } = req.params;
    const tutorial = await Tutorial.findById(tutorial_id);
    tutorial.delete();
    return res.send('Tutorial successfully deleted')
  }
}