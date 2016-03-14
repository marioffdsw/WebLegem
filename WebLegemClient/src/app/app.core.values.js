(function(){
    "use strict";

    var searchPattern = { words: "" };

    angular
        .module( "WebLegemApp" )
        .value( "searchPattern", searchPattern );
})();
