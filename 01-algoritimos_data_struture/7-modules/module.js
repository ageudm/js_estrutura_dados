/**************************************************************************************
  IMPORTAÇÃO DIREITA
***************************************************************************/
// import { soma, mult } from "./export.js";
// import {default as renderName} from "./export-default.js"
// import renderName from "./export-default.js"

/**************************************************************************************
  ALIAS
***************************************************************************/
// import {nome as Miguel} from './aliases.js'

/**************************************************************************************
  NAMESPACE: Criar um objecto para acesso a todos os dados
**************************************************************************/
// import * as data from './namespace.js'

/**************************************************************************************
  IMPORTAR LISTA COMBINADA
**************************************************************************/
import * as comb from './combine.js';

const calc1 = comb.calc.soma(20, 30)
const nome = comb.renderName('Ageu miguel')

console.log(calc1);
console.log(nome);


/**************************************************************************************
  IMPORTAÇÃO DINAMICA DE FORMA ASSYNCRONA
**************************************************************************/
if (true) {
  const {printNAme} = await import('./aliases.js');
  printNAme();
  
}

/**************************************************************************************
  IMPORTAÇÃO DINAMICA ASSINCRONA COM PROMISSE
**************************************************************************/
const {renderName} = await import('./export-default.js');

const promisse = Promise.all([
  await import('./export-default.js'),
  await import('./export.js')
])

const p = promisse.then(result => {
  console.log(result[1].mult(10, 20));
})
