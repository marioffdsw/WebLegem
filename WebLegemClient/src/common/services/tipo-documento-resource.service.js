(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("TipoDocumentoResource", TipoDocumentoResource);

    TipoDocumentoResource.$inject = ["$resource", "serviceUrl"];
    function TipoDocumentoResource($resource, serviceUrl) {
        return $resource(serviceUrl + "/TipoDocumento/:id", null, {
            update: { method: "PUT" }
        });
    } // end ProductResource Service

})();