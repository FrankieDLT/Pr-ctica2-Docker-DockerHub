const express = require('express');
const router = express.Router();

// Importar funcionamientos de endpoints
const infoController = require('./../src/controllers/info.controllers');
const operationsController = require('./../src/controllers/operations.controller');

// path con ruta de los endpoint
router.get('/',infoController.Index);
router.post('/suma',operationsController.Sum);
router.post('/resta',operationsController.Subtraction);
router.post('/multiplica',operationsController.Multiply);
router.post('/divide',operationsController.Divide);
router.post('/free',operationsController.OperatorsRule);
router.get('/autores',infoController.Autores);

module.exports = router;