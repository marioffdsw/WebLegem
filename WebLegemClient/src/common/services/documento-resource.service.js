(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("DocumentosResource", DocumentosResource);

    DocumentosResource.$inject = [ "$resource", "serviceUrl" ];
    function DocumentosResource($resource, serviceUrl) {
        return $resource( serviceUrl + "/Documento" );
    }
})();