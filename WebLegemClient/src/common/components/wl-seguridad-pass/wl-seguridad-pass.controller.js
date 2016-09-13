(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlSeguridadPassController", WlSeguridadPassController);

    WlSeguridadPassController.$inject = ["_", "$scope", "language"];
    function WlSeguridadPassController(_, $scope,language) {
        var vm = this;
        vm.language = language;

        /*......Seguridad Widget......*/
        var grep = function (arr, callback) {
            var newArr = [],
                len = arr.length,
                i;
            for (i = 0; i < len; i++) {
                var e = arr[i];
                if (callback(e)) {
                    newArr.push(e);
                }
            }
            return newArr;
        }
       
        var strength = {
            colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
            valors: ['muy bajo', 'bajo', 'medio', 'alto', 'muy alto'],
            
            mesureStrength: function (p) {
                var _force = 0;

                var _lowerLetters = /[a-z]+/.test(p);
                var _upperLetters = /[A-Z]+/.test(p);
                var _numbers = /[0-9]+/.test(p);
                var _regex = /[$-/:-?{-~!"^_`\[\]]/g.test(p);

                var _flags = [_lowerLetters, _upperLetters, _numbers, _regex];
                var _passedMatches = grep(_flags, function (el) { return el === true; }).length;
                var _long = p.length;

                p.length >= 10 ? _force += 20 : p.length >= 6 ? _force += 10 : _force -= 5;
                _force += _passedMatches * 10;

                return _force;
            },

            getColor: function (s) {
                var idx = 1;
                var val = 'muy bajo';
                if (s >= 60) { idx = 5; }
                else if (s >= 50) { idx = 4; }
                else if (s >= 40) { idx = 3; }
                else if (s >= 30) { idx = 2; }
                else { idx = 1; }
                return {
                    idx: idx, col: this.colors[idx - 1], val: this.valors[idx - 1]
                };
            }

        }

        $scope.$watch('vm.modeloPass', function () {
            var widget_seguridad = document.getElementById("widget_seguridad");
            var content_span = document.getElementById("content_span");
            if (vm.modeloPass === '') {//vm.usuarioSeleccionado.contrasena
                widget_seguridad.style.display = "none";
            }
            else {
                var c = strength.getColor(strength.mesureStrength(vm.modeloPass));//vm.usuarioSeleccionado.contrasena
                vm.val_seguridad = c.val;

                widget_seguridad.style.display = "unset";
                var spans = content_span.getElementsByTagName("span");
                for (var i = 0 ; i < spans.length ; i++) {
                    spans[i].style.background = "#DDD";
                }
                for (var i = 0; i < c.idx ; i++) {
                    spans[i].style.background = c.col;
                }
            }
        }, true);

        /*....Fin Seguridad Widget......*/


        return vm;
    }
})();