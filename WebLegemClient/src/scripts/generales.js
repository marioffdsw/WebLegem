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

function getPosition() {
    
    var el = document.getElementById("homero");
    console.log(el);
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

        console.log(xPos + " posiciony " + yPos);
        
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