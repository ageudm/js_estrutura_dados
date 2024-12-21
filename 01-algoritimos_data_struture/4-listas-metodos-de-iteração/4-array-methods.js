/**************************************************************************************
  A BASE DE METODOS E FUNCIONALIDADES COM ARRAY
***************************************************************************/
/****metodos nativos do array
 * .unshift() adciona elemento no inicio da lista
 * .push() Adciona elemento no final da lista
 * .shift() remove o primeiro elemento da lista
 * .pop() remove o ultimo elemento da lista
 * .splice() deleta elemento na lista apartir de uma posição indicada
 * 
*/

let listNumbers = [1,2,3,4]
console.log(listNumbers);

// alterar ou adcionar uma nova posição a lista
listNumbers[3] = 5; //o item é alterado quando o elemento selecionado conta na lista
console.log(listNumbers);

listNumbers[4] = 20; //é adcionado o numero 20 na posição 4 porque a lista actual termina na posição 3
console.log(listNumbers);

//amipular a lista com metodos nativo
listNumbers.unshift(0)
console.log(listNumbers);

listNumbers.push(50)
console.log(listNumbers);

listNumbers.shift()
console.log(listNumbers);

listNumbers.pop()
console.log(listNumbers);

listNumbers.splice(3, 2)
console.log(listNumbers);


/**************************************************************************************
  MANIPULAÇÃO DA LISTA COM LOOPS
***************************************************************************/
/****percorrer os elementos na lista
 * for(ini; paration; increment)
 * while()
 * 
*/

const list = document.querySelector('.list')
let elements = '';

const listProduct = document.querySelector('.products')
const totalPrice = document.querySelector('.totalPrice')
let = productItem = '';
let total = 0

const listElement = [
  'laranja',
  'limaão',
  'banana',
  'safu',
  'abacate',
  'batata',
]

const listElement1 = [
  'laranja',
  'limaão',
  'banana',
  'safu',
  'abacate',
  'batata',
]


const products = [
  {nome: 'Nike', price: 100, stock: false},
  {nome: 'caminza', price: 100, stock: false},
  {nome: 'bota', price: 100, stock: false},
  {nome: 'tenis', price: 100, stock: true},
  {nome: 'calça', price: 200, stock: true}
]

//METODO FOR
for(let index = 0; index < listElement.length; index++) {
  elements += `<li>${listElement[index]}</li>`
  list.innerHTML = elements;
}




//METODO WHILE

// let index = 0;
// let item = products[index]
// while(item) {
//   item = products[index++]

//   productItem += `<li>${item.nome} <span>$${item.price}</span> </li>`
//   listProduct.innerHTML = productItem;

//   total += item.price;
//   totalPrice.innerHTML = `$${total}`

// }


/**************************************************************************************
  MZNIPULAR A ORDEM DOS ELEMENTOS NA LISTA
***************************************************************************/
/****percorrer os elementos na lista
 * reverse()
 * sort()
 * 
*/
// organizar de em ordem alfabetica
listElement.sort();
console.log(listElement);

// reverter a ordem da lista
listElement.reverse();
console.log(listElement);


/**************************************************************************************
  METODO DE PESQUISA POR ELEMENTOS OU PROPREDADE NA LOSTA
***************************************************************************/
/****percorrer os elementos na lista
 * indexOf()
 * lastIndexOf()
 * findIndex()
 * find()
*/

//ver a posição de um elemnto especifico
itemPosition = listElement.indexOf('safu')
console.log(itemPosition);

//ver a ultima posição do item
itemPosition = listElement.lastIndexOf('banana')
console.log(itemPosition);

//ver a posição do elemento nalista de objctos
let value = 'Nike';
const productID = products.findIndex((item) => {
  return (item.nome === value)
})

if (productID >= 0) {
  console.log(products[productID].nome);
} else {
  console.log('nao existe');
}

//este metodo tmabem pode servir para çistar elemntos
const product1 = products.findIndex((item) => {
  console.log(item.nome);
})


//Encotrar um obeto com os dados especifico
//Este metodo retorna o primeiro item identificado na lista
let findeProduct = products.find((item) => {
  return (item.nome === value);
})
console.log(findeProduct);


let findeProduct1 = products.find((item) => {
  return (item.price > 100);
})
console.log(findeProduct1);


//Confirmar a existencia de um elemnto ou propredade em uma lista
let findeProduct2 = listElement.includes('limaão')
console.log(findeProduct2, 'inclui o limão');

//Confirmar a existencia de um elemnto ou propredade em uma lista de objecto
let findeProduct3 = products.some((item) => {
  console.log(item.nome);
})

let findeProduct4 = listElement.every((item) => {
  console.log(typeof(item) === 'string');
})


/**************************************************************************************
  JUNTAR ELEMENTOS DE LISTAS DIFRENTES
***************************************************************************/
/****percorrer os elementos na lista
 * concat()
*/

// jntar listas com o metodo concat
let concatList = listElement.concat(listElement1)
console.log(concatList);

// jntar listas de forma simplificada
let concatList1 = [...listElement, ...listElement1]
console.log(concatList1);








