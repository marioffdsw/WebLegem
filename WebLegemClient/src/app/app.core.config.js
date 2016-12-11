(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .config(config);

    config.$inject = ["$sceDelegateProvider", "serviceUrl"];
    function config($sceDelegateProvider, serviceUrl) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from outer templates domain.
            //'http://cdn.somewebsite.com/templates/**'
            //'http://localhost:50555/**'
            serviceUrl + "/**"
        ]);
    } // end config function
})();