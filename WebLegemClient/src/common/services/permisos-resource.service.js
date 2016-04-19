(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("PermisosService", PermisosResource);

    PermisosResource.$inject = ["$resource", "serviceUrl"];
    function PermisosResource($resource, serviceUrl) {
        return $resource(serviceUrl + "/Permisos/:id", null, {
            update: { method: "PUT" }
        });
    } // end ProductResource Service

})();