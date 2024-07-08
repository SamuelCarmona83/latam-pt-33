import {
    cuadrado,
    mayorDeDos,
    convertirMayusculas,
    sumarArray,
    palabraMasLarga,
    parOImpar,
    capitalizarPrimeraLetra,
    numeroMasPequeno,
    filtrarPares,
    invertirCadena,
    promedioArray,
    contarVocales,
    esSubcadena,
    ordenarAscendente,
    ordenarDescendente,
    reemplazarVocales,
    promedioEdades,
    esPalindromo,
    elevarAlCuadrado,
    sumaPares
} from './functions';

// Test for cuadrado function
test('cuadrado function should return the square of a number', () => {
    expect(cuadrado(2)).toBe(4);
    expect(cuadrado(5)).toBe(25);
    expect(cuadrado(-3)).toBe(9);
});

// Test for mayorDeDos function
test('mayorDeDos function should return the greater of two numbers', () => {
    expect(mayorDeDos(2, 5)).toBe(5);
    expect(mayorDeDos(10, 10)).toBe(10);
    expect(mayorDeDos(-3, -1)).toBe(-1);
});

// Test for convertirMayusculas function
test('convertirMayusculas function should return the string in uppercase', () => {
    expect(convertirMayusculas('hello')).toBe('HELLO');
    expect(convertirMayusculas('WORLD')).toBe('WORLD');
    expect(convertirMayusculas('JavaScript')).toBe('JAVASCRIPT');
});

// Test for sumarArray function
test('sumarArray function should return the sum of all numbers in the array', () => {
    expect(sumarArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumarArray([-1, -2, -3, -4, -5])).toBe(-15);
    expect(sumarArray([10, 20, 30, 40, 50])).toBe(150);
});

// Test for palabraMasLarga function
test('palabraMasLarga function should return the longest word in the array', () => {
    expect(palabraMasLarga(['apple', 'banana', 'cherry'])).toBe('banana');
    expect(palabraMasLarga(['cat', 'dog', 'elephant'])).toBe('elephant');
    expect(palabraMasLarga(['programming', 'is', 'fun'])).toBe('programming');
});

// Test for parOImpar function
test('parOImpar function should return "par" if the number is even, and "impar" if the number is odd', () => {
    expect(parOImpar(2)).toBe('par');
    expect(parOImpar(7)).toBe('impar');
    expect(parOImpar(-4)).toBe('par');
});

// Test for capitalizarPrimeraLetra function
test('capitalizarPrimeraLetra function should return the string with the first letter of each word capitalized', () => {
    expect(capitalizarPrimeraLetra('hello world')).toBe('Hello World');
    expect(capitalizarPrimeraLetra('javascript is awesome')).toBe('Javascript Is Awesome');
    expect(capitalizarPrimeraLetra('programming is fun')).toBe('Programming Is Fun');
});

// Test for numeroMasPequeno function
test('numeroMasPequeno function should return the smallest number in the array', () => {
    expect(numeroMasPequeno([5, 2, 8, 1, 10])).toBe(1);
    expect(numeroMasPequeno([-3, -7, -1, -5])).toBe(-7);
    expect(numeroMasPequeno([100, 200, 50, 300])).toBe(50);
});

// Test for filtrarPares function
test('filtrarPares function should return a new array with only the even numbers', () => {
    expect(filtrarPares([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(filtrarPares([-2, -5, -8, -3])).toEqual([-2, -8]);
    expect(filtrarPares([10, 15, 20, 25])).toEqual([10, 20]);
});

// Test for invertirCadena function
test('invertirCadena function should return the string reversed', () => {
    expect(invertirCadena('hello')).toBe('olleh');
    expect(invertirCadena('world')).toBe('dlrow');
    expect(invertirCadena('JavaScript')).toBe('tpircSavaJ');
});

// Test for promedioArray function
test('promedioArray function should return the average of the numbers in the array', () => {
    expect(promedioArray([1, 2, 3, 4, 5])).toBe(3);
    expect(promedioArray([-1, -2, -3, -4, -5])).toBe(-3);
    expect(promedioArray([10, 20, 30, 40, 50])).toBe(30);
});

// Test for contarVocales function
test('contarVocales function should return the number of vowels in the string', () => {
    expect(contarVocales('hello')).toBe(2);
    expect(contarVocales('world')).toBe(1);
    expect(contarVocales('JavaScript')).toBe(3);
});

// Test for esSubcadena function
test('esSubcadena function should return true if the second string is a substring of the first string, and false otherwise', () => {
    expect(esSubcadena('hello world', 'world')).toBe(true);
    expect(esSubcadena('programming is fun', 'is')).toBe(true);
    expect(esSubcadena('JavaScript', 'java')).toBe(false);
});

// Test for ordenarAscendente function
test('ordenarAscendente function should return a new array with the numbers in ascending order', () => {
    expect(ordenarAscendente([5, 2, 8, 1, 10])).toEqual([1, 2, 5, 8, 10]);
    expect(ordenarAscendente([-3, -7, -1, -5])).toEqual([-7, -5, -3, -1]);
    expect(ordenarAscendente([100, 200, 50, 300])).toEqual([50, 100, 200, 300]);
});

// Test for ordenarDescendente function
test('ordenarDescendente function should return a new array with the numbers in descending order', () => {
    expect(ordenarDescendente([5, 2, 8, 1, 10])).toEqual([10, 8, 5, 2, 1]);
    expect(ordenarDescendente([-3, -7, -1, -5])).toEqual([-1, -3, -5, -7]);
    expect(ordenarDescendente([100, 200, 50, 300])).toEqual([300, 200, 100, 50]);
});

// Test for reemplazarVocales function
test('reemplazarVocales function should return the string with all vowels replaced by "*"', () => {
    expect(reemplazarVocales('hello')).toBe('h*ll*');
    expect(reemplazarVocales('world')).toBe('w*rld');
    expect(reemplazarVocales('JavaScript')).toBe('J*v*Scr*pt');
});

// Test for promedioEdades function
test('promedioEdades function should return the average of the ages in the array of objects', () => {
    expect(promedioEdades([{ edad: 20 }, { edad: 30 }, { edad: 40 }])).toBe(30);
    expect(promedioEdades([{ edad: 10 }, { edad: 15 }, { edad: 20 }])).toBe(15);
    expect(promedioEdades([{ edad: 25 }, { edad: 35 }, { edad: 45 }])).toBe(35);
});

// Test for esPalindromo function
test('esPalindromo function should return true if the string is a palindrome, and false otherwise', () => {
    expect(esPalindromo('racecar')).toBe(true);
    expect(esPalindromo('hello')).toBe(false);
    expect(esPalindromo('madam')).toBe(true);
});

// Test for elevarAlCuadrado function
test('elevarAlCuadrado function should return a new array with the numbers squared', () => {
    expect(elevarAlCuadrado([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
    expect(elevarAlCuadrado([-2, -5, -8, -3])).toEqual([4, 25, 64, 9]);
    expect(elevarAlCuadrado([10, 15, 20, 25])).toEqual([100, 225, 400, 625]);
});

// Test for sumaPares function
test('sumaPares function should return the sum of the even numbers in the array', () => {
    expect(sumaPares([1, 2, 3, 4, 5])).toBe(6);
    expect(sumaPares([-2, -5, -8, -3])).toBe(-10);
    expect(sumaPares([10, 15, 20, 25])).toBe(30);
});