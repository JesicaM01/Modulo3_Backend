//1 los tres puntos (...) convvierten los argumentos en un array
function sumarTodos(...numeros: number[]): number {
    let sumaTotal = 0;

    //Recorremos el array y sumamos cada numero
    for (let num of numeros) {
        sumaTotal += num;
    }
    return sumaTotal;
}

//Probamos la funcion con diferentes cantidades de numeros
console.log("sumar de 3 numeros(5, 10, 15):", sumarTodos(5, 10, 15)); // Salida: 30
console.log("sumar de 5 numeros(2, 4, 6, 8, 10):", sumarTodos(2, 4, 6, 8, 10)); // Salida: 30