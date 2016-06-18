var express = require('express');
var router  = express.Router();

var incidenciaController = require('../controllers/incidenciaController');



router.route('/')
    .get(incidenciaController.getAllIncidencia)
    .post(incidenciaController.createIncidencia);

module.exports = router;
