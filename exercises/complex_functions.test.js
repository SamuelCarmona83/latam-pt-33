
import {
    obtenerValoresUnicos,
    palabraMasFrecuente,
    esperarTodasLasPromesas,
    numeroMasRepetido,
    ordenarBurbuja,
    evaluarExpresion,
    filtrarPrimos,
    agruparPorPropiedad,
} from './complex_functions.js';


// Test for obtenerValoresUnicos
test('obtenerValoresUnicos should return an array with unique values of the specified key', () => {
    const array = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'John' },
        { id: 4, name: 'Jane' },
        { id: 5, name: 'John' },
    ];
    const key = 'name';

    const result = obtenerValoresUnicos(array, key);

    expect(result).toEqual(['John', 'Jane']);
});

// Test for palabraMasFrecuente
test('palabraMasFrecuente should return the most frequent word in the string', () => {
    const string = 'The quick brown fox jumps over the lazy dog';

    const result = palabraMasFrecuente(string);

    expect(result).toBe('the');
});

// Test for esperarTodasLasPromesas
test('esperarTodasLasPromesas should return a promise that resolves with an array of results', async () => {
    const promises = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3),
    ];

    const result = await esperarTodasLasPromesas(promises);

    expect(result).toEqual([1, 2, 3]);
});

// Test for numeroMasRepetido
test('numeroMasRepetido should return the most repeated number in the array', () => {
    const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4];

    const result = numeroMasRepetido(numbers);

    expect(result).toBe(2);
});

// Test for ordenarBurbuja
test('ordenarBurbuja should return a new array with numbers sorted in ascending order', () => {
    const numbers = [5, 3, 1, 4, 2];

    const result = ordenarBurbuja(numbers);

    expect(result).toEqual([1, 2, 3, 4, 5]);
});

// Test for evaluarExpresion
test('evaluarExpresion should return the result of the mathematical expression', () => {
    const expression = '3 + 5 * 2';

    const result = evaluarExpresion(expression);

    expect(result).toBe(13);
});

// Test for filtrarPrimos
test('filtrarPrimos should return an array with only prime numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = filtrarPrimos(numbers);

    expect(result).toEqual([2, 3, 5, 7]);
});

// Test for agruparPorPropiedad
test('agruparPorPropiedad should return a new array of objects grouped by the specified property', () => {
    const array = [
        { id: 1, category: 'A' },
        { id: 2, category: 'B' },
        { id: 3, category: 'A' },
        { id: 4, category: 'B' },
        { id: 5, category: 'C' },
    ];
    const property = 'category';

    const result = agruparPorPropiedad(array, property);

    expect(result).toEqual({
        A: [{ id: 1, category: 'A' }, { id: 3, category: 'A' }],
        B: [{ id: 2, category: 'B' }, { id: 4, category: 'B' }],
        C: [{ id: 5, category: 'C' }],
    });
});

// Test for invertirPalabras
test('invertirPalabras should return the same string with words in reverse order', () => {
    const string = 'Hello, world!';

    const result = invertirPalabras(string);

    expect(result).toBe('world! Hello,');
});

// Test for encontrarParesSumaObjetivo
test('encontrarParesSumaObjetivo should return an array of index pairs whose elements sum up to the target number', () => {
    const numbers = [1, 2, 3, 4, 5];
    const target = 6;

    const result = encontrarParesSumaObjetivo(numbers, target);

    expect(result).toEqual([[1, 3], [2, 4]]);
});

// Test for obtenerValoresUnicosRecursivos
test('obtenerValoresUnicosRecursivos should return an array of all unique values in the object and its subobjects', () => {
    const object = {
        id: 1,
        name: 'John',
        address: {
            city: 'New York',
            country: 'USA',
        },
        friends: [
            { id: 2, name: 'Jane' },
            { id: 3, name: 'Bob' },
        ],
    };

    const result = obtenerValoresUnicosRecursivos(object);

    expect(result).toEqual([1, 'John', 'New York', 'USA', 2, 'Jane', 3, 'Bob']);
});

// Test for capitalizarTodasLasPalabras
test('capitalizarTodasLasPalabras should return the same string with all words capitalized', () => {
    const string = 'hello world';

    const result = capitalizarTodasLasPalabras(string);

    expect(result).toBe('Hello World');
});

// Test for interseccionArrays
test('interseccionArrays should return an array of elements that are present in both arrays', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];

    const result = interseccionArrays(array1, array2);

    expect(result).toEqual([4, 5]);
});

// Test for transponerMatriz
test('transponerMatriz should return the transpose of the matrix', () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    const result = transponerMatriz(matrix);

    expect(result).toEqual([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
    ]);
});

// Test for subarraySumaMaxima
test('subarraySumaMaxima should return the contiguous subarray with the largest sum', () => {
    const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

    const result = subarraySumaMaxima(numbers);

    expect(result).toEqual([4, -1, 2, 1]);
});

// Test for longitudLCS
test('longitudLCS should return the length of the longest common subsequence between two strings', () => {
    const string1 = 'ABCD';
    const string2 = 'ACDF';

    const result = longitudLCS(string1, string2);

    expect(result).toBe(3);
});

// Test for esPalindromoNumerico
test('esPalindromoNumerico should return true if the string is a numeric palindrome', () => {
    const string = '12321';

    const result = esPalindromoNumerico(string);

    expect(result).toBe(true);
});

// Test for productoMaximoDeTres
test('productoMaximoDeTres should return the maximum product of three numbers in the array', () => {
    const numbers = [1, 2, 3, 4, 5];

    const result = productoMaximoDeTres(numbers);

    expect(result).toBe(60);
});

// Test for longitudSubcadenaSinRepetidos
test('longitudSubcadenaSinRepetidos should return the length of the longest substring without repeating characters', () => {
    const string = 'abcabcbb';

    const result = longitudSubcadenaSinRepetidos(string);

    expect(result).toBe(3);
});

// Test for encontrarKEsimoMayor
test('encontrarKEsimoMayor should return the k-th largest number in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const k = 3;

    const result = encontrarKEsimoMayor(numbers, k);

    expect(result).toBe(3);
});