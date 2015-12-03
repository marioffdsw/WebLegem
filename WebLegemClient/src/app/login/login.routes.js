(function () {
    "use strict";

    angular
		.module("WebLegemApp.Login")
		.config(config);

    config.$inject = ['$logProvider', '$stateProvider'];
    function config($logProvider, $stateProvider) {
        $logProvider.debugEnabled(true);

        $stateProvider			
			.state('login.form', {
			    url: '/login',
			    templateUrl: 'app/login/login.tmpl.html'			    
			});
    } // end config function	
})();