
/** 
 * ==============================PROGAMAÇÃO FUNCIONAL PARA CRIAR INSTRUÇÕES=============================
 */

//funcção para calcular o peço e a margem de um produto
const price = (custo, marg) => {
    const margem = (marg / 100) * custo;
    // const margemValue = margemInt * custo;
    return margem + custo;
}

// console.log(price(200, 20));


//calcular a quantidade e o preço total no carrinho de produtos
const cart = [
    {id: 1, price: price(300, 10), qtd: 10},
    {id: 2, price: price(300, 10), qtd: 10},
    {id: 3, price: price(300, 10), qtd: 10},
    {id: 4, price: price(300, 10), qtd: 10},
    {id: 5, price: price(300, 10), qtd: 10},
];

// const h1 = document.querySelector('h1')

const total = () => {

    cart.forEach(((product, index) => {
        const totalProduct = product.price * product.qtd
        const totalCart = totalProduct * ++index; //primeira opção
        const totalCart2 = totalProduct * product.id; //segunda opção
        h1.innerText = totalCart;
    }))

}; 

// document.addEventListener('DOMContentLoaded', total())


//Manipular a quantidade de item no carrinho
let cartQuantity = 0;

//add 1
const plus = () => {
    cartQuantity++
    // cartQuantity += 1 // segunda opção
    console.log(`Cart quantity: ${cartQuantity}`);
}; plus()


//diminuir 1
const diminuir = () => {
    cartQuantity--
    console.log(`Cart quantity: ${cartQuantity}`);
}

//add 2
const plus2 = () => {
    cartQuantity += 2
    console.log(`Cart quantity: ${cartQuantity}`);
}

//add 3
const plus3 = () => {
    cartQuantity += 3
    console.log(`Cart quantity: ${cartQuantity}`);
}

//resetar a quantidade de produtos
resetCart.addEventListener('click', () => {
    cartQuantity = 0
    console.log(`Cart quantity: ${cartQuantity}`);
})