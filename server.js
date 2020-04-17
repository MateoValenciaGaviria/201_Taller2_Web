//Importar express
const express = require('express');

//Importar path
const path = require('path');

//Importar express-handlebars
const exphbs = require('express-handlebars');

//Importar productos
const products = require('./products');

//Instanciar servidor de express
const app = express();

//Registrar motor de render para handle-bars
app.engine('handlebars', exphbs());

//Use el motor de render handle-bars
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//Configurar ruta inicial
app.get('/', function (req, res){
    console.log('hola en la consola');
    //Responder con un archivo
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Ruta para la lista de productos con handlebars
app.get('/store', function (req, res){
    //Objeto contexto
    var context = {
        products: products,
    };

    //Renderizar vista
    res.render('store');
});

//Ruta para especificaciones de un producto con handlebars
app.get('/product/:title/:id', function (req, res){
    //Objeto contexto
    var context = {};

    //Buscar en la base de datos el producto correspondiente
    //Pasar las variables de ese elemento al contexto
    context = products.find(function (elem){
        if(elem.id == req.params.id){
            return true;
        }
    });

    //Renderizar vista
    res.render('product', context);
});

//Ruta para el checkout con handlebars
app.get('/checkout', function (req, res){
    //Renderizar vista
    res.render('checkout');
});
 
//Iniciar servidor en puerto 3000
app.listen(3000, function (){
    console.log('servidor iniciado en puerto 3000');
});

//npm - node package manager
//npx - node package executer nodemon para actualizar 