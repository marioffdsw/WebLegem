(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .run(run);

    run.$inject = [ "$rootScope", "$log" ];
    function run( $rootScope, $log ) {
        //$rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
        //    $log.debug("event", event);
        //    $log.debug("toState", toState);
        //    $log.debug("toParams", toParams);
        //    $log.debug("fromState", fromState);
        //    $log.debug("fromParams", fromParams);
        //});

        $rootScope.$on("$stateNotFound", function (event, unfoundState, fromState, fromParams) {
            $log.debug( "The requested state was not found", unfoundState );
        });

        $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
            $log.error("An error occured while changing states", error);

            $log.debug("event", event);
            $log.debug("toState", toState);
            $log.debug("toParams", toParams);
            $log.debug("fromState", fromState);
            $log.debug("fromParams", fromParams);
        });
    } // end function run

})();