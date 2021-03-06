'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var requestRoutes = require('./routes/requestRoutes.js');
var server = express();
var router = express.Router();

var errorHandler = function (err, req, res, next) {
    console.log(`ErrorHandler: ${err.stack}`);
    res.status(500).send(err.message);
}

var inputLogger = function (req, res, next) {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
}

var outputLogger = function (req, res, next) {
    console.log(`Response with status code: ${res.statusCode}`);
    next();
}

server.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(inputLogger);
server.use(requestRoutes);
server.use(outputLogger);
server.use(errorHandler);

const hostname = '127.0.0.1';
const port = 3002;
server.listen(port, hostname, () => {
    console.log(`Homeautomation server running at http://${hostname}:${port}/`);
});


