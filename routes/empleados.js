const router = require('express').Router()
const getEmpleados = require('../controller/empleados');
//Consulta para ver datos de las tablas

router.get('/', getEmpleados);

module.exports= router