const router = require('express').Router();
const Step = require('../controllers/steps_controller');

// step routes
router.get('/tutorials/:tutorial_id/steps', Step.index);
router.post('/tutorials/:tutorial_id/steps/create', Step.create);
router.get('/tutorials/:tutorial_id/steps/:step_number', Step.show);
router.patch('/tutorials/:tutorial_id/steps/:step_number', Step.update)
router.delete('/steps/:step_id', Step.delete)

module.exports = router;