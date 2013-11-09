requirejs.config({
    paths: {
        'text': 'Scripts/text',
        'durandal': 'Scripts/durandal',
        'plugins': 'Scripts/durandal/plugins',
        'transitions': 'Scripts/durandal/transitions'
    }
});

(<any>define)('jquery', () => jQuery);
(<any>define)('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {
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