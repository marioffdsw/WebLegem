(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("TipoDocumentoResource", TipoDocumentoResource);

    TipoDocumentoResource.$inject = [ "$resource" ];
    function TipoDocumentoResource( $resource ){
        return $resource( "/api/tipos-documento" );
    } // end ProductResource Service

})();