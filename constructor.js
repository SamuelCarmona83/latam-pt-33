// Función constructora
function Perro(nombre, edad) { // "Clase" Perro

    // Atributos
    this.name = nombre;
    this.age = edad;

    // Métodos
    this.bark = function() {
        console.log(this.name + ' GAUUU GAUU GAUU!');
    }
}

// Creación de instancias de la "clase" Perro
const oddy = new Perro("Oddy", 3);
const bumpy = new Perro("Bumpy", 0.7);

// Llamando al método bark() en cada instancia
oddy.bark();  // Oddy GAUUU GAUU GAUU!
bumpy.bark(); // Bumpy GAUUU GAUU GAUU!

// Intento de llamar a un método que no existe, esto causará un error
// bumpy.fly(); // Uncaught TypeError: bumpy.fly is not a function

// Adición de un nuevo método a la "clase" Perro usando prototype
Perro.prototype.fly = function() {
    console.log(this.name + ' is flying!');
}

// Ahora podemos llamar al nuevo método en las instancias existentes
bumpy.fly(); // Bumpy is flying!
oddy.fly();  // Oddy is flying!
