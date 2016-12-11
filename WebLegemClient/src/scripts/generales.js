function atenuar_busqueda(id) {
    var aux = document.getElementById(id).parentNode;
    aux.className = 'mini_search animacion_mini_search';
}

function perder_foco(id) {
    var aux = document.getElementById(id).parentNode;
    aux.className = 'mini_search';
}
