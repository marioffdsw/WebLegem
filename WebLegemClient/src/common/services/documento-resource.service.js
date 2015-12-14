(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("DocumentoResource", DocumentoResource);

    DocumentoResource.$inject = [ "$resource", "serviceUrl" ];
    function DocumentoResource($resource, serviceUrl) {
        return $resource( serviceUrl + "/Documento" );
    }
})();