//1 definimos la funcion "fabrica"
function cerearLibro(titulo, autor, paginas) {
    return {
        titulo: titulo,
        autor: autor,
        paginas: paginas
    };
}
//2 creamos dos libros usando la funcion
var libro1 = cerearLibro("El Gran Gatsby", "F. Scott Fitzgerald", 180);
var libro2 = cerearLibro("Cien Años de Soledad", "Gabriel García Márquez", 417);
//3 mostramos los resultados
console.log("Detalle del libro 1:", libro1);
console.log("Detalle del libro 2:", libro2);
