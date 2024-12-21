
const products = [
    {id: 1, nome: 'Nike', price: 100, stock: 0, desconto: true},
    {id: 2, nome: 'caminza', price: 100, stock: 1, desconto: true},
    {id: 3, nome: 'bota', price: 100, stock: 10, desconto: true},
    {id: 4, nome: 'tenis', price: 100, stock: 20, desconto: false},
    {id: 5, nome: 'calça', price: 200, stock: 30, desconto: false},
]


/**************************************************************************************
  EXTRUTURA BASICA DO METODO MAP
***************************************************************************/
const numbers = [1,2,3,4,5];

const newNumbers = numbers.map((number, index, lista) => {
    // console.log(number, index, lista);  
})


/**************************************************************************************
  PROJECTO PRATICO COM O MAP
***************************************************************************/

// sistema de gestão de produtos
const listProducts = products.map((product) => {
    const precoDescont = product.desconto ? product.price * 0.9 : product.price;

    return {
        id: product.id,
        nome: product.nome,
        price: precoDescont.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'KZS'
        }),
        stock: product.stock
    }
})

// console.log(listProducts);


/**************************************************************************************
    METODO REDUCE PARA SOMA GERAL DE DADOS
***************************************************************************/
//ccalcular o tatal do valor dos produtos em stok
const valorTotal = products.reduce((curent, product) => {
    const total = curent + (product.price * product.stock);

    return total;
}, 0);

const valorKwanza = valorTotal.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'KZS'
})

// console.log(valorKwanza);


/**************************************************************************************
    METODO FILTER PARA FLTRAR DADOS ESPECIFICO
***************************************************************************/

const promotion = products.filter(product => product.desconto)
// console.log(promotion);


/**************************************************************************************
    JUNTAR TODO OS METODO MAP, FILTER, REDUCE
***************************************************************************/
//adcionar mais 10 quatidades em cada procuto
//filtrar os prdutos em promoção
//calcular o valor total dos produtos em stok que estão em promoção

const faturamentoTotal = products
.map((product) => {
    return {...product, stock: product.stock + 10}
})
.filter((product) => product.desconto)
.reduce((curent, product) => {
    return curent + product.stock * product.price
}, 0);

const valorKwanza2 = faturamentoTotal.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'AOA'
})


console.log(valorKwanza2);