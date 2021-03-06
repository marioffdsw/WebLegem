﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp.Login")
        .controller("LoginController", LoginController);

    LoginController.$inject = ["$scope", "$state", "language", "SessionService"];
    function LoginController($scope, $state, language, SessionService) {
        var vm = this;
        vm.language = language;
        vm.user = { nombre: "", password: "" };
        vm.logIn = logIn;
        vm.error_login;

        function logIn() {
            //if (vm.user.nombre == $scope.$parent.vm.usuario.username && vm.user.password == $scope.$parent.vm.usuario.password) {
            //    $scope.$parent.vm.opcionesAMostrar = $scope.$parent.vm.opcionesLoggeado;
            //    $scope.$parent.vm.loggeado = true;
            //    $state.go( "home" );
            //}
            //else {
            //    $scope.$parent.vm.opcionesAMostrar = $scope.$parent.vm.opcionesNoLoggeado;
            //    $scope.$parent.vm.loggeado = false;
            //}

            SessionService.get({ usuario: vm.user.nombre, contrasena: vm.user.password }).$promise
            .then(function (data) {
                SessionService.LogIn(data);
                vm.error_login = false;
            })
            .catch(function error(error) {
                vm.error_login = true;
            });


        }


    }
})();