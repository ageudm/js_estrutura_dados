/***************************************************************************************************
 * //OPERADORES MATEMATICO
 * *******************************************************************************/

//VARIAVEIS
let calcOne, 
calcTwo, 
calcThree, 
calcFour, 
mathRound, 
mathCeil,
mathFloor,
cartQuantity;

let convertMargem, calcMargem, precoVenda;
const custo = 250;
const margem = 15;


//IMPORT ELEMENT IN HTML
const showQuantity = document.querySelector('.btn-quantity')
const addCart = document.querySelector('.add-quantity')
const plusTwo = document.querySelector('.plus-two')
const plusThree = document.querySelector('.plus-Three')
const resetCart = document.querySelector('.reste-cart')
const removeItem = document.querySelector('.remove-item')




/***************************************************************************************************
 * //TIPOS INTEIRO
 * *******************************************************************************/
calcOne = 100;
calcTwo = 200;
calcThree = 300;
calcFour = 400;

//operadors de atribuição
calcOne += 100;  //calcOne = calcOne + 100; = 300
calcTwo *= 2;    //calctwo = calctwo * 2; 800

//opreadors de incremento e decremento
++calcOne;   //resultado = 201; pre-incrementa
--calcOne;   // resulrado = 199; pre-decrementa

calcOne++;   //resultado = 200; pos-incremento
calcOne--;   //resultado = 200; pos-decremento



/***************************************************************************************************
 * //OBJECT MATH 
 * *******************************************************************************/

//Arredondadr ao intero mais proximo
mathRound = Math.round(2.5)
console.log('Arredondar ao inteiro mais proximo',mathRound);

//arredondadr para cima
mathCeil = Math.ceil(2.4)
console.log('Arredondar para cima', mathCeil);

//arredondadar para baixo
mathFloor = Math.floor(2.6)
console.log('Arrodondar para baixo', mathFloor);


/***************************************************************************************************
 * //ALGORITIMOS PARA CALCULO COMERCIAL
 * *******************************************************************************/

//algoritimo para calcular preço de venda
//custo 200; margem 10%;
// convertMargem = 10 / 100
// calcMargem = custo * converMargem
// preçoVenda = custo + calcMargem

//execução do algoritimo
convertMargem = margem / 100;
calcMargem = custo * convertMargem;
precoVenda = custo + calcMargem;

console.log(precoVenda);


//metodo calcPreco
const calcPreco = (custo, margem) => {
    convertMargem = margem / 100;
    calcMargem = custo * convertMargem;
    precoVenda = custo + calcMargem;

    console.log(precoVenda);
}

calcPreco(500, 12)



//valor inicial da quantidade no carrinho
cartQuantity = 0;
//add items ao carrinho
const addItems = () => {
    cartQuantity++
    console.log(`Cart quantity: ${cartQuantity}`);
}

const plus2 = () => {
    cartQuantity += 2
    console.log(`Cart quantity: ${cartQuantity}`);
}

const plus3 = () => {
    cartQuantity += 3
    console.log(`Cart quantity: ${cartQuantity}`);
}

const removItem = () => {
    cartQuantity--
    console.log(`Cart quantity: ${cartQuantity}`);
}


showQuantity.addEventListener('click', () => console.log('Cart quantity: ', cartQuantity))

addCart.addEventListener('click', addItems)

plusTwo.addEventListener('click', plus2)

plusThree.addEventListener('click', plus3)

removeItem.addEventListener('click', removItem)

resetCart.addEventListener('click', () => {
    cartQuantity = 0
    console.log(`Cart quantity: ${cartQuantity}`);
})