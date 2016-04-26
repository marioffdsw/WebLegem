(function(){
    "use strict";

    var searchPattern = { words: "" };

    var fileId = { id: 0 };

    var contraste = { valor: 0 };

    angular
        .module("WebLegemApp")
        .value("searchPattern", searchPattern)
        .value("fileId", fileId)
        .value("contraste", contraste );
})();
