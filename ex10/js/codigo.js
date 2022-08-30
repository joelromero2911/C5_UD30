let cadena = prompt("introduce una cadena de texto");

let calcStr = function(cadena) {
    let palindromo = cadena.split("").reverse("").join("");

    if(cadena == palindromo){
        return "Es palindromo";
    }else{
        return "No es palindromo";
    }
}

alert(calcStr(cadena));