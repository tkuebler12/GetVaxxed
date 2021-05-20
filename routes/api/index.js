const router = require('express').Router();

const userRoutes = require('./userRoutes');
const vaccineRoutes = require('./vaccineplaces');

router.use('/users', userRoutes);
router.use('/vaccines', vaccineRoutes);

module.exports = router;