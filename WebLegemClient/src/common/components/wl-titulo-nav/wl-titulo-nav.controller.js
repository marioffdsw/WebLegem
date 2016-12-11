(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlTituloNavController", WlTituloNavController);

    WlTituloNavController.$inject = ["$scope", "$state"];
    function WlTituloNavController($scope,  $state) {
        var v = this;
        v.$state = $state;
        v.padre = v.$state.$current.parent;
        v.hijo = v.$state.$current;
        $scope.$on('$stateChangeSuccess', function () {
            v.padre = v.$state.$current.parent;
            v.hijo = v.$state.$current;            
        });

        return v;
    }
})();