(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .run(run);

    run.$inject = [ "$rootScope", "$log", "$state", "SessionService" ];
    function run( $rootScope, $log, $state, SessionService ) {
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

        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, options) {
            if (!SessionService.loggeado
                && toState.name != "home"
                && toState.name != "login"
                && toState.name != "busqueda"
                && toState.name != "ver-documento") {
                event.preventDefault();
                $state.go( "login" );
            }
        });
    } // end function run

})();