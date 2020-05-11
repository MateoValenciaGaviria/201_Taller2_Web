const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//Importar express
const express = require('express');
//Importar express-handlebars
const exphbs = require('express-handlebars');

//Importar productos
const configureRoutes = require('./routes');

//Importar path
const path = require('path');

//Instanciar servidor de express
const app = express();

app.use(express.urlencoded({ extended: true }));

//Configurar carpeta publica
app.use(express.static('public'));

//Registrar motor de render para handle-bars
app.engine('handlebars', exphbs());
//Use el motor de render handle-bars
app.set('view engine', 'handlebars');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Msi_portal';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  configureRoutes(app, db);
});
 
//Iniciar servidor en puerto 3000
app.listen(3000, function (){
    console.log('app escuchando');
});

//npm - node package manager
//npx - node package executer nodemon para actualizar 