var remoteService = (function ($) {
    'use strict';

    function ajaxJSON(method, url, data, headers) {
        return $.ajax({
            dataType: 'json',
            contentType: 'application/json',
            headers: headers,
            method: method,
            url: url,
            data: JSON.stringify(data)
        });
    }

    function ajaxHTML(method, url, headers) {
        return $.ajax({
            dataType: 'text',
            contentType: 'text/html',
            headers: headers,
            method: method,
            url: url
        });
    }

    function loadMainPage() {
        ajaxHTML('GET', '/main').done(function (msg) {
            $('#dynamicSection').html(msg);
        }).fail(function (msg) {
            console.log('loading main page failed: ' + msg.status + ' --> ' + msg.responseText);
        });
    }

    return {
        loadMainPage: loadMainPage,
    };

}(jQuery));