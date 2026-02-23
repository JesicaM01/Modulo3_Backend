//1 definimos el objeto deportista
var deportista = {
    nombre: "Jesica",
    edad: 30,
    deporte: "tenis",
    energia: 100
};
//2 definimos la funcion entrenar
function entrenar(persona, horas) {
    //disminuimos la energia: 5 puntos por cada hora 
    var desgaste = horas * 5;
    persona.energia = persona.energia - desgaste;
    console.log("".concat(persona.nombre, " ha entrenado durante ").concat(horas, " horas ").concat(persona.deporte, "."));
}
//3 ejecutamos el engtrenamiento y mostramos el resultado
console.log("Estado inicial:", deportista);
entrenar(deportista, 3); //entrena 3 horas (deberia de perder 15 de energia)
console.log("Estado final:", deportista);
