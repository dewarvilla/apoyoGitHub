"use strict";

/* let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el Segundo numero"));
// Codigo con ifelse anidados
/* if (!isNaN(numero1) && !isNaN(numero2)) {
  if (numero1 === numero2) {
    document.write("Los numeros son iguales");
  } else if (numero1 < numero2) {
    document.write(`${numero1} es menor que ${numero2}`);
  } else {
    document.write(`${numero1} es mayor que ${numero2}`);
  }
} else {
  document.write("Por favor recargue la página e ingrese números en ambas casillas");
}
 */

// Codigo con expresiones ternarias anidadas
/*
if (!isNaN(numero1) && !isNaN(numero2)) {
  document.write(numero1 === numero2 
    ? "Los numeros son iguales" 
    : `${numero1} ${numero1 < numero2 ? "es menor que" : "es mayor que"} ${numero2}`);
} else {
  document.write("Por favor recargue la página e ingrese números en ambas casillas");
}

 */
/* let contenedorNumeros = {};
let numeroDatos = pormpt("I")
for (let i = 0; i <= numeroDatos ; i++) {

} */

let kilometraje = parseInt(prompt("Ingrese el kilometraje:"));
let nDatos = parseInt(prompt("Ingrese el número de datos:"));

let datosPorMostrar = kilometraje;

for (let i = 0; i < nDatos; i++) {
    if (datosPorMostrar > 0) {
        console.log(Math.ceil(datosPorMostrar / (nDatos - i)));
        datosPorMostrar -= Math.ceil(datosPorMostrar / (nDatos - i));
    } else {
        console.log(0);
    }
}
