(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("TipoDocumentoResource", TipoDocumentoResource);

    TipoDocumentoResource.$inject = [ "$resource", "serviceURL" ];
    function TipoDocumentoResource( $resource, serviceURL ){
        return $resource( serviceURL + "/TipoDocumento" );
    } // end ProductResource Service

})();