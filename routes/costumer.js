var express = require('express');
var router  = express.Router();

var costumerController = require('../controllers/costumerController')

/* GET users listing. */

router.route('/')
    .get(costumerController.getAllCostumer)
    .post(costumerController.createCostumer);

module.exports = router;
