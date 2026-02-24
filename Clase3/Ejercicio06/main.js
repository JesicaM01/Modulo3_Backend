var Geometry;
(function (Geometry) {
    Geometry.areaOfCircle = (radius) => {
        return Math.PI * (radius ** 2);
    };
    Geometry.areaOfSquare = (side) => {
        return side * side;
    };
})(Geometry || (Geometry = {}));
/// <reference path="./geometry.ts" />
console.log("Area del circulo (radio 5):", Geometry.areaOfCircle(5));
console.log("Area del cuadrado (lado 4)");
Geometry.areaOfSquare(4);
