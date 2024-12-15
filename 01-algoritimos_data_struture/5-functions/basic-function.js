/**************************************************************************************
  BASE DE FUCÇÕES COM RETORNO
***************************************************************************/

// retornar dados
function pessoa (nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(pessoa('celia', 'miguel'));

//retornar daodos dentro de outra fucnção
const dado = function(name) {
    return function(sobreNome) {
        return `${name} ${sobreNome}`
    }
}

const nome = dado('ageu');
console.log(nome('miguel'));

//retono com irrow function
const output = (item, nome) => `${item} ${nome}`;
console.log(output('Telefone', 'ageu'));

/**************************************************************************************
  RETONAR UM ARRAY DENTRO DA FUNCÇÃO
***************************************************************************/
const numbers = Object.freeze([1,2,3,4,5]);

function addNumbers(arr) {
    return Object.freeze([...arr])
}

console.log(addNumbers(numbers));

/**************************************************************************************
  CRIAR FUNCÇÃO PARA CRIAR ELEMENTO NO DOM
***************************************************************************/
//ciar a fucnção
const elem = tag => document.createElement(tag);
//criar um elemento
const div = elem('div');
// add o elemento no document
document.body.appendChild(div)

const el = document.querySelector('div');
// el.setAttribute('class', 'list-elem')
// console.log(el);

function addClass(className) {
    return function(elemento) {
        elemento.classList.add(className)
        return elemento;
    }
}

const product = addClass('peoduct')
const products = addClass('peoducts')
product(el)
products(el)

console.log(el);


