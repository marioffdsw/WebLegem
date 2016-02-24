(function () {
    "use strict";

    angular
		.module("WebLegemApp.Busqueda")
		.config(config);

    config.$inject = ['$logProvider', '$stateProvider'];
    function config($logProvider, $stateProvider) {
        $logProvider.debugEnabled(true);

        $stateProvider
			.state('busqueda.form', {
			    url: '/search/form',
			    templateUrl: 'app/busqueda/login.tmpl.html'
			});
    } // end config function	
})();