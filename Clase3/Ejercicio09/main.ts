import { createPerson,Person}
from './types.js';

//usamos la funcion para crear un objeto que sigue el tipo "Person" 
const nuevaPersona: Person = createPerson("Jesica", 30);
console.log("Persona creada:");
console.log( "Nombre: " + nuevaPersona.name);
console.log("Edad: " + nuevaPersona.age + " años");