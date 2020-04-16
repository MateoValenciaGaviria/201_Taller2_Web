const express = require('express');

const app = express();

app.get('/', function (req, res){
    console.log('hola en la consola');
    res.send('hola en chrome');
});

app.get('/contacto', function (req, res){
    console.log('hola en contacto');
    res.send('pagina de contacto');
});

app.listen(3000, function (){
    console.log('servidor iniciado en puerto 3000');
});

//npm - node package manager
//npx - node package executer nodemon para actualizar 