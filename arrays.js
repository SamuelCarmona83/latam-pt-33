let amigos = [
    { name: 'Gustavo', edad: 25 },
    { name: 'Luis', edad: 17 },
    { name: 'Angie', edad: 20 },
    { name: 'Alexander', edad: 35 },
    { name: 'Pablo', edad: 40 },
];

// let amigoEliminado = amigos.pop(); // Elimina el último elemento del array y lo devuelve.
// amigos.pop(); // Elimina otro elemento del final del array.

amigos.push({
    name: 'Alejandro',
    edad: 16
}); // Agrega un nuevo amigo al final del array.


// Busca el primer elemento que cumple la condición.
let busqueda = amigos.find((item) => {
    // console.log(item);
    return item.edad <= 17; // Devuelve el primer amigo cuya edad es menor o igual a 17.
});

// Devuelve una copia del array con todos los objetos que cumplen la condición.
let busquedaMenoresDeEdad = amigos.filter(persona => persona.edad < 18);
// console.log(busquedaMenoresDeEdad);

// let elimidados = amigos.splice(1, 2); // Elimina dos elementos comenzando desde el índice 1.

const emojis = ['🦖', '🥸', '🎃', '📚', '😱', '🧌', '🧚🏼‍♀️', '🧢'];

// Selecciona un emoji aleatorio del array de emojis.
const pickOneRandomEmoji = (list) => {
    let randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
};

// Crea un nuevo array donde cada nombre de amigo está acompañado por un emoji aleatorio.
const amigosEmojiados = amigos.map(persona => persona.name + ' ' + pickOneRandomEmoji(emojis));

console.log(amigosEmojiados); // Imprime el array de amigos con emojis aleatorios.
