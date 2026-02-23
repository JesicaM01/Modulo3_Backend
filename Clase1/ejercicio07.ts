//1.Declaramos la variable con tipos literales 
//Aqui le decimos: solo podes ser uno de estos tres 
let dia: "Lunes" | "Martes" | "Miercoles" ;

//2.Asi8gancion correcta;
dia = "Lunes";
console.log(`El dia asignado es: ${dia}`);

//3.Asignacion incorrecta (descomentar para ver el error)
//dia = "jeves";

console.log("Nota: Si intentas asignar 'jueves'),TypeScript mostrara un error por que nbo esta en la lista permitida.");