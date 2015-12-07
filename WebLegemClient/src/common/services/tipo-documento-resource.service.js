(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("TipoDocumentoResource", TipoDocumentoResource);

    TipoDocumentoResource.$inject = ["$resource", "serviceUrl"];
    function TipoDocumentoResource($resource, serviceUrl) {
        return $resource(serviceUrl + "/TipoDocumento");
    } // end ProductResource Service

})();