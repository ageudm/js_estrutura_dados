// Este projecto serve para faser demostração da comobinação da um Array com o objceeto Math pra alterar a cor do documento de forma alertoria de acordo a as cores na lista

// ista de cores
const colors = ["green", "red", "rgba(133,122,200)", "#ec3355"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// forma inicial para manipular a cor e apresentar o texto no documento
// 1-seleccionar os elmentos do documentos a serem manipulados
// const btn = document.querySelector('.btn');
//  const color = document.querySelector('.color');

// 2-manipulação do botão para disparar o evento a pos o click
// btn.addEventListener('click', function() {
//     const indexColor = getRandomNmaber() // valor inicial da index dos elementos na lista de cores
//     console.log(indexColor);
//     document.body.style.backgroundColor = colors[indexColor]
//     color.textContent = colors[indexColor]
// });

// // 3-aplicar uma fucnção que retorna de forma dinamca um numero inteiro para atribuir na indexColor
// function getRandomNmaber() {
//     // converter os numeros gerado pala funcção random em um interiro 
//     return Math.floor(Math.random() * colors.length)
// };



// Refatoração do codigo
function changeColor(item) {
    const colorText = document.querySelector(item)
    
    const indexColor = getRandomNmaber2() // valor inicial da index dos elementos na lista de cores
    console.log(indexColor);
    
    document.body.style.backgroundColor = colors[indexColor];
    colorText.textContent = colors[indexColor];
     
    
}; document.querySelector('#btn').addEventListener('click', () => changeColor('.color'));


function getRandomNmaber2() { 
    return Math.floor(Math.random() * colors.length)
};


// gerar as cores de orma automatica em Hexadecimal
function hexaColor(item) {
    let hexColor = "#";
    
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNmaber()]
    }
    
    const colorTexto = document.querySelector(item)
    colorTexto.textContent = hexColor;
    document.body.style.backgroundColor = hexColor

    
}; document.querySelector('#btnExa').addEventListener('click', () => hexaColor('.color'));


function getRandomNmaber() { 
    return Math.floor(Math.random() * hex.length)
};







