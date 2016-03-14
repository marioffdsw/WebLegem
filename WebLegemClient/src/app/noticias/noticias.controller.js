(function(){
    "use strict";

    angular
        .module( "WebLegemApp" )
        .controller( "NoticiasController", NoticiasController );

    NoticiasController.$inject = [ "searchPattern" ];
    function NoticiasController( searchPattern ){
        var vm = this;

        vm.searchPattern = searchPattern;
        vm.searchPattern.words = "";

        return vm;
    } // fin NoticiasController Controller
})();
