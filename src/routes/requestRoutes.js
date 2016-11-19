'use strict';

var controller = require('../controller/requestController');
var express = require('express');
var router = express.Router();

router.get('/home', function (req, res, next) {
    console.log('providing login screen');
    controller.provideIndexPage(req, res, next);
});
router.get('/main', function (req, res, next) {
    console.log('providing main screen');
    controller.provideMainPage(req, res, next);
});
router.get('/error', function (req, res, next) {
    console.log('producing an error');
    throw new Error('This is a test error');
});

module.exports = router;