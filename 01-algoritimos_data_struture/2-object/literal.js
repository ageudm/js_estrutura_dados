/**************************************************************************************
  ALGORITIMOS SIMPLES PARA MANIPULAR OBJECTOS E CRIAR LISTAS
***************************************************************************/

//Declaração de objecto literal
const product = {
    nome: 'Ananas',
    price: 50,
    other: {
        stars: 5.3,
        count: 87
    },
    fun: () => {
        console.log('add to cart');
    }
}

// GERENCIAMENTO DO OBJECTO

//acessar o objecto e fazer alteração de dados
product.nome = 'laranja';

//acessar o objecto e adcionar uma nova prop com novo dado
product.descripion = 'Fruta'

//delectar propriedde
delete product.price


/**************************************************************************************
  ESTENDER UM OBJECTO LITERAL
***************************************************************************/
//Erdar os dados do objecto anterior
const {nome, price, other, fun} = product;

const produt2 = {
  nome: nome,
  price: 100,
  other,
  pagar() {
    console.log('pagar');
  }
}

const produt3 = {
  nome,
  price,
  other,
  fun
}


/**************************************************************************************
  CONVERTER O OJECTO EM JSON
***************************************************************************/

//converter objecto com o metodo stringfy()
//OBS: Este formato JSON não suporta função
const jsonString = JSON.stringify(product)

//Converter o objecto com o metodo parse()
//OBS: JASON no formato object
const jsonObject = JSON.parse(jsonString)




