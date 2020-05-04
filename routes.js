const assert = require('assert');

function configureRoutes(app, db) {
    //Configurar ruta inicial
    app.get('/', function (req, res) {
        console.log('hola en la consola');
        //Responder con un archivo
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });

    //Ruta para la lista de productos con handlebars
    app.get('/store', function (req, res) {
        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);

            //Objeto contexto
            var context = {
                products: docs,
            };
            
            //Renderizar vista
            res.render('store', context);
        });
    });

    //Ruta para especificaciones de un producto con handlebars
    app.get('/product/:title/:id', function (req, res) {
        var id = parseInt(req.params.id);
        var product = products[id];
        res.render('product', product);
        /* //Objeto contexto
        var context = {};

        //Buscar en la base de datos el producto correspondiente
        //Pasar las variables de ese elemento al contexto
        context = products.find(function (elem) {
            if (elem.id == req.params.id) {
                return true;
            }
        });

        //Renderizar vista
        res.render('product', context); */
    });

    //Ruta para el checkout con handlebars
    app.get('/checkout', function (req, res) {
        //Renderizar vista
        res.render('checkout');
    });
}

module.exports = configureRoutes;