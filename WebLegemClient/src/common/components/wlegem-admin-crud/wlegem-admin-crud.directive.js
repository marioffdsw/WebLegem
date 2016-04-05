(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlAdminCrud", wlAdminCrud);

    wlAdminCrud.$inject = [];
    function wlAdminCrud() {
        return {
            templateUrl: "common/components/wlegem-admin-crud/wlegem-admin-crud.tmpl.html",
            restrict: "E",
            controller: "WebLegemAdminCrudController",
            controllerAs: "vm",
            scope: {
                objetoSeleccionado: "=",
                editando: "=",                                  
                eliminarCallback: "=eliminar",
                nuevoCallback: "=nuevo"
            },
            bindToController: true
        };
    };
})();