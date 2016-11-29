var app = angular.module('app', ['ui.router',
    'store']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //alert('application configured');

    $stateProvider.state('login', {
        url: '/login',
        controller: 'loginController as vm',
        templateUrl: 'views/login.html'
    });

    $stateProvider.state('products', {
        url: '/products',
        controller: 'productsController as vm',
        templateUrl: 'views/products.html'
    });

    $urlRouterProvider.otherwise('/login');
});

app.run(function () {
    //alert('application started');
});
