// MANIPULAÇÃO DA PROPRIEDADE CLASS

// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class



// Selcionar os elemntos a ser a manipulado
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

// Add eventos ao toggle
navToggle.addEventListener('click', function() {
    // console.log(navToggle.classList);
    // console.log(links.classList.contains('links'));

    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }

    links.classList.toggle('show-links')

})