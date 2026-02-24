import { sumar, aMayusculas, crearUsuario } from './utils/index.js';
const miUsuario = crearUsuario("Jesica", "jesica@example.com");
console.log(aMayusculas("---informa de sistema---"));
console.log("Usuario : " + miUsuario.nombre);
console.log("Resultado de la suma:" + sumar(100, 50));
