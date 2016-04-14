
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("modalDialog", modalDialog);

    function modalDialog() {
        return {
            templateUrl: "common/directives/fotografia/fotografia.directive.html",
            restrict: 'E',
            controller: "controlUsuariosController",
            controllerAs: "vm",
            transclude: true, // we want to insert custom content inside the directive
            replace: true, // Replace with the template below

            scope: {
                show: "=show"/*,
                width: "=width",
                height: "=height"*/
            },

            link: function(scope, element, attrs) {
                scope.dialogStyle = {};
                //if (attrs.width)
                    scope.dialogStyle.width = "400px";
                //if (attrs.height)
                    scope.dialogStyle.height = "200px";
            },

            bindToController: true
        }
    } // end
})();

