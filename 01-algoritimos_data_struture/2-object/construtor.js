/**************************************************************************************
  MANIPULAR O OBJECTO CONSTRUTOR
***************************************************************************/

//declaração do objecto com parametros simples
function Produto(name, price, stars, count){
    this.name = name;
    this.price = price;
    this.other = {
      stars: stars,
      count: count
    };
    
    this.fun = () => {
      console.log(name);
    }
  }
  
  const produto2 = new Produto('Funge', 20, 3, 8 ).fun();


/**************************************************************************************
  PASSAR UM OBJECTO LITERAL COMO PARAMETRO NO CONSTRUTOR
***************************************************************************/
  function Product2({name, price}) {
    this.name = name;
    this.price = price;

    this.getPrice = () => {
        console.log(price);
    }

    this.funs = () => {
        console.log(name)
        this.getPrice()
    }
  }

  const prod1 = new Product2({
    name: 'bata rena',
    price: 500,
  }).funs(); 



  /**************************************************************************************
  MANIPULAR O DOCUMENTO COM O CONSTRUTOR
***************************************************************************/
function ChangColor({button, text}) {
    this.button = button;
    this.text = text;

    this.change = () => {
        const btn = document.querySelector(`${button}`);
        const title = document.querySelector(`${text}`);

        btn.addEventListener('click', () => {
            title.textContent = 'Ageu Miguel';
        })
    }
};

const changeColorTitle = new ChangColor({
    button: '.button-primary',
    text: 'h2',
}).change();