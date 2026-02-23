function calcularArea (figura:"circulo" | "rectangulo", a: number, b?: number): number {
    if (figura === "circulo") {
        return Math.PI * a * a; // Area del círculo: π * r^2
    } else {
        //formula del rectangulo: base * altura
        //usamos "b!" para decirle a TS que en este caso si existira el segundo numero
        return a * (b!);
    }
}
// probamos el circulo (solo pasamos el radio)
let areaCirculo = calcularArea("circulo", 5);
console.log("Area del circulo: " + areaCirculo.toFixed(2));

//probamos el rectangulo (pasamos base y altura)
let areaRectangulo = calcularArea("rectangulo", 10, 5);
console.log("Area del rectangulo: " + areaRectangulo);