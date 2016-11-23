;(function (win, doc) {
    'use strict';

// if not available from the internet or no internet available then load it from the local disk
    win.jQuery || doc.write('<script src="./external/jquery-3.1.1.min.js"><\/script>');
    win.moment || doc.write('<script src="./external/moment-2.15.1.min.js"><\/script>');

// load the project scripts themselves
    var root = window.location.pathname;
    doc.write('<script src="./scripts/main.js"><\/script>');
    doc.write('<script src="./scripts/remoteService.js"><\/script>');

}(window, document));