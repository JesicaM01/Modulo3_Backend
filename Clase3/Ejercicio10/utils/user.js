export const crearUsuario = (nombre, email) => {
    return { nombre, email, id: Date.now() };
};
