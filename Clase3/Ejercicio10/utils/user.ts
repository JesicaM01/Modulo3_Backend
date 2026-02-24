export const crearUsuario = (nombre: string, email: string) => 
    {
        return { nombre, email, id: Date.now() };
    };