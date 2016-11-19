;(function ($) {
    'use strict';

    if (history.length == 0 || history.state && history.state.id != 'HOMEAUTOMATION') {
        history.pushState({id: 'HOMEAUTOMATION'}, '', 'index.html');
    }

    init();

    function init() {
        log('jquery version ' + $.fn.jquery);

        // create button click action
        $('#loginButton').on('click', function (e) {
            e.stopPropagation();
            var invalids = $('.validatable:invalid');
            if (invalids.length == 0) {
                log('login clicked: ' + $('#userName').val() + ", " + $('#password').val());
                remoteService.loadMainPage();
            } else {
                log('input not valid');
            }
        });
    }

    function log(text) {
        $('.logArea').text(text);
    }

}(jQuery));