//Array con letras
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Pop up para pedir el numero
let numero = prompt("Introduce el DNI del que quieres calcular la letra", "32452345");

// Calculo de la letra
let letra = letras[numero % 23];

console.log("La letra para el DNI: " + numero + " es la \"" + letra + "\"")