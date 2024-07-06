// Función para multiplicar dos números
function multi(numerito1, numerito2) {
    // 'resultado' es una variable local a la función 'multi'
    let resultado = numerito1 * numerito2;
    return resultado;
}

// Función para restar uno de un número
function restaUno(numero) {
    if (numero !== null && numero !== undefined) {
        return numero - 1;
    } else {
        return 'Error: el número es nulo o indefinido';
    }
}

// Uso de las funciones
let resultado2 = multi(7, 1); // Output: 7
let resultado1 = multi(9, 2); // Output: 18
let resultadoNull = restaUno(null); // Output: 'Error: el número es nulo o indefinido'

// Imprimir resultados
console.log(resultado1, resultado2, resultadoNull);

// Ejemplo de closure
function crearContador() {
    let contador = 0; // Variable local a la función 'crearContador'

    // La función interna 'incrementar' tiene acceso a la variable 'contador'
    function incrementar() {
        contador++;
        return contador;
    }

    return incrementar;
}

let contador1 = crearContador(); // Crear una instancia del contador
let contador2 = crearContador(); // Crear otra instancia del contador

// Usar los contadores
console.log(contador1()); // Output: 1
console.log(contador1()); // Output: 2
console.log(contador2()); // Output: 1 (independiente de contador1)

// Ejemplo de por qué no se deben usar variables globales compartidas
let variableGlobal = 0;

function incrementarGlobal() {
    variableGlobal++;
    return variableGlobal;
}

console.log(incrementarGlobal()); // Output: 1
console.log(incrementarGlobal()); // Output: 2

// Otra función que usa la misma variable global
function restarGlobal() {
    variableGlobal--;
    return variableGlobal;
}

console.log(restarGlobal()); // Output: 1 (afecta la variable global)
console.log(incrementarGlobal()); // Output: 2 (afectada por restarGlobal)

// Las funciones anteriores comparten la misma variable global, lo que puede causar errores y comportamiento inesperado