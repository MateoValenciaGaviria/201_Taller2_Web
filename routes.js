const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {
    //Configurar ruta inicial
    app.get('/', function (req, res) {
        console.log('hola en la consola');
        //Responder con un archivo
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });

    //Ruta para la lista de productos con handlebars
    app.get('/store', function (req, res) {

        var filters = {
            $and: []
        };

        if (req.query.gpu_eq) {
            filters.$and.push({
                gpu: {
                    $eq: req.query.gpu_eq
                }
            });
        }

        if (req.query.cpu_eq) {
            filters.$and.push({
                cpu: {
                    $eq: req.query.cpu_eq
                }
            });
        }

        if (req.query.serie_eq) {
            filters.$and.push({
                serie: {
                    $eq: req.query.serie_eq
                }
            });
        }

        if (filters.$and.length == 0) {
            delete filters.$and;
        }

        var sortings = {};

        if (req.query.sort == 'Popularity') {
            sortings.popularity = -1;
        }

        if (req.query.sort == 'Release') {
            sortings.release = -1;
        }

        if (req.query.sort == 'Name') {
            sortings.title = 1;
        }

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).sort(sortings).toArray(function (err, docs) {
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
        if (req.params.id.length != 24) {
            res.redirect('/404');
            return;
        }

        const filter = {
            _id: {
                $eq: new ObjectId(req.params.id)
            }
        };

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);

            if (docs.length == 0) {
                res.redirect('/404');
                return;
            }

            // crear el contexto
            var context = docs[0];
            // renderizar el archivo list.handlebars con el contexto creado
            res.render('product', context);
        });
    });

    //Ruta para el checkout con handlebars
    app.get('/checkout', function (req, res) {
        //Renderizar vista
        res.render('checkout');
    });

    //Ruta para el formulario con handlebars
    app.get('/form', function (req, res) {
        var context = {
            showError: req.query.error,
        }
        //Renderizar vista
        res.render('form', context);
    });

    //Recibir informacion del usuario
    app.post('/form', function (req, res) {

        req.body.creation_date = new Date();

        if(!req.body.name || !req.body.last_name || 
        !req.body.id_document || !req.body.id_number || 
        !req.body.address || !req.body.payment_method || 
        !req.body.payment_method_number || !req.body.products){
            //res.send('error');
            res.redirect('/form?error=true')
            return;
        }

        req.body.products = JSON.parse(req.body.products);

        const collection = db.collection('orders');
        collection.insertOne(req.body);
        //Renderizar vista
        //res.send('test');
        res.redirect('/store')
    });
}

module.exports = configureRoutes;
