var express = require('express');
var router = express.Router();

const Controller = require('../controllers/flights');

/* GET Hello World */
router.get('/hello', Controller.hello);

// Get Flights Data
router.post('/', Controller.getFlights);

module.exports = router;
