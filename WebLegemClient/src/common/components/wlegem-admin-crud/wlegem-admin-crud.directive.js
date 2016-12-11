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
                procesando: "=",
                eliminarCallback: "=eliminar",
                nuevoCallback: "=nuevo",
                foco: "@foco",
                error: "="
            },
            bindToController: true
        };
    };
})();