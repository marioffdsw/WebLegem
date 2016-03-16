(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .config(config);

    config.$inject = ["$sceDelegateProvider"];
    function config($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from outer templates domain.
            //'http://cdn.somewebsite.com/templates/**'
            'http://localhost:50555/**'
        ]);
    } // end config function
})();