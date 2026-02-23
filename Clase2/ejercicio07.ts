//1 definimos el objeto empleado
let empleado = {
    nombre: "Jesica",
    edad: 28,
    salario: 35000
};

//2 funcion para aumentar el salario por porcentaje
function aumentarSalario(persona: {nombre: string, edad: number, salario: number}, porcentaje: number) {
    //calculamos cuanto es el aumento (salario * porcentaje / 100)
    let aumento = (persona.salario * porcentaje) / 100;

    //sumamos el aumento al salario original
    persona.salario = persona.salario + aumento;

 console.log(`Aumento aplicado: $${aumento} (${porcentaje}%)`);
}

//3 probamos la funcion 
console.log("Salario inicial:", empleado.salario);
aumentarSalario(empleado, 10); // aumentamos el salario en un 10%
console.log("Nuevo Salario de " + empleado.nombre + ": $" + empleado.salario);