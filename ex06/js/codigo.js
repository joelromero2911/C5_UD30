//Array con letras
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numero = prompt("Introduce el DNI del que quieres calcular la letra", "32452345");
let letra = prompt("Introduce la letra que crees que es la correcta", "N");
letra = letra.toUpperCase();
let letraFinal = letras[numero % 23];

if(numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
}
else {
  if(letraFinal != letra) {
    alert("No has acertado!\nLa letra para el DNI: " + numero + " es la \"" + letraFinal + "\"");
  }
  else {
    alert("Has acertado!");
  }
}