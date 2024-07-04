// Operadores de Incremento y Decremento

let cantidad = 5;

cantidad++; // Incremento de a 1
console.log(cantidad); // Output: 6

cantidad = cantidad + 1;
console.log(cantidad); // Output: 7

cantidad += 5; // Incremento de a 5
console.log(cantidad); // Output: 12

cantidad *= 2; // Multiplicación
console.log(cantidad); // Output: 24

// División por -0 resulta en Infinity
console.log(cantidad / -0); // Output: -Infinity

// Multiplicar un string no numérico por un número resulta en NaN
console.log("Yojan" * 7); // Output: NaN

// Operadores Lógicos y de Comparación

const numeroDeCristiano = 7;
const numeroDeVinicius = '7'; // Tipo string
const numeroDeMessi = 10;

// Comparación sencilla de valor (==)
console.log(numeroDeCristiano == numeroDeVinicius); // Output: true

// Comparación estricta de valor y tipo (===)
console.log(numeroDeCristiano === numeroDeVinicius); // Output: false

// Comparación estricta de valor y tipo (===)
console.log(numeroDeCristiano === numeroDeMessi); // Output: false

// Negación (!= y !==)
console.log(numeroDeCristiano !== numeroDeVinicius); // Output: true

// Operador lógico AND (&&)
console.log(numeroDeCristiano == numeroDeVinicius && numeroDeCristiano == numeroDeMessi); // Output: false

// true && true -> true
console.log(true && true); // Output: true

// true && false -> false
console.log(true && false); // Output: false

// Operador lógico OR (||)
console.log(numeroDeCristiano == numeroDeVinicius || undefined); // Output: true

// true || false -> true
console.log(true || false); // Output: true

// Comparación de objetos (contexto booleano)
console.log({a: 1} == {a: 1}); // Output: false (los objetos son diferentes en memoria)
