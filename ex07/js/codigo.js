let num = prompt("Introduce el numero del que quieres calcular el factorial:");

let factorial = num;

for (let i = num-1; i > 0; i--) {
    factorial *= i  
}

alert("Resultado: " + factorial);