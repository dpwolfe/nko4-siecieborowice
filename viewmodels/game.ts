define(function (require) {
    var app = require('durandal/app');

    return {
        displayName: 'Siecieborowice Game',
        showMessage: function () {
            app.showMessage('Game');
        }
    };
});