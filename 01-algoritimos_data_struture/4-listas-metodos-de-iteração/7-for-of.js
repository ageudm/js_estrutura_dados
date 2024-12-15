/**************************************************************************************
METODO FOR OF
***************************************************************************/

const listProduct = document.querySelector('.products')
const totalPrice = document.querySelector('.totalPrice')
let = productItem = '';
let total = 0

const products = [
  {nome: 'Nike', price: 100, stock: false},
  {nome: 'caminza', price: 100, stock: false},
  {nome: 'bota', price: 100, stock: false},
  {nome: 'tenis', price: 100, stock: true},
  {nome: 'bota', price: 100, stock: true},
]

// /LISTAR TODOS OS PRODUTOS
// for(let {nome, price, stock} of products) {
   
//     productItem += `<li>${nome} <span>$${price}</span> </li>`
//     listProduct.innerHTML = productItem;
  
//     total += price;
//     totalPrice.innerHTML = `$${total}`
// }


// /LISTAR PRODUTOS EM STOCK
for(let {nome, price, stock} of products) {
   
        if(stock) {
        productItem += `<li>${nome} <span>$${price}</span> </li>`
        listProduct.innerHTML = productItem;
        
        total += price;
        totalPrice.innerHTML = `$${total}` 
    }
}