//Declaramos la variable 
var nombreUsuario = "Jesica";
//Usamos "number | undefined" para decirle a TS que la edad puede ser un numero o estar vacia 
var edadUsuario;
// PRUEBA 1 :Sin asignar edad 
if (edadUsuario === undefined) {
    console.log("Nombre: ".concat(nombreUsuario, ". Edad no definida."));
}
else {
    console.log("Nombre: ".concat(nombreUsuario, ". Edad: ").concat(edadUsuario));
}
// PRUEBA 2 :Asignamos un numero a edadUsuario
edadUsuario = 38;
if (edadUsuario === undefined) {
    console.log("Nombre: ".concat(nombreUsuario, ". Edad no definida."));
}
else {
    console.log("Nombre: ".concat(nombreUsuario, ". Edad: ").concat(edadUsuario));
}
