var express = require('express');
var router = express.Router();

const Controller = require('../controllers/index');

/* GET Hello World */
router.get('/', Controller.hello);

module.exports = router;
