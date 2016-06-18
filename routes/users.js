var express = require('express');
var router  = express.Router();

var userController = require('../controllers/userController')

/* GET users listing. */

router.route('/')
    .get(userController.getAllPerson)
    .post(userController.createPerson);

module.exports = router;
