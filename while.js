let numeros = [4, 5, 7, 14, 19, 21];

let inicial = 0;

// Bucle while: ejecuta el bloque mientras la condición sea verdadera
while (inicial <= 10) {
    console.log(inicial); // Imprime el valor actual de 'inicial'
    
    // Condición incremental
    inicial = inicial + 1; // Incrementa 'inicial' en 1
}

// Resetear la variable 'inicial' para el siguiente bucle
inicial = 0;

// Bucle do-while: ejecuta el bloque al menos una vez, luego sigue ejecutando mientras la condición sea verdadera
do {
    console.log(inicial); // Imprime el valor actual de 'inicial'
    
    // Condición incremental
    inicial = inicial + 1; // Incrementa 'inicial' en 1

    // Condición crítica
} while (inicial <= 10); // Verifica si 'inicial' es menor o igual a 10
