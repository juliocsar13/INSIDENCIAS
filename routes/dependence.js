var express = require('express');
var router  = express.Router();

var dependenceController = require('../controllers/dependenceController')

/* GET users listing. */

router.route('/')
    .get(dependenceController.getAllDependence)
    .post(dependenceController.createDependence);

module.exports = router;
