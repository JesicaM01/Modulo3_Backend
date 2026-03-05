//1 definimos la funcion generica <T>
function devolverDato(valor) {
    return valor;
}
console.log("---Probando la funcion generica devolverDato---");
//2 probamos con un String (texto)
const texto = devolverDato("Hola TypeScript");
console.log(`Tipo String: ${texto}`);
//3 probamos con un numero
const numero = devolverDato(2026);
console.log(`Tipo Number: ${numero}`);
//4 probamos con un booleano
const esVerdadero = devolverDato(true);
console.log(`Tipo Boolean: ${esVerdadero}`);
//5 probamos con un objeto
const objeto = devolverDato({ id: 1, curso: "fullstack" });
console.log(`Tipo Object:`, objeto);
