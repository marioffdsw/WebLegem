var estado_ac = true;

function atenuar_busqueda(id) {
    var aux = document.getElementById(id).parentNode;
    console.log(aux);
    console.log(btn_arriba);

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

function getPosition() {
    
    var el = document.getElementById("homero");
    
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;

    }
    return {
        x: xPos,
        y: yPos
    };
}

function updatePosition() {
    position = getPosition();
}

window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

//--efecto subir con estilo al tope XD --//
function subir(){
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        //que suba en 10% de la posicion de donde este
        window.scrollBy(0, -200);//LO QUE VA SUBIENDO
        arriba = setTimeout('subir()', 10);//cada cuanto se ejecuta el metodo, entre mas pequeñomejor
    }
    else clearTimeout(arriba);
}