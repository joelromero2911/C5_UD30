let cadena = prompt("introduce una cadena de texto");

let calcStr = function(cadena) {
    if(cadena === cadena.toLowerCase()){
        return "Son solo minusculas";
    }else if(cadena === cadena.toUpperCase()){
        return "Son solo mayusculas";
    }else{
        return "Hay mayus y minus";
    }
}

alert(calcStr(cadena));