(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("PermisosService", PermisosService);

    PermisosService.$inject = ["$resource", "serviceUrl"];
    function PermisosService($resource, serviceUrl) {
        return $resource(serviceUrl + "/Permisos/:id", null, {
            update: { method: "PUT" }
        });
    } // end ProductResource Service

})();