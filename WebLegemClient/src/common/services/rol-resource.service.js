(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("RolResource", RolResource);

    RolResource.$inject = ["$resource", "serviceUrl"];
    function RolResource($resource, serviceUrl) {
        return $resource(serviceUrl + "/Rol/:id", null, {
            update: { method: "PUT" }
        });
    } // end ProductResource Service

})();