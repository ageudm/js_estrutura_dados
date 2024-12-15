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


//LISTAR TODO OS PRODUTOS
//  for(let index = 0; index < products.length; index++) {
//      let item = products[index];

//       productItem += `<li>${item.nome} <span>$${item.price}</span> </li>`
//       listProduct.innerHTML = productItem;

//       total += item.price;
//       totalPrice.innerHTML = `$${total}`
//  }


//LISTAR PRODUTOS EM STOSK
  for(let index = 0; index < products.length; index++) {
      let item = products[index];

     if(item.stock) {
        productItem += `<li>${item.nome} <span>$${item.price}</span> </li>`
       listProduct.innerHTML = productItem;
       total += item.price;
      totalPrice.innerHTML = `$${total}`
     }
  }