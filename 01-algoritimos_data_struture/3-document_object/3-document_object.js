/**************************************************************************************
  MANIPULAÇÃ E ATRIBUIÇÃO DE CONTEUDO
***************************************************************************/

/****props para manipular texto ou valores 
 * 
 * .innerHTML === esta prop é normalmente usada para pegar o coteudo de uma tag html
 * .innerText === esta prop é normalmente usada para pegar o coteudo de uma tag html
 * .value === Esta prop é normalamente usada para pegar informação do input
 * textContent === esta prop é normalmente usada para pegar o coteudo de uma tag html
*/

//manipular o texto de um objecto
const input = document.querySelector('.input')
const btn = document.querySelector('.btn-subcrive')

console.log(btn.innerHTML);
console.log(btn.innerText);

//pegar e coverter os dados do formulario
let = inputString = String(input.value)
let = inputNumber = Number(input.value)
let = inputNumber2 = parseInt(input.value)
let = inputNumber3 = parseFloat(input.value)

btn.addEventListener('click', () => {
    console.log(String(input.value))
    // btn.innerHTML = String(input.value)
    if(btn.innerHTML === 'Subscrive') {
      btn.innerHTML = 'Inscrito'
    } else {
      btn.innerHTML = 'Subscrive'
    }
})



/**************************************************************************************
  EVNTOS DO TECLADO
***************************************************************************/

/****Capiturar o evento e a prop da tecla
 * event.key
*/

input.addEventListener('keydown', (event) => {
  // console.log(event.key);
  if(event.key === 'Enter') {
    console.log(String(input.value))
  }
})


/**************************************************************************************
  APLICAR ESTILOS NO OBJECTO
***************************************************************************/

/****propriedade estilo 
 * 
 * style.color
*/

const estilo = {
  color: '#452382'
}

btn.addEventListener('click', () => {
   btn.style.color = estilo.color
   btn.style.fontSize = '2rem'
   btn.style.borderRadius = '10px'
})


/**************************************************************************************
  MANIPULAR ELEMNETOS NO DOM
***************************************************************************/
/****criar elementos
 * createElement() criar um novo elemento no docment
 * prepend() adciona o alemento no principio
 * append() adciona o elemento no fianl
 * remove() remove um elemento
 * 
*/

const data = {
  nome: 'Ageu miguel'
}

const main = document.querySelector('.main')

//criar o elemento
const ul = document.createElement('ul');
ul.innerHTML = data.nome
ul.style.color = estilo.color

//adcinar o elemento na body
// main.append(ul)
main.prepend(ul)

/**************************************************************************************
  GERIR ATRIBUTOS EM ELEMENTOS HTML
***************************************************************************/
/****criar atributo
 * setAttribute('class', 'list-item') === criar e aplicar atributo ao elemento
 * getAttribute() === consultar e pegar os atributo contido no elemento
 * ul.classList.value === consultar o nome da class pelo valor
 * ul.classList.replace('list-item', 'ul-list') === Altera o nome da class
 * ul.classList.add('new-list') === Adcionar class no elemento
 * ul.classList.contains('ul-list') === consultar a existencia de uma class na lista
 * ul.classList.remove('new-list') === remover class
 * ul.classList.toggle('ul-five') === metodo para alternar a existencia de uma class
*/

ul.setAttribute('class', 'list-item')
console.log(ul.getAttribute('class'));
console.log(ul.classList.value);
ul.classList.replace('list-item', 'ul-list')
ul.classList.add('new-list')
console.log(ul.classList.contains('ul-list')); //== true / false
ul.classList.remove('new-list')
ul.classList.toggle('ul-five')
ul.classList.toggle('ul-five', false)

/**************************************************************************************
  SELECIONAR ELEMENTOS COM PROPS NATIVA
***************************************************************************/
/****pegar elementos pai
 * parentNode; consultar o elemento pai
 * parentElement; consulta e  manipula o elemento pai
*/

//pegar o elemento pai de um filho
const h2 = document.querySelector('h2');
const body = document.documentElement;

console.log(h2.parentNode);
console.log(h2.parentElement);
console.log(body);

/****pegar elementos filho
 * childNodes
 * children
 * firstChild
 * lastChild
 * firstElementChild
 * lastElementChild
 * previousElementSibling
 * nextElementSibling
 * previousSibling
 * nextSibling
*/

// pegar uma lista de elementos filho
const filhos = main.childNodes
const primeiroFilho = main.firstChild
const segundoFilho = main.lastChild

console.log(filhos);
console.log(primeiroFilho);
console.log(segundoFilho);

const list = document.querySelector('.list')
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);
console.log(list.previousElementSibling);
console.log(list.nextElementSibling);
console.log(list.previousSibling);
console.log(list.nextSibling);


/**************************************************************************************
  OBJECTO EVENT
***************************************************************************/
/****pegar elementos filho
 * (e) passado como parametro na função
 * e.target; representa o elemnto correntr ou clicado
 * e.currentTarget; 
 * e.preventDefault() remove o comportamento padrão de visual
 * e.stopPropagation(); remove a prepagação do objecto
 * matches('li'); prmite o acesso a todos os elemento dentro do ojecto corrente
*/

//combinar o target com a curentTarget
btn.addEventListener('click', (e) => {
    e.stopPropagation()
  e.target.innerHTML = 'Click 1'

    e.currentTarget.addEventListener('click', () => {
      
        if(e.target.innerHTML === 'Click 1' ) {
          e.target.innerHTML = 'Click 2'
        } else {
          e.target.innerHTML = 'Click 1'
        }

    });
})

//combinar o target com o metodo matches()
list.addEventListener('click', (e) => {
  console.log(e.target.getAttribute('class'));

  const target = e.target;
  console.log(target.matches('li'));
})