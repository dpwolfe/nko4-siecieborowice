requirejs.config({
    paths: {
        'text': 'Scripts/text',
        'durandal': 'Scripts/durandal',
        'plugins': 'Scripts/durandal/plugins',
        'transitions': 'Scripts/durandal/transitions',
        'knockout': 'Scripts/knockout-3.0.0',
        'jquery': 'Scripts/jquery-2.0.3'
    }
});

interface Window {
    ko;
}

(<any>require)(['knockout'], ko => {
    window.ko = ko;
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'knockout', 'jquery'], function (system, app, viewLocator, ko, $) {
    system.debug(true);

    app.title = 'Siecieborowice';

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(() => {
        viewLocator.useConvention();
        app.setRoot('viewmodels/shell', 'entrance');
    });
});