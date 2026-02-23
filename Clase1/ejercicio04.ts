//Declaramos la variable 
let nombreUsuario : string = "Jesica";
//Usamos "number | undefined" para decirle a TS que la edad puede ser un numero o estar vacia 
let edadUsuario : number | undefined;

// PRUEBA 1 :Sin asignar edad 
if (edadUsuario === undefined) {
    console.log(`Nombre: ${nombreUsuario}. Edad no definida.`);
} else {
    console.log(`Nombre: ${nombreUsuario}. Edad: ${edadUsuario}`);
}

// PRUEBA 2 :Asignamos un numero a edadUsuario
edadUsuario = 38;
if (edadUsuario === undefined) {
    console.log(`Nombre: ${nombreUsuario}. Edad no definida.`);
} else {
    console.log(`Nombre: ${nombreUsuario}. Edad: ${edadUsuario}`);
}
