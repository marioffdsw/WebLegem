(function(){
    "use strict";

    angular
        .module("common.services")
        .factory("_", underscoreService);

    underscoreService.$inject = [ "$window" ];
    function underscoreService( $window ) {
        return $window._;
    } // end function underscoreService
})();
