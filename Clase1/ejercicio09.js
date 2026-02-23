//1.Declaramos dos variables booleanas
var tieneEntrada = true;
var tieneDNI = false;
//2:Operaciones logica AND (&&)
//Solo es true si ambos son verdaderos
var puedeEntrarAlRecital = tieneEntrada && tieneDNI;
//3.Operacion logico OR (||)
//Es verdadero si AL MENOS UNO es verdadero
var tieneAlgunaIdentificacion = tieneEntrada || tieneDNI;
//4.Imprimimos los resultados
console.log("¿Tiene los dos requisitos (AND)?", puedeEntrarAlRecital);
console.log("¿Tiene al menos uno de los requisitos (OR)?", tieneAlgunaIdentificacion);
