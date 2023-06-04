
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


const postEmpleados = (req, res) => {
    const {document_employee,
         name_employee,
         last_name_employee,
         email_employee,
         password_employee,
         role_employee
        } = req.body;
    let sql =  `INSERT INTO employees (document_employee, name_employee, last_name_employee, email_employee, password_employee, role_employee) VALUES
     ('${document_employee}', '${name_employee}','${last_name_employee}','${email_employee}','${password_employee}','${role_employee}')`;
    conexion.query(sql,(err, rows, fields)=> 
    {
        if(err) throw err;
          
        else{
            res.json({status: 'Empleado guardado'})
        }
    })
}


const updateEmpleados = (req, res) => {
    const {
         name_employee,
         last_name_employee,
         email_employee,
         password_employee,
         role_employee
        } = req.body;
        const {id} = req.params
    let sql =  `UPDATE employees SET name_employee = '${name_employee}', last_name_employee = '${last_name_employee}', email_employee = '${email_employee}', password_employee = '${password_employee}', role_employee = '${role_employee}'
     WHERE document_employee = '${id}'`;
    conexion.query(sql,(err, rows, fields)=> 
    {
        if(err) throw err;
          
        else{
            res.json({status: 'Empleado modificado'})
        }
    })
}

const getOneEmpleados = (req, res) => {
    const {id} = req.params
    let sql = `select * from employees where document_employee = '${id}'`;
    conexion.query(sql,(err, rows, fields)=> 
    {
        if(err) throw err;
          
        else{
            res.json(rows)
           
        }
    })
}

const deleteEmpleados = (req, res) => {
    const {id} = req.params
    let sql = `DELETE FROM employees WHERE document_employee = '${id}'`;
    conexion.query(sql,(err, rows, fields)=> 
    {
        if(err) throw err;
          
        else{
            res.json(rows)
           
        }
    })
}
module.exports = {getEmpleados, postEmpleados, updateEmpleados ,getOneEmpleados, deleteEmpleados};