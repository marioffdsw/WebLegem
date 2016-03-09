(function () {
    "use strict";

    angular
        .module("WebLegemApp.Login")
        .controller("LoginController", LoginController);

    LoginController.$inject = [ "$scope", "$state" ];
    function LoginController( $scope, $state ) {
        var vm = this;

        vm.user = { nombre: "", password: "" };

        vm.logIn = logIn;

        function logIn() {
            if (vm.user.nombre == $scope.$parent.vm.usuario.username && vm.user.password == $scope.$parent.vm.usuario.password) {
                $scope.$parent.vm.opcionesAMostrar = $scope.$parent.vm.opcionesLoggeado;
                $scope.$parent.vm.loggeado = true;
                $state.go( "home" );
            }
            else {
                $scope.$parent.vm.opcionesAMostrar = $scope.$parent.vm.opcionesNoLoggeado;
                $scope.$parent.vm.loggeado = false;
            }
        } // end function logIn
    } // end Login controller 
})();