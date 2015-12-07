(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("TipoEntidadService", TipoEntidadService);

    TipoEntidadService.$inject = [ "$resource", "serviceUrl" ]
    function TipoEntidadService($resource, serviceUrl) {
        return $resource(serviceUrl + "/TipoEntidad");
    } // end TipoEntidad Service
})();