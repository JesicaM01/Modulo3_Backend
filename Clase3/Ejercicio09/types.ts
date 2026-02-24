//definimos el "molde" de lo que es una persona
export type Person = {
    name: string;
    age: number;
};

//funcion que usa ese molde para crear objetos 
export const createPerson = (name: string, age: number): Person => {
    return {
        name: name,
        age: age
    };
};