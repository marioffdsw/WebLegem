(function(){
    "use strict";

    angular
        .module("common.services")
        .factory("UsuariosResource", UsuariosResource);

    UsuariosResource.$inject = [ "$resource", "serviceUrl" ];
    function UsuariosResource( $resource, serviceUrl ) {
        return $resource(serviceUrl + "/Usuarios/:id", null, {
            update: { method: "PUT" }
        });
    } // end function UsuariosResource
})();