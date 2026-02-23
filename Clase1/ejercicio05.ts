//Declaramos la variable que puede ser texto o nula 
let datoVariable : string | null;

//Asignamos un valor inicial
datoVariable = "Hola, soy un dato variable";
console.log("Estado 1:", datoVariable);

//Cambiamos el valor a null
datoVariable = null;
console.log("Estado 2:", datoVariable);

//Explicacion de significado de null
console.log("Explicacion: null en TypeScript representa la ausencia intencional de cualquier valor de objeto o dato.");