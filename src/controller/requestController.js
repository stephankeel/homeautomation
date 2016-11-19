'use strict';

function provideIndexPage(req, res, next) {
    res.sendFile('index.html', {root: './public/'});

}

function provideMainPage(req, res, next) {
    res.type('text/html');
    res.sendFile('main.html', {root: './public/'});
}

module.exports = {
    provideIndexPage: provideIndexPage,
    provideMainPage: provideMainPage,
};