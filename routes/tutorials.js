const router = require('express').Router();
const Tutorial = require('../controllers/tutorials_controller');

// tutorial routes
router.get('/tutorials/', Tutorial.all);
router.post('/tutorials/create', Tutorial.create);
router.get('/tutorials/:tutorial_id', Tutorial.findById);
router.delete('/tutorials/:tutorial_id', Tutorial.delete);

module.exports = router;