export const capitalizar = (str: string): string => 
    str.charAt(0).toUpperCase() + str.slice(1);
export const saludar = (nombre: string): string => `Hola, ${nombre}!`;
