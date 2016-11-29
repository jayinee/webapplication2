var login = angular.module('app');

login.controller('loginController', function ($scope, $state) {

    var vm = this;
    vm.model = {
        user: {
            email: "test@test.com",
            password: ""
        },
        methods: {
            gotoProducts: gotoProducts
        }
    };

    init();

    function init() {

    }

    function gotoProducts() {
        $state.go('products')
    }
});