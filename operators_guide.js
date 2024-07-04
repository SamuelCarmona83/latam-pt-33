// Operadores en JavaScript

// Operadores Aritméticos
var a = 10;
var b = 3;
console.log(a + b); // Suma: Output: 13
console.log(a - b); // Resta: Output: 7
console.log(a * b); // Multiplicación: Output: 30
console.log(a / b); // División: Output: 3.3333333333333335
console.log(a % b); // Módulo: Output: 1

// Operadores de Asignación
var x = 5;
x += 2; // Equivalente a x = x + 2
console.log(x); // Output: 7

x -= 3; // Equivalente a x = x - 3
console.log(x); // Output: 4

x *= 4; // Equivalente a x = x * 4
console.log(x); // Output: 16

x /= 2; // Equivalente a x = x / 2
console.log(x); // Output: 8

x %= 3; // Equivalente a x = x % 3
console.log(x); // Output: 2

// Operadores de Comparación
console.log(5 == '5'); // Igualdad débil (compara valor): Output: true
console.log(5 === '5'); // Igualdad estricta (compara valor y tipo): Output: false
console.log(5 != '5'); // Desigualdad débil (compara valor): Output: false
console.log(5 !== '5'); // Desigualdad estricta (compara valor y tipo): Output: true

console.log(5 > 3); // Mayor que: Output: true
console.log(5 < 3); // Menor que: Output: false
console.log(5 >= 5); // Mayor o igual que: Output: true
console.log(5 <= 4); // Menor o igual que: Output: false

// Operadores Lógicos
var p = true;
var q = false;
console.log(p && q); // AND lógico: Output: false
console.log(p || q); // OR lógico: Output: true
console.log(!p); // NOT lógico: Output: false

// Operadores de Bit a Bit
var m = 5; // 0101 en binario
var n = 3; // 0011 en binario
console.log(m & n); // AND bit a bit: Output: 1 (0001 en binario)
console.log(m | n); // OR bit a bit: Output: 7 (0111 en binario)
console.log(m ^ n); // XOR bit a bit: Output: 6 (0110 en binario)
console.log(~m); // NOT bit a bit: Output: -6 (en binario: invierte los bits de 0101)

console.log(m << 1); // Desplazamiento a la izquierda: Output: 10 (1010 en binario)
console.log(m >> 1); // Desplazamiento a la derecha: Output: 2 (0010 en binario)

// Operadores Ternarios
var edad = 18;
var acceso = (edad >= 18) ? 'Permitido' : 'Denegado';
console.log(acceso); // Output: Permitido
