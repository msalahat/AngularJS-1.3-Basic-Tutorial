app.run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function () {
        ga('send', 'pageview', $location.path());
    });
});