/**
 * Created by Macias on 14/10/14.
 */
var  express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var _ = require('underscore');
var restful = require('node-restful');
var Usuario = require('./app/models/Usuario.js');
var Incidente = require('./app/models/Incidente.js');
var app = express();
mongoose.connect('mongodb://localhost/test-sischok');

app.use(bodyParser());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var UsuarioResource = restful.model('usuario',Usuario).methods(['get','post','put','delete']);
UsuarioResource.register(app,'/usuarios');

var IncidenteResource = restful.model('incidente',Incidente).methods(['get','post','put','delete']);
IncidenteResource.register(app,'/incidentes');

app.get('/',function(req,res)
{
   res.send('500')
});

app.listen(process.env.PORT ||3333);