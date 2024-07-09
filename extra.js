
// Documentacion de la funcion y sus parametros con @param {tipo} nombre - descripcion

/**
 * Función recursiva para calcular el factorial de un número
 * @param {number} n - El número para el cual se va a calcular el factorial
 * @returns {number} - El factorial del número dado
 */
function factorial(n) {
    // Caso base: el factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva: n * factorial(n-1)
    return n * factorial(n - 1);
}

// Ejemplo de uso de la función factorial
let num = 5;
console.log(`El factorial de ${num} es ${factorial(num)}`); // El factorial de 5 es 120

// Función generadora
function* idGenerator() {
    let id = 1;
    while(true) {
        yield id++;
    }
}

// Crear una instancia del generador
const generateId = idGenerator();

// Usar el generador para obtener IDs únicos
console.log(generateId.next().value); // 1
console.log(generateId.next().value); // 2
console.log(generateId.next().value); // 3