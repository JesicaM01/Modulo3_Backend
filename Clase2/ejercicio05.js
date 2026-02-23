//1 los tres puntos (...) convvierten los argumentos en un array
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var sumaTotal = 0;
    //Recorremos el array y sumamos cada numero
    for (var _a = 0, numeros_1 = numeros; _a < numeros_1.length; _a++) {
        var num = numeros_1[_a];
        sumaTotal += num;
    }
    return sumaTotal;
}
//Probamos la funcion con diferentes cantidades de numeros
console.log("sumar de 3 numeros(5, 10, 15):", sumarTodos(5, 10, 15)); // Salida: 30
console.log("sumar de 5 numeros(2, 4, 6, 8, 10):", sumarTodos(2, 4, 6, 8, 10)); // Salida: 30
