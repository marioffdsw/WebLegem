﻿var estado_ac = true;

function atenuar_busqueda(id) {
    var aux = document.getElementById(id).parentNode;
}

function perder_foco(id) {
    var aux = document.getElementById(id).parentNode;
    aux.style.opacity = '1';
}


function estado_accesibilidad(id) {
    if (estado_ac == true) {
        in_accesibilidad(id);
        estado_ac = false;
    }
    else {
        out_accesibilidad(id);
        estado_ac = true;
    }
}

function in_accesibilidad(id) {
    
    var aux = document.getElementById(id).parentNode;
    aux.style.transform = 'translateX(0px)';
    document.getElementById(id).childNodes[1].className = 'ico-angle-right';
}

function out_accesibilidad(id) {
    var aux = document.getElementById(id).parentNode;
    aux.style.transform = 'translateX(150px)';
    document.getElementById(id).childNodes[1].className = 'ico-angle-left';
}