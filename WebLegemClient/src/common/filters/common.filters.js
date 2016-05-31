(function () {
    "use strict";

    angular
        .module("common.filters", ['common.services'])

        .filter("unique", unique);

    unique.$inject = [ "_" ];
    function unique( _ ) {
        //return function (arr, field) {
        //    return _.uniq(arr, false, function (i) { return i[field] });
        //};

        return function(arr, field) {

            var i = -1;

            field = field.split(".");

            function returnProperty(a) {
                if (i === field.length) i = -1;
                i = i + 1;

                var b = field[i];

                if (i === field.length - 1) {
                    var j = i;
                    i = -1;
                    return a[field[j]];
                }
                return returnProperty(a[field[i]]);
            }

            return _.unique(arr, false, returnProperty);
        };
    }


    


})();
