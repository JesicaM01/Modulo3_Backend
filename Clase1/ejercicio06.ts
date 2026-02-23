//1-Declaramos la variable de tipo unknown
let datoDesconocido: unknown;
 
//2.Le asignamos un numero y comprobamos su tipo
datoDesconocido = 42;
if (typeof datoDesconocido === "number") {
    console.log("Es un numero:", datoDesconocido);
} 

//3.Le asignamos un texto y comprobamos su tipo
datoDesconocido = "Aprendiendo TypeScript";
if (typeof datoDesconocido === "string") {
}
console.log("Es un texto:", datoDesconocido);

//4.Le asignamos un valor booleano y comprobamos su tipo
datoDesconocido = false;
if (typeof datoDesconocido === "boolean") {
    console.log("Es un booleano:", datoDesconocido);
}