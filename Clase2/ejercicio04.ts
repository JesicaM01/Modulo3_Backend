//1 definimos la funcion "fabrica"
function cerearLibro(titulo: string, autor: string, paginas: number) {
    return {
        titulo: titulo,
        autor: autor,
        paginas: paginas
    };
}

//2 creamos dos libros usando la funcion
let libro1 = cerearLibro("El Gran Gatsby", "F. Scott Fitzgerald", 180);
let libro2 = cerearLibro("Cien Años de Soledad", "Gabriel García Márquez", 417);

//3 mostramos los resultados
console.log("Detalle del libro 1:", libro1);
console.log("Detalle del libro 2:", libro2);