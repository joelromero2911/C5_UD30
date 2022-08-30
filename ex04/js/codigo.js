// Array con los valores proporcionado por el enunciado
let valores = [true, 5, false, "hola", "adios", 2];

let stringLargo = "";
let arrNums = []

valores.forEach(valor => {

    // Punto 1
    if(typeof valor == "string"){
        if(valor.length > stringLargo.length){
            stringLargo = valor;
        }
    }

    // Punto 2
    if(typeof valor == "boolean"){
        if(valor == true){
            console.log("2. Este valor es un booleano true.");
        }
        if(valor == false){
            console.log("2. Este valor es un booleano false.");
        }
    }

    // Punto 3
    if(typeof valor == "number"){
        arrNums.push(valor);
    }
});

// Resultado punto 1
console.log("1. Cadena de texto mas larga: \"" + stringLargo + "\"");

// Resultado punto 3
console.log("3. Operaciones:");
console.log(arrNums[0] + " + " + arrNums[1] + " = " + (arrNums[0] + arrNums[1]));
console.log(arrNums[0] + " - " + arrNums[1] + " = " + (arrNums[0] - arrNums[1]));
console.log(arrNums[0] + " * " + arrNums[1] + " = " + (arrNums[0] * arrNums[1]));
console.log(arrNums[0] + " / " + arrNums[1] + " = " + (arrNums[0] / arrNums[1]));
console.log(arrNums[0] + " % " + arrNums[1] + " = " + (arrNums[0] % arrNums[1]));