define(function (require) {
    var app = require('durandal/app');

    return {
        displayName: 'Siecieborowice Dashboard',
        showMessage: function () {
            app.showMessage('Dashboard');
        }
    };
});