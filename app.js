
const express = require('express');
const PORT = 3000 ;
//Express
const app = express();

app.use(express.json())
//config
app.set('port',PORT);
//Rutas
app.use('/api',require('./routes/empleados'));


//iniciar express
app.listen(app.get('port'),(error)=> {
    if (error) {
        console.log('Error de servidor: '+error)
    }else{
        console.log('Servidor conectado: '+PORT)
    }
})