const mysql = require("mysql");
const conexion = mysql.createConnection({
    host: 'db4free.net',
    user: 'bot_user',
    password: 'Juan12345',
    port: 3306,
    database: 'bot_prueba'
})

conexion.connect((err)=> {
    if (err) {
        console.log('Error de conexion')
        
    }else{
        console.log('Conexion exitosa')
    }
});
module.exports= conexion;