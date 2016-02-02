function atenuar_busqueda(id) {
    var aux = document.getElementById(id).parentNode;
    aux.className = 'mini_search animacion_mini_search';
}

function perder_foco(id) {
    var aux = document.getElementById(id).parentNode;
    aux.className = 'mini_search';
}

function llamarFuncion() {
    var aux = document.getElementById("files");
    var file = aux.files[0];
    var fname = file.name;
    //alert(fname);
}


