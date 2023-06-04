const router = require('express').Router()
const {getEmpleados, postEmpleados, updateEmpleados, getOneEmpleados, deleteEmpleados} = require('../controller/empleados');
//Consulta para ver datos de las tablas

router.get('/', getEmpleados);
router.get('/viewEmployee/:id', getOneEmpleados);
router.post('/', postEmpleados);
router.put('/editEmployee/:id', updateEmpleados);
router.delete('/deleteEmployee/:id', deleteEmpleados);

module.exports= router