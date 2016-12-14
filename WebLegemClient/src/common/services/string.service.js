(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("stringService", stringService);

    stringService.$inject = [];
    function stringService() {
        return {
            toTitleCase: function (str) {
                str = str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
                str = str.replace(/\s+/g, function (txt) { return " "; });
                str.trim();
                return str;
            }
        }
    } // end function toTitleCase
})();