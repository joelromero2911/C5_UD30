let num = prompt("introduce un numero");

let msg = function(num) {
    if(num%2==0){
        return "Es par!";
    }else{
        return "Es impar!";
    }
}

alert(msg(num));