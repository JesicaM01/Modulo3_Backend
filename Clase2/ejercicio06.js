//1 definimos la funcion que fabrica el objeto persona
function crearPersona(nombre, edad, pais) {
    return {
        nombre: nombre,
        edad: edad,
        pais: pais
    };
}
//2 creamos una persona llamando a la funcion 
var nuevaPersona = crearPersona("Jesica", 28, "Argentina");
//3 mostramos el resultado
console.log("Objedto persona creada:", nuevaPersona);
