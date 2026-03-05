//1 definimos  la funcion generica con el nombre que pide el ejercicio
function filtrarElementos(arreglo) {
    const soloStrings = [];
    //2recorremos el for...of
    for (const item of arreglo) {
        //3verificamos si es un texto
        if (typeof item === "string") {
            //4asercion de tipo
            const textoConfirmado = item;
            soloStrings.push(textoConfirmado);
        }
    }
    return soloStrings;
}
//5probamos con un arreglo texto
const listaMixta = [10, "TypeScript", true, "Clase 4", "Generico"];
const resultados = filtrarElementos(listaMixta);
console.log(resultados);
