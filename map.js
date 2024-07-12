const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 8000, brand: 'samsung', color: 'black' },
    { name: 'tablet', price: 12000, brand: 'apple', color: 'white' },
    { name: 'mouse', price: 500, brand: 'logitech', color: 'black' },
    { name: 'keyboard', price: 1500, brand: 'logitech', color: 'black' },
    { name: 'monitor', price: 8000, brand: 'samsung', color: 'black' },
];

const cards = products.map( prd =>{
    //  backtick

    // literal strings
    return (`<div class="card" style="width: 380px;">
        <div class="card-body">
            ${prd.name}
            <span>
            precio: $ ${prd.price}
            </span>
        </div>
    </div>`);
})

console.log(cards.join(""));