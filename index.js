//Importar express
const express = require('express');
//Importar path
const path = require('path');
//Instanciar servidor de express
const app = express();

app.use(express.static('public'));

//Configurar ruta inicial
app.get('/', function (req, res){
    console.log('hola en la consola');
    //Responder con un archivo
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
//Iniciar servidor en puerto 3000
app.listen(3000, function (){
    console.log('servidor iniciado en puerto 3000');
});

//npm - node package manager
//npx - node package executer nodemon para actualizar 