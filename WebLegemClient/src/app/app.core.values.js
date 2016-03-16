(function(){
    "use strict";

    var searchPattern = { words: "" };

    var fileId = { id: 0 };

    angular
        .module("WebLegemApp")
        .value("searchPattern", searchPattern)
        .value( "fileId", fileId );;
})();
