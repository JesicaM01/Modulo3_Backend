//1.definimos el objeto con las 3 propiedades requeridas
const usuario = {
    nombre: "Jesica",
    edad: 30,
    ciudad: "Buenos Aires"
}

console.log("---Recorriendo el onjeto for...in---");

//2.el bucle for...in recorre las LLves (propoiedades) del objeto
for (const propiedad in usuario) {
    //usamos (usuariio any) para que TypeScrip nos permita
    //usar la variable "propiedad" para entrar al valor sin errores
    const valor = (usuario as any)[propiedad];
    console.log(`${propiedad.toUpperCase()}: ${valor}`);
}