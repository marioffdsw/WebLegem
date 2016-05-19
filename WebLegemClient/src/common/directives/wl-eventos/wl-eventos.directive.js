(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive('ewl', function ewl() {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope, element, attrs) {

                    element.bind('load', function (e) {
                        scope.$apply(attrs.wlLoad);
                    })
                    element.bind('change', function (e) {
                        scope.$apply(attrs.wlChange);
                    })
                    element.bind('scroll', function (e) {
                        scope.$apply(attrs.wlScroll);
                    });

                }
            };
        })

})();