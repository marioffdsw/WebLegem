var estado_ac = true;

function atenuar_busqueda(id) {
    var aux = document.getElementById(id).parentNode;
    aux.className = 'mini_search animacion_mini_search';
}

function perder_foco(id) {
    var aux = document.getElementById(id).parentNode;
    aux.className = 'mini_search';
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
    aux.style.transform = 'translateX(165px)';
    document.getElementById(id).childNodes[1].className = 'ico-angle-left';
}