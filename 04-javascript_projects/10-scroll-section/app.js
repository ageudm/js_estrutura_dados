// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** Manipular a data do footer ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// ********** Manipular o meu ************
const navToggle = document.querySelector('.nav-toggle');
const linksContaier = document.querySelector('.links-container')
const links = document.querySelector('.links');

// btn open end close menu
navToggle.addEventListener('click', function() {
    // linksContaier.classList.toggle('show-links')
    // calcular a altura dos links para ter um tamanho dinamico
    const containerHeight = linksContaier.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContaier.style.height = `${linksHeight}px`;
    } else {
        linksContaier.style.height = 0;
    }

})

// ********** fixar a navbar no top quando iniciar o scroll ************
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
    // pegar aposição do scroll e maniplar a navbar
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    // const navHeight = 200;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav') //fixar a nav
        topLink.classList.add('show-link') //Manter a nav por cima de todo conteudo
    } else {
        navbar.classList.remove('fixed-nav')
        topLink.classList.remove('show-link')
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); //remover o evento padrão do link
        const sectioId = e.currentTarget.getAttribute('href').slice(1); //pegar atributo de cada section no link com o metodo slice para remover o sinal de cardinal no id

        const sectionElement = document.getElementById(sectioId)
        // const sectionElement = document.querySelector(sectioId)

        // calcular a altura da nav e do menu moble
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContaier.getBoundingClientRect().height;

         // dados da posição da altura section meno a altura do menu
         let sectionPosition = sectionElement.offsetTop - navHeight;

        // pegar a class que mantem a nav fixa
        const fixedNav = navbar.classList.contains('fixed-nav');
        if (!fixedNav) {
            sectionPosition -= navHeight;
        }

        if (navHeight > 82) {
            sectionPosition += containerHeight;
        }

        // mostar a section na window de acordo a posição da section
        window.scrollTo({
            left: 0,
            top: sectionPosition,
        })

        // remover o menu no moble quando clicar no link
        linksContaier.style.height = 0;
    })
})
