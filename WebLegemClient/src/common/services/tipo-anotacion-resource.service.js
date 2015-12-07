﻿(function () {
    "use strict";
    
    angular
        .module("WebLegemApp")
        .factory("TipoAnotacionResource", TipoAnotacionResource);

    TipoAnotacionResource.$inject = [ "$resource", "serviceUrl" ];
    function TipoAnotacionResource( $resource, serviceUrl ) {
        return $resource( serviceUrl + "/TipoAnotacion" );
    } // end TipoAnotacionResource

})();