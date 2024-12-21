





/**************************************************************************************
  OBJECTO CONSTRUTOR
***************************************************************************/

function Produto(name, price, stars, count){
  this.name = name;
  this.price = price;
  this.other = {
    stars: stars,
    count: count
  };
  this.fun = () => {
    console.log('add to cart');
  }
}

// criar uma nova instancia do objecto
const produto2 = new Produto('Funge', 20, 3, 8 );

delete produto2.count; //deletar pro no objecto
produto2.marca = 'gricel'; //add prop no objecto
// console.log(produto2);

//passar variavel como argumento
const productName = 'Quisaca';
const produto3 = new Produto(productName, 20, 3, 8 );
// console.log(produto3);

//verificar as propriedades do ojecto com o iteração
for (key in produto2) {
  // console.log(key, produto2[key]);
}

// for (key in produto2) {
//   if (typeof produto2[key] !== 'function')
//     console.log(key, produto2[key]);
// }

//vericar as props com a o nativo Object
const keys = Object.keys(produto3)
// console.log(keys);

//verificar a existencia da prop no objecto
if ('fun' in produto2) {
  // console.log('existe o metodo fun em produto2');
} else {
  // console.log('esteme metodo não existe');
}



/**************************************************************************************
  //Criar instancia de objecto com o metodo (call)
***************************************************************************/
function Food(name, price, stars, count) {
  Produto.call(this, name, price, stars, count);
  this.categoria = 'Alimentos';
  this.com = () => {
    console.log('comprar');
  };
}; Food.prototype = Object.create(Produto.prototype)

const food = new Food('Arros', 1000, 3.5, 500);
// console.log(food);

/**************************************************************************************
//Criar instancia de objecto com o metodo (apply)
***************************************************************************/
function Food2(name, price, stars, count) {
  Produto.apply(this, [name, price, stars, count]);
  this.categoria = 'Alimentos';
  this.com = () => {
    console.log('comprar');
  };
}; Food2.prototype = Object.create(Produto.prototype)

const food2 = new Food('Açucar', 5000, 3.5, 500);
// console.log(food2);
// console.log(food2.fun());

/**************************************************************************************
//ABISTRATION
***************************************************************************/
function Food3(name, price, stars, count) {
  //private propety
  let total = '';

  this.name = name;
  this.price = price;
  this.stars = stars;
  this.count = count;

  this.stokProduct = {
    quatity: 20,
  }

  this.celProduct = function() {
    console.log('comprar produto');
    total = this.stokProduct;
    console.log(total);
  }

  this.execute = function() {
    this.celProduct();
    console.log(this.stokProduct.quatity);
  }

  let productPrpety = {
    type: 'Alimeto',
    origem: 'angola'
  }

  // aplicar o metodo get
  Object.defineProperty(this, 'productPrpety', {
    get: function() {
      return productPrpety;
    },
    set: function(value) {
      productPrpety = value;
    }
  })
};

const food3 = new Food3('banana', 50, 3.4, 40)
console.log(food3.productPrpety = 20);