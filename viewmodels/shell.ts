define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: () => {
            router.map([
                { route: '', title: 'Dashboard', moduleId: 'viewmodels/dashboard', nav: true },
                { route: '_=_', title: 'Dashboard', moduleId: 'viewmodels/dashboard', nav: false },
                { route: 'game', moduleId: 'viewmodels/game', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});