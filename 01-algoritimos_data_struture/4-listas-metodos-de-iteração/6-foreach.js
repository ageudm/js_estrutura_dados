/**************************************************************************************
  MANIPULAÇÃO DA LISTA COM LOOPS
***************************************************************************/
/****listar os elementos na lista
 * for(ini; paration; increment)
 * 
*/

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

// LISTAR TODOS OS PRODUTOS FORMA SIMPLES
 products.forEach((item) => {
   productItem += `<li>${item.nome} <span>$${item.price}</span> </li>`
   listProduct.innerHTML = productItem;

   total += item.price;
   totalPrice.innerHTML = `$${total}`
  
})


//LISTAR OS PRODUTOS FORMA ESCOMPACTADA
// products.forEach(({nome, price, stock}) => {
//   // productItem += `<li>${nome} <span>$${price}</span> </li>`
//   // listProduct.innerHTML = productItem;

//   // total += price;
//   // totalPrice.innerHTML = `$${total}`

//   if(stock) {
//     productItem += `<li>${nome} <span>$${price}</span> </li>`
//     listProduct.innerHTML = productItem;
  
//     total += price;
//     totalPrice.innerHTML = `$${total}`
//   }
// })