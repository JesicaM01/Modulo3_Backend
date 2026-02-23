//1.Declaramos dos variables booleanas
let tieneEntrada : boolean = true;
let tieneDNI : boolean = false;

//2:Operaciones logica AND (&&)
//Solo es true si ambos son verdaderos
let puedeEntrarAlRecital : boolean = tieneEntrada && tieneDNI;

//3.Operacion logico OR (||)
//Es verdadero si AL MENOS UNO es verdadero
let tieneAlgunaIdentificacion : boolean = tieneEntrada || tieneDNI;

//4.Imprimimos los resultados
console.log("¿Tiene los dos requisitos (AND)?", puedeEntrarAlRecital);
console.log("¿Tiene al menos uno de los requisitos (OR)?", tieneAlgunaIdentificacion);