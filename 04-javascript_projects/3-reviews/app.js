// OBJECTOS DE ESTUDO
  // Array list combinado com objecros litar
  //Evento DOMContentLoaded aplicado no objecto window
  // Incremento e decremento
  // Methodo condicional
  // O metodo Math.floor combinado com Math.random para criar numero alertorio

// ************************************************************************
// Lista dos objecto
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


// Slecção dos elemntos a serem manipulaos
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// Selecção dos elemntos que dispara a manipulação
const prevBtn = document.querySelector('.prev-btn');
const nxetBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');



// varialve de progresso
let currentItem = 0;
// Objecto que inicia os eventos inicial
window.addEventListener('DOMContentLoaded', function() {
   
    showPerson()

})


// funcção que altera  os dados no document
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

}

// funcção avançar os objecto na lista
nxetBtn.addEventListener('click', function () {
  currentItem++;
  console.log(currentItem);

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson();

})


// recuar elementos na lista
prevBtn.addEventListener('click', function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson();

})


// navegar na lsita com valores arreondado de forma alertoria
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();

})

