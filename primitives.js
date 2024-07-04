// Tipo de dato: Number
var numerito = 10; 
console.log(typeof numerito); // Output: number

// Tipo de dato: Undefined
var indefinido;
console.log(typeof indefinido); // Output: undefined

// Tipo de dato: Null
var valorNulo = null;
console.log(typeof valorNulo); // Output: object (esto es un error conocido en JavaScript)

// Tipo de dato: BigInt
var numeroMuyGrande = 48682848426842086242624n;
console.log(typeof numeroMuyGrande); // Output: bigint

// Tipo de dato: Number con decimales
var dinero = 12.75;
console.log(typeof dinero); // Output: number

// Tipo de dato: String
var nombre = "Alejandro";
console.log(typeof nombre); // Output: string

// Tipo de dato: Boolean
var esVerdad = true;
console.log(typeof esVerdad); // Output: boolean

// Tipo de dato: Symbol
var etiqueta1 = Symbol("etiqueta1");
var etiqueta2 = Symbol("etiqueta1");

console.log(etiqueta1 === etiqueta2); // Output: false (los Symbols son únicos)

console.log(typeof etiqueta1); // Output: symbol
