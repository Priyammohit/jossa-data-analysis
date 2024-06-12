const express = require('express');
const router = express.Router();
const extractController = require('../controllers/collagePredictor');

router.get('/graph_data_roundwise', extractController.getGraphDataRoundwise);
// other routes...

module.exports = router;
