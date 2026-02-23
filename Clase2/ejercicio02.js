//el signo "?" hace que el saludo sea opcional
function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "Hola ".concat(nombre);
    }
}
//Probamos la funcion de las dos maneras 
console.log(saludar("Jesica")); // Salida: "Hola Jesica"
console.log(saludar("Jesica", "Buenos días")); // Salida: "Buenos días, Jesica"
