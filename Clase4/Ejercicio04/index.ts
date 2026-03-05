//1  declaramos una variable de tipo any 
let miVariable: any = "Hola TypeScript";

console.log ("--- usando aserciones de tipo---");

//2 usamos la asercion con "as string" para acceder a .longht
// sin el as string,TS  a avces no nos autocomplrta  .length
let LargoDelTexto: number = (miVariable as string).length;
 
console.log (`El contenido es :  "${miVariable}"`);
console.log (`Su longitud es de : ${LargoDelTexto} caracteres`);