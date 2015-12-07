﻿(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("EntidadService", EntidadService);

    EntidadService.$inject = [ "$resource", "serviceUrl" ]
    function EntidadService( $resource, serviceUrl) {
        return $resource(serviceUrl + "/Entidad");
    } // end Entidad Service
})();