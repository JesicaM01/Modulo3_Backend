//funcion para poner la primera letra en mayuscula
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
//funcion para invertir una cadena de texto
export const reverse = (str) => {
    return str.split('').reverse().join('');
};
