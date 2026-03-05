//1.creamos el arreglo con al menos 5 numeros
const numeros: number[] = [10, 25, 42, 55, 89];
 console.log("---Recorriendo el arreglo for...of---");

 //2 usamos el for..of para obtener directramente cada VALOR 
 for (const numero of numeros) {
    console.log(`numero encontrado: ${numero}`);
 }