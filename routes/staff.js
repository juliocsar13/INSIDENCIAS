var express = require('express');
var router  = express.Router();

var staffController = require('../controllers/staffController')

/* GET users listing. */

router.route('/')
    .get(staffController.getAllStaff)
    .post(staffController.createStaff);

module.exports = router;
