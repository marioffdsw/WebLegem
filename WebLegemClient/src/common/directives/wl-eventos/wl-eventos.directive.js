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
                    });
                    element.bind('change', function (e) {
                        scope.$apply(attrs.wlChange);
                    });
                    element.bind('scroll', function (e) {
                        scope.$apply(attrs.wlScroll);
                    });
                    element.bind('keypress', function (e) {
                        if (e.key == 'Enter') {
                            scope.$apply(attrs.wlPEnter);
                        }
                        if (e.keyCode == 9) {
                            scope.$apply(attrs.wlPTab);
                        }
                        if (e.shiftKey && e.keyCode == 9) {
                            scope.$apply(attrs.wlPTab);
                        }

                    });
                    element.bind('focus', function (e) {
                        scope.$apply(attrs.wlFocus);
                    });
                    element.bind('blur', function (e) {
                        scope.$apply(attrs.wlBlur);
                    });

                    


                }
            };
        })

})();