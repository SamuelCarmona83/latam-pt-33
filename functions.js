// Funciones en JavaScript

// Definición de una función simple
function saludar() {
    console.log("¡Hola, Mundo!"); // Esta línea imprime "¡Hola, Mundo!" en la consola
}

// Llamada a la función
saludar(); // Output: ¡Hola, Mundo!

// Función con parámetros
function saludarA(nombre) {
    console.log("¡Hola, " + nombre + "!"); // Esta línea imprime "¡Hola, [nombre]!" en la consola
}

// Llamada a la función con un argumento
saludarA("Carlos"); // Output: ¡Hola, Carlos!

//  Funcion con Parametros y valores que retornan
function licuadora(contenido){
    return 'Aqui tienes tu jugo de ' + contenido;
};

// Llamada a la función y almacenamiento del resultado
const jugoDePera = licuadora('Pera');
const jugoDeMango = licuadora('Mango');
console.log(jugoDeMango);
console.log(jugoDePera);

// Función con múltiples parámetros
function sumar(a, b) {
    return a + b; // Esta línea devuelve la suma de a y b
}

// Llamada a la función y almacenamiento del resultado
let resultado = sumar(5, 7);
console.log("El resultado de la suma es: " + resultado); // Output: El resultado de la suma es: 12

// Función anónima asignada a una variable
let multiplicar = function(a, b) {
    return a * b; // Esta línea devuelve el producto de a y b
};

// Llamada a la función anónima
let producto = multiplicar(4, 3);
console.log("El producto de la multiplicación es: " + producto); // Output: El producto de la multiplicación es: 12

// Función flecha (arrow function)
let restar = (a, b) => {
    return a - b; // Esta línea devuelve la resta de a y b
};

// Llamada a la función flecha
let diferencia = restar(10, 4);
console.log("La diferencia es: " + diferencia); // Output: La diferencia es: 6

// Función flecha con retorno implícito (sin llaves y return)
let dividir = (a, b) => a / b;

// Llamada a la función flecha con retorno implícito
let cociente = dividir(20, 4);
console.log("El cociente es: " + cociente); // Output: El cociente es: 5

// Función como argumento (callback)
function procesar(numero, funcion) {
    return funcion(numero); // Esta línea llama a 'funcion' pasando 'numero' como argumento
}

// Llamada a la función con una función anónima como argumento
let resultadoProcesado = procesar(5, function(n) {
    return n * n; // Esta línea devuelve el cuadrado de 'n'
});
console.log("El resultado procesado es: " + resultadoProcesado); // Output: El resultado procesado es: 25

// Llamada a la función con una función flecha como argumento
resultadoProcesado = procesar(6, n => n * n);
console.log("El resultado procesado es: " + resultadoProcesado); // Output: El resultado procesado es: 36
