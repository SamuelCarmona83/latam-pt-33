// Condicionales
let numero = 4;

let expresion = numero % 2 === 0; // verdadero si el número es par

// Controlar el flujo del código/programa con if-else
if (expresion) {
    // Bloque verdadero
    console.log('El número es par.'); // Se ejecuta si la expresión es verdadera
} else {
    // Bloque falso
    console.log('El número es impar.'); // Se ejecuta si la expresión es falsa
}

// Bucles

// Bucle for: condición inicial, condición de salida, condición incremental
for (let variable = 50; variable <= 99; variable++) {
    // Controlar el flujo del código/programa con if-else dentro del bucle
    if (variable % 2 === 0) {
        // Bloque verdadero
        console.log('El número ' + variable + ' es par.'); // Se ejecuta si el número es par
    } else {
        // Bloque falso
        console.log('El número ' + variable + ' es impar.'); // Se ejecuta si el número es impar
    }
    // Condición incremental: variable++ (aumenta en 1 cada iteración)
}

let numeros = [4, 5, 7, 14, 19, 21];

console.log(numeros[5]); // Imprime el elemento en la posición 5 del array

// Bucle for-in: iterar sobre las posiciones (índices) del array
for (let posicion in numeros) {
    // Controlar el flujo del código/programa
    console.log('El número ' + numeros[posicion] + ' está en la posición: ' + posicion);
}

// Bucle for-of: iterar sobre los elementos del array
for (let numero of numeros) {
    if (numero % 7 === 0) {
        // Bloque verdadero
        console.log('El número ' + numero + ' es divisible por 7.');
    } else {
        // Bloque falso
        console.log('El número ' + numero + ' no es divisible por 7.');
    }
}