import createMuktiplier from './higherOrderFunctions.js';

//creamos un multiplicado que duplica (factor2)
const duplicar = createMuktiplier(2);

//creamos un multiplicador que triplica (factor3)
const triplicar = createMuktiplier(3);


console.log("si duplico 10,obtengo: " + duplicar(10));
console.log("si triplico 10, obtengo: " + triplicar(10));