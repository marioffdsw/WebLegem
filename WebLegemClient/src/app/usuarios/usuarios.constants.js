(function () { 
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")        
        .constant( "modulos",  [
            { id: 1, nombre: "Administración" },
            { id: 2, nombre: "Gestión Documental" },
            { id: 3, nombre: "Usuarios" }
        ] );
      
})();