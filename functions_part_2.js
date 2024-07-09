let amigos = [
    { name: 'Gustavo', edad: 25 },
    { name: 'Luis', edad: 30 },
    { name: 'Angie', edad: 20 },
    { name: 'Alexander', edad: 35 },
    { name: 'Pablo', edad: 40 }
];

// Función anónima (esta forma no es funcional porque la función no se ejecuta)
console.log(function(persona){
    console.log(`Bienvenido `+ persona.name + ` a Semana 4!!!`);
});

// Arrow function - Función anónima asignada a una constante
const funcionParametro = (persona) => {
    console.log(`Bienvenido `+ persona.name + ` a Semana 4!!!`);
};

// Utilizando la función como argumento en el método forEach
amigos.forEach(funcionParametro); // La función actúa como argumento y se ejecuta para cada elemento del array

// Ejecución directa de la función con un objeto literal
funcionParametro({ name: "Andy", edad: 22 });

// IIFE - Immediate Invoked Function Expression
(async function(){
    // Creación de un nuevo scope
    let persona = { 
        name: "Rene",
        edad: 89
    }
    console.log(`Bienvenido `+ persona.name + ` a Semana 4!!!`);
})();