//el signo "?" hace que el saludo sea opcional
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}`;
    } else {
        return `Hola ${nombre}`;
    }
}

//Probamos la funcion de las dos maneras 
console.log(saludar("Jesica")); // Salida: "Hola Jesica"
console.log(saludar("Jesica", "Buenos días")); // Salida: "Buenos días, Jesica"