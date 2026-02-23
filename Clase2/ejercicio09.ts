//1creamos el objeto coche
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false
};

//2 definimos la funcion con retorno void
function encenderCoche(vehiculo: {marca: string, modelo: string, encendido: boolean}) : void {
    vehiculo.encendido = true;
console.log ("...Girando la llave..");
}

//3 mostramos el proceso
console.log("Estado inicial del coche:", coche);
encenderCoche(coche); //llamamos a la funcion para encender el coche
console.log("Estado final del coche:", coche);