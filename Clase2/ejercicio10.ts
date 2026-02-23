//1 definimos el array de objetos (nuestra biblioteca)
let misLibros = [
    {titulo: "Cien Años De Soledad", autor: "Gabriel García Márquez"},
    {titulo: "Don Quijote", autor: "Miguel de Cervantes"},
    {titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald"} //agrega el tuyo
];

//2 definimos la funcion que recinbe el array
function listarLibros(lista: {titulo: string, autor: string}[]): void {
    console.log("---Lista de Libros---");

    //recorremos el array con un forEach
    lista.forEach((libro, indice) => {
        console.log (`${indice + 1}. "${libro.titulo}" escrito por ${libro.autor}`);
        });
}
    
//3 llamamos a la funcion
listarLibros(misLibros);