
const conexion = require('../db/db');

const getEmpleados = (req, res) => {
    let sql = 'select * from employees';
    conexion.query(sql,(err, rows, fields)=> 
    {
        if(err) throw err;
          
        else{
            res.json(rows)
        }
    })
}
module.exports = getEmpleados;