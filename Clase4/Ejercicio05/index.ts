//1 creamos una variable del tipo any con un valor que parece numero 
let valorMisterioso: any = "100";

console.log ("---usando aserciones dobles---");

//2 sercion doble 
//primero a "unknown" (desconocido) y luego a "number"
let numeroForzado : number = (valorMisterioso as unknown) as number;

console.log (`El valor original era: ${valorMisterioso}`);
console.log (`ahora TypeScript lo trata como : ${typeof numeroForzado} `);
console.log(`Resultado: ${numeroForzado}`);