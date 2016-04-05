(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("TipoEntidadService", TipoEntidadService);

    TipoEntidadService.$inject = [ "$resource", "serviceUrl" ]
    function TipoEntidadService($resource, serviceUrl) {
        return $resource(serviceUrl + "/TipoEntidad/:id", null, {
            update: { method: "PUT" }
        });
    } // end TipoEntidad Service
})();