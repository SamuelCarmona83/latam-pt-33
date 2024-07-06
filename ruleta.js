// Lista de amigos
const amigos = ['Gustavo', 'Luis', 'Angie', 'Alexander', 'Pablo'];

// Generación de un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
const numeroAleatorio = Math.random() * amigos.length;

// Comentario: Math.random() devuelve un número decimal entre 0 y 1 (excluyendo 1).
// Multiplicamos este valor por el número de elementos en el array 'amigos' para obtener un rango deseado.

// Ejemplo: Si Math.random() devuelve 0.5 y amigos.length es 5, entonces
// numeroAleatorio será 0.5 * 5 = 2.5

// Redondear hacia abajo el número aleatorio para obtener un índice válido del array
const numeroRedondeado = Math.floor(numeroAleatorio);

// Comentario: Math.floor() redondea el número decimal hacia abajo al entero más cercano.
// Esto asegura que obtenemos un índice válido entre 0 y el tamaño del array - 1.

// Ejemplo: Si numeroAleatorio es 2.5, entonces
// numeroRedondeado será Math.floor(2.5) = 2

// Seleccionar un amigo usando el índice generado
console.log('Ganador: ' + amigos[numeroRedondeado]);

// Comentario: Accedemos al elemento del array 'amigos' en la posición 'numeroRedondeado' para obtener el ganador.
// Si numeroRedondeado es 2, entonces amigos[2] es 'Angie' (considerando que el array empieza en índice 0).
