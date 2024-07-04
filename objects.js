// Objetos Compuestos

// Definición de un objeto simple
var objeto = {
    clave: 'valor'
};

// Definición de un objeto con múltiples propiedades
var carroDeAlexander = {
    marca: "Honda",
    modelo: "Civic",
    color: "Gris",
    año: 2011,
    matricula: "GHA20K",
    prueba: objeto,
};

console.log(carroDeAlexander.prueba.clave); // Output: valor

console.log(carroDeAlexander['color'], carroDeAlexander.marca); // Output: Gris Honda

// Constante con valor inmutable
const pi = 3.14151616;
// pi = 3.14; // Descomentar esto causará un error porque 'pi' es una constante

// Uso de Symbol como clave de propiedad
var etiquetaMagica = Symbol("etiqueta1");

// Definición de un objeto con propiedades mutables
const cajaDeJuguetes = {
    muñeca: "Barbie",
    hotwheel: carroDeAlexander,
    _maxSteel: "Elementor", // Propiedad privada (convención: no debería ser modificada)
    [etiquetaMagica]: "Heladeria Kreisel Supra",
    Alejandro: "Hola soy"
};

// Modificación de una propiedad con clave Symbol
cajaDeJuguetes[etiquetaMagica] = null; // No da problemas

// Adición de una nueva propiedad al objeto
cajaDeJuguetes.pablo = "Pablito";

// Intento de reasignar todo el objeto (comentado porque causará un error)
// cajaDeJuguetes = {
//     "Gustavo": "Wolverine",
//     plush: "Duolingo"
// };

console.log(cajaDeJuguetes[etiquetaMagica]); // Output: null
console.log(cajaDeJuguetes._maxSteel); // Output: Elementor

// Arrays
var listaDeCosas = [ cajaDeJuguetes, 5, undefined, objeto, cajaDeJuguetes[etiquetaMagica] ];

console.log(listaDeCosas.length); // Output: 5
console.log(listaDeCosas[999999]); // Output: undefined

// Verificar el tipo después de convertir a JSON
console.log(typeof JSON.stringify(cajaDeJuguetes)); // Output: string
