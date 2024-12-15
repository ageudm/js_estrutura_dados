const listElement = [
    'Ageu Miguel',
    'Laurinda Antonio',
    'Celia Miguel',
]
  
  
const products = [
    {nome: 'Nike', price: 100, stock: 0},
    {nome: 'caminza', price: 100, stock: 1},
    {nome: 'bota', price: 100, stock: 10},
    {nome: 'tenis', price: 100, stock: 20},
    {nome: 'calça', price: 200, stock: 30}
]


/**************************************************************************************
  RENDERISAR DADOS COM O METODO FOR
***************************************************************************/
/****percorrer os elementos na lista
 * for(ini; paration; increment)
 * while()
 * 
*/

const listName = document.querySelector('.list')
let elements = '';


//METODO FOR
for(let index = 0; index < listElement.length; index++) {
    elements += `<li>${listElement[index]}</li>`
    listName.innerHTML = elements;
}


/**************************************************************************************
  RENDERISAR ELEMENTOS COM O METHODO JOIN E TRANFORMAR TUDO EM UMA UNICA STRING
***************************************************************************/
/****percorrer os elementos na lista
 * join()
 * 
*/

const listName2 = document.querySelector('.list2');

let render = listElement.join('<br/>');
listName2.innerHTML = render;


/**************************************************************************************
  RENDERISAR ELEMENTOS COM O METHODO MAP
***************************************************************************/
/****percorrer os elementos na lista
 * map()
 * filter()
 * 
*/

const listProduct = document.querySelector('.list-product');
const listProduct2 = document.querySelector('.list-product2');

// renderisar dados com o map
let product = products.map(({nome, price, stock}) => {
    if(stock) {
        return `
        <li class="product">
            <p>${nome}</p>
            <span>${price}</span>
        </li>`
    }
}).join('');

listProduct.innerHTML = product;

// filtrar os produtos que que se encotra em stock
let product2 = products
    .filter((item) => {
        return item.stock;
}).map(({nome, price,}) => {
    return `
    <li class="product">
        <p>${nome}</p>
        <span>${price}</span>
    </li>`
}).join('');

listProduct2.innerHTML = product2;

  
  


