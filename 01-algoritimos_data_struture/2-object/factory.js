/**************************************************************************************
  CRIAR OBJECTO COM FUNCÇÃO FATORIAL
***************************************************************************/

//funcção fatorial com parametros simples
const productData1 = (nome, price, stars, count) => {
    return {
      nome,
      price,
      other: {
          stars,
          count
      },

      fun: () => {
          console.log(nome)
      }
  
    }
  };

//criar a instancia do objecto deforma simples
const produto1 = productData1('ananas', 500, 4.5, 200).fun()



//passar um objecto literal com parametro na finção
const productData2 = ({nome, price, stars, count}) => {
    return {
      nome,
      price,
      other: {
          stars,
          count
      },
      fun: () => {
          console.log(nome)
      },
  
    }
  };
  
  // criar a instancia do objecto com o literal
  const produto2 = productData2({
    nome: 'banana', 
    price: 100, 
    stars: 4.5, 
    count: 20,
}).fun();



/**************************************************************************************
  MANIPULAR OBJECTOS NO DOCUMENTO COM O METHODO FACTORIAL
***************************************************************************/
const changeColor = ({button, title}) => {
    return {
        button,
        title,

        chang: () => {
            const btn = document.querySelector(`${button}`);
            const text = document.querySelector(`${title}`);

            btn.addEventListener('click', () => {
                text.style.color = 'red';
            })
        }
    }
};


const changetitle = changeColor({
    button: '.button-primary',
    title: 'h2'
}).chang();

