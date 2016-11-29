var products = angular.module('store');

products.controller('productsController', function ($scope) {

    var vm = this;
    vm.model = {
        user: {
            email: "test@test.com",
            password: ""
        }
    };

    init();

    function init() {

    }
});