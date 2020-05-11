const express = require('express');
const router = new express.Router();

const Tutorial = require('./controllers/tutorials_controller');
const Step = require('./controllers/steps_controller');

router.get('/', (req, res) => res.send('ok'));

// tutorial routes
router.get('/tutorials/', Tutorial.all);
router.post('/tutorials/create', Tutorial.create);
router.get('/tutorials/:tutorial_id', Tutorial.findById);
router.delete('/tutorials/:tutorial_id', Tutorial.delete);

// step routes
router.get('/tutorials/:tutorial_id/steps', Step.index);
router.post('/tutorials/:tutorial_id/steps/create', Step.create);
router.get('/tutorials/:tutorial_id/steps/:step_number', Step.show);
router.patch('/tutorials/:tutorial_id/steps/:step_number', Step.update)
router.delete('/steps/:step_id', Step.delete)
module.exports = router;