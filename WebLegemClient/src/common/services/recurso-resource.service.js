(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("RecursoService", RecursoService);

    RecursoService.$inject = ["$resource", "serviceUrl"];
    function RecursoService($resource, serviceUrl) {
        return $resource(serviceUrl + "/Recurso/:id", null, {
            update: { method: "PUT" }
        });
    } // end ProductResource Service

})();