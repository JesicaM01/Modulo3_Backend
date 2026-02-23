//1 definimos el array de objetos (nuestra biblioteca)
var misLibros = [
    { titulo: "Cien Años De Soledad", autor: "Gabriel García Márquez" },
    { titulo: "Don Quijote", autor: "Miguel de Cervantes" },
    { titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald" } //agrega el tuyo
];
//2 definimos la funcion que recinbe el array
function listarLibros(lista) {
    console.log("---Lista de Libros---");
    //recorremos el array con un forEach
    lista.forEach(function (libro, indice) {
        console.log("".concat(indice + 1, ". \"").concat(libro.titulo, "\" escrito por ").concat(libro.autor));
    });
}
//3 llamamos a la funcion
listarLibros(misLibros);
