const tortillas = [
    "suave 🫓 ",
    "crocante 🫓 "
];

const proteinas = [
    " Carne 🍖",
    " Pollo 🐔",
    " Camarón 🦐",
    "Al pastor 🍍",
    "Cochinita 🌮",
    "Birria 🥩"
];

const vegetales = [
    " Cebolla 🧅",
    "Chile 🌶️",
    " Limón 🍋",
    " Aguacate 🥑",
    " Tomate 🍅",
    " Cilantro 🌿",
];

const contornos = [
    "Arroz blanco 🍙",
    "Frijoles negros 🫘",
    "Papas fritas 🍟",
    "Guacamole 🥑",
    "Pico de gallo 🍅",
    "Crema agria 🍜",
    "Queso rallado 🧀",
];

const salsas = [
    "Guacamole 🥑",
    "Picante 🌶️",
    "Roja 💥",
    "Verde 🍏",
];


// buble sort - quick sort - djikstra - merge sort
tortillas.forEach(torti => {

    proteinas.forEach(prot => {

        vegetales.forEach(veggie => { // = >

            contornos.forEach(cont => {
                
                salsas.forEach(sauce => {

                    console.log(` ${torti} ${prot} ${veggie} ${cont} ${sauce}`);
                });
            })
        })
    })

});
