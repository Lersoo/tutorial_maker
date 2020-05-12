const router = require('express').Router();
const path = require('path');

const stepRoutes = require('./steps');
const tutorialRoutes = require('./tutorials');

console.log(stepRoutes);

router.use('/api', stepRoutes);
router.use('/api', tutorialRoutes)

router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;